import "./newProject.scss";

const ProjectSettingsTab = () => {
  return (
    <div className="new-project-form">
      <div className="project-settings-tab">
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
            <option value="tasks">Tasks</option>
            <option value="timesheets">Timesheets</option>
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
          <label htmlFor="allowCustomerTaskCreation">
            Allow Customer Task Creation
          </label>
          <select id="allowCustomerTaskCreation">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
          <span className="description">
            Enable or disable customer to create tasks.
          </span>
        </div>
        <div className="option">
          <label htmlFor="allowCustomerTaskEdit">
            Allow Customer Task Edit
          </label>
          <select id="allowCustomerTaskEdit">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
          <span className="description">
            Enable or disable customer to edit tasks.
          </span>
        </div>
        <div className="option">
          <label htmlFor="allowCustomerTaskComment">
            Allow Customer Task Comment
          </label>
          <select id="allowCustomerTaskComment">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
          <span className="description">
            Enable or disable customer to comment in project tasks.
          </span>
        </div>
        <div className="option">
          <label htmlFor="allowCustomerTaskViewComments">
            Allow Customer Task View Comments
          </label>
          <select id="allowCustomerTaskViewComments">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
          <span className="description">
            Enable or disable customer access to view task comments.
          </span>
        </div>
        <div className="option">
          <label htmlFor="allowCustomerTaskViewAttachments">
            Allow Customer Task View Attachments
          </label>
          <select id="allowCustomerTaskViewAttachments">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
          <span className="description">
            Enable or disable customer access to view task attachments.
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProjectSettingsTab;
