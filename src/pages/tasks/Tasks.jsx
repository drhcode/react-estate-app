import { FaPlus } from "react-icons/fa";
import BreadcrumbWrapper from "../../components/breadcrumb/BreadcrumbWrapper";
import "./tasks.scss";
import { useNavigate } from "react-router-dom";
import TasksItem from "./../../items/TasksItem";
import dummyData from "../../../data.js";
import { useState } from "react";

const Tasks = () => {
  const navigate = useNavigate();
  const { tasks } = dummyData;

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

  const filteredTasks = tasks.filter((task) => {
    const matchesStatus = statusFilter
      ? task.status.toLowerCase().includes(statusFilter.toLowerCase())
      : true;
    const matchesDueDate =
      (!dueDateStart || new Date(task.dueDate) >= new Date(dueDateStart)) &&
      (!dueDateEnd || new Date(task.dueDate) <= new Date());
    return matchesStatus && matchesDueDate;
  });

  return (
    <div>
      <BreadcrumbWrapper title="Tasks" />
      <div className="tasks">
        <div className="searchBar">
          <div className="search">
            <img src="./searchIcon.png" alt="Search Icon" />
            <input
              type="text"
              placeholder="Search Hulle’s Data Marketplace or drill down through the filters’ menu"
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
            <button onClick={() => navigate("/new-task")}>
              New Task <FaPlus color="white" />
            </button>
          </div>
        </div>
        <div className="tasksContainer">
          <div className="taskList">
            <div className="taskHeader">
              <div className="taskName">Name</div>
              <div className="taskLastUpdate">Status</div>
              <div className="taskStartDate">Start Date</div>
              <div className="taskEndDate">Due Date</div>
              <div className="taskMembers">Members</div>
              <div className="taskPriority">Priority</div>
            </div>
            {filteredTasks &&
              Array.isArray(filteredTasks) &&
              filteredTasks.map((item, index) => (
                <TasksItem key={index} item={item} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tasks;
