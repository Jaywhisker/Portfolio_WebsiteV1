import React,  { useState, useEffect }  from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import { useTheme } from '../../context/lightContext';
import { assignLoadingScreen, rollYarn, scrollToTop } from '../../functions/projectsFunction';

import NavBar from '../../components/navigation/Navbar';
import YarnLine from '../../components/divider/YarnLineDivider';
import ProjLoadingScreen from '../../components/loaders/projloaderScreen';

import '../../components/Global.css'
import '../../components/styles/projects/Main.css'

const KopiloScreen = () => {

    const [override, setOverride] = useState(true)
    const [loading, setLoading] = useState(true)
    const [visible, setVisible] = useState(true)
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
                <img src='/project/kopilo/dbsheader.png' className='project-data-header' />
            </div>

            <div className='project-data-content'>
                <div className='project-data-title-container'>
                    <p className='project-data-title'>DBS Digitalising Fund Transfer Dispute</p>
                    <p className='project-data-scope'>SOFTWARE</p>
                </div>

                <YarnLine pathColour={pathColour} lineContainerElement={lineElementContainer[0]} pathElement={pathContainer[0]} yarnElement={yarnElementContainer[0]}/>

                <div className='project-data-info'>
                    <p className='project-data-date'>May - Aug 2023</p>
                    <p className='project-data-company'>DBS, Google, SUTD</p>
                    <div className='project-data-links'>
                        <a className='project-data-link' href='https://github.com/Jaywhisker/DBS_FTD_2023' target='_blank'>GitHub</a>
                        <a className='project-data-link' href='https://sites.google.com/mymail.sutd.edu.sg/kopilo/home' target='_blank'>Project Writeup</a>
                    </div>
                </div>

                <div className='project-data-details' style={{marginBottom:'12vh'}}>
                    <p>In collaboration with DBS under the System Design Studio Module in SUTD, I led a scrum team (Kopilo) to build a webapp to help digitalise fund transfer dispute.<br/><br/>Throughout the 12 week experience, I was given the opportunity to experience the different stages of software engineering. We started off by conducting user interviews and creating 5 unique user personas to convey the different stakeholders who may be involved in a fund transfer dispute.<br/><br/>After understanding the different user personas and their respective user scenarios, I was in charge of developing the user interface for our features on <b>Figma</b>. The main challenge was ensuring that our designs integrated seamlessly into the existing DBS digibank interface for a smooth user experience.<br/><br/>Our solution is presented on a replica of the DBS digibank interface. The DBS digibank interface and our new features were developed using <b>React</b> on the front-end. The backend of the web app is built on <b>Ruby on Rails</b> connected to a <b>PostgreSQL</b> database.<br/><br/><b>Cucumber</b> and <b>Selenium</b> testing was ran on the front-end for unit, integration and acceptance testing while <b>Rspec</b> unit testing was ran on the backend.<br/><br/>Our solution uses a <b>microservice</b> architecture and each microservice were all deployed on <b>Google Cloud</b> through the guide of our Google Mentors and professors.</p>
                    <div className='project-redirect'>
                        <div className='project-redirect-links'>
                            <p className='project-arrow'>→</p>
                            <a style={{'borderBottomColor': `{pathColour}`, textDecoration:'none'}} className='project-view' href='https://sites.google.com/mymail.sutd.edu.sg/kopilo/home' target='_blank'><span>View our Project Website</span></a>
                        </div>
                    </div>
                </div>

                <YarnLine pathColour={pathColour} lineContainerElement={lineElementContainer[1]} pathElement={pathContainer[1]} yarnElement={yarnElementContainer[1]}/>
                <div className='next-project'>
                    <p className='project-arrow'>→</p>
                    <p className='project-view' onClick={() => navigate('/satiscribe')}>Next Project: <span style={{'borderBottomColor': `{pathColour}`}}>SATISCRIBE</span></p>
                    <div className='project-lines'></div>
                </div>
            </div>
            <div style={{height:'55vh'}}></div>
        </>
        )
    );
};

export default KopiloScreen;
