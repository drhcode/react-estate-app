import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BreadcrumbWrapper from "../../components/breadcrumb/BreadcrumbWrapper";

import "./newProject.scss";

const NewProjectPage = () => {
  const [newProjectData, setNewProjectData] = useState({
    name: "",
    startDate: "",
    dueDate: "",
    members: "",
    status: "",
  });

  const [errors, setErrors] = useState({});

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
      <div className="newProject">
        <div className="newProjectForm">
          <div className="name">
            <label>Project Name</label>
            <input
              type="text"
              name="name"
              value={newProjectData.name}
              onChange={handleInputChange}
            />
            {errors.name && <span className="error">{errors.name}</span>}
          </div>
          <div className="dates">
            <div className="startDate">
              <label>Start Date</label>
              <input
                type="date"
                name="startDate"
                value={newProjectData.startDate}
                onChange={handleInputChange}
              />
              {errors.startDate && (
                <span className="error">{errors.startDate}</span>
              )}
            </div>
            <div className="dueDate">
              <label>Due Date</label>
              <input
                type="date"
                name="dueDate"
                value={newProjectData.dueDate}
                onChange={handleInputChange}
              />
              {errors.dueDate && (
                <span className="error">{errors.dueDate}</span>
              )}
            </div>
          </div>

          <div className="members">
            <label>Members</label>
            <select
              type="select"
              name="members"
              value={newProjectData.members}
              onChange={handleInputChange}
              selected
            />
            {errors.members && <span className="error">{errors.members}</span>}
            <option
              value={newProjectData.members}
              selected={newProjectData.members}
            ></option>
          </div>

          <div className="status">
            <label>Status</label>
            <input
              type="text"
              name="status"
              value={newProjectData.status}
              onChange={handleInputChange}
            />
            {errors.status && <span className="error">{errors.status}</span>}
          </div>

          <div className="description">
            <label>Description</label>
            <textarea
              type="text"
              name="description"
              rows="4"
              value={newProjectData.description}
              onChange={handleInputChange}
            />
          </div>

          <div className="buttons">
            <button onClick={addNewProject}>Add Project</button>
            <button onClick={cancelAddProject}>Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewProjectPage;
