import React, { useEffect, useState } from "react";
import ApresentationPageOne from "../components/Apresentation";
import MenuTopBar from "../components/MenuTopBar";
import { githubInterface } from "../interface/githubInterface";

function Home() {
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
      <MenuTopBar />
      <div className="bodyPage">
        <ApresentationPageOne gitHub={gitHub} />
      </div>
    </div>
  );
}

export default Home;
