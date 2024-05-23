import PropTypes from "prop-types";
import { FaUser } from "react-icons/fa";
import "./dashboardItem.scss";

const DashboardItem = ({ item }) => {
  const { name, status, priority, startDate, endDate, dueDate, assignedTo } =
    item;

  return (
    <div className="task-item">
      <div className="task-name">
        <span>{name}</span>
      </div>
      <div className="task-status">
        <span>{status}</span>
      </div>
      <div className="task-priority">
        <span>{startDate}</span>
      </div>
      <div className="task-start-date">
        <span>{endDate}</span>
      </div>
      <div className="task-end-date">
        <span>{dueDate}</span>
      </div>
      <div className="task-assigned-to">
        {assignedTo && assignedTo.length > 0 ? (
          assignedTo.map((assigned, i) => (
            <span key={i} title={assigned.name}>
              <FaUser />
            </span>
          ))
        ) : (
          <span>No users assigned</span>
        )}
      </div>
      <div className="taskPriority">
        <span>{priority}</span>
      </div>
    </div>
  );
};

DashboardItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    priority: PropTypes.string.isRequired,
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string.isRequired,
    dueDate: PropTypes.string.isRequired,
    assignedTo: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

export default DashboardItem;
