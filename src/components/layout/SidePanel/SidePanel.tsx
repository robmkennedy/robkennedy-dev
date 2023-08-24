import MenuItem from 'components/controls/MenuItem/MenuItem';
import './SidePanel.scss';

const SidePanel = () => {

  return (
    <div id='sidePanel'>
      <MenuItem name='Summary' path=''></MenuItem>
      <MenuItem name='Education' path='education'></MenuItem>
    </div>
  );
}

export default SidePanel;
