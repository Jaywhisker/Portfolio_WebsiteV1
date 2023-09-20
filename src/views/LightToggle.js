import React,  { useState, useEffect, useRef }  from 'react';
import '../components/styles/LightToggleStyles.css';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { faGithub, faLinkedin  } from '@fortawesome/free-brands-svg-icons';
import { Sun } from 'react-feather';

const LightToggle = ({lightMode, setlightMode}) => {

  const mountCount = useRef(0);

  function toggleChange() {
    setlightMode(!lightMode)
  }

  useEffect(() => {
    if (mountCount.current > 1) {
      if (!lightMode) { //dark to light
        document.querySelector('.toggleButton').style.animation = 'togglemoveleft 0.5s ease-in-out forwards'
        document.querySelector('.toggleEyes').style.animation = 'eyeSlit 0.5s ease-in-out forwards'
      } else {
        document.querySelector('.toggleButton').style.animation = 'togglemoveright 0.5s ease-in-out forwards'
        document.querySelector('.toggleEyes').style.animation = 'eyeWiden 0.5s ease-in-out forwards'
      }
    } else {
      mountCount.current += 1
    }
  }, [lightMode])
    

  return (
    <div className='lightToggleContainer' onClick={toggleChange} style={{backgroundColor: lightMode ? `var(--dark_base)` : `var(--light_base)`}}>
      <div className='toggleButton' style={{backgroundColor: lightMode ? `var(--light_base)` : `var(--eye_orange)`, left: lightMode ? '1.7em' : '0.15em'}} >
        <div className='toggleEyes' style={{transform: lightMode ? 'scaleX(1)' : 'scaleX(0.2)'}}></div>
      </div>

      <Sun className='sun' style={{opacity: lightMode ? 1 : 0}}/>
      <div className='moon' style={{opacity: lightMode ? 0 : 1}}></div>

    </div>
  );
};

export default LightToggle;
