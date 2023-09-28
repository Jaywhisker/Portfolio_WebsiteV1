import React,  { useState, useEffect }  from 'react';

import { setDocumentMode } from '../functions/lightModeFunctions';
import NavBar from '../components/Navbar';
import YarnLine from '../components/YarnLineDivider';
import LineDivider from '../components/LineDivider';
import experienceJSON from '../data/experience.json'

import '../components/Global.css'
import '../components/styles/AboutScreenStyles.css'

const AboutScreen = () => {

  const [aboutLightMode, setAboutLightMode] = useState(undefined)

  const [lineContainerAbout, setlineContainerAbout] = useState(undefined)
  const [pathElementAbout, setpathElementAbout] = useState(undefined)

  const [lineContainerSkills, setlineContainerSkills] = useState(undefined)
  const [pathElementSkills, setpathElementSkills] = useState(undefined)

  const [lineContainerExp, setlineContainerExp] = useState(undefined)
  const [pathElementExp, setpathElementExp] = useState(undefined)

  const [pathContainer, setpathContainer] = useState({})
  const [lineElementContainer, setlineElementContainer] = useState({})
  var initialPathState = {};
  var initialLineState = {};

  document.removeEventListener('mousemove', window.handleMouseMove)
  
  var pathColour = aboutLightMode ? "var(--dark_base)" : "var(--light_base)"
  
  useEffect(() => {
    setDocumentMode(setAboutLightMode)
    pathColour = aboutLightMode ? "var(--dark_base)" : "var(--light_base)";

    if (aboutLightMode !== undefined) {
      document.body.style.transition = "background-color 1.5s"
      document.body.style.transitionDelay = "0.1s"
    }
  }, [aboutLightMode]);

  useEffect(() => {
    const aboutYarnLine = document.getElementsByClassName("about-header")
    setlineContainerAbout(aboutYarnLine[0].querySelector('.linecontainer'))
    setpathElementAbout(aboutYarnLine[0].querySelector('#path'))

    const skillsYarnLine = document.getElementsByClassName('skills-header')
    setlineContainerSkills(skillsYarnLine[0].querySelector('.linecontainer'))
    setpathElementSkills(skillsYarnLine[0].querySelector('#path'))

    const expYarnLine = document.getElementsByClassName('experiences-header')
    setlineContainerExp(expYarnLine[0].querySelector('.linecontainer'))
    setpathElementExp(expYarnLine[0].querySelector('#path'))

    experienceJSON.experience.forEach((exp, index) => {
      var tableLine = document.getElementsByClassName(index)
      console.log(tableLine[0])
      initialLineState[index] = tableLine[0].querySelector('.linecontainer')
      initialPathState[index] = tableLine[0].querySelector('#path')
    })
    setlineElementContainer(initialLineState)
    setpathContainer(initialPathState)
  }, [])



  return (
    <div className='about-container'>
        <NavBar lightMode={aboutLightMode} setlightMode={setAboutLightMode} animation={false}/>
        
          <div className='about'>
            <div className='about-header'>
              <p className='about-text'>About</p>
              <YarnLine pathColour={pathColour} lineContainerElement={lineContainerAbout} pathElement={pathElementAbout}/>
            </div>

            <div className='about-content'>
              <div className='about-me'>
                <p className='about-me-text'>Hello! I’m Wei Xuan, a student currently pursuing a bachelor degree in <b>Design and Artificial Intelligence</b> in the Singapore University of Technology and Design (SUTD).</p>
                <p className='about-me-text'>Since young, I was always passionate about the arts and creating something enjoyable for everyone. I would like to make an impact and design things useful for others. With that, I find myself leaning towards software engineering. </p>
                <p className='about-me-text'>Furthermore, with the rapid development in AI today, I believe we should not fear AI but rather learn how to effectively integrate it into our work. This is why I also focus my work around the human computer AI interaction. It is vital that we empower ourselves with AI while still remaining in control.</p>
                <p className='about-me-text'>In today’s rapidly evolving world, I strongly believe in adaptability. Therefore, I find inspiration in the art of origami. Like how a single piece of paper can be transformed into so many different creations, developing a diverse skill set is crucial to remain flexible and adaptable. Thus, we must be open to life-long learning. </p>
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
              <YarnLine pathColour={pathColour} lineContainerElement={lineContainerSkills} pathElement={pathElementSkills}/>
            </div>

            <div className='skill-set'>
                <p className='skill-set-header' style={{marginTop: '-15px'}}>Web Development</p>
                <p className='skill-set-text'>React, Next.js, Javascript, HTML/CSS, Flask, Ruby on Rails</p>

                <p className='skill-set-header'>AI Development</p>
                <p className='skill-set-text'>Tensorflow, Pytorch, Computer Vision, Natural Language Processing</p>
                
                <p className='skill-set-header'>DevOps</p>
                <p className='skill-set-text'>Docker, gRPC, Google Cloud, elasticSearch, ScyllaDB</p>
                
                <p className='skill-set-header'>Creative Development</p>
                <p className='skill-set-text' style={{marginBottom:'8px'}}>2D: Adobe Suite (Illustrator, Photoshop, Premiere Pro, After Effects), Figma</p>
                <p className='skill-set-text'>3D: Blender, Fusion 360</p>
              </div>
          </div>

          <div className='experiences'>
            <div className='experiences-header'>
              <p className='experiences-text'>Experiences</p>
              <YarnLine pathColour={pathColour} lineContainerElement={lineContainerExp} pathElement={pathElementExp}/>
            </div>
            <div className='experiences-table'>
              {experienceJSON.experience.map((exp, index) => (
              <div key={exp.key} className={index}>
                <div className='experiences-row'>
                  <p className='experiences-data'>{exp.date}</p>
                  <p className='experiences-company'>{exp.company}</p>
                  <p className='experiences-scope'>{exp.scope}</p>
                </div>
                <LineDivider pathColour={pathColour} lineContainerElement={lineElementContainer[index]} pathElement={pathContainer[index]}/>

                {/* <div className='experiences-table-line' style={{backgroundColor:`${pathColour}`}}></div> */}
              </div>
              ))}
            </div>
          </div>
          <div style={{height:'55vh'}}></div>
        </div>
  );
};

export default AboutScreen;
