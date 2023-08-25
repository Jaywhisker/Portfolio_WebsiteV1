import React,  { useState, useEffect }  from 'react';
import '../components/styles/NavBarScreenStyles.css';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import LightToggle from './LightToggle';


const NavBar = ({lightMode, setlightMode}) => {

  const location = useLocation();
  const navigate = useNavigate();
  

  return (
    <div className='navContainer'>
        <p className={lightMode ? 'name' : 'namedark'} onClick={() => navigate('/', {state: {firstTime:false}})}> Cheng Wei Xuan</p>
        <div className='rightnavContainer'>
            <p className={lightMode ? 'righttext' : 'righttextdark'} style={{textDecoration: location.pathname==='/archive' ? 'underline' : 'none'}}>Archive</p>
            <p className={lightMode ?'righttext' : 'righttextdark'} style={{textDecoration: location.pathname==='/about' ? 'underline' : 'none'}} onClick={() => navigate('/about')}>About</p>
            <LightToggle lightMode={lightMode} setlightMode={setlightMode}/>
        </div>
    </div>
  );
};

export default NavBar;
