import React from 'react';
import studenthub from '../../images/ss.png';
import projectStyles from '../../styles/project.module.scss';
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { useStudenthubProject } from '../useContentfulProject';
//
//figure out how to grab the description from contentful
const Studenthub = () => {
  const { nodes } = useStudenthubProject();
  console.log('projects:', nodes);
  return(
    <div>
       <div className={projectStyles.img}></div>
          <div className={projectStyles.description}>
            <h3>
              <a href={nodes.url ? nodes.url : nodes.github} rel="noopener noreferrer" target="_blank" className={projectStyles['project-title']}>{nodes.name}</a>
            </h3>
          {/* <div>{documentToReactComponents(nodes.description.json)}</div> */}
          <a href={nodes.github}rel="noopener noreferrer" target="_blank" className={projectStyles['project-github']}>Check it out on Github</a>
        </div>
    </div>
  )
}

export default Studenthub;