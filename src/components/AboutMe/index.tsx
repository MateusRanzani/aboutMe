import React from "react";
import "./style.scss";

import {
  BoltIcon,
  PuzzlePieceIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  RocketLaunchIcon,
  UserGroupIcon,
  SquaresPlusIcon,
  ClockIcon,
} from "@heroicons/react/24/solid";

function AboutMe() {
  return (
    <div className="bodyPage" data-anime="left">
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
      />

      <h2 className="titleOfSection">About Me</h2>
      <p className="abotMeResume">
        I am 23 years old and currently studying Analysis and Systems
        Development at UNINTER and Accounting Sciences at UNICID - Cruzeiro do
        Sul. I worked as a graphic designer for several years and later
        transitioned into a front-end developer role.
        <br />
        Over time, I have been honing my skills and continuously seeking to
        expand my knowledge to become a more qualified professional.
      </p>

      <h2 className="secondaryTitleOfSection">My Skills</h2>
      <div className="cardOfSkills">
        <div className="iconS">
          <i className="iconSkill devicon-react-original"></i>
          <p>ReactJs</p>
        </div>
        <div className="iconS">
          <i className="iconSkill devicon-javascript-plain"></i>
          <p>JavaScript</p>
        </div>
        <div className="iconS">
          <i className="iconSkill devicon-nextjs-original"></i>
          <p>NextJs</p>
        </div>
        <div className="iconS">
          <i className="iconSkill devicon-css3-plain"></i>
          <p>Css</p>
        </div>
        <div className="iconS">
          <i className="iconSkill devicon-nodejs-plain"></i>
          <p>NodeJs</p>
        </div>
        <div className="iconS">
          <i className="iconSkill devicon-java-plain"></i>
          <p>Java</p>
        </div>
        <div className="iconS">
          <i className="iconSkill devicon-mysql-plain"></i>
          <p>MySql</p>
        </div>
      </div>

      <h2 className="secondaryTitleOfSectionSftS">My Soft Skills</h2>
      <div className="cardOfSkills">
        <div className="iconM">
          <BoltIcon className="iconHardSkill" />
          <p>Proactivity</p>
        </div>
        <div className="iconM">
          <PuzzlePieceIcon className="iconHardSkill" />
          <p>Proficiency in problem-solving</p>
        </div>
        <div className="iconM">
          <ChatBubbleOvalLeftEllipsisIcon className="iconHardSkill" />
          <p>Communication</p>
        </div>
        <div className="iconM">
          <RocketLaunchIcon className="iconHardSkill" />
          <p>Creativity</p>
        </div>
        <div className="iconM">
          <UserGroupIcon className="iconHardSkill" />
          <p>Cooperation</p>
        </div>
        <div className="iconM">
          <SquaresPlusIcon className="iconHardSkill" />
          <p>Adaptability</p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
