import { ReactElement } from 'react';
import Error from 'components/common/Error/Error';
import Loader from 'components/common/Loader/Loader';

export const usePageStatus = (isLoading: boolean, isError: boolean): ReactElement | null => {

    let content = null;

    if (isError) {
        content = <Error message='Error' />;
    }

    if (isLoading) {
        content = <Loader message='Loading' />;
    }

    return content;
};