import React, { useRef, useEffect } from "react";
import aboutStyles from "../styles/about.module.scss";
import me from '../images/me.svg';
import { Power3, gsap } from 'gsap';
import ScrollMagic from 'scrollmagic';

//re-do my image, make it square instead of cut out

const About = () =>{
  let imageItem = useRef(null);
  let bioItem = useRef(null);


  const timeline = gsap.timeline();
  const controller = new ScrollMagic.Controller();

  const handleBioAnimation = () =>{
    timeline.from(bioItem, { x: 200, opacity: 0, duration: 2.5})
      .from(imageItem, { y: 200, duration: 3, opacity: 0, ease: Power3.easeOut }, '-= 1')
  }
  timeline.pause();

 
  useEffect(() =>{
    console.log(bioItem);
    handleBioAnimation();
    new ScrollMagic.Scene({
      triggerElement: '#trigger',
      triggerHook: 0.3,
      duration: 2000
    })
    // .addIndicators()
    // .setTween(timeline) -- not compatible with GSAP 3
    .addTo(controller)
    .on('enter', () => {
        timeline.play()
      })
  
  }, []);


  return (
    <div className={aboutStyles.container} id="trigger">
      <h2 className={aboutStyles.header}>About Me</h2>
      <div className={aboutStyles.image}>
        <img 
        ref={element => {imageItem = element}}
        src={me} alt="picture of me" className={aboutStyles.me}/>
      </div>
      <div className={aboutStyles.bio}>
        {/* edit bio some more */}
        <p className={aboutStyles.text} ref={el => bioItem = el}>
          Hello, my name is Nina and I'm a developer based in Fresno, California.  
          I strive to keep my programming skills up-to-date with the latest technology
          by doing new projects and keeping up with the latest trends. I have a passion
          for web design and enjoy creating web applications. 
         
        </p>
      </div>
    </div>
  )
}

export default About;