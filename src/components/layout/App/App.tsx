import { BrowserRouter } from 'react-router-dom'
import Header from 'components/layout/Header/Header';
import RoutePanel from 'components/layout/RoutePanel/RoutePanel';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'react-redux';
import store from 'state/store';
import './App.scss';

const queryClient = new QueryClient();

const App = () => {

    return (
        <Provider store={store}>
            <QueryClientProvider client={queryClient}>
                <BrowserRouter>
                    <div id='app'>
                        <Header />
                        <RoutePanel />
                    </div>
                </BrowserRouter>
            </QueryClientProvider>
        </Provider>
    );
}

export default App;
