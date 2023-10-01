import React,  { useState, useEffect }  from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import { setDocumentMode } from '../../functions/lightModeFunctions';
import NavBar from '../../components/navigation/Navbar';
import YarnLine from '../../components/divider/YarnLineDivider';

import '../../components/Global.css'
import '../../components/styles/projects/Main.css'
import '../../components/styles/projects/AidStyles.css'

const HGRScreen = () => {

    const [LightMode, setLightMode] = useState(undefined)
    const [override, setOverride] = useState(true)
    const navigate = useNavigate()

    var pathColour = LightMode ? "var(--dark_base)" : "var(--light_base)"

    const [pathContainer, setpathContainer] = useState({})
    const [lineElementContainer, setlineElementContainer] = useState({})
    const [yarnElementContainer, setyarnElementContainer] = useState({})
    var initialPathState = {};
    var initialLineState = {};
    var initialYarnState={}

    const { pathname } = useLocation();

    document.removeEventListener('mousemove', window.handleMouseMove)

    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
      }


    useEffect(() => {
        const allLineState = document.querySelectorAll('.linecontainer')
        const allPathState = document.querySelectorAll('#path')
        const allYarnState = document.querySelectorAll('.yarn')
        allLineState.forEach((LineState, index) => {
            initialLineState[index] = LineState
        })

        allPathState.forEach((PathState, index) => {
            initialPathState[index] = PathState
        })

        allYarnState.forEach((YarnState, index) => {
            initialYarnState[index] = YarnState
        })

        setlineElementContainer(initialLineState)
        setpathContainer(initialPathState)
        setyarnElementContainer(initialYarnState)
    }, [])


    function handleScroll() {
        const rect = document.querySelector('.project-data-header').getBoundingClientRect()
        if (rect.bottom > (window.innerHeight*0.08)) {
            setOverride(true);
        } else {
            setOverride(undefined);
        }
      }


    useEffect(() => {
        setDocumentMode(setLightMode)
        pathColour = LightMode ? "var(--dark_base)" : "var(--light_base)";

        if (LightMode !== undefined) {
        document.body.style.transition = "background-color 1.5s"
        document.body.style.transitionDelay = "0.1s"
        }
    }, [LightMode]);


    useEffect(() => {
        window.removeEventListener('scroll', window.handleScroll);
        window.addEventListener('scroll', handleScroll);
        window.handleScroll = handleScroll;
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, [])

      
      useEffect(() => {
        // "document.documentElement.scrollTo" is the magic for React Router Dom v6
        document.documentElement.scrollTo({
          top: 0,
          left: 0,
          behavior: "instant", // Optional if you want to skip the scrolling animation
        });
      }, [pathname]);


    return (
        <>
            <NavBar lightMode={LightMode} setlightMode={setLightMode} animation={false} override={override}/>
            <div>
                <img src='/project/cvhand/cvheader.png' className='project-data-header' />
            </div>

            <div className='project-data-content'>
                <div className='project-data-title-container'>
                    <p className='project-data-title'>Hand Gesture Recognition</p>
                    <p className='project-data-scope'>AI - CV</p>
                </div>

                <YarnLine pathColour={pathColour} lineContainerElement={lineElementContainer[0]} pathElement={pathContainer[0]} yarnElement={yarnElementContainer[0]}/>

                <div className='project-data-info'>
                    <p className='project-data-date'>Mar 2023</p>
                    <p className='project-data-company'>Personal</p>
                    <div className='project-data-links'>
                        <a className='project-data-link' href='https://github.com/Jaywhisker/Hand-Gesture-Computer-Vision-with-Arduino' target='_blank'>GitHub</a>
                        <a className='project-data-link' href='https://www.notion.so/Smart-Home-With-Arduino-and-Computer-Vision-628f8458261f4b9cb6ba959f22b34212' target='_blank'>Project Writeup</a>
                    </div>
                </div>

                <div className='project-data-details'>
                    <p>This project involves the integration of a custom Computer Vision model to control the outputs of an Arduino board from your web camera.
                        <br/><br/>
                        The model is able to detect 5 different hand gestures:<br/>
                        - High Five, Fist, Peace, Finger Guns, Thumbs Up
                        <br/><br/>
                        These hand gestures are mapped to calling different actions on the Arduino (eg. High Five to turn on a LED and Fist to turn off a LED). The computer vision model will recognise the hand gesture made through the webcam and update the firebase database on what action needs to be taken. The Arduino which is connected to the firebase will then carry out the respective action.
                        <br/><br/>
                        There are 5 main stages in this project:<br/>
                        1. Data Collection with <b>OpenCV</b><br/>
                        2. Data Cleaning<br/>
                        3. Data Augmentation with <b>OpenCV</b><br/>
                        4. Training a custom model that is built on <b>VGG16</b> with additional dense layers on <b>Tensorflow</b><br/>
                        5. Implementing the pipeline to <b>Firebase</b> database to update the Arduino<br/>
                        <br/><br/>
                        A step by step guide on of this project can be found below.
                    </p>
                    <div className='project-redirect'>
                        <div className='project-redirect-links'>
                            <p className='project-arrow'>→</p>
                            <a style={{'borderBottomColor': `{pathColour}`, textDecoration:'none'}} className='project-view' href='https://www.notion.so/Smart-Home-With-Arduino-and-Computer-Vision-628f8458261f4b9cb6ba959f22b34212' target='_blank'><span>View the Project Writeup</span></a>
                        </div>
                    </div>
                </div>
                <div className='project-data-image-container'>

                    <div className='hgr-image-container'>
                        <img src='/project/cvhand/cvdiag.png' className='hgr-image' style={{marginBottom:'0vh'}}></img>
                    </div>

                </div>

                <YarnLine pathColour={pathColour} lineContainerElement={lineElementContainer[1]} pathElement={pathContainer[1]} yarnElement={yarnElementContainer[1]}/>
                <div className='next-project'>
                    <p className='project-arrow'>→</p>
                    <p className='project-view' onClick={() => navigate('/flea')}>Next [ARCHIVED] Project: <span style={{'borderBottomColor': `{pathColour}`}}>flea</span></p>
                    <div className='project-lines'></div>
                </div>
            </div>
            <div style={{height:'55vh'}}></div>
        </>
    );
};

export default HGRScreen;
