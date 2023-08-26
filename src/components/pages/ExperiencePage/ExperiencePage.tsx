import { useFetchEmployers } from 'hooks/networkHooks';
import './ExperiencePage.scss';

const ExperiencePage = () => {

    const { isLoading, error, data } = useFetchEmployers();

    if (data) {
        debugger;
    }

    return (
        <div id='experiencePage'>
        </div>
    );
}

export default ExperiencePage;