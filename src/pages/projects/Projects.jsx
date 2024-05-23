import React, { useState, useEffect } from "react";
import BreadcrumbWrapper from "../../components/breadcrumb/BreadcrumbWrapper";
import ProjectsItem from "./../../items/ProjectsItem";
import dummyData from "../../../data.js";
import { FaPlus } from "react-icons/fa";

import "./projects.scss";
import { useNavigate } from "react-router-dom";

const Projects = () => {
  const { projects } = dummyData;
  // const [projects, setProjects] = useState([]);
  const navigate = useNavigate();

  // useEffect(() => {
  //   const storedProjects = localStorage.getItem("projects");
  //   if (storedProjects) {
  //     setProjects(JSON.parse(storedProjects));
  //   }
  // }, []);

  return (
    <div>
      <BreadcrumbWrapper title="Projects" />
      <div className="projects">
        <div className="searchBar">
          <div className="search">
            <img src="./searchIcon.png" alt="Search Icon" />
            <input
              type="text"
              placeholder="Search Hulle’s Data Marketplace or drill down through the filters’ menu"
            />
          </div>
          <div className="buttonProject">
            <button onClick={() => navigate("/new-project")}>
              New Project
            </button>
            <FaPlus color="white" />
          </div>
        </div>
        <div className="projectsContainer">
          <div className="dataList">
            <div className="projectHeader">
              <div className="project-name">Name</div>
              <div className="project-last-updated">Last Updated</div>
              <div className="project-start-date">Start Date</div>
              <div className="project-end-date">Due Date</div>
              <div className="project-members">Members</div>
              <div className="project-status">Status</div>
            </div>
            {projects.map((item, index) => (
              <ProjectsItem key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
