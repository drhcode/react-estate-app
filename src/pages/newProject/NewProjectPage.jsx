import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BreadcrumbWrapper from "../../components/breadcrumb/BreadcrumbWrapper";

import "./newProject.scss";
import ProjectSettingsTab from "./ProjectSettingsTab";

const NewProjectPage = () => {
  const [newProjectData, setNewProjectData] = useState({
    name: "",
    startDate: "",
    dueDate: "",
    members: "",
    status: "",
  });

  const [errors, setErrors] = useState({});
  const [activeTab, setActiveTab] = useState("details");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const validateForm = () => {
    const newErrors = {};
    const requiredFields = [
      "name",
      "startDate",
      "dueDate",
      "members",
      "status",
    ];

    requiredFields.forEach((field) => {
      if (!newProjectData[field].trim()) {
        newErrors[field] = `${
          field.charAt(0).toUpperCase() + field.slice(1)
        } is required`;
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProjectData({ ...newProjectData, [name]: value });
  };

  const addNewProject = () => {
    if (validateForm()) {
      console.log("New project added:", newProjectData);
      navigate("/projects");
    }
  };

  const cancelAddProject = () => {
    navigate("/projects");
  };

  return (
    <div>
      <BreadcrumbWrapper title="New Project" />
      <div className="new-project">
        <div className="tabs">
          <button
            className={activeTab === "details" ? "active" : ""}
            onClick={() => handleTabChange("details")}
          >
            Project Details
          </button>
          <button
            className={activeTab === "settings" ? "active" : ""}
            onClick={() => handleTabChange("settings")}
          >
            Project Settings
          </button>
        </div>

        {activeTab === "details" && (
          <form className="new-project-form">
            <div className="form-group">
              <label htmlFor="name">Project Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={newProjectData.name}
                onChange={handleInputChange}
              />
              {errors.name && <span className="error">{errors.name}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="startDate">Start Date</label>
              <input
                type="date"
                id="startDate"
                name="startDate"
                value={newProjectData.startDate}
                onChange={handleInputChange}
              />
              {errors.startDate && (
                <span className="error">{errors.startDate}</span>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="dueDate">Due Date</label>
              <input
                type="date"
                id="dueDate"
                name="dueDate"
                value={newProjectData.dueDate}
                onChange={handleInputChange}
              />
              {errors.dueDate && (
                <span className="error">{errors.dueDate}</span>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="members">Members</label>
              <select
                id="members"
                name="members"
                value={newProjectData.members}
                onChange={handleInputChange}
              >
                <option value="" disabled>
                  Select members
                </option>
                {/* Add your member options here */}
              </select>
              {errors.members && (
                <span className="error">{errors.members}</span>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="status">Status</label>
              <input
                type="text"
                id="status"
                name="status"
                value={newProjectData.status}
                onChange={handleInputChange}
              />
              {errors.status && <span className="error">{errors.status}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                name="description"
                rows="4"
                value={newProjectData.description}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-buttons">
              <button type="button" onClick={addNewProject}>
                Add Project
              </button>
              <button type="button" onClick={cancelAddProject}>
                Cancel
              </button>
            </div>
          </form>
        )}

        {activeTab === "settings" && <ProjectSettingsTab />}
      </div>
    </div>
  );
};

export default NewProjectPage;
