import React, { useEffect, useState, useRef } from "react";
import landingStyles from "../styles/landing.module.scss";
import { Power3, gsap } from 'gsap';
import ScrollMagic from 'scrollmagic';


const Landing = () =>{

  const nameText = useRef(null);

  // sets the number for css tranlate
  const [spaceshipElement, setSpaceshipElement] = useState('0');
  const [introTextElement, setIntroTextElement] = useState('400px');

  const handleScroll = () =>{
    // handles scroll element for IE/Firefox/Chrome
    let scrollTop = document.documentElement.scrollTop ||document.body.scrollTop;
    setSpaceshipElement(Math.floor(scrollTop * .5));
    setIntroTextElement(scrollTop/7);
    // console.log(scrollTop);
  }
  useEffect (() =>{
  
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  })

  return(
    <div className={landingStyles.backdrop}>
      <div onScroll={handleScroll} style={{'transform':`translate(0px, -${introTextElement}%)`}}>
        <div>
          <h1 className={landingStyles['intro-text']}><span className={landingStyles.newline}>Nina Lee</span></h1>
        </div>
      </div>
      <div className={landingStyles.foredrop}></div>
      <div className={landingStyles.spaceship} onScroll={handleScroll} style={{'transform':`translate(0px, ${spaceshipElement}px)`}}></div>
      
      {/* <img src={background} alt='background' className={landingStyles.backdrop}/> */}
    </div>
  );
}

export default Landing;

