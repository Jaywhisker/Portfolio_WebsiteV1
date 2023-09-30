import React,  { useState, useEffect }  from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import { setDocumentMode } from '../../functions/lightModeFunctions';
import NavBar from '../../components/navigation/Navbar';
import YarnLine from '../../components/divider/YarnLineDivider';

import '../../components/Global.css'
import '../../components/styles/projects/Main.css'
import '../../components/styles/projects/SatiscribeStyles.css'

const NeptiniumScreen = () => {

    const [LightMode, setLightMode] = useState(undefined)
    const [override, setOverride] = useState(false)
    const navigate = useNavigate()

    var pathColour = LightMode ? "var(--dark_base)" : "var(--light_base)"

    const [pathContainer, setpathContainer] = useState({})
    const [lineElementContainer, setlineElementContainer] = useState({})
    var initialPathState = {};
    var initialLineState = {};


    const aspectRatio = 560/315
    const idealWidth = window.innerWidth * 0.7
    const aspectRatioHeight = idealWidth / aspectRatio

    const { pathname } = useLocation();

    document.removeEventListener('mousemove', window.handleMouseMove)

    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
      }

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
        const allLineState = document.querySelectorAll('.linecontainer')
        const allPathState = document.querySelectorAll('#path')
        allLineState.forEach((LineState, index) => {
            initialLineState[index] = LineState
        })

        allPathState.forEach((PathState, index) => {
            initialPathState[index] = PathState
        })
        setlineElementContainer(initialLineState)
        setpathContainer(initialPathState)
    }, [])


    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
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
                <img src='/project/neptinium/neptiniumheader.png' className='project-data-header' />
            </div>

            <div className='project-data-content'>
                <div className='project-data-title-container'>
                    <p className='project-data-title'>Neptinium</p>
                    <p className='project-data-scope'>PRODUCT DESIGN, ANIMATION</p>
                </div>

                <YarnLine pathColour={pathColour} lineContainerElement={lineElementContainer[0]} pathElement={pathContainer[0]}/>

                <div className='project-data-info'>
                    <p className='project-data-date'>Jan - May 2023</p>
                    <p className='project-data-company'>SUTD</p>
                    <div className='project-data-links'>
                        <a className='project-data-link' href='https://www.straitstimes.com/life/motoring/singapore-made-electric-race-car-taking-shape' target='_blank'>Design Journey</a>
                        {/* <a className='project-data-link' href='https://github.com/Jaywhisker/AI_design_framework' target='_blank'>GitHub</a> */}
                    </div>
                </div>

                <div className='project-data-details'>
                    <p>Neptinium is the design of SUTD’s first Electric Vehicle Additive Manufacturing (EVAM) car. Derived from “Neptunium”, a chemical compound that can be used to obtain electricity sustainably and “Inium”, the Latin word for beginning, Neptinium expresses SUTD’s desire to become a sustainability focused school, with our first additively manufactured electric car paving the way for future sustainability-centred endeavours.
                        <br/><br/>
                        Under the Product Design Studio Module in SUTD, my team partnered with SUTD’s EVAM team to design the exterior shell for SUTD’s first EVAM.
                        <br/><br/>
                        Throughout the 12 weeks, my team and I underwent multiple design iterations, from conducting user interviews to developing and iterating through multiple rounds of sketches before finally modelling our design.
                        <br/><br/>
                        Once we had our car model, I was in charge of the visual design for our project and created an animation showcasing Neptinium using <b>Blender</b>.
                        <br/><br/>
                        Our work has been featured on the Straits Times and the team is currently designing a book detailing our journey. Stay tuned!</p>
                    <div className='project-redirect'>
                        <div className='project-redirect-links'>
                            <p className='project-arrow'>→</p>
                            <a style={{'borderBottomColor': `{pathColour}`, textDecoration:'none'}} className='project-view' href='https://www.straitstimes.com/life/motoring/singapore-made-electric-race-car-taking-shape' target='_blank'><span>View Straits Times Article</span></a>
                        </div>
                    </div>
                </div>
                <div className='project-data-image-container'>
                    <div style={{marginLeft:'7vw'}}>
                        <iframe width={idealWidth} height={aspectRatioHeight} src="https://www.youtube.com/embed/b1fiv-EDlFI?si=hJ-u0yqetDQrX33j" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>

                    <div className='nept-container-1' style={{marginTop:'15vh'}}>
                        <img src='/project/neptinium/placeholder1.png' className='nept-container-1-img'></img>
                        <img src='/project/neptinium/placeholder2.png' className='nept-container-1-img'></img>
                    </div>
                    
                    <div className='nept-container-1'>
                        <img src='/project/neptinium/placeholder3.png' className='nept-container-1-img'></img>
                        <img src='/project/neptinium/placeholder4.png' className='nept-container-1-img'></img>
                    </div>
                </div>

                <YarnLine pathColour={pathColour} lineContainerElement={lineElementContainer[1]} pathElement={pathContainer[1]}/>
                <div className='next-project'>
                    <p className='project-arrow'>→</p>
                    <p className='project-view' onClick={() => navigate('/hand_gesture_recognition')}>Next [ARCHIVED] Project: <span style={{'borderBottomColor': `{pathColour}`}}>Hand Gesture Recognition</span></p>
                    <div className='project-lines'></div>
                </div>
            </div>
            <div style={{height:'55vh'}}></div>
        </>
    );
};

export default NeptiniumScreen;
