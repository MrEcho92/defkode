import React, { useState } from "react";
import { ProjectData } from "../projects-data.js";
import ProjectItem from "../Project/project.component";
import "./container.styles.css";
import "../Project/project.styles.css";

function ProjectContainer() {
  const [projects, setProject] = useState(ProjectData);

  return (
    <div id="work" className="projects-container">
      <div className="container">
        <h1 className="container_title title">Projects</h1>
        <div id="#work " className="projects">
          {projects.map((item) => (
            <ProjectItem key={item.id} item={item}></ProjectItem>
          ))}
        </div>
        <div className="project-card-show ">
          <div className="project-card-extra">
            <a className="submit-btn" href="https://github.com/MrEcho92">
              {" "}
              Show More{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectContainer;
