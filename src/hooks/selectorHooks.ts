import { useAppSelector } from "hooks/stateHooks";
import { LayoutState } from "utils/types";

export const useLayoutSelector = (): LayoutState => {
    return useAppSelector((state) => state.layout);
};