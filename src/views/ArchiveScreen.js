import React,  { useState, useEffect }  from 'react';

import { setDocumentMode } from '../functions/lightModeFunctions';
import NavBar from '../components/Navbar';
import YarnLine from '../components/LineDivider';
import { useNavigate } from 'react-router-dom';

import '../components/Global.css'
import '../components/styles/AboutScreenStyles.css'
import '../components/styles/ArchiveScreenStyles.css'


import archiveJSON from '../data/archive.json';

const ArchiveScreen = () => {

  const [archiveLightMode, setArchiveLightMode] = useState(undefined)

  const [lineContainer, setlineContainer] = useState(undefined)
  const [pathElement, setpathElement] = useState(undefined)

  document.removeEventListener('mousemove', window.handleMouseMove)

  var pathColour = archiveLightMode ? "var(--dark_base)" : "var(--light_base)"
  const navigate = useNavigate()

  useEffect(() => {
    setDocumentMode(setArchiveLightMode)
    pathColour = archiveLightMode ? "var(--dark_base)" : "var(--light_base)";

    if (archiveLightMode !== undefined) {
      document.body.style.transition = "background-color 1.5s"
      document.body.style.transitionDelay = "0.1s"
    }
  }, [archiveLightMode]);

  useEffect(() => {
    const YarnLine = document.getElementsByClassName("archive-header")
    setlineContainer(YarnLine[0].querySelector('.linecontainer'))
    setpathElement(YarnLine[0].querySelector('#path'))
  }, [])

  return (
    <div className='archive-container'>
        <NavBar lightMode={archiveLightMode} setlightMode={setArchiveLightMode} animation={false}/>
        <div className='archive'>
            <div className='archive-header'>
                <p className='archive-text'>Past Projects</p>
                <YarnLine pathColour={pathColour} lineContainerElement={lineContainer} pathElement={pathElement}/>
            </div>
            
            <div className='archive-table'>

                {archiveJSON.projects.map((project) => (
                <div key={project.key} onClick={() => navigate(`/${project.key}`)}>
                    <div className='archive-row'>
                        <p className='archive-date'>{project.date}</p>
                        <p className='archive-name'>{project.name}</p>
                        <p className='archive-company'>{project.company}</p>
                        <p className='archive-scope'>{project.scope}</p>
                    </div>
                    <div className='archive-line' style={{backgroundColor:`${pathColour}`}}></div>
                </div>
                ))}
            </div>
        </div>
    </div>
  );
};

export default ArchiveScreen;
