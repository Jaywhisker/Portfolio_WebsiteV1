import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeScreen from '../views/HomeScreen';
import AboutScreen from '../views/AboutScreen';
import ArchiveScreen from '../views/ArchiveScreen';

const Routing = () => {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen/>} />
        <Route path="/about" element={<AboutScreen/>}/>
        <Route path='/archive' element={<ArchiveScreen/>} />
      </Routes>
    </Router>
  );
};

export default Routing;
