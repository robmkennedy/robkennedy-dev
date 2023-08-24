import { Route, Routes } from 'react-router-dom';
import './RoutePanel.scss';
import Header from 'components/layout/Header/Header';
import EducationPage from 'components/pages/EducationPage/EducationPage';
import SummaryPage from 'components/pages/SummaryPage/SummaryPage';

const RoutePanel = () => {

  return (
    <div id='routePanel'>
      <Header></Header>
      <Routes>
        <Route path='/' element={<SummaryPage />}></Route>
        <Route path='/education' element={<EducationPage />}></Route>
      </Routes>
    </div>
  );
}

export default RoutePanel;
