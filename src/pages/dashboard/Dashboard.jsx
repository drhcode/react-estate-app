import "./dashboard.scss";
import dummyData from "../../../data.js";
import { useState } from "react";

const DashboardItem = ({ item }) => (
  <div className="taskItem">
    <div className="taskName">
      <span>{item.name}</span>
    </div>
    <div className="taskStatus">
      <span>{item.status}</span>
    </div>
    <div className="taskPriority">
      <span>{item.priority}</span>
    </div>
    <div className="taskDate">
      <span>{item.startDate}</span>
    </div>
  </div>
);

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
            {getCategoryData().map((item) => (
              <DashboardItem key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
