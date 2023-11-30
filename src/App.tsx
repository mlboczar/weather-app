import Header from './components/Header'
import CityForm from './components/CityForm'
import Weather from './components/Weather'
import './App.css';
import React, { useState } from 'react'

function App() {

  return (
    <div className="App">
      <Header></Header>
      <CityForm></CityForm>
      <Weather></Weather>
    </div>
  );
}

export default App;
