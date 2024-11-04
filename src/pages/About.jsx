import React from 'react';
import '../styles/About.css';

const About = () => {
    return (
        <div className="about-page">
            <h2>About WeatherApp</h2>
            <p>
                WeatherApp is a simple and user-friendly web application that provides real-time
                weather information for any city. Built with React, Vite, and Axios, it integrates
                with the OpenWeather API to deliver accurate and timely weather data. The application
                is designed with a clean, responsive interface to ensure a seamless experience across
                all devices.
            </p>
        </div>
    );
};

export default About;
