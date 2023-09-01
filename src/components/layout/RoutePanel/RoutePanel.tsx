import { Navigate, Route, Routes } from 'react-router-dom';
import routes from 'utils/routes';
import './RoutePanel.scss';

const RoutePanel = () => {

    const routeMarkup = routes.map(({ routePath, component: Component }, index) => {
        return <Route path={routePath} element={<Component />} key={index}></Route>
    });

    return (
        <div id='routePanel'>
            <Routes>
                {routeMarkup}
                <Route path="*" element={<Navigate to={routes[0].routePath} replace />} />
            </Routes>
        </div>
    );
}

export default RoutePanel;
