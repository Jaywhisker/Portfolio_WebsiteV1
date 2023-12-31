import React,  { useState, useEffect }  from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { setDocumentMode } from '../functions/lightModeFunctions';
import NavBar from '../components/navigation/Navbar';
import YarnLine from '../components/divider/YarnLineDivider';
import LineDivider from '../components/divider/LineDivider';
import experienceJSON from '../data/experience.json'

import '../components/Global.css'
import '../components/styles/AboutScreenStyles.css'
import { useSetTheme, useTheme } from '../context/lightContext';

const AboutScreen = () => {

  const [yarnpathContainer, setyarnpathContainer] = useState({})
  const [yarnlineElementContainer, setyarnlineElementContainer] = useState({})
  const [yarnElementContainer, setyarnElementContainer] = useState({})
  var initialYarnPathState = {};
  var initialYarnLineState = {};
  var initialYarnState={}

  const [pathContainer, setpathContainer] = useState({})
  const [lineElementContainer, setlineElementContainer] = useState({})
  var initialPathState = {};
  var initialLineState = {};

  document.removeEventListener('mousemove', window.handleMouseMove)

  const lightMode = useTheme()

  var pathColour = lightMode ? "var(--dark_base)" : "var(--light_base)"

  useEffect(() => {
    const allLineContainer = document.querySelectorAll('.linecontainer')
    const allPathElement = document.querySelectorAll('#path')
    const allYarnElement = document.querySelectorAll('.yarn')

    allLineContainer.forEach((lineElement, index) => {
      if (index < 3) {
        initialYarnLineState[index] = lineElement
      } else {
        initialLineState[(index - 3)] = lineElement
      }
    })

    allPathElement.forEach((pathElement, index) => {
      if (index < 3) {
        initialYarnPathState[index] = pathElement
      } else {
        initialPathState[(index - 3)] = pathElement
      }
    })

    allYarnElement.forEach((yarnElement, index) => {
        initialYarnState[index] = yarnElement
    })
    setyarnElementContainer(initialYarnState)
    setyarnlineElementContainer(initialYarnLineState)
    setyarnpathContainer(initialYarnPathState)

    setlineElementContainer(initialLineState)
    setpathContainer(initialPathState)
  }, [])



  return (
    <div className='about-container'>
        <NavBar animation={false} sticky={false}/>
          <div className='about'>
            <div className='about-header'>
              <p className='about-text'>About</p>
              <YarnLine pathColour={pathColour} lineContainerElement={yarnlineElementContainer[0]} pathElement={yarnpathContainer[0]} yarnElement={yarnElementContainer[0]}/>
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
                <a className='about-contacts-link'  href="mailto:${chengweixuan7@gmail.com}" target="_blank">Email</a>
                <a className='about-contacts-link'  href="https://www.linkedin.com/in/chengweixuan/" target="_blank">LinkedIn</a>
                <a className='about-contacts-link' style={{ marginBottom:'50px'}} href="https://github.com/Jaywhisker/" target="_blank">GitHub</a>

                <p className='about-contacts-header'>More Info</p>
                <a className='about-contacts-link' href="https://drive.google.com/file/d/1VMr903L17p_e4-Rx14c4lxbg7rRgdwYf/view?usp=sharing" target="_blank">Resume</a>
              </div>
            </div>
          </div>

          <div className='skills'>
            <div className='skills-header'>
              <p className='skills-text'>Skills</p>
              <YarnLine pathColour={pathColour} lineContainerElement={yarnlineElementContainer[1]} pathElement={yarnpathContainer[1]} yarnElement={yarnElementContainer[1]}/>
            </div>

            <div className='skill-set'>
                <p className='skill-set-header'>Web Development</p>
                <p className='skill-set-text'>React, Next.js, Javascript, HTML/CSS, FastAPI, Flask</p>

                <p className='skill-set-header'>AI Development</p>
                <p className='skill-set-text'>Tensorflow, Pytorch, Computer Vision, Natural Language Processing</p>
                
                <p className='skill-set-header'>Database</p>
                <p className='skill-set-text'>MongoDB, ScyllaDB, Elasticsearch, Weaviate, Chroma</p>
                
                <p className='skill-set-header'>DevOps</p>
                <p className='skill-set-text'>Docker, gRPC, Google Cloud</p>
                
                <p className='skill-set-header'>Creative Development</p>
                <p className='skill-set-text' style={{marginBottom:'8px'}}>2D: Adobe Suite (Illustrator, Photoshop, Premiere Pro, After Effects), Figma</p>
                <p className='skill-set-text'>3D: Blender, Fusion 360</p>
              </div>
          </div>

          <div className='experiences'>
            <div className='experiences-header'>
              <p className='experiences-text'>Experiences</p>
              <YarnLine pathColour={pathColour} lineContainerElement={yarnlineElementContainer[2]} pathElement={yarnpathContainer[2]} yarnElement={yarnElementContainer[2]}/>
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
