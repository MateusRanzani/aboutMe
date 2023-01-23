import { StarIcon } from "@heroicons/react/24/solid";
import { format } from "date-fns";
import { useEffect, useState } from "react";
import { githubInterface } from "../../interface/githubInterface";
import { ProjectsGitHbInterface } from "../../interface/projectsGitHubInterface";
import "./style.scss";

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
    <div className="bodyPageProjects" data-anime="left">
      <h1 className="titleOfSection">PROJECTS</h1>
      {/* <div>filtros</div> */}
      <div className="scrollProjects">
        {projects.map((project, key) => (
          <div className="cardProject" key={key}>
            <div className="cardContent">
              <div>
                <div className="cardOfTitle">
                  <h2 className="projectTitle">{project.name}</h2>
                </div>
                <p className="linguage">{project.language}</p>
                <p className="dateProject">
                  {format(new Date(project.created_at), "dd/MM/yyyy")}
                </p>
                <a href={project.html_url} target="_blank">
                  <button className="buttonLinkProject">Link do Projeto</button>
                </a>

                <a href={project.homepage} target="_blank">
                  <button className="buttonLinkProject">Live Server</button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
