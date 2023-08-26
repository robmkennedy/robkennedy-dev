import { Route, Routes } from 'react-router-dom';
import Header from 'components/layout/Header/Header';
import routes from 'utils/routes';
import './RoutePanel.scss';

const RoutePanel = () => {

    const routeMarkup = routes.map(({ routePath, component: Component }, index) => {
        return <Route path={routePath} element={<Component />} key={index}></Route>
    })

    return (
        <div id='routePanel'>
            <Header></Header>
            <Routes>
                {routeMarkup}
            </Routes>
        </div>
    );
}

export default RoutePanel;
