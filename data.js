const tasks = [
  {
    name: "Complete report",
    status: "In Progress",
    startDate: "2024-05-15",
    priority: "High",
  },
  {
    name: "Prepare presentation",
    status: "Pending",
    startDate: "2024-05-10",
    priority: "Medium",
  },
  {
    name: "Prepare presentation",
    status: "Overdue",
    startDate: "2024-05-10",
    priority: "Medium",
  },
  {
    name: "Prepare presentation",
    status: "Suspended",
    startDate: "2024-05-10",
    priority: "Medium",
  },
];

const projects = [
  {
    projectName: "Website Redesign",
    startDate: "2024-04-01",
    deadline: "2024-06-30",
    status: "In Progress",
  },
  {
    projectName: "Marketing Campaign",
    startDate: "2024-05-01",
    deadline: "2024-07-31",
    status: "Pending",
  },
];

const reminders = [
  {
    subject: "Meeting with client",
    date: "2024-05-25",
  },
  {
    subject: "Submit monthly report",
    date: "2024-05-30",
  },
];

const tickets = [
  {
    subject: "Issue with login functionality",
    status: "Open",
    priority: "High",
    lastReply: "2024-05-18",
  },
  {
    subject: "Billing discrepancy",
    status: "Pending",
    priority: "Medium",
    lastReply: "2024-05-20",
  },
];

const announcements = [
  {
    subject: "New Company Policy Updates",
    date: "2024-05-20",
  },
  {
    subject: "Upcoming Holiday Schedule",
    date: "2024-05-22",
  },
];

export default { tasks, projects, reminders, tickets, announcements };
