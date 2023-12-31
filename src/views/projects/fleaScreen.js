import React,  { useState, useEffect }  from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import { useTheme } from '../../context/lightContext';
import { assignLoadingScreen, rollYarn, scrollToTop } from '../../functions/projectsFunction';

import NavBar from '../../components/navigation/Navbar';
import YarnLine from '../../components/divider/YarnLineDivider';
import ProjLoadingScreen from '../../components/loaders/projloaderScreen';

import '../../components/Global.css'
import '../../components/styles/projects/Main.css'
import '../../components/styles/projects/fleaStyles.css'


const FLEAScreen = () => {
    
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
        assignLoadingScreen(4, setLoading)
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
                <img src='/project/flea/fleaheader.png' className='project-data-header' />
            </div>

            <div className='project-data-content'>
                <div className='project-data-title-container'>
                    <p className='project-data-title'>flea</p>
                    <p className='project-data-scope'>UI/UX</p>
                </div>

                <YarnLine pathColour={pathColour} lineContainerElement={lineElementContainer[0]} pathElement={pathContainer[0]} yarnElement={yarnElementContainer[0]}/>

                <div className='project-data-info'>
                    <p className='project-data-date'>Aug 2022</p>
                    <p className='project-data-company'>TU Berlin</p>
                </div>

                <div className='project-data-details'>
                    <p>
                    flea is a mobile app that aims to tackle the issue of fast fashion. With the rise of social media platforms like Instagram and Tiktok, social media influencers are now the largest stakeholder in direction fashion trends due to the large outreach. Coupled with the rapid pace of social media, influencers are pressurised to constantly generate new content to remain relevant, leading to mass purchase of new clothing to show off to their followers, generating a lot of waste.
                    <br/><br/>
                    Furthermore, the constant generation of content leads to the new ‘IT’ thing constantly changing. This shortens the lifespan of fashion trends and generates even more waste as people have to constantly purchase new clothing to keep in trend but do not wear the clothing often. 
                    <br/><br/>
                    flea aims to tackle this issue of waste by integrating a social media platform with an online reselling marketplace. flea provides a platform for users - both influencers and their followers to sell their unwanted apparel, giving them a second life. 
                    <br/><br/>
                    Within the 1 week my team and I was given in the Innovation and Entrepreneurship module, the main focus was to determine what were the key pain points that were stopping people from currently donating their clothes or selling them. 
                    <br/><br/>
                    This pain point was determined to be that most of us do not keep track of what we have in our wardrobe. Hence, we often forget what clothes do we own and do not think about selling them. 
                    <br/><br/>
                    flea thus provides Computer Vision to help identify the clothing users own which can then be added to their virtual wardrobe. This virtual wardrobe then keep tracks of what users have worn and when was their apparel last worn. This provides a platform to remind users what do they own as well as encourage them to sell the apparels they no longer wear.
                    <br/><br/>
                    Due to the time constraint, I did the prototype for flea on Canva as i did not had time to create my own assets. However, I believe that this prototype is sufficient to convey the desired functionalities in flea.
                    </p>
                </div>

                <div className='project-data-image-container'>
                    <div className='flea-container-1'>
                        <img className='flea-image-2' src='/project/flea/mockup1.png'></img>
                        <p className='flea-captions'>Login and Profile pages where user set their reminder dates</p>
                    </div>

                    <div className='flea-container-2'>
                        <img className='flea-image-4' src='/project/flea/mockup2.png'></img>
                    </div>

                    <div className='flea-container-3'>
                        <p className='flea-left-text'>Addition of apparel to your virtual wardrobe by simply taking a picture and filling in the key details such as the brand and the size of your clothing.<br/><br/>Rewards are given to incentivise users to add clothing to their virtual wardrobe.</p>
                        <img className='flea-image-3' src='/project/flea/mockup3.png'></img>
                    </div>

                    <div className='flea-container-4'>
                        <img className='flea-image-2' src='/project/flea/mockup4.png'></img>
                        <p className='flea-right-text'>The wardrobe tracker will prompts users if they would like to sell their apparel that has not been worn in a while.
                        <br/><br/>
                        To ensure users are not using flea as a way to profit and scalp other users, flea also ensures that the selling prices of apparel should not be higher than the retail price.
                        <br/><br/>
                        The apparel will then be listed in the marketplace - the shopping platform for users. To ensure that sellers remain authentic, a rating system is implemented.</p>
                    </div>

                    <div className='flea-container-5'>
                        <img className='flea-image-3' src='/project/flea/mockup5.png'></img>
                    </div>

                    <div className='flea-container-3' style={{marginBottom:'4vh'}}>
                        <p className='flea-left-text'>flea is also a social media app, allowing users to explore and follow influencers as our target demographic are teenagers who are interested in fashion and follow fashion influencers.
                        <br/><br/>
                        All content that users follow or subscribe to will show up in the community tab.</p>
                        <img className='flea-image-3' src='/project/flea/mockup6.png'></img>
                    </div>

                    
                    <div className='flea-container-4' style={{marginBottom:'0vh'}}>
                        <img className='flea-image-2' src='/project/flea/mockup4.png'></img>
                        <p className='flea-right-text'>To incentivise social media influencer to join flea, we introduce a subscription based system such that influencers can also earn a side income from creating content on flea.
                        <br/><br/>
                        Followers are incentivesed to subscribe as they gain access to extra content and early access to influencer’s shop in the marketplace.</p>
                    </div>
                </div>

                <YarnLine pathColour={pathColour} lineContainerElement={lineElementContainer[1]} pathElement={pathContainer[1]} yarnElement={yarnElementContainer[1]}/>
                <div className='next-project'>
                    <p className='project-arrow'>→</p>
                    <p className='project-view' onClick={() => navigate('/sh*t_landing_on_you')}>Next Project: <span style={{'borderBottomColor': `{pathColour}`}}>Sh*t landing on you</span></p>
                    <div className='project-lines'></div>
                </div>
            </div>
            <div style={{height:'55vh'}}></div>
        </>
    ));
};

export default FLEAScreen;
