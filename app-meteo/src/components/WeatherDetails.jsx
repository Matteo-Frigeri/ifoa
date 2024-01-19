import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTemperatureThreeQuarters, faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import './WeatherDetails.css'

const WeatherDetails = () => {
  const { city } = useParams();
  const [forecastData, setForecastData] = useState(null);

  useEffect(() => {
    const fetchWeatherForecast = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=ecb72fbff26c6aed95a0182dd72d423d`
        );

        if (!response.ok) {
          throw new Error('Error during API request');
        }

        const data = await response.json();
        setForecastData(data);
      } catch (error) {
        console.error('Error during API request:', error.message);
      }
    };

    fetchWeatherForecast();
  }, [city]); 

  const extractWeatherData = () => {
    if (!forecastData) return [];

    return forecastData.list.map(forecast => ({
      date: forecast.dt_txt,
      temperature: forecast.main.temp,
      description: forecast.weather[0].description,
    }));
  };

  
  const displayWeatherData = () => {
    const weatherData = extractWeatherData();

    
    const upcomingDaysData = weatherData.filter(data => {
      const currentDate = new Date();
      const forecastDate = new Date(data.date);

      return forecastDate > currentDate;
    });

    
    return (
      <div className="WeatherDetails">
        <h2>Weather Forecast for {city}</h2>
        {upcomingDaysData.map((data, index) => (
          <div key={index}>
            <p>Date and Time: {data.date} <FontAwesomeIcon icon={faCalendarDays} /></p>
            <p>Temperature: {data.temperature} K <FontAwesomeIcon icon={faTemperatureThreeQuarters} /></p>
            <p>Description: {data.description}</p>
            <hr />
          </div>
        ))}
      </div>
    );
  };

  return (
    <div>
      {displayWeatherData()}
    </div>
  );
};

export default WeatherDetails;

