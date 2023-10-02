import React,  { useState, useEffect }  from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import { setDocumentMode } from '../../functions/lightModeFunctions';
import NavBar from '../../components/navigation/Navbar';
import YarnLine from '../../components/divider/YarnLineDivider';
import ProjLoadingScreen from '../../components/loaders/projloaderScreen';
import header from '../../components/projectAsset/ccheader.png'

import '../../components/Global.css'
import '../../components/styles/projects/Main.css'
import '../../components/styles/projects/SatiscribeStyles.css'

const CChessScreen = () => {

    const aspectRatio = 560/315
    const idealWidth = window.innerWidth * 0.7
    const aspectRatioHeight = idealWidth / aspectRatio

    const [LightMode, setLightMode] = useState(undefined)
    const [override, setOverride] = useState(true)
    const [loading, setLoading] = useState(true)
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
        window.removeEventListener('scroll', window.handleScroll);
        window.addEventListener('scroll', handleScroll);
        window.handleScroll = handleScroll;
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, [])
      
      useEffect(() => {
        const randomInt = Math.floor (Math.random() * (3-0))
    
        if (randomInt == 1) {
            setLoading(false)
        } else {
            const randomTime = Math.floor(Math.random() * (2700-1500) + 1500);
    
            const timeoutId = setTimeout(() => {
                document.querySelector('.loading-container').style.animation = 'contract 1s ease-in-out forwards'
                setTimeout(() => {
                    setLoading(false);
                }, 1000)
            }, randomTime);
                return () => {
                clearTimeout(timeoutId);
            };
        }
        }, []);

    useEffect(() => {
        if (!loading) {
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
        }
    }, [loading])


    useEffect(() => {
        setDocumentMode(setLightMode)
        pathColour = LightMode ? "var(--dark_base)" : "var(--light_base)";

        if (LightMode !== undefined) {
        document.body.style.transition = "background-color 1.5s"
        document.body.style.transitionDelay = "0.1s"
        }
    }, [LightMode]);


    function handleScroll() {
        const rect = document.querySelector('.project-data-header').getBoundingClientRect()
        if (rect.bottom > (window.innerHeight*0.08)) {
            setOverride(true);
        } else {
            setOverride(undefined);
        }
      }
    
    useEffect(() => {
    // "document.documentElement.scrollTo" is the magic for React Router Dom v6
    document.documentElement.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant", // Optional if you want to skip the scrolling animation
    });
    }, [pathname]);

    return (
        loading ? (
            <ProjLoadingScreen/>
        ) : (
        <> 
            <NavBar lightMode={LightMode} setlightMode={setLightMode} animation={false} override={override}/>
            <div>
                <img src={header} className='project-data-header' />
            </div>

            <div className='project-data-content'>
                <div className='project-data-title-container'>
                    <p className='project-data-title'>Community Chess</p>
                    <p className='project-data-scope'>DESIGN THINKING, ANIMATION</p>
                </div>

                <YarnLine pathColour={pathColour} lineContainerElement={lineElementContainer[0]} pathElement={pathContainer[0]} yarnElement={yarnElementContainer[0]}/>

                <div className='project-data-info'>
                    <p className='project-data-date'>Feb - Apr 2022</p>
                    <p className='project-data-company'>SUTD</p>
                    <div className='project-data-links'>
                        <a className='project-data-link' href='http://asd.courses.sutd.edu.sg/dti-teams/project-part-1-cheng-wei-xuan/' target='_blank'>Phase 1</a>
                        <a className='project-data-link' href='http://asd.courses.sutd.edu.sg/dti-teams/project-part-2-c1g7/' target='_blank'>Phase 2</a>
                        <a className='project-data-link' href='http://asd.courses.sutd.edu.sg/dti-teams/project-part-3-cheng-wei-xuan/' target='_blank'>Phase 3</a>
                        <a className='project-data-link' href='http://asd.courses.sutd.edu.sg/dti-teams/project-part-4-c1g7/#start' target='_blank'>Phase 4</a>
                    </div>
                </div>

                <div className='project-data-details'>
                    <p>Community Chess is a life sized interactive Chess game which aims to foster community spirit around Changi Business Park. Passers-by can join a team and collectively strategise on what is the best move to beat the opponent team in a game of chess through the web app. At night, the physical chess pieces also light up, providing an ambience and becoming a light installation instead.
                        <br/><br/>
                        As this project is under the Design Thinking and Innovation module, I was introduced to the double diamond framework, with each stage in the framework being a key milestone for our project. The 4 phases can be summarised in the following:
                        <br/><br/>
                        1. Discover - This was an individual component where I had to discover opportunities at a chosen site by using the <b>Macro AEIOU</b> (activity, environment, interactions, objects and users) approach. 
                        <br/><br/>
                        2. Define - This was a group component where we used a pugh chart to select our area of interest among our unique sites from phase 1. We then did a <b>MICRO AEIOU</b> approach to better understand the design opportunities of our chosen site to design our problem statement. During this phase, I was in charge of all the drawings and sketches.
                        <br/><br/>
                        3. Develop - This was an individual component where I explored multiple solution before finalising on one and expanding on the idea. This was done through the use of <b>storyboards, tree diagrams and user journey maps</b>.
                        <br/><br/>
                        4. Deliver - Once again, this was a group component where we came together to select a solution from our 5 unique solutions. We were then tasked to prototype our solution and document our design journey. I was sketched the different designs of our solution and designed the posters. Furthermore, I made a motion graphic animation detailing our solution in <b>Adobe After Effects</b>.
                        </p>
                    <div className='project-redirect' style={{marginBottom:'2vh', marginTop:'2vh'}}>
                        <div className='project-redirect-links'>
                            <p className='project-arrow'>→</p>
                            <a style={{'borderBottomColor': `{pathColour}`, textDecoration:'none'}} className='project-view' href='http://asd.courses.sutd.edu.sg/dti-teams/project-part-1-cheng-wei-xuan/' target='_blank'><span>View Phase 1 Discover</span></a>
                        </div>
                        <div className='project-redirect-links'>
                            <p className='project-arrow'>→</p>
                            <a style={{'borderBottomColor': `{pathColour}`, textDecoration:'none'}} className='project-view' href='http://asd.courses.sutd.edu.sg/dti-teams/project-part-2-c1g7/' target='_blank'><span>View Phase 2 Define</span></a>
                        </div>
                    </div>
                    <div className='project-redirect'>
                        <div className='project-redirect-links'>
                            <p className='project-arrow'>→</p>
                            <a style={{'borderBottomColor': `{pathColour}`, textDecoration:'none'}} className='project-view' href='http://asd.courses.sutd.edu.sg/dti-teams/project-part-3-cheng-wei-xuan/' target='_blank'><span>View Phase 3 Develop</span></a>
                        </div>
                        <div className='project-redirect-links'>
                            <p className='project-arrow'>→</p>
                            <a style={{'borderBottomColor': `{pathColour}`, textDecoration:'none'}} className='project-view' href='http://asd.courses.sutd.edu.sg/dti-teams/project-part-4-c1g7/#start' target='_blank'><span>View Phase 4 Deliver</span></a>
                        </div>
                    </div>
                </div>
                <div className='project-data-image-container'>
                    <div style={{marginLeft:'7vw'}}>
                        <iframe width={idealWidth} height={aspectRatioHeight} src="https://www.youtube.com/embed/KGasKbLUNzM?si=lYgEy-SB106PPnxa" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                </div>

                <YarnLine pathColour={pathColour} lineContainerElement={lineElementContainer[1]} pathElement={pathContainer[1]} yarnElement={yarnElementContainer[0]}/>
                <div className='next-project'>
                    <p className='project-arrow'>→</p>
                    <p className='project-view' onClick={() => navigate('/kopilo')}>Next Project: <span style={{'borderBottomColor': `{pathColour}`}}>DBS Digitialising Fund Transfer Dispute</span></p>
                    <div className='project-lines'></div>
                </div>
            </div>
            <div style={{height:'55vh'}}></div>
        </>
        )
    );
};

export default CChessScreen;
