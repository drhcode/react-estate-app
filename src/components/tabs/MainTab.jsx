import { useState } from "react";
import "./tabs.scss";
import DataTab from "./DataTab";
import DummyData from "../../../data";

const MainTab = () => {
  const { projects, tasks } = DummyData;

  const [activeTab, setActiveTab] = useState("project");

  const openTab = (tabName) => {
    setActiveTab(tabName);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const renderProjectHeader = () => (
    <>
      <span>Project Name</span>
      <span>Start Date</span>
      <span>Due Date</span>
      <span>Status</span>
    </>
  );

  const renderProjectContent = () => (
    <div>
      {projects.map((project) => (
        <div key={project.id} className="tab-content">
          <span>{project.projectName}</span>
          <span>{formatDate(project.startDate)}</span>
          <span>{formatDate(project.dueDate)}</span>
          <span>{project.status}</span>
        </div>
      ))}
    </div>
  );

  const renderTaskHeader = () => (
    <>
      <span>Name</span>
      <span>Status</span>
      <span>Start Date</span>
      <span>Priority</span>
    </>
  );

  const renderTaskContent = () => (
    <div>
      {tasks.map((task) => (
        <div key={task.id} className="tab-content">
          <span>{task.name}</span>
          <span>{task.status}</span>
          <span>{formatDate(task.startDate)}</span>
          <span>{task.priority}</span>
        </div>
      ))}
    </div>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case "project":
        return (
          <DataTab
            data={projects}
            renderHeader={renderProjectHeader}
            renderContent={renderProjectContent}
          />
        );
      case "tasks":
        return (
          <DataTab
            data={tasks}
            renderHeader={renderTaskHeader}
            renderContent={renderTaskContent}
          />
        );
      case "reminders":
        return (
          <DataTab
            data={[]}
            renderHeader={() => <h2>Reminders</h2>}
            renderContent={() => <p>No reminders available.</p>}
          />
        );
      case "tickets":
        return (
          <DataTab
            data={[]}
            renderHeader={() => <h2>Tickets</h2>}
            renderContent={() => <p>No tickets available.</p>}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <div className="tab-container">
        <button
          className={`tab-btn ${activeTab === "project" ? "active" : ""}`}
          onClick={() => openTab("project")}
        >
          My Project
        </button>
        <button
          className={`tab-btn ${activeTab === "tasks" ? "active" : ""}`}
          onClick={() => openTab("tasks")}
        >
          My Tasks
        </button>
        <button
          className={`tab-btn ${activeTab === "reminders" ? "active" : ""}`}
          onClick={() => openTab("reminders")}
        >
          My Reminders
        </button>
        <button
          className={`tab-btn ${activeTab === "tickets" ? "active" : ""}`}
          onClick={() => openTab("tickets")}
        >
          My Tickets
        </button>
      </div>

      <div className="tab-content">{renderTabContent()}</div>
    </div>
  );
};

export default MainTab;
