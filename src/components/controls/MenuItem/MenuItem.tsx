import { NavLink } from 'react-router-dom';
import './MenuItem.scss';

type MenuItemProps = {
    name: string;
    path: string;
};

const MenuItem = ({ name, path }: MenuItemProps) => {

    return (
        <div className='menu-item'>
            <NavLink to={path}>{name}</NavLink>
        </div>
    );
}

export default MenuItem;