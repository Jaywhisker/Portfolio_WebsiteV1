import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeScreen from '../views/HomeScreen';

const Routing = () => {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen key="home" />} />
      </Routes>
    </Router>
  );
};

export default Routing;
