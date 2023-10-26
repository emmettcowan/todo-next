'use client'
import { useState, useEffect } from 'react';

export default function Weather () {

  const [data, setData] = useState({});
  const [location, setLocation] = useState('Limerick');
  const [inputValue, setInputValue] = useState('');

  const fetchData = async (newLocation) => {
    try {
      const response = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=ac24135dbbe74708b2a134805232110&q=${newLocation}&aqi=no`
      );
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const weatherData = await response.json();
      setData(weatherData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData(location);
  }, [location]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleLocationChange = () => {
    setLocation(inputValue);
  };

  const handleInputKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleLocationChange();
    }
  };

  return (
    <div  className="text-zinc-600" >
      <h1>Weather App</h1>
      <input
        type="text"
        placeholder="Search for weather"
        value={inputValue}
        onChange={handleInputChange}
        onKeyPress={handleInputKeyPress}
      />
      <button onClick={handleLocationChange}>Check</button>

      <div >
        {data.current && (
          <div>
            <h2>{data.location.name}</h2>
            <h3>{data.location.country}</h3>
            <h3>{data.location.region}</h3>
            <p>Temperature: {data.current.temp_c}°C</p>
            <p>Feels Like: {data.current.feelslike_c}°C</p>
            <p>wind: {data.current.wind_kph} kph</p>
            <p>UV Index: {data.current.uv}</p>
            <p>Condition: {data.current.condition.text}</p>
          </div>
        )}
      </div>
    </div>
  );

}