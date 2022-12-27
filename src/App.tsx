import React, { useEffect, useState } from "react";
import ApresentationPageOne from "./components/Apresentation/ApresantationPageOne";
import MenuButton from "./components/MenuButtons/MenuButton";
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
        <ApresentationPageOne gitHub={gitHub} />
      </div>
    </div>
  );
}

export default App;
