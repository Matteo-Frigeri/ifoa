// src/App.js
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
} from 'react-router-dom';
import WeatherForm from './components/WeatherForm';
import WeatherDetails from './components/WeatherDetails';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHouse,faCloud } from '@fortawesome/free-solid-svg-icons';

library.add(faHouse);


function App() {
  return (
    <Router>
      <div className="globalStyle">
        <nav>
          <ul className='listStyle'>
            <li>
            <FontAwesomeIcon icon={faHouse} style={{ color: 'rgb(56, 59, 227)'}}  />
              <Link to="/">
                HOME
                </Link>
            </li>
            <li>
            <FontAwesomeIcon icon={faCloud} style={{ color: 'rgb(56, 59, 227)' }} />
              <Link to="/weather">
                WEATHER
                </Link>
              
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/weather" element={<Weather />} />
          <Route path="/weather/:city" element={<WeatherDetails />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return(
    <div id='home'>
    <h1>Meteo Free</h1>
    <h3>What is this app?</h3>
    <p>Welcome to our weather app. Here, you can find forecasts for your city in the hours
      and days to come. First, access the weather section in the top left corner, then follow
      the simple instructions.<br/>
       Enjoy! 😊 </p>
    <br />
    <h3>Why was it created?</h3>
    <p>This app is part of a front-end course project.<br />
       If you want to explore other projects developed by me, visit my GitHub repository: <br />
       <a href="https://github.com/Matteo-Frigeri">My free repo</a></p>
    </div>
  );
}

function Weather() {
  return (
    <div>
      <h1>Weather Page</h1>
      <p>Enter the name of the city for which you want to know the weather forecast for today
         and tomorrow. 
         <br />
         <br />
         <b>Please note:</b> the name should be provided in English!</p>
      <WeatherForm />
    </div>
  );
}

export default App;
