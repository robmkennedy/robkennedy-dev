import MenuItem from 'components/controls/MenuItem/MenuItem';
import { useLayoutSelector } from 'hooks/useLayoutSelector';
import './SidePanel.scss';

const SidePanel = () => {

  const selector = useLayoutSelector();

  return (
    <div id='sidePanel'>
      {selector.sidePanelOpen &&
        <div>
          <MenuItem name='Summary' path=''></MenuItem>
          <MenuItem name='Education' path='education'></MenuItem>
        </div>}
    </div>
  );
}

export default SidePanel;
