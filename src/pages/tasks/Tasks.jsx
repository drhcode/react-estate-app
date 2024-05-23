import { FaPlus } from "react-icons/fa";
import BreadcrumbWrapper from "../../components/breadcrumb/BreadcrumbWrapper";
import "./tasks.scss";
import { useNavigate } from "react-router-dom";
import TasksItem from "./../../items/TasksItem";
import dummyData from "../../../data.js";

const Tasks = () => {
  const navigate = useNavigate();

  const { tasks } = dummyData;
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
            <button onClick={() => navigate("/new-task")}>New Tasks</button>
            <FaPlus color="white" />
          </div>
        </div>
        <div className="projectsContainer">
          <div className="dataList">
            <div className="projectHeader">
              <div className="project-name">Name</div>
              <div className="project-last-updated">Status</div>
              <div className="project-start-date">Start Date</div>
              <div className="project-end-date">Due Date</div>
              <div className="project-members">Members</div>
              <div className="project-members">Priority</div>
            </div>
            {tasks.map((item, index) => (
              <TasksItem key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tasks;
