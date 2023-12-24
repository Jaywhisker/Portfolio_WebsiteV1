import React,  { useState, useEffect, useContext }  from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import { setDocumentMode } from '../functions/lightModeFunctions';
import LoadingScreen from './LoadingScreen';
import NavBar from '../components/navigation/Navbar';
import LandingHeader from '../components/LandingHeader';
import MobileScreen from '../components/loaders/isMobile';
import RotateScreen from '../components/loaders/rotateScreen';

import '../components/styles/HomeScreenStyles.css';
import '../components/styles/LoadingScreenStyles.css';
import '../components/Global.css';
import { screenTypeContext } from '../context/mobileContext';


const HomeScreen = () => {
  
  document.removeEventListener('scoll', window.handleScroll)
  const location = useLocation()
  const navigate = useNavigate()
  const [lightMode, setlightMode] = useState(undefined)
  const [isloadingScreen, setisLoadingScreen] = useState(location.state === null)

  var pathColour = lightMode ? "var(--dark_base)" : "var(--light_base)";

  var screenType = useContext(screenTypeContext)


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
  }, [lightMode]); 

  
  function scrollIntoView () {
    const firstProj = document.querySelector('.kopilo')
    firstProj.scrollIntoView({
      behavior: 'smooth', 
      block: 'end'      
    });
  }


  return (
    lightMode !== undefined ? (
      <div className='container'>
          { screenType === 'mobile' ? (
            <MobileScreen/>
            ) : screenType === 'rotate' ? (
            <RotateScreen/>
            ) :
            isloadingScreen ? 
            (
            <LoadingScreen lightMode={lightMode} pathColour={pathColour}/>
            ) : (
            <div className='home'>
              <NavBar lightMode={lightMode} setlightMode={setlightMode} animation={true}/>
              <div className='head'>
                <LandingHeader lightMode={lightMode} setlightMode={setlightMode} isloadingScreen={isloadingScreen} pathColour={pathColour} onClick={scrollIntoView}/>
              </div>

              <div className='project-container'>
                <div className='project-header'>
                  <div className='project-line' style={{backgroundColor: `${pathColour}`}}></div>
                    <p className='project-selected'>Selected Projects</p>
                  <div className='project-line' style={{backgroundColor: `${pathColour}`}}></div>
                </div>

                <div className='kopilo' onClick={() => navigate('/kopilo')}>
                  <img src='/project/kopilo/dbsmain.png' className='project-image-small'></img>
                  <div className='project-text'>
                    <div className='project-top'>
                      <p className='project-scope'>software</p>
                      <p className='project-name'>DBS X KOPILO</p>
                    </div>
                    <p className='project-desc'>Digitalising Fund Transfer Dispute</p>
                  </div>
                </div>

                <div className='satiscribe' onClick={() => navigate('/satiscribe')}>
                  <div className='project-text' style={{alignItems: 'flex-end'}}>
                    <div className='project-top'>
                      <p className='project-scope' style={{textAlign:'right'}}>ui/ux</p>
                      <p className='project-name' style={{textAlign:'right'}}>SATISCRIBE</p>
                    </div>
                    <p className='project-desc' style={{textAlign:'right', width:'60%'}}>Automated meeting minutes and project management platform</p>
                  </div>
                  <img src='/project/satiscribe/satiscribelight.png' className='project-image-small'></img>
                </div>  

                <div className='aid' onClick={() => navigate('/ai_framework')}>
                  <img src='/project/aid/aidmain.png' className='project-image-large'></img>
                  <div className='project-text-horizontal' >
                    <div className='project-top' style={{width: '100%'}}>
                      <p className='project-scope'>natural language processing</p>
                      <p className='project-name'>ai design framework</p>
                    </div>
                    <p className='project-desc'>Framework to automatically generate design opportunities</p>
                  </div>
                </div>                  

                <div className='neptinium' onClick={() => navigate('/neptinium')}>
                  <img src='/project/neptinium/neptiniummain.png' className='project-image-small'></img>
                  <div className='project-text'>
                    <div className='project-top'>
                      <p className='project-scope'>product design</p>
                      <p className='project-name'>NEPTINIUM</p>
                    </div>
                    <p className='project-desc'>Designing SUTD’s first Electric Vehicle Additive Manufacturing (EVAM) car</p>
                  </div>
                </div>

                <div style={{height:'25vh'}}></div>
              </div>
            </div>
          )}
        </div>
    ) : (
      null
         )
  );
};

export default HomeScreen;
