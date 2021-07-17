import React from 'react';
import projectStyles from '../../styles/project.module.scss';
import gameImage from '../../images/2dgame.png';
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { use2dGameProject } from '../hooks/useGameProject';


const Game = () => {

  const { nodes } = use2dGameProject();
  const project = nodes[0];
  // console.log(project);

  return(
    <div className={projectStyles.projects}>
       <div className={projectStyles.img}>{ gameImage ? <img className={projectStyles.resize} src={gameImage}/> : "No image provided"} </div>
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

export default Game;