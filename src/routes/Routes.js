import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeScreen from '../views/HomeScreen';
import AboutScreen from '../views/AboutScreen'

const Routing = () => {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen key="home" />} />
        <Route path="/about" element={<AboutScreen key="about"/>}/>
      </Routes>
    </Router>
  );
};

export default Routing;
