import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeScreen from '../views/HomeScreen';
import AboutScreen from '../views/AboutScreen';
import YarnLine from '../components/LineDivider';

const Routing = () => {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen/>} />
        <Route path="/about" element={<AboutScreen/>}/>
        <Route path='/archive' element={<YarnLine/>} />
      </Routes>
    </Router>
  );
};

export default Routing;
