import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './WeatherForm.css'

const WeatherForm = () => {
  const [city, setCity] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

   const handleSubmit = async () => {
        if (city) {
          try {
            
            const response = await fetch(
              `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=ecb72fbff26c6aed95a0182dd72d423d`
            );
      
            if (!response.ok) {
              throw new Error('Error during API request');
            }
      
            
            const data = await response.json();
            console.log(data);
      
            
            navigate(`/weather/${city}`);
          } catch (error) {
            console.error('Error during API request:', error.message);
          }
        }
      };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={handleInputChange}
      />
      <button onClick={handleSubmit} disabled={!city}>
        Get Weather
      </button>
    </div>
  );
};

export default WeatherForm;


