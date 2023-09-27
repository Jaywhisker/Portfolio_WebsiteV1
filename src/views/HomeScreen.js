import React,  { useState, useEffect }  from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import { setDocumentMode } from '../functions/lightModeFunctions';
import LoadingScreen from '../components/LoadingScreen';
import NavBar from '../components/Navbar';
import LandingHeader from '../components/LandingHeader';

import '../components/styles/HomeScreenStyles.css';
import '../components/styles/LoadingScreenStyles.css';
import '../components/Global.css';

const HomeScreen = () => {

  const location = useLocation()
  const navigate = useNavigate()
  const [lightMode, setlightMode] = useState(undefined)
  const [isloadingScreen, setisLoadingScreen] = useState(location.state === null)

  var pathColour = lightMode ? "var(--dark_base)" : "var(--light_base)";


  useEffect(() => {
    setDocumentMode(setlightMode)
    if (isloadingScreen) {
      const timeoutId = setTimeout(() => {
        setisLoadingScreen(false)
        navigate('/', {state: {firstTime:false}})
        }, 6500); 
      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, []); 


  return (
    lightMode !== undefined ? (
      <div className='container'>
          {isloadingScreen ? 
            (
            <LoadingScreen lightMode={lightMode} pathColour={pathColour}/>
            ) : (
            <div className='home'>
              <div className='fadein'>
                <NavBar lightMode={lightMode} setlightMode={setlightMode} animation={true}/>
              </div>
              <LandingHeader lightMode={lightMode} setlightMode={setlightMode} isloadingScreen={isloadingScreen} pathColour={pathColour}/>
            </div>
          )}
        </div>
    ) : (
      null
         )
  );
};

export default HomeScreen;
