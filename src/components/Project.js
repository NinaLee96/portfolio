import React, { useRef, useEffect, createRef } from "react";
import { useContentfulProject } from "./hooks/useContentfulProject";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import projectStyles from "../styles/project.module.scss";
import { gsap } from 'gsap';
import ScrollMagic from 'scrollmagic';

import StudentHub from '../components/projects/StudentHub';
import Game from '../components/projects/Game';

//fix gsap effect if needed, add footer to page
//fix project image sizes
//find a color scheme

const Project = () => {
 
  const timeline = useRef(null);
  // const { nodes } = useContentfulProject(); ///use hook for access to all projects  
  
  // const projectItem = useRef([nodes.map(() => createRef())]);
  const time = gsap.timeline();
  const control = new ScrollMagic.Controller();
  // console.log(nodes);
  // const handleProjectAnimation = () =>{
  //   timeline.current = gsap.timeline().from(
  //     projectItem.current.children,
  //     {
  //       duration: 3000,
  //       opacity: 0,
  //       y: 100,
  //       stagger: 0.25,
  //       onComplete: () => {
  //         console.log("ran");
  //       }
  //     }
  //   );
  //   timeline.current.pause();
  // }
  // const handleProjectAnimation = () =>{
  //   time.from(projectItem.current, { y:200, duration: 4, opacity: 0, stagger: 0.4, ease: "power3" })

  // }
  // time.pause();

  useEffect(() =>{
   
    // console.log(projectItem);
    // handleProjectAnimation();

    // new ScrollMagic.Scene({
    //   triggerElement: '#triggerEffect',
    //   triggerHook: 1,
    //   duration: 4000
    // })
    // .addTo(control)
    // .on('enter', () =>{
    //   time.play();
    // });
  }, []);

  // controller = controller.destroy(true);

  return (      
      <div className={projectStyles.background} id="triggerEffect"> 
        <h2 className={projectStyles.header}>Projects</h2>
        <div className={projectStyles.student}>
          <StudentHub/>
        </div>
        <div className={projectStyles.game}>
          <Game/>
        </div>
          
        


        {/* {nodes.map((project, i)=>(
          <div 
            key={project.id} 
            className={projectStyles.projects}
            ref={el => projectItem.current[i] = el}
          >
            <div className={projectStyles.img}>{project.name == "StudentHub.io" ? <img src={studenthub}/> : "No image provided" }</div>
            <div className={projectStyles.description}>
              <h3>
                <a href={project.url ? project.url : project.github} rel="noopener noreferrer" target="_blank" className={projectStyles['project-title']}>{project.name}</a>
              </h3>
              <div>{documentToReactComponents(project.description.json)}</div>
              <a href={project.github}rel="noopener noreferrer" target="_blank" className={projectStyles['project-github']}>Check it out on Github</a>
            </div>
          </div>
        ))}  */}
      </div>
      
  )
}

export default Project;