import React from "react";
import { githubInterface } from "../../interface/githubInterface";
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";
import "./style.scss";

interface ApresentationInferface {
  gitHub: githubInterface;
}

function ApresentationPageOne(props: ApresentationInferface) {
  return (
    <div className="apresentation">
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
      />
      <h3 className="subtitle_1_spc">Hi, my name is</h3>
      <h1 className="title_1">MATEUS RANZANI</h1>
      <h3 className="subtitle_2">I'm FullStack Developer</h3>
      <img className="imageFront" src="imageFront.png" />

      <div className="contentButtons">
        <a href="/Currículo.pdf" download>
          <div className="buttonApresentation">
            Download CV
            <ArrowDownTrayIcon className="icon" />
          </div>
        </a>
        <a
          href="https://www.linkedin.com/in/mateus-ranzani-89744421b/"
          target="_blank"
        >
          <div className="buttonApresentationLinkedin">
            Linkedin
            <i className="icon devicon-linkedin-plain" />
          </div>
        </a>
      </div>
    </div>
  );
}

export default ApresentationPageOne;
