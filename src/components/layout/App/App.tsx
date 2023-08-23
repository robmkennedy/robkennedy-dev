import SidePanel from 'components/layout/SidePanel/SidePanel';
import MainPanel from 'components/layout/MainPanel/MainPanel';
import './App.scss';

const App = () => {

  return (
    <div id='app'>
      <SidePanel />
      <MainPanel />
    </div>
  );
}

export default App;
