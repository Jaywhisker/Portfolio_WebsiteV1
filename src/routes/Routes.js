import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeScreen from '../views/HomeScreen';
import AboutScreen from '../views/AboutScreen';
import ArchiveScreen from '../views/ArchiveScreen';
import KopiloScreen from '../views/projects/kopiloScreen';
import SatiscribeScreen from '../views/projects/satiscribeScreen';

const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen/>} />
        <Route path="/about" element={<AboutScreen/>}/>
        <Route path='/archive' element={<ArchiveScreen/>} />
        <Route path='/kopilo' element={<KopiloScreen/>} />
        <Route path='/satiscribe' element={<SatiscribeScreen/>}/>
      </Routes>
    </Router>
  );
};

export default Routing;
