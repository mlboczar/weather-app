import Header from './components/Header'
import CityForm from './components/CityForm'
import Weather from './components/Weather'
import './App.css';

function App(): JSX.Element {

  return (
    <div className="App">
      <Header></Header>
      <CityForm></CityForm>
      <Weather></Weather>
    </div>
  );
}

export default App;
