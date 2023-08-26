import { useDispatch, useSelector, TypedUseSelectorHook} from 'react-redux';
import { AppDispatch, RootState } from 'state/store';

export const useAppDispatch = (): AppDispatch => {
    return useDispatch();
};

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
