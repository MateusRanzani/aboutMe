import React from "react";
import "./style.scss";


function AboutMe() {
  return (
    
    <div className="">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"/>

      <h2 className="titleOfSection">About Me</h2>
      <p className="abotMeResume">
        I'm 22 years old, and i am student of Análise e Desenvolvimento de
        Sistemas at UNINTER and Ciências Contábeis at Estácio. I worked for a
        few years as a graphic designer and started as a front end developer. I
        discovered my affinity for technology when I got my first notebook at age
        8.
        <br />
        Since then I have been developing new skills over time, to become a great professional.
      </p>

      <h2 className="secondaryTitleOfSection">My Skills</h2>
      <div className="cardOfSkills">
        <i className="iconSkill devicon-react-original"></i>
        <i className="iconSkill devicon-javascript-plain"></i>
        <i className="iconSkill devicon-nextjs-original"></i>
        <i className="iconSkill devicon-css3-plain"></i>
        <i className="iconSkill devicon-nodejs-plain"></i>
        <i className="iconSkill devicon-java-plain"></i>
        <i className="iconSkill devicon-mysql-plain"></i>
      </div>
    </div>
  );
}

export default AboutMe;
