import { useAppSelector } from "./useAppSelector";

export const useLayoutSelector = () => {
    return useAppSelector((state) => state.layout);
};