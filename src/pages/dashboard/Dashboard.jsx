import "./dashboard.scss";
import dummyData from "../../../data.js";
import { useState } from "react";
import DashboardItem from "./../../items/DashboardItem";
import CalendarComponent from "../../components/calendar/Calendar.jsx";

const DashboardOverview = ({ data, title }) => (
  <div className="overview">
    <div className="overviewNumber">
      <span>{data.length}</span>
    </div>
    <div className="overviewText">
      <div>{title}</div>
      <div>Assigned to you</div>
    </div>
  </div>
);

const Dashboard = () => {
  const { tasks, projects, reminders, tickets, announcements } = dummyData;
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("My Tasks");

  const handleSearch = (e) => setSearchTerm(e.target.value);

  const filteredTasks = tasks.filter((task) =>
    task.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getCategoryData = () => {
    switch (activeCategory) {
      case "My Tasks":
        return filteredTasks;
      case "My Projects":
        return projects;
      case "My Reminders":
        return reminders;
      case "Tickets":
        return tickets;
      case "Announcements":
        return announcements;
      default:
        return [];
    }
  };

  return (
    <div className="dashboard">
      <div className="content">
        <div className="dataRow">
          {[
            "My Tasks",
            "My Projects",
            "My Reminders",
            "Tickets",
            "Announcements",
          ].map((title, index) => (
            <div
              className={`itemTitle ${
                activeCategory === title ? "active" : ""
              }`}
              key={index}
              onClick={() => setActiveCategory(title)}
            >
              <span>{title}</span>
            </div>
          ))}
        </div>
        <div className="itemsData">
          <div className="overviewData">
            <DashboardOverview data={tasks} title="Tasks" />
            <DashboardOverview data={projects} title="Projects" />
            <DashboardOverview data={reminders} title="Reminders" />
            <div className="searchBox">
              <input
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={handleSearch}
              />
              <img src="./searchIcon.png" alt="Search Icon" />
            </div>
          </div>
          <div className="dataList">
            <div className="datalistHeader">
              <div className="task-column task-name">Name</div>
              <div className="task-column task-status">Status</div>
              <div className="task-column task-start-date">Start Date</div>
              <div className="task-column task-end-date">End Date</div>
              <div className="task-column task-due-date">Due Date</div>
              <div className="task-column task-assigned-to">Assigned To</div>
              <div className="task-column task-priority">Priority</div>
            </div>
            {getCategoryData().map((item) => (
              <DashboardItem key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>

      <div className="content">
        <CalendarComponent />
      </div>
    </div>
  );
};

export default Dashboard;
