import React,  { useState, useEffect }  from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import LoadingScreen from './LoadingScreen';
import NavBar from './Navbar';

const AboutScreen = (lightMode) => {

  useEffect(() => {
    if (lightMode) {
      document.body.style.backgroundColor = `var(--light_base)`;
    } else {
      document.body.style.backgroundColor = `var(--dark_base)`;
    }
  }, [lightMode]);


  return (
    <div className='aboutcontainer'>
        <NavBar lightMode={lightMode}/>
        <p>about page ya</p>
    </div>
  );
};

export default AboutScreen;
