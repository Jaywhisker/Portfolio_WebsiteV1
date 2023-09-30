import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeScreen from '../views/HomeScreen';
import AboutScreen from '../views/AboutScreen';
import ArchiveScreen from '../views/ArchiveScreen';
import KopiloScreen from '../views/projects/kopiloScreen';
import SatiscribeScreen from '../views/projects/satiscribeScreen';
import AidScreen from '../views/projects/aidScreen';
import NeptiniumScreen from '../views/projects/neptiniumScreen';
import HGRScreen from '../views/projects/hgrScreen';
import FLEAScreen from '../views/projects/fleaScreen';

const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen/>} />
        <Route path="/about" element={<AboutScreen/>}/>
        <Route path='/archive' element={<ArchiveScreen/>} />
        <Route path='/kopilo' element={<KopiloScreen/>} />
        <Route path='/satiscribe' element={<SatiscribeScreen/>}/>
        <Route path='/ai_framework' element={<AidScreen/>}/>
        <Route path='/neptinium' element={<NeptiniumScreen/>}/>
        <Route path='/hand_gesture_recognition' element={<HGRScreen/>}/>
        <Route path='/flea' element={<FLEAScreen/>}/>
      </Routes>
    </Router>
  );
};

export default Routing;
