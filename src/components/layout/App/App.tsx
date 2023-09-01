import { BrowserRouter } from 'react-router-dom'
import Header from 'components/layout/Header/Header';
import RoutePanel from 'components/layout/RoutePanel/RoutePanel';
import './App.scss';

const App = () => {

    return (
        <BrowserRouter>
            <div id='app'>
                <Header />
                <RoutePanel />
            </div>
        </BrowserRouter>
    );
}

export default App;
