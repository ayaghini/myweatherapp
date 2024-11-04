import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'; 

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1 className="navbar-brand">My WeatherApp</h1>
            <div className="nav-links">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/about" className="nav-link">About</Link>
            </div>
        </nav>
    );
};

export default Navbar;
