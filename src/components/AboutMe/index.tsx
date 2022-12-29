import React from "react";
import "./style.scss";

function AboutMe() {
  return (
    <div className="bodyPage">
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
      />

      <h2 className="titleOfSection">About Me</h2>
      <p className="abotMeResume">
        I'm 22 years old, and i am student of Análise e Desenvolvimento de
        Sistemas at UNINTER and Ciências Contábeis at Estácio. I worked for a
        few years as a graphic designer and started as a front end developer. I
        discovered my affinity for technology when I got my first notebook at
        age 8.
        <br />
        Since then I have been developing new skills over time, to become a
        great professional.
      </p>

      <h2 className="secondaryTitleOfSection">My Skills</h2>
      <div className="cardOfSkills">
        <div>
          <i className="iconSkill devicon-react-original"></i>
          <p>ReactJs</p>
        </div>
        <div>
          <i className="iconSkill devicon-javascript-plain"></i>
          <p>JavaScript</p>
        </div>
        <div>
          <i className="iconSkill devicon-nextjs-original"></i>
          <p>NextJs</p>
        </div>
        <div>
          <i className="iconSkill devicon-css3-plain"></i>
          <p>Css</p>
        </div>
        <div>
          <i className="iconSkill devicon-nodejs-plain"></i>
          <p>NodeJs</p>
        </div>
        <div>
          <i className="iconSkill devicon-java-plain"></i>
          <p>Java</p>
        </div>
        <div>
          <i className="iconSkill devicon-mysql-plain"></i>
          <p>MySql</p>
        </div>
      </div>

      <h2 className="secondaryTitleOfSectionSftS">My Soft Skills</h2>
      <div className="cardOfSkills">
        <div>
          <img src="icons/raio.png" className="iconHardSkill" />
          <p>Proatividade</p>
        </div>
        <div>
          <img src="icons/cooperacao.png" className="iconHardSkill" />
          <p>Resolução de Problemas</p>
        </div>
        <div>
          <img src="icons/bolha-de-bate-papo.png" className="iconHardSkill" />
          <p>Comunicação</p>
        </div>
        <div>
          <img src="icons/ideia.png" className="iconHardSkill" />
          <p>Criatividade</p>
        </div>
        <div>
          <img src="icons/inspiracao.png" className="iconHardSkill" />
          <p>Cooperação</p>
        </div>
        <div>
          <img src="icons/adaptativo.png" className="iconHardSkill" />
          <p>Adaptatividade</p>
        </div>
        <div>
          <img src="icons/ampulheta.png" className="iconHardSkill" />
          <p>Pontualidade</p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
