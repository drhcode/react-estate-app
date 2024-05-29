import "./dashboard.scss";
import dummyData from "../../../data.js";
import { useState } from "react";
import CalendarComponent from "../../components/calendar/Calendar.jsx";
import DoughnutChart from "../../components/charts/DashboardChart.jsx";
import MainTab from "../../components/tabs/MainTab.jsx";

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

  return (
    <div className="dashboard">
      <div className="content">
        <div className="overviewData">
          <DashboardOverview data={tasks} title="Tasks" />
          <DashboardOverview data={projects} title="Projects" />
          <DashboardOverview data={reminders} title="Reminders" />
        </div>
      </div>
      <div className="content-calendar">
        <div className="calendar">
          <CalendarComponent />
          <MainTab />
        </div>
        <div className="widgets">
          <div className="widgets-projects">
            <h1>Projects</h1>
            <DoughnutChart
              data={dummyData.projects}
              dataKey="status"
              labelKey="name"
            />
          </div>
          <div className="widgets-tasks">
            <h1>Tasks</h1>
            <DoughnutChart
              data={dummyData.tasks}
              dataKey="status"
              labelKey="name"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
