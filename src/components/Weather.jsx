'use client'
import { useState, useEffect } from 'react';

export default function Weather () {

  const [data, setData] = useState({});
  const [location, setLocation] = useState('Limerick');
  const [inputValue, setInputValue] = useState('');
  const API_KEY = process.env.WEATHER_API

  const fetchData = async (newLocation) => {
    console.log(API_KEY)
    try {
      const response = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${newLocation}&aqi=no`
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
    <div  className="text-zinc-600 m-5 px-20 text-center" >
      <input
        className="m-2 shadow-lg rounded-md p-1"
        type="text"
        placeholder=" Search for weather"
        value={inputValue}
        onChange={handleInputChange}
        onKeyPress={handleInputKeyPress}
      />
      <button 
        className="bg-indigo-600 hover:bg-indigo-500 shadow-lg p-1 px-3 rounded-md text-white font-bold"
        onClick={handleLocationChange}>
          Check
      </button>

      <div >
        {data.current && (
          <div className="flex p-5 justify-center font-bold">
            <div>
              <h2>{data.location.name}</h2>
              <h3>{data.location.country}</h3>
              <h3>{data.location.region}</h3>
            </div>
            <div>
              <p>Temperature: {data.current.temp_c}°C</p>
              <p>Feels Like: {data.current.feelslike_c}°C</p>
              <p>wind: {data.current.wind_kph} kph</p>
              <p>UV Index: {data.current.uv}</p>
              <p>Condition: {data.current.condition.text}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );

}