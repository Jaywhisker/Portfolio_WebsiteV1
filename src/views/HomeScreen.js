import React,  { useState, useEffect }  from 'react';
import '../components/styles/HomeScreenStyles.css';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import LoadingScreen from './LoadingScreen';

const HomeScreen = () => {

  const [lightMode, setlightMode] = useState(true)
  const [isloadingScreen, setisLoadingScreen] = useState(true)

  useEffect(() => {
    if (lightMode) {
      document.body.style.backgroundColor = `var(--light_base)`;
    } else {
      document.body.style.backgroundColor = `var(--dark_base)`;
    }
  }, [lightMode]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setisLoadingScreen(false);
    }, 8250); 
    return () => {
      clearTimeout(timeoutId);
    };
  }, []); 


  return (
    <div className='container'>
      {isloadingScreen ? 
        (
        <LoadingScreen />
        ) : (
        <p>hi</p>
        )}
    </div>
  );
};

export default HomeScreen;
