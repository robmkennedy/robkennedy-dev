import { useDispatch } from 'react-redux';
import './SidePanelButton.scss';
import { sidePanelToggled } from 'state/slices/layoutSlice';
import { fetchEmployers } from 'utils/network';

const SidePanelButton = () => {

    const dispatch = useDispatch();

    const handleButtonClick = () => {
        fetchEmployers();
        dispatch(sidePanelToggled());
    }

    return (
        <button id='sidePanelButton' onClick={handleButtonClick}>Open and Close</button>
    );
}

export default SidePanelButton;