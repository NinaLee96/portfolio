import React from "react";
import About from "../components/About";
import Project from "../components/Project";
import Landing from "../components/Landing";
import Footer from "../components/Footer";
import indexStyles from "../styles/index.module.scss";

const IndexPage = () => {
  return (
    <div>
      <div className={indexStyles.container}>
        <div className={indexStyles['item-landing']}>
          <Landing/>
        </div>
        <div className={indexStyles['item-about']}>
          <About/>
        </div>
        <div className={indexStyles['item-projects']}>
          <Project/>
        </div>
        <div className={indexStyles['item-footer']}>
          <Footer/>
        </div>
      </div>
    </div>
    
  )
}

export default IndexPage;
