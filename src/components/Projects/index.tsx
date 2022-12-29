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
      <div className="bodyPageProjects">
          <h1 className="titleOfSection">PROJECTS</h1>
          <div>filtros</div>
          <div className="scrollProjects">
          {projects.map((project) => (
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
                    <button>
                      Visitar Projeto
                    </button>

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
          ))}
          </div>
        </div>
  );
}

export default Projects;
