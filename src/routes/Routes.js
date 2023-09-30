import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeScreen from '../views/HomeScreen';
import AboutScreen from '../views/AboutScreen';
import ArchiveScreen from '../views/ArchiveScreen';
import ProjectScroll from '../components/scrollAnimation/projectScroll';

const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProjectScroll/>} />
        <Route path="/about" element={<ProjectScroll/>}/>
        <Route path='/archive' element={<ArchiveScreen/>} />
      </Routes>
    </Router>
  );
};

export default Routing;
