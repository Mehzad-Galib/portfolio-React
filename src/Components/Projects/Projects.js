import React from "react";
import { useEffect, useState } from "react";
import projectInfo from "../../projects_Fake.json";
import Sample from "./Sample";
import Slide from "react-reveal/Slide";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    setProjects(projectInfo);
  }, []);

  return (
    <div className="container">
      <Slide right>
        <h2 className="text-center">Projects</h2>
        <div className="row">
          {projects.map((project) => (
            <Sample key={project.id} project={project}></Sample>
          ))}
        </div>
      </Slide>
    </div>
  );
};

export default Projects;
