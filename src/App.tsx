import Header from './components/Header'
import CityForm from './components/CityForm'
import Weather from './components/Weather'
import { cityInfoType } from './types';
import './App.css';
import React, { ChangeEvent, useState } from 'react'
const API_KEY = "0e2ebad73646caa2df0be378bda7456a" //Ordinarily this would go in an env variable but I want y'all to be able to run this :)

function App(): JSX.Element {
  const [searchTerm, setSearchString] = useState<string>('')
  const [city, setCity] = useState<cityInfoType | null>(null)

  const getCity = (value:string) => {
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${value}&limit=5&appid=${API_KEY}`)
    .then((res) => res.json())
    .then((data) => setCity(data))
    console.log(city)
  }

  const onInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    event.preventDefault()
    const value = event.target.value.trim()
    setSearchString(value)

    console.log(`value: ${value}`)
  }

  return (
    <div className="App">
      <Header></Header>
      <div>
        <input
          placeholder='Search'
          value={searchTerm}
          onChange={onInputChange}
        />
        <button
        onClick={() => getCity(searchTerm)}
        >
          Search
        </button>
      </div>
      <CityForm></CityForm>
      <Weather></Weather>
    </div>
  );
}

export default App;
