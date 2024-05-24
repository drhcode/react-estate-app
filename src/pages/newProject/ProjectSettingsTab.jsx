import "./newProject.scss";

const ProjectSettingsTab = () => {
  return (
    <div className="projectSettingsTab">
      <div className="option">
        <label htmlFor="contactsNotifications">
          Send Contacts Notifications
        </label>
        <select id="contactsNotifications">
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>
      <div className="option">
        <label htmlFor="visibleTabs">Visible Tabs</label>
        <select id="visibleTabs">
          <option value="yes">Tasks</option>
          <option value="no">Timesheets</option>
        </select>
        <span className="description">
          Choose which tabs are visible to users.
        </span>
      </div>
      <div className="option">
        <label htmlFor="allowCustomerTasks">
          Allow Customers to View Tasks
        </label>
        <select id="allowCustomerTasks">
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
        <span className="description">
          Enable or disable customer access to view tasks.
        </span>
      </div>
      <div className="option">
        <label htmlFor="allowCustomerTasks">
          Allow customer to create tasks
        </label>
        <select id="allowCustomerTasks">
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
        <span className="description">
          Enable or disable customer to create tasks.
        </span>
      </div>
      <div className="option">
        <label htmlFor="allowCustomerTasks">
          Allow customer to edit tasks (only tasks created from contact)
        </label>
        <select id="allowCustomerTasks">
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
        <span className="description">
          Enable or disable customer to edit tasks.
        </span>
      </div>
      <div className="option">
        <label htmlFor="allowCustomerTasks">
          Allow customer to comment on project tasks
        </label>
        <select id="allowCustomerTasks">
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
        <span className="description">
          Enable or disable customer to comment in project tasks.
        </span>
      </div>
      <div className="option">
        <label htmlFor="allowCustomerTasks">
          Allow customer to view task comments
        </label>
        <select id="allowCustomerTasks">
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
        <span className="description">
          Enable or disable customer access to view task comments.
        </span>
      </div>
      <div className="option">
        <label htmlFor="allowCustomerTasks">
          Allow customer to view task attachments
        </label>
        <select id="allowCustomerTasks">
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
        <span className="description">
          Enable or disable customer access to view task attachments.
        </span>
      </div>
    </div>
  );
};

export default ProjectSettingsTab;
