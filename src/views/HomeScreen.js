import React,  { useState, useEffect }  from 'react';
import '../components/styles/HomeScreenStyles.css';
import '../components/styles/LoadingScreenStyles.css'
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin  } from '@fortawesome/free-brands-svg-icons';
import LoadingScreen from './LoadingScreen';
import NavBar from './Navbar';

const HomeScreen = () => {

  const location = useLocation()
  const navigate = useNavigate()

  const [lightMode, setlightMode] = useState(true)
  const [isloadingScreen, setisLoadingScreen] = useState(location.state === null ? true : false)

  let animationFinished = false;
  let pupilXoffset;
  let pupilYoffset;


  useEffect(() => {
    if (isloadingScreen) {
      const timeoutId = setTimeout(() => {
        setisLoadingScreen(false);
        navigate('/', {state: {firstTime:false}})
        }, 6500); 
      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, []); 


  useEffect(() => {
    console.log(document.body.style)
    if (lightMode) {
        document.body.style.backgroundColor = `var(--light_base)`;
    } else {
        document.body.style.backgroundColor = `var(--dark_base)`;
    }
  }, [lightMode]);
  


  useEffect(()=> {
    if (!isloadingScreen) {  
      document.getElementsByClassName("contactbutton")[0].addEventListener("mouseover", mouseOver);
      document.getElementsByClassName("contactbutton")[0].addEventListener("mouseout", mouseOut);
      document.querySelector('.logoCircleHome').addEventListener("animationend", animationEnd);
      document.addEventListener("mousemove", movePupils);
    }
  }, [isloadingScreen])


  function mouseOver() {
    var getInTouchElement = document.getElementsByClassName("getintouch")[0];
    setTimeout(function() {
      getInTouchElement.textContent = "Send a mail?";
    }, 100)
  }

  function mouseOut() {
    var getInTouchElement = document.getElementsByClassName("getintouch")[0];
    setTimeout(function() {
      getInTouchElement.textContent = "Get in touch";
    }, 100)
  }

  function contactMe() {
    const email = "chengweixuan.business@gmail.com";
    const mailtoLink = `mailto:${email}`;
    window.location.href = mailtoLink;
  }


  function animationEnd() {
    animationFinished = true
    const eyeContainer = document.querySelector('.eyesHome');
    const logoCircle = document.querySelector('.logoCircleHome');
    pupilXoffset = eyeContainer.offsetLeft + logoCircle.offsetLeft;
    pupilYoffset = eyeContainer.offsetTop + logoCircle.offsetTop;
  }


  function movePupils(event) {
    if (animationFinished === true) {
      const pupils = document.querySelector('.pupilsHome');
      const centerX = 18
      const centerY = -1

      const mouseX = event.clientX
      const mouseY = event.clientY

      const documentWidth = document.documentElement.clientWidth;
      const documentHeight = document.documentElement.clientHeight; 
      const boundary_container = [-10, 1, 8, (documentWidth*0.024 -1 )] //top left bottom right

      const centerpointX = pupilXoffset + centerX
      const centerpointY = pupilYoffset + centerY

      let ratioX;
      let ratioY;
      let pupilleft;
      let pupiltop;

      if (mouseX <= centerpointX) {
        ratioX = (mouseX / centerpointX).toFixed(1)
        pupilleft = ((ratioX * (centerX - boundary_container[1])) + boundary_container[1]).toFixed(1)
      } 
      else {
        ratioX = ((mouseX - centerpointX) / (documentWidth - centerpointX)).toFixed(2) * 5
        if (ratioX > 1) {
          ratioX = 1
        }
        pupilleft = ((ratioX * (boundary_container[3] - centerX)) + centerX).toFixed(1)
      }

      if (mouseY <= centerpointY) {
        ratioY = (mouseY / centerpointY).toFixed(1)
        pupiltop = ((ratioY * (centerY - boundary_container[0])) + boundary_container[0]).toFixed(1)
      } 
      else {
        ratioY = ((mouseY - centerpointY) / (documentHeight - centerpointY)).toFixed(1)
        pupiltop = ((ratioY * (boundary_container[2] - centerY)) + centerY).toFixed(1)
      }

      pupils.style.left = `${pupilleft}px`
      pupils.style.top =  `${pupiltop}px`

    }
  }
  
  function eyeLightToggle() {
      const eyeContainer = document.querySelector('.eyesHome');
      const pupils = document.querySelector('.pupilsHome');
      eyeContainer.style.animation = "none";
      pupils.style.animation = "none";
      pupils.style.top = '-1px';
      pupils.style.left = '18px';

      document.body.style.transition = "background-color 0.5s"
      document.body.style.transitionDelay = "0.1s"

      if (lightMode) {
          eyeContainer.style.animation = "narrowingeyes 2s ease forwards";
          pupils.style.animation = "sliteyes 2.5s ease forwards";
          setTimeout(() => {
            eyeContainer.style.backgroundColor = "var(--light_orange)"
          }, 100)
      } else {
          eyeContainer.style.animation = "narrowingeyes 2s ease forwards";
          pupils.style.animation = "openeyes 2.5s ease forwards";
          setTimeout(() => {
            eyeContainer.style.backgroundColor = "white"
          }, 100)
      }
      eyeContainer.addEventListener("animationend", () => {
        eyeContainer.style.animation = "blinking 6s ease-in-out infinite 5s";
    }, { once: true }); 

    console.log(document.body.style.transition, document.body.style.transitionDelay)
    setlightMode(!lightMode);

}

  return (
    <div className='container'>
      {isloadingScreen ? 
        (
        <LoadingScreen lightMode={lightMode}/>
        ) : (
        <div className='home'>
          <div className='fadein'>
            <NavBar lightMode={lightMode}/>
          </div>
          <div className='flexcontainer'>
            
            <div className='logoCircleHome' style={{backgroundColor: lightMode ? `var(--light_orange)` : `var(--light_base)`}}>
              <svg id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 239.89 155.04">
                <defs>
                  <style>{`.cls-1{stroke-miterlimit:10;}.cls-1`},{`.cls-2{fill:none;stroke:#252227;stroke-linecap:round;stroke-width:8px;}.cls-2{stroke-linejoin:round;}`}</style>
                </defs>
                <g id="Layer_3">
                  <path className="cls-1" d="m162,34s18-30,32-30,16,44,16,44"/>
                  <path className="cls-1" d="m100,34s-18-30-32-30c-14,0-16,44-16,44"/>
                  <path className="cls-1" d="m54,64s-18,21-11,53c6.64,30.34,35,23.82,35,23.82"/>
                  <path className="cls-2" d="m103.67,113s-4.52,8.75-3.61,18c.9,9.25,4.64,19.22,14.41,20,12.53,1,20.48-19,20.48-19h.05s8.01,20,20.48,19c9.77-.78,13.51-10.75,14.41-20,.9-9.25-3.61-18-3.61-18"/>
                  <line className="cls-1" x1="159.93" y1="69.89" x2="181" y2="90.96"/>
                  <line className="cls-1" x1="180.76" y1="69.53" x2="159.69" y2="90.61"/>
                  <line className="cls-1" x2="4" y2="105" x1="26.54" y1="105"/>
                  <line className="cls-1" x2="4.09" y2="117.09" x1="26.63" y1="117.09"/>
                  <line className="cls-1" x1="213.26" y1="102.05" x2="235.8" y2="102.05"/>
                  <line className="cls-1" x1="213.35" y1="114.14" x2="235.89" y2="114.14"/>
                </g>
              </svg>
              
              <div className='eyesHome' id="clip" onClick={eyeLightToggle}>
                  <div className='pupilsHome'></div>
              </div>
            </div>

            <div className='welcometext'>
              <p className='info'>Hi! I’m Wei Xuan, a creative developer and an AI engineer. I like making things fun and interactive to make an impact.</p>
              <div className='iconContainer'>
                <button className='contactbutton'>
                  <p> <span className='arrow'>→ </span><span className='getintouch' onClick={contactMe}>Get in touch</span></p>
                </button>
                <div className='righticonContainer'>
                  <a style={{position:'relative'}} href='https://github.com/Jaywhisker' target="_blank">
                    <FontAwesomeIcon icon={faGithub} className="externalIcon"/>
                    <div className='hoverContainer'>Github</div>
                  </a>
                  <a  style={{position:'relative'}}  href='https://www.linkedin.com/in/chengweixuan/' target="_blank">
                    <FontAwesomeIcon icon={faLinkedin} className="externalIcon"/>
                    <div className='hoverContainer'>LinkedIn</div>
                  </a>
                </div>
              </div>
            </div>
        </div>
      </div>
      )}
    </div>
  );
};

export default HomeScreen;
