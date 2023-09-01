import { LayoutState } from 'utils/types';
import { useAppSelector } from 'hooks/stateHooks';

export const useLayoutSelector = (): LayoutState => {
    return useAppSelector((state) => state.layout);
};