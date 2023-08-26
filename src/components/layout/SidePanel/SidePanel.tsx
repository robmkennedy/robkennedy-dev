import Menu from 'components/controls/Menu/Menu';
import { useLayoutSelector } from 'hooks/selectorHooks';
import './SidePanel.scss';

const SidePanel = () => {

    const selector = useLayoutSelector();

    return (
        <div id='sidePanel'>
            {selector.sidePanelOpen &&
                <div>
                    <Menu />
                </div>}
        </div>
    );
}

export default SidePanel;
