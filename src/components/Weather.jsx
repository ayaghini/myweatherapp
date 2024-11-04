import React, { useState } from 'react';
import axios from 'axios';
import '../styles/Weather.css';

const Weather = () => {
    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState(null);
    const [forecastData, setForecastData] = useState(null);
    const [interval, setInterval] = useState('current'); 
    const [error, setError] = useState(null);

    const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY; 

    const fetchWeatherData = async () => {
        try {
            const response = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
            );
            setWeatherData(response.data);
            setError(null);

            const { lat, lon } = response.data.coord;

            await fetchForecastData(lat, lon);
        } catch (err) {
            if (err.response) {
                
                switch (err.response.status) {
                    case 404:
                        setError('City not found. Please check the spelling and try again.');
                        break;
                    case 401:
                        setError('Invalid API key. Please verify your API key.');
                        break;
                    case 500:
                        setError('Server error. Please try again later.');
                        break;
                    default:
                        setError(`Error: ${err.response.status}. ${err.response.data.message}`);
                }
            } else if (err.request) {
                setError('Network error. Please check your internet connection and try again.');
            } else {
                setError(`Unexpected error: ${err.message}`);
            }
            
            setWeatherData(null);
            setForecastData(null);
        }
    };

    const fetchForecastData = async (lat, lon) => {
        try {
            const response = await axios.get(
                `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely&appid=${apiKey}&units=metric`
            );
            setForecastData(response.data);
        } catch (err) {
            setError('Failed to fetch forecast data. Please try again later.');
            setForecastData(null);
        }
    };

    const handleInputChange = (e) => {
        setCity(e.target.value);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (city.trim() !== '') {
            fetchWeatherData();
        }
    };

    const handleIntervalChange = (e) => {
        setInterval(e.target.value);
    };

    return (
        <div className="full-page-container">
            <form onSubmit={handleFormSubmit} className="weather-form">
                <input
                    type="text"
                    placeholder="Enter city name"
                    value={city}
                    onChange={handleInputChange}
                    className="input-field"
                />
                <button type="submit" className="submit-button">Get Weather</button>
            </form>

            {error && (
                <div className="error-box">
                    <strong>Warning:</strong> {error}
                </div>
            )}

            {weatherData && (
                <div className="weather-info">
                    <h2 className="city-name">Weather in {weatherData.name}</h2>
                    <p className="temperature">Temperature: {weatherData.main.temp}°C</p>
                    <p className="condition">Condition: {weatherData.weather[0].description}</p>
                    <p className="wind">Wind Speed: {weatherData.wind.speed} m/s</p>
                    <p className="humidity">Humidity: {weatherData.main.humidity}%</p>

                    {/* Interval selection */}
                    <div className="interval-selection">
                        <label htmlFor="interval">Select forecast interval: </label>
                        <select id="interval" value={interval} onChange={handleIntervalChange}>
                            <option value="current">Current</option>
                            <option value="hourly">Hourly</option>
                            <option value="daily">Daily</option>
                        </select>
                    </div>

                    {/* Display forecast data based on interval */}
                    {forecastData && interval === 'hourly' && (
                        <div className="forecast-info">
                            <h3>Hourly Forecast:</h3>
                            <ul>
                                {forecastData.hourly.slice(0, 12).map((hour, index) => (
                                    <li key={index}>
                                        <strong>Hour {index + 1}:</strong> {hour.temp}°C, {hour.weather[0].description}, 
                                        Wind: {hour.wind_speed} m/s, Humidity: {hour.humidity}%
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {forecastData && interval === 'daily' && (
                        <div className="forecast-info">
                            <h3>Daily Forecast:</h3>
                            <ul>
                                {forecastData.daily.slice(0, 7).map((day, index) => (
                                    <li key={index}>
                                        <strong>Day {index + 1}:</strong> {day.temp.day}°C, {day.weather[0].description}, 
                                        Wind: {day.wind_speed} m/s, Humidity: {day.humidity}%
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default Weather;
