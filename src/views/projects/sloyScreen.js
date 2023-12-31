import React,  { useState, useEffect }  from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import { useTheme } from '../../context/lightContext';
import { assignLoadingScreen, rollYarn, scrollToTop } from '../../functions/projectsFunction';

import NavBar from '../../components/navigation/Navbar';
import YarnLine from '../../components/divider/YarnLineDivider';
import ProjLoadingScreen from '../../components/loaders/projloaderScreen';

import '../../components/Global.css'
import '../../components/styles/projects/Main.css'
import '../../components/styles/projects/sloyStyles.css'

const SLOYScreen = () => {
    
    const [visible, setVisible] = useState(true)
    const [override, setOverride] = useState(true)
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()

    const lightMode = useTheme()
    var pathColour = lightMode ? "var(--dark_base)" : "var(--light_base)"

    const [pathContainer, setpathContainer] = useState({})
    const [lineElementContainer, setlineElementContainer] = useState({})
    const [yarnElementContainer, setyarnElementContainer] = useState({})
    var initialPathState = {};
    var initialLineState = {};
    var initialYarnState={}

    const { pathname } = useLocation();

    const aspectRatio = 560/315
    const idealWidth = window.innerWidth * 0.7
    const aspectRatioHeight = idealWidth / aspectRatio

    document.removeEventListener('mousemove', window.handleMouseMove)

    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
      }

    useEffect(() => {
        window.removeEventListener('scroll', window.handleScroll);
        window.addEventListener('scroll', handleScroll);
        window.handleScroll = handleScroll;
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [])
    
    function handleScroll() {
        const rect = document.querySelector('.project-data-header').getBoundingClientRect()
        const header = document.querySelector('.project-data-title').getBoundingClientRect()
        if (rect.bottom > (window.innerHeight*0.1)) {
            setOverride(true);
        } else {
            setOverride(undefined);
        }

        if (header.top < (window.innerHeight*0.14)) {
            setVisible(false)
        } else {
            setVisible(true)
        }
      }
    
    useEffect(() => {
        assignLoadingScreen(3, setLoading)
    }, []);

    useEffect(() => {
        rollYarn(loading, 
            initialLineState, 
            initialPathState, 
            initialYarnState, 
            setlineElementContainer,
            setpathContainer,
            setyarnElementContainer)
    }, [loading])

    useEffect(() => {
        scrollToTop()
    }, [pathname]);


    return (
        loading ? (
            <ProjLoadingScreen/>
        ) : (
        <>
            <NavBar animation={false} override={override} visible={visible}/>
            <div>
                <img src='/project/sloy/sloyheader.png' className='project-data-header' />
            </div>

            <div className='project-data-content'>
                <div className='project-data-title-container'>
                    <p className='project-data-title'>Sh*t landing on you</p>
                    <p className='project-data-scope'>GAME DESIGN / MODELLING</p>
                </div>

                <YarnLine pathColour={pathColour} lineContainerElement={lineElementContainer[0]} pathElement={pathContainer[0]} yarnElement={yarnElementContainer[0]}/>

                <div className='project-data-info'>
                    <p className='project-data-date'>Jul 2022</p>
                    <p className='project-data-company'>TU Berlin</p>
                </div>

                <div className='project-data-details'>
                    <p>
                    Sh*t landing on you is a light-hearted fun VR game where you play as a seagull and your aim is to successfully “bomb strike” as many beach-goers as you can before time runs out!
                    <br/><br/>
                    Under the Gaming for Virtual and Augmented Reality module, my team and I was given 3 weeks to develop this VR game. We were heavily inspired by the Untitled Goose Game for its silly yet charming game style.
                    <br/><br/>
                    For Sh*t landing on you, you start off the game with 5 “bomb strike”. Once you have ran out, you can refill your “bomb strike” by diving and snatching 5 food off different beach-goers. 
                    <br/><br/>
                    The game was built in Unity with C#. However, I was the main art director of this VR game instead of the coder. I designed the gameplay mechanics and modelled the game map in <b>Blender</b>. I also designed the logo, UI and some art assets for the game in <b>Adobe Illustrator</b>.  Once I was done with the assets, I integrated them into Unity and coded out the functioning UI in <b>C#</b>.
                    </p>
                </div>

                <div className='project-data-image-container'>
                    <div style={{marginLeft:'7vw'}}>
                        <iframe width={idealWidth} height={aspectRatioHeight} src="https://www.youtube.com/embed/t43B4KpcwoQ?si=wC_JzDabQxl6Pphq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        <p className='sloy-text'>Gameplay Footage</p>
                        <p className='sloy-text' style={{marginTop:'1vh'}}>Note: NPCs and Food models were done by Lead Artist Bei Ru</p>
                    </div>

                    <div className="sloy-image-container-small" style={{'marginLeft':'12.5vw', 'marginTop': '16vh'}}> 
                        <iframe title="sloy map final" className='sloy-render' frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/02065906d4674a8abf34c3c7e0b8c976/embed?autostart=1"> </iframe> 
                        <p className='sloy-text'>Game map created in Blender</p>
                    </div>

                    <div className='sloy-image-container-small'>
                        <img src='/project/sloy/sloyui.png' className='sloy-img-small'></img>
                        <p className='sloy-text'>Game UI for Sh*t Landing On You</p>
                    </div>

                    <div className='sloy-image-container'>
                        <img src='/project/sloy/sloymenu.png' className='sloy-img'></img>
                        <p className='sloy-text'>Game menus for Sh*t Landing On You</p>
                    </div>

                    <div className='sloy-image-container'>
                        <img src='/project/sloy/sloytut.png' className='sloy-img'></img>
                        <p className='sloy-text'>Tutorial Pages for Sh*t Landing On You</p>
                        <p className='sloy-text' style={{marginTop:'1vh'}}>Designed by Lead Artist Bei Ru, edited and compiled by Wei Xuan</p>
                    </div>

                    <div className='sloy-image-container'>
                        <img src='/project/sloy/sloypic.png' className='sloy-img'></img>
                        <p className='sloy-text'>Additional Promotional Art</p>
                    </div>
                </div>

                <YarnLine pathColour={pathColour} lineContainerElement={lineElementContainer[1]} pathElement={pathContainer[1]} yarnElement={yarnElementContainer[1]}/>
                <div className='next-project'>
                    <p className='project-arrow'>→</p>
                    <p className='project-view' onClick={() => navigate('/community_chess')}>Next Project: <span style={{'borderBottomColor': `{pathColour}`}}>Community Chess</span></p>
                    <div className='project-lines'></div>
                </div>
            </div>
            <div style={{height:'55vh'}}></div>
        </>
        )
    );
};

export default SLOYScreen;
