import { NavLink } from 'react-router-dom';
import './NavItem.scss';

type NavItemProps = {
    label: string;
    path: string;
    classNames?: string
};

const NavItem = ({ label, path, classNames }: NavItemProps) => {

    return (
        <NavLink className={`rk-nav-item ${classNames}`} to={path}>{label}</NavLink>
    );
}

export default NavItem;