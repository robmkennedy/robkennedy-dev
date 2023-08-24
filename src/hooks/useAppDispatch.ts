import { useDispatch } from 'react-redux';
import { AppDispatch } from 'state/store';

const useAppDispatch = (): AppDispatch => {
    return useDispatch();
};
