import PropTypes from "prop-types";
import { FaUser } from "react-icons/fa";
import "./dashboardItem.scss";

const TasksItem = ({ item }) => {
  const { name, startDate, dueDate, members, status, priority } = item;

  return (
    <div className="projects-table">
      <div className="projects-table-row">
        <div className="projects-table-cell project-name">{name}</div>
        <div className="projects-table-cell task-status">{status}</div>
        <div className="projects-table-cell project-start-date">
          {startDate}
        </div>
        <div className="projects-table-cell project-end-date">{dueDate}</div>
        <div className="projects-table-cell project-members">
          {members && members.length > 0 ? (
            members.map((member, i) => (
              <span key={i} title={member.name} className="member-icon">
                <FaUser />
              </span>
            ))
          ) : (
            <span>No users assigned</span>
          )}
        </div>
        <div className="projects-table-cell project-priority">
          {priority && priority.length > 0 ? (
            <select className="priority" defaultValue={priority[0].name}>
              {priority.map((priorityItem, i) => (
                <option key={i} value={priorityItem.name}>
                  {priorityItem.name}
                </option>
              ))}
            </select>
          ) : (
            <span>No Priority</span>
          )}
        </div>
      </div>
    </div>
  );
};

TasksItem.propTypes = {
  item: PropTypes.shape({
    projectName: PropTypes.string.isRequired,
    lastUpdated: PropTypes.string.isRequired,
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string.isRequired,
    members: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
      })
    ).isRequired,
    status: PropTypes.string.isRequired,
  }).isRequired,
};

export default TasksItem;
