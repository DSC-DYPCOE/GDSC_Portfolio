import React from "react";
import classes from "./Projects.module.css";
import Card from "../Card/Card";
import { ProjectsData } from "../../assets/projectsData";

const Projects = () => {
  return (
    <>
      <h1>Projects</h1>
      <div className={classes.project_section}>
        {ProjectsData.map((data) => (
          <Card data={data} />
        ))}
      </div>
    </>
  );
};

export default Projects;
