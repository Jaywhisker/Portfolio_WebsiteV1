import React,  { useEffect, useRef }  from 'react';
import '../components/styles/LightToggleStyles.css';
import { Sun } from 'react-feather';

import { toggleChange } from '../functions/lightModeFunctions';

const LightToggle = ({lightMode, setlightMode}) => {


  useEffect(() => {
    console.log(lightMode)
    if (!lightMode) {
      document.querySelector('.toggleButton').style.animation = 'togglemoveleft 1s ease-in-out forwards'
      document.querySelector('.toggleEyes').style.animation = 'eyeSlit 1s ease-in-out forwards'
    } else {
      document.querySelector('.toggleButton').style.animation = 'togglemoveright 1s ease-in-out forwards'
      document.querySelector('.toggleEyes').style.animation = 'eyeWiden 1s ease-in-out forwards'
    }
  }, [lightMode])
    

  return (
    <div className='lightToggleContainer' onClick={() => toggleChange(lightMode, setlightMode)} style={{backgroundColor: lightMode ? `var(--dark_base)` : `var(--light_base)`}}>
      <div className='toggleButton' style={{backgroundColor: lightMode ? `var(--light_base)` : `var(--eye_orange)`, left: lightMode ? '1.7em' : '0.15em'}} >
        <div className='toggleEyes' style={{transform: lightMode ? 'scaleX(1)' : 'scaleX(0.2)'}}></div>
      </div>

      <Sun className='sun' style={{opacity: lightMode ? 1 : 0}}/>
      <div className='moon' style={{opacity: lightMode ? 0 : 1}}></div>

    </div>
  );
};

export default LightToggle;
