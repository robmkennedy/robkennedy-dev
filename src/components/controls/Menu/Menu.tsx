import MenuItem from 'components/controls/MenuItem/MenuItem';
import routes from 'utils/routes';
import './Menu.scss';

const Menu = () => {

    const itemsMarkup = routes.map(({ labelText, routePath }, index) => {
        return <MenuItem name={labelText} path={routePath} key={index}></MenuItem>
    })

    return (
        <div className='rk-menu'>
            {itemsMarkup}
        </div>
    );
}

export default Menu;