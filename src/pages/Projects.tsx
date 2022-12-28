import { useEffect, useState } from "react";
import MenuTopBar from "../components/MenuTopBar";
import { githubInterface } from "../interface/githubInterface";
import { ProjectsGitHbInterface } from "../interface/projectsGitHubInterface";
import { format } from "date-fns";
import { StarIcon } from "@heroicons/react/24/solid";

import "../styles/projects.scss";

function Projects() {
  let [projects, setProjects] = useState<ProjectsGitHbInterface[]>([]);
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
        getProjectsGithub();
        return;
      }
    } catch (err) {
      console.log(err);
    }
  };

  const getProjectsGithub = async () => {
    try {
      const response = await fetch(`${gitHub.repos_url}`);
      const data = await response.json();

      if (response.ok) {
        projects = data;
        setProjects(() => projects);
        return;
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserGithub();
  }, []);

  return (
    <div className="App">
      <MenuTopBar />
      <div className="bodyPageProjects">
        <div className="listOfProjects">
          <h1 className="titleOfListProjects">PROJECTS</h1>
          {projects.map((project) => (
            <a href={project.html_url} target="_blank">
              <div className="boxList">
                <div className="contentTitle">
                  <div className="titleProject">{project.name}</div>
                  <div>{project.language}</div>
                </div>

                <div className="boxProject">
                  <div className="boxDescription">
                    <div>
                      {project.description !== null
                        ? project.description
                        : "This project does not contain description"}
                    </div>
                  </div>
                  <div>
                    <div className="stargazeContent">
                      <StarIcon className="starIcon" />
                      {project.stargazers_count}
                    </div>
                  </div>
                  <div className="datesProject">
                    <p className="date">
                      Created at &nbsp;
                      {format(new Date(project.created_at), "dd/mm/yyyy hh:mm")}
                    </p>
                    <p>
                      Updated at &nbsp;
                      {format(new Date(project.updated_at), "dd/mm/yyyy hh:mm")}
                    </p>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
