import { useState } from "react";
import "./newTask.scss";
import { useNavigate } from "react-router-dom";
import BreadcrumbWrapper from "../../components/breadcrumb/BreadcrumbWrapper";
import dummyData from "../../../data.js";

const NewTask = () => {
  const [newTaskData, setNewTaskData] = useState({
    name: "",
    startDate: "",
    dueDate: "",
    members: "",
    status: "",
    priority: "",
    repeatInterval: "",
    customRepeatNumber: "",
    customRepeatUnit: "",
    cycles: "",
    infinity: false,
  });

  const { projects, tickets } = dummyData;
  console.log(projects);

  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTaskData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFileInputChange = (e) => {
    console.log(e);
  };

  const handleInfinityChange = (e) => {
    const { checked } = e.target;
    setNewTaskData((prevData) => ({ ...prevData, infinity: checked }));
  };

  const addNewTask = () => {
    console.log("New project added:", newTaskData);
    navigate("/tasks");
  };

  const cancelAddTask = () => {
    navigate("/tasks");
  };

  const renderError = (field) => {
    return errors[field] && <span className="error">{errors[field]}</span>;
  };

  const priorities = ["High", "Low", "Medium", "Urgent"];
  const repeatOptions = [
    "1 week",
    "2 weeks",
    "1 month",
    "2 months",
    "3 months",
    "6 months",
    "1 year",
    "custom",
  ];

  return (
    <div>
      <BreadcrumbWrapper title="New Task" />
      <div className="new-task">
        <form className="new-task-form">
          <div className="additional-options">
            <div className="checkbox-group">
              <label>
                <input
                  type="checkbox"
                  name="isPublic"
                  checked={newTaskData.isPublic}
                  onChange={handleInputChange}
                />
                Public
              </label>
              <label>
                <input
                  type="checkbox"
                  name="isBillable"
                  checked={newTaskData.isBillable}
                  onChange={handleInputChange}
                />
                Billable
              </label>
            </div>
            <div className="file-upload">
              <input
                type="file"
                id="fileInput"
                multiple
                style={{ display: "none" }}
                onChange={handleFileInputChange}
              />
              <button
                type="button"
                onClick={() => document.getElementById("fileInput").click()}
              >
                Attach Files
              </button>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="name">Subject</label>
            <input
              type="text"
              id="name"
              name="name"
              value={newTaskData.name}
              onChange={handleInputChange}
            />
            {renderError("name")}
          </div>
          <div className="form-group">
            <label htmlFor="startDate">Start Date</label>
            <input
              type="date"
              id="startDate"
              name="startDate"
              value={newTaskData.startDate}
              onChange={handleInputChange}
            />
            {renderError("startDate")}
          </div>
          <div className="form-group">
            <label htmlFor="dueDate">Due Date</label>
            <input
              type="date"
              id="dueDate"
              name="dueDate"
              value={newTaskData.dueDate}
              onChange={handleInputChange}
            />
            {renderError("dueDate")}
          </div>
          <div className="form-group">
            <label htmlFor="priority">Priority</label>
            <select
              id="priority"
              name="priority"
              value={newTaskData.priority}
              onChange={handleInputChange}
            >
              {priorities.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
            {renderError("priority")}
          </div>
          <div className="form-group">
            <label htmlFor="repeatInterval">Repeat every</label>
            <select
              id="repeatInterval"
              name="repeatInterval"
              value={newTaskData.repeatInterval}
              onChange={handleInputChange}
            >
              {repeatOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            {newTaskData.repeatInterval === "custom" && (
              <div className="custom-repeat-inputs">
                <input
                  type="number"
                  name="customRepeatNumber"
                  value={newTaskData.customRepeatNumber}
                  onChange={handleInputChange}
                  placeholder="Enter number"
                />
                <select
                  name="customRepeatUnit"
                  value={newTaskData.customRepeatUnit}
                  onChange={handleInputChange}
                >
                  <option value="day">Day(s)</option>
                  <option value="week">Week(s)</option>
                  <option value="month">Month(s)</option>
                  <option value="year">Year(s)</option>
                </select>
              </div>
            )}
            {renderError("repeatInterval")}
          </div>
          <div className="form-group">
            <label htmlFor="cycles">Cycles</label>
            <div className="input-group">
              <input
                type="number"
                id="cycles"
                name="cycles"
                value={newTaskData.cycles}
                onChange={handleInputChange}
                placeholder="Enter number"
                min="1"
                step="1"
                disabled={newTaskData.infinity}
              />
              <input
                type="checkbox"
                id="infinity"
                name="infinity"
                checked={newTaskData.infinity}
                onChange={handleInfinityChange}
              />
              <label htmlFor="infinity">Infinity</label>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              rows="4"
              value={newTaskData.description}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="relatedTo">Related To</label>
            <select
              id="relatedTo"
              name="relatedTo"
              value={newTaskData.relatedTo}
              onChange={handleInputChange}
            >
              <option value="Project">Project</option>
              <option value="Ticket">Ticket</option>
            </select>
          </div>

          {newTaskData.relatedTo === "Project" && (
            <div className="form-group">
              <label htmlFor="project">Select Project</label>
              <select
                id="project"
                name="project"
                value={newTaskData.project}
                onChange={handleInputChange}
              >
                {projects.map((project, i) => (
                  <option key={i} value={project.id}>
                    {project.projectName}
                  </option>
                ))}
              </select>
            </div>
          )}

          {newTaskData.relatedTo === "Ticket" && (
            <div className="form-group">
              <label htmlFor="ticket">Select Ticket</label>
              <select
                id="ticket"
                name="ticket"
                value={newTaskData.ticket}
                onChange={handleInputChange}
              >
                {tickets.map((ticket, i) => (
                  <option key={i} value={ticket.id}>
                    {ticket.subject}
                  </option>
                ))}
              </select>
            </div>
          )}

          <div className="form-buttons">
            <button type="button" onClick={addNewTask}>
              Add New Task
            </button>
            <button type="button" onClick={cancelAddTask}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewTask;
