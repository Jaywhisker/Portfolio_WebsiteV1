import React,  { useState, useEffect }  from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import { setDocumentMode } from '../../functions/lightModeFunctions';
import NavBar from '../../components/navigation/Navbar';
import YarnLine from '../../components/divider/YarnLineDivider';

import '../../components/Global.css'
import '../../components/styles/projects/Main.css'
import '../../components/styles/projects/AidStyles.css'

const AidScreen = () => {

    const [LightMode, setLightMode] = useState(undefined)
    const [override, setOverride] = useState(true)
    const navigate = useNavigate()

    var pathColour = LightMode ? "var(--dark_base)" : "var(--light_base)"

    const [pathContainer, setpathContainer] = useState({})
    const [lineElementContainer, setlineElementContainer] = useState({})
    var initialPathState = {};
    var initialLineState = {};

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
                <img src='/project/aid/aidheader.png' className='project-data-header' />
            </div>

            <div className='project-data-content'>
                <div className='project-data-title-container'>
                    <p className='project-data-title'>AI Automated Design Framework</p>
                    <p className='project-data-scope'>AI - NLP</p>
                </div>

                <YarnLine pathColour={pathColour} lineContainerElement={lineElementContainer[0]} pathElement={pathContainer[0]}/>

                <div className='project-data-info'>
                    <p className='project-data-date'>Apr - May 2023</p>
                    <p className='project-data-company'>SUTD</p>
                    <div className='project-data-links'>
                        <a className='project-data-link' href='https://github.com/Jaywhisker/AI_design_framework' target='_blank'>GitHub</a>
                    </div>
                </div>

                <div className='project-data-details'>
                    <p>This AI Automated Design Framework is a suggested pipeline to help generate design opportunities of a given product by simply entering the product name.
                    <br/><br/>
                    The framework make uses of different NLP models and techniques. There are 4 main parts in this framework
                    <br/><br/>
                    1. Data Crawling and Collection <br/>
                    2. Data Cleaning and Categorisation <br/>
                    3. Sentiment Analysis <br/>
                    4. Data summarisation <br/>
                    5. Generation of Design Opportunities <br/>
                    <br/><br/>
                    The framework starts with Data Crawling and Collection. When a product name is submitted, <b>Selenium</b> is used to gather product reviews on multiple online shopping platforms.
                    <br/><br/>
                    These data will then be cleaned and categorised through 2 <b>BART zero shot model</b> to first extract out irrelevant product reviews before categorising them into qualities related to the product such as price, weight, battery life etc. These qualities are extracted out from Google Shopping’s product categories.
                    <br/><br/>
                    Once the data have been cleaned and categorised, they are passed through a <b>FLAIR</b> sentiment analysis model to categorise the reviews as positive or negative. These reviews help determine which product qualities are of most importance.
                    <br/><br/>
                    Due to the large amount of reviews, it is difficult to send all these data to a Large Language Model. Hence, an <b>abstractive summariser</b> is used to summarise all the product reviews categorised as positive/negative for the specific quality.
                    <br/><br/>
                    The summaries are then sent to a LLM, <b>GPT-3</b> to generate a list of design opportunities for the product based on the reviews.
                    <br/><br/>
                    This framework covers from data collection to processing the data and thus is versatile for almost all products (as long as there are product reviews online!) The main limitation of this framework is the large time it requires due to the long pipeline with multiple steps.</p>
                </div>
                <div className='project-data-image-container'>

                    <div className='aid-image-container'>
                        <img src='/project/aid/pipeline1.png' className='aid-image'></img>
                        <img src='/project/aid/pipeline2.png' className='aid-image'></img>
                        <img src='/project/aid/pipeline3.png' className='aid-image'></img>
                        <img src='/project/aid/pipeline4.png' className='aid-image'></img>
                        <img src='/project/aid/pipeline5.png' className='aid-image' style={{marginBottom:'0vh'}}></img>
                    </div>

                </div>

                <YarnLine pathColour={pathColour} lineContainerElement={lineElementContainer[1]} pathElement={pathContainer[1]}/>
                <div className='next-project'>
                    <p className='project-arrow'>→</p>
                    <p className='project-view' onClick={() => navigate('/neptinium')}>Next Project: <span style={{'borderBottomColor': `{pathColour}`}}>Neptinium</span></p>
                    <div className='project-lines'></div>
                </div>
            </div>
            <div style={{height:'55vh'}}></div>
        </>
    );
};

export default AidScreen;
