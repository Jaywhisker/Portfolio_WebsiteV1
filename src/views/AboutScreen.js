import React,  { useState, useEffect }  from 'react';

import { setDocumentMode, DocumentMode } from '../functions/lightModeFunctions';
import NavBar from '../components/Navbar';
import YarnLine from '../components/LineDivider';

import '../components/Global.css'
import '../components/styles/AboutScreenStyles.css'

const AboutScreen = () => {

  const [aboutLightMode, setAboutLightMode] = useState(DocumentMode)
  document.removeEventListener('mousemove', window.handleMouseMove)

  var pathColour = aboutLightMode ? "var(--dark_base)" : "var(--light_base)"
  useEffect(() => {
    setDocumentMode(setAboutLightMode)
    pathColour = aboutLightMode ? "var(--dark_base)" : "var(--light_base)";
  }, [aboutLightMode]);

  console.log(pathColour)

  return (
    <div className='about-container'>
        <NavBar lightMode={aboutLightMode} setlightMode={setAboutLightMode} animation={false}/>
        
          <div className='about'>
            <div className='about-header'>
              <p className='about-text'>About</p>
              <YarnLine pathColour={pathColour}/>
            </div>

            <div className='about-content'>
              <div className='about-me'>
                <p className='about-me-text'>Hello! I’m Wei Xuan, a student currently pursuing a bachelor degree in <b>Design and Artificial Intelligence</b> in the Singapore University of Technology and Design (SUTD).</p>
                <p className='about-me-text'>Since young, I was always passionate about the arts and creating something enjoyable for everyone. I would like to make an impact and design things useful for others. With that, I find myself leaning towards software engineering. </p>
                <p className='about-me-text'>Furthermore, with the rapid development in AI today, I believe we should not fear AI but rather learn how to effectively integrate it into our work. This is why I also focus my work around the human computer AI interaction. It is vital that we empower ourselves with AI while still remaining in control.</p>
                <p className='about-me-text'>In today’s rapidly evolving world, I strongly believe in adaptability. Therefore, I find inspiration in the art of origami. Like how a single piece of paper can be transformed into so many different creations, I believe that we must be open to life-long learning. Developing a diverse skill set is crucial to remain flexible and adaptable. </p>
              </div>

              <div className='about-contacts'>
                <p className='about-contacts-header'>Contact Me</p>
                <a className='about-contacts-link' style={{color: `${pathColour}`}} href="mailto:${chengweixuan7@gmail.com}" target="_blank">Email</a>
                <a className='about-contacts-link' style={{color: `${pathColour}`}} href="https://www.linkedin.com/in/chengweixuan/" target="_blank">LinkedIn</a>
                <a className='about-contacts-link' style={{color: `${pathColour}`, marginBottom:'50px'}} href="https://github.com/Jaywhisker/" target="_blank">GitHub</a>

                <p className='about-contacts-header'>More Info</p>
                <a className='about-contacts-link' style={{color: `${pathColour}`}} href="https://drive.google.com/file/d/1SqSyCcjOGzcV2nMU7FhiejgtdwgMqtOd/view?usp=sharing" target="_blank">Resume</a>
              </div>
            </div>
          </div>

          <div className='skills'>
            <div className='skills-header'>
              <p className='skills-text'>Skills</p>
              {/* <YarnLine pathColour={pathColour}/> */}
            </div>

          </div>

          <div className='experiences'>
            <div className='experiences-header'>
              <p className='experiences-text'>Experiences</p>
              {/* <YarnLine pathColour={pathColour}/> */}
            </div>
          </div>
        </div>
  );
};

export default AboutScreen;
