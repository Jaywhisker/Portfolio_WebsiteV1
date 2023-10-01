import React,  { useEffect }  from 'react';
import '../styles/navigation/NavBarScreenStyles.css';
import { useNavigate, useLocation } from 'react-router-dom';
import LightToggle from './LightToggle';


const NavBar = ({lightMode, setlightMode, animation, override}) => {

  const location = useLocation();
  const navigate = useNavigate();
  
  const pathColour = !(override === undefined ) ? override: lightMode

  useEffect(() => {
    if (animation) {
      document.querySelector('.navContainer').style.opacity = 0
      document.querySelector('.navContainer').style.animation = 'fadein 1s forwards'
    } else {
      document.querySelector('.navContainer').style.animation = 'none';
      document.querySelector('.navContainer').style.opacity = 1
    }
  })

  return (
    <div className='navContainer'>
        <p className={pathColour ? 'name' : 'namedark'} onClick={() => navigate('/', {state: {firstTime:false}})}> Cheng Wei Xuan</p>
        <div className='rightnavContainer'>
            <p className={pathColour ? 'righttext' : 'righttextdark'} style={{textDecoration: location.pathname==='/archive' ? 'underline' : 'none'}} onClick={() => navigate('/archive')}>Archive</p>
            <p className={pathColour ?'righttext' : 'righttextdark'} style={{textDecoration: location.pathname==='/about' ? 'underline' : 'none'}} onClick={() => navigate('/about')}>About</p>
            <LightToggle lightMode={lightMode} setlightMode={setlightMode}/>
        </div>
    </div>
  );
};

export default NavBar;
