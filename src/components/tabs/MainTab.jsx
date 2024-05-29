import React, { useState } from "react";
import "./tabs.scss";
import DataTab from "./DataTab";
import DummyData from "../../../data";

const MainTab = () => {
  const { projects, tasks } = DummyData;

  const [allProjects] = projects;

  const [activeTab, setActiveTab] = useState("project");

  const openTab = (tabName) => {
    setActiveTab(tabName);
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

      <div
        className="tab-content"
        style={{ display: activeTab === "project" ? "block" : "none" }}
      >
        <DataTab />
      </div>

      <div
        className="tab-content"
        style={{ display: activeTab === "tasks" ? "block" : "none" }}
      >
        <DataTab />
      </div>

      <div
        className="tab-content"
        style={{ display: activeTab === "reminders" ? "block" : "none" }}
      >
        <DataTab />
      </div>

      <div
        className="tab-content"
        style={{ display: activeTab === "tickets" ? "block" : "none" }}
      >
        <DataTab />
      </div>
    </div>
  );
};

export default MainTab;
