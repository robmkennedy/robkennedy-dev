import { NavbarBrand, Navbar, Container, Nav, Offcanvas } from 'react-bootstrap';
import MenuItem from 'components/controls/NavItem/NavItem';
import routes from 'utils/routes';
import './Header.scss';

const Header = () => {

    const routeItemsMarkup = routes.map(({ labelText, routePath }, index) => {
        return <MenuItem label={labelText} path={routePath} classNames='nav-link' key={index} />
    })

    return (
        <header id='header'>
            <Navbar expand="lg">
                <Container>
                    <MenuItem label='Rob Kennedy' path='/profile' classNames='navbar-brand' />
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Offcanvas id="basic-navbar-nav">
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title>
                                Offcanvas
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="me-auto">
                                {routeItemsMarkup}
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </header>
    );
}

export default Header;
