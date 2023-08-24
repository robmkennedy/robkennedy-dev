import { BrowserRouter } from 'react-router-dom'
import SidePanel from 'components/layout/SidePanel/SidePanel';
import MainPanel from 'components/layout/MainPanel/MainPanel';
import './App.scss';

const App = () => {

  return (
    <BrowserRouter>
      <div id='app'>
        <SidePanel />
        <MainPanel />
      </div>
    </BrowserRouter>
  );
}

export default App;
