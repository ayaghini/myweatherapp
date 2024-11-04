import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Weather from './components/Weather';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './pages/About';

function App() {
  return (
      <Router>
          <div className="app-container">
              <Navbar />
              <div className="main-content">
                  <Routes>
                      <Route path="/" element={<Weather />} />
                      <Route path="/about" element={<About />} />
                  </Routes>
              </div>
              <Footer />
          </div>
      </Router>
  );
}

export default App;
