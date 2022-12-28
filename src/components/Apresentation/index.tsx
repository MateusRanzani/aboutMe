import React from "react";
import { githubInterface } from "../../interface/githubInterface";
import "./style.scss";

interface ApresentationInferface {
  gitHub: githubInterface;
}

function ApresentationPageOne(props: ApresentationInferface) {
  return (
    <div className="apresentation">
      <h3 className="subtitle_1_spc">Hi, my name is</h3>
      <a href={props.gitHub.html_url} target="_blank">
        <h1 className="title_1">MATEUS RANZANI</h1>
      </a>
      <h3 className="subtitle_2">I'm FullStack Developer</h3>
      <img className="imageFront" src="imageFront.png" />
      <h3 className="subtitle_1">Welcome to my project!</h3>
    </div>
  );
}

export default ApresentationPageOne;
