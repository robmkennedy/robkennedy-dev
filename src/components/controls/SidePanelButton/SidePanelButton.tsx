import { useDispatch } from 'react-redux';
import './SidePanelButton.scss';
import { sidePanelToggled } from 'state/slices/layoutSlice';

const SidePanelButton = () => {

    const dispatch = useDispatch();

    const handleButtonClick = () => {
        dispatch(sidePanelToggled());
    }

    return (
        <button id='sidePanelButton' onClick={handleButtonClick}>Open and Close</button>
    );
}

export default SidePanelButton;