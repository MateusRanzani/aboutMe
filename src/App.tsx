import React, { useEffect, useState } from "react";
import MenuButton from "./components/MenuButton";
import { githubInterface } from "./interface/githubInterface";
import "./styles/global.css";

function App() {
  let [gitHub, setGitHub] = useState({} as githubInterface);

  const getUserGithub = async () => {
    try {
      const response = await fetch(
        `https://api.github.com/users/mateusRanzani`
      );
      const data = await response.json();

      if (response.ok) {
        gitHub = data;
        setGitHub(gitHub);
        return;
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUserGithub();
  }, []);

  return (
    <div className="App">
      <div className="menuTopBar">
        <div className="menuTopBarArea">
          <MenuButton textToButton="ABOUT ME" />
          <MenuButton textToButton="CONTACT" />
          <MenuButton textToButton="PROJECTS" />
        </div>
      </div>
      <div className="bodyPage">
        <div className="apresentation">
          <h3 className="subtitle_1">Hi, my name is</h3>
          <a href={gitHub.html_url} target="_blank">
            <h1 className="title_1">MATEUS RANZANI</h1>
          </a>
          <h3 className="subtitle_2">I am a FullStack Developer</h3>
          <img className="imageFront" src="imageFront.png" />
          <h3 className="subtitle_1">Welcome to my project!</h3>
        </div>
      </div>
    </div>
  );
}

export default App;
