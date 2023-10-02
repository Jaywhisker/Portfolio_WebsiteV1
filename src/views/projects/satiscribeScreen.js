import React,  { useState, useEffect }  from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import { setDocumentMode } from '../../functions/lightModeFunctions';
import NavBar from '../../components/navigation/Navbar';
import YarnLine from '../../components/divider/YarnLineDivider';
import ProjLoadingScreen from '../../components/loaders/projloaderScreen';
import header from '../../components/projectAsset/satiscribeheader.png'

import '../../components/Global.css'
import '../../components/styles/projects/Main.css'
import '../../components/styles/projects/SatiscribeStyles.css'


const SatiscribeScreen = () => {

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
    window.removeEventListener('scroll', window.handleScroll)

    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
      }

      
      
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

            window.removeEventListener('scroll', window.handleScroll);
            window.addEventListener('scroll', handleScroll);
            window.handleScroll = handleScroll;
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
                    <p className='project-data-title'>SATISCRIBE - Automated Minutes Taker</p>
                    <p className='project-data-scope'>UI/UX</p>
                </div>

                <YarnLine pathColour={pathColour} lineContainerElement={lineElementContainer[0]} pathElement={pathContainer[0]} yarnElement={yarnElementContainer[0]}/>

                <div className='project-data-info'>
                    <p className='project-data-date'>May - Aug 2023</p>
                    <p className='project-data-company'>SUTD</p>
                    <div className='project-data-links'>
                        <a className='project-data-link' href='https://github.com/Jaywhisker/Satiscribe' target='_blank'>GitHub</a>
                        {/* <a className='project-data-link' href='https://sites.google.com/mymail.sutd.edu.sg/kopilo/home' target='_blank'>Workshop Paper</a> */}
                    </div>
                </div>

                <div className='project-data-details'>
                    <p>
                    SATISCRIBE is your one stop solution to project management, integrating both project management and minutes taking. The main goal of SATISCRIBE is to help users transcript and classify their meeting minutes based on the template of their choice to alleviate their pain of writing meeting minutes and cleaning them after the meeting.
                    <br/><br/>
                    This project was part of the HCI-AI module. Hence, the focused on this project was understanding user needs and researching on the UI/UX rather than actually creating the solution. The main focus for my group was how could we integrate AI into our solution to give user control yet use the power of different NLP models to alleviate the painstaking process of writing, cleaning and summarising long meeting minutes.
                    <br/><br/>
                    Throughout the 12 weeks, we went through 3 iterations, each further developing our solution. For our first iteration, we created user personas and user scenarios to explain our problem statement before ideating for our solution. From our solution, we then created <b>paper prototypes</b> and conducted a <b>heuristic evaluation</b> with 6 participants.
                    <br/><br/>
                    For our second iteration, we adjusted our solution based on the feedback of our heuristic evaluation before developing our own design system on <b>figma</b> for SATISCRIBE. After which, we developed <b>hi-fi protoypes</b> on figma and conducted a <b>laboratory experiment</b> with 20 participants. 
                    <br/><br/>
                    After analyse and evaluating the results, we started our third iteration by developing part of the solution with <b>Next.js</b>. We then conducted an <b>A/B testing</b> through a <b>web experiment</b> on 20 participants. 
                    <br/><br/>
                    Currently, we are further developing our solution based on the results of our web experiment and through research related to using AI to automate meeting minutes/recap. We aim to publish a late breaking workshop paper for CHI 2023.
                    </p>
                    {/* <div className='project-redirect'>
                        <div className='project-redirect-links'>
                            <p className='project-arrow'>→</p>
                            <a style={{'borderBottomColor': `{pathColour}`, textDecoration:'none'}} className='project-view' href='https://sites.google.com/mymail.sutd.edu.sg/kopilo/home' target='_blank'><span>View our Project Website</span></a>
                        </div>
                    </div> */}
                </div>

                <div className='project-data-image-container'>

                    <div style={{marginLeft:'7vw', marginBottom:'8vh'}}>
                        <iframe width={idealWidth} height={aspectRatioHeight} src="https://www.youtube.com/embed/O30XPCtOOj8?si=UIEsUxHDtbbwyVSi" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        <p className='text-list' style={{textAlign:'center'}}>Satiscribe Trailer</p>
                    </div>

                    <div className='container-1'>
                        <div className='text-container-1'>
                            <img src='/project/satiscribe/homedb.png' className='container-1-img'></img>
                            <p className='text-1-header'>Personal vs Project Dashboard</p>
                            <p className='text-list'>- Personal Dashboard contains tasks assigned to the user across ALL projects and all the projects users are currently in.</p>
                            <p className='text-list'>- Marking a task as completed will remove it from the personal dashboard but will be left in the project dashboard.</p>
                            <p className='text-list'>- Project Dashboard contains the task list for all tasks in that project, the project calendar and the logs of all previous meeting minutes.</p>
                        </div>
                        <img src='/project/satiscribe/projdb.png' className='container-1-img'></img>
                    </div>

                    <div className='container-2'>
                        <div style={{marginLeft:'2.5vw', width:'80vw'}}>
                            <img src='/project/satiscribe/template.png' className='container-1-img'></img>
                            <img src='/project/satiscribe/edittemplate.png' className='container-1-img'></img>
                        </div>
                        <p className='text-list-1' style={{textAlign:'center', marginTop:'0vh', marginBottom:'8vh', marginLeft:'2.5vw'}}>Custom Meeting Templates to suit different use cases</p>
                    </div>

                    <div className='container-3'>
                        <img src='/project/satiscribe/tag.png' className='container-3-img'></img>
                        <p className='text-list-1' style={{textAlign:'center', marginTop:'3vh', marginBottom:'8vh'}}>Tagging Important Details during the meeting</p>
                    </div>

                    <div className='container-1' style={{marginBottom:'0vh'}}>
                        <div className='text-container-1'>
                            <img src='/project/satiscribe/edit.png' className='container-1-img'></img>
                            <p className='text-1-header'>Editing full transcript</p>
                            <p className='text-list'>- Our main idea was that the AI will generate the full transcript. However, due to limitations in AI, it is likely to be inaccurate, hence labels like Uncertain, Unrelated and Filler Words will be tagged to help users who are cleaning the transcript.</p>
                            <p className='text-list'>- The cleaned full transcript will be used to populate certain blocks based on their tags (eg. Action Items will be tagged to Task Summariser and Assigner block).</p>
                        </div>
                        <img src='/project/satiscribe/final.png' className='container-1-img'></img>
                    </div>

                </div>

                <YarnLine pathColour={pathColour} lineContainerElement={lineElementContainer[1]} pathElement={pathContainer[1]} yarnElement={yarnElementContainer[1]}/>
                <div className='next-project'>
                    <p className='project-arrow'>→</p>
                    <p className='project-view' onClick={() => navigate('/ai_framework')}>Next Project: <span style={{'borderBottomColor': `{pathColour}`}}>AI Design Framework</span></p>
                    <div className='project-lines'></div>
                </div>
            </div>
            <div style={{height:'55vh'}}></div>
        </>
        )
    );
};

export default SatiscribeScreen;
