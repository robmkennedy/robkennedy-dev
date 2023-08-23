import logo from 'assets/images/logo.svg';
import Header from 'components/main/Header/Header';
import './App.css';


const App = () => {

  return (
    <div className="App">
      <Header></Header>
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Rob Kennedy
      </p>
    </div>
  );
}

export default App;
