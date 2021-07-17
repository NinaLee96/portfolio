import React from 'react';
import studenthub from '../../images/ss.png';
import projectStyles from '../../styles/project.module.scss';
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { useStudenthubProject } from '../hooks/useContentfulProject';

const Studenthub = () => {
  const { nodes } = useStudenthubProject(); //returns project object in array
  const project = nodes[0]                  //grabs first object of array 
  // console.log('projects:', project);
  return(
    <div className={projectStyles.projects}>
       <div className={projectStyles.img}>{ studenthub ? <img className={projectStyles.resize} src={studenthub}/> : "No image provided"} </div>
          <div className={projectStyles.description}>
            <h3>
              <a href={project.url ? project.url : project.github} rel="noopener noreferrer" target="_blank" className={projectStyles['project-title']}>{project.name}</a>
            </h3>
            <div>{documentToReactComponents(project.description.json)}</div>
            <a href={project.github}rel="noopener noreferrer" target="_blank" className={projectStyles['project-github']}>Check it out on Github</a>
        </div>
    </div>
  )
}

export default Studenthub;