import BreadcrumbWrapper from "../../components/breadcrumb/BreadcrumbWrapper";
import ProjectsItem from "./../../items/ProjectsItem";
import dummyData from "../../../data.js";
import { FaPlus } from "react-icons/fa";
import "./projects.scss";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Projects = () => {
  const { projects } = dummyData;
  const navigate = useNavigate();
  const [statusFilter, setStatusFilter] = useState("");
  const [dueDateStart, setDueDateStart] = useState("");
  const [dueDateEnd, setDueDateEnd] = useState("");

  const handleStatusFilterChange = (e) => {
    setStatusFilter(e.target.value);
  };

  const handleDueDateStartChange = (e) => {
    setDueDateStart(e.target.value);
  };

  const handleDueDateEndChange = (e) => {
    setDueDateEnd(e.target.value);
  };

  const filteredProjects = projects.filter((project) => {
    const matchesStatus = statusFilter
      ? project.status.toLowerCase().includes(statusFilter.toLowerCase())
      : true;
    const matchesDueDate =
      (!dueDateStart || new Date(project.dueDate) >= new Date(dueDateStart)) &&
      (!dueDateEnd || new Date(project.dueDate) <= new Date(dueDateEnd));
    return matchesStatus && matchesDueDate;
  });

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
              aria-label="Search Hulle’s Data Marketplace"
            />
          </div>
          <div className="filters">
            <label>Filter by</label>
            <select
              value={statusFilter}
              onChange={handleStatusFilterChange}
              aria-label="Filter by Status"
            >
              <option value="">All Statuses</option>
              <option value="finished">Finished</option>
              <option value="In Progress">In Progress</option>
              <option value="Not Started">Not Started</option>
            </select>
            <input
              type="date"
              value={dueDateStart}
              onChange={handleDueDateStartChange}
              aria-label="Filter by Due Date Start"
            />
            <input
              type="date"
              value={dueDateEnd}
              onChange={handleDueDateEndChange}
              aria-label="Filter by Due Date End"
            />
          </div>
          <div className="buttonProject">
            <button onClick={() => navigate("/new-project")}>
              New Project <FaPlus color="white" />
            </button>
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
            {filteredProjects &&
              Array.isArray(filteredProjects) &&
              filteredProjects.map((item, index) => (
                <ProjectsItem key={index} item={item} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
