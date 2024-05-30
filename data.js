import { FaUser } from "react-icons/fa6";

const tasks = [
  {
    name: "Complete report",
    status: "In Progress",
    startDate: "2024-05-28T04:00:00-04:00",
    endDate: "2024-05-28T06:00:00-04:00",
    dueDate: "2024-05-28T06:00:00-04:00",
    priority: "Low",
    members: [
      {
        name: "Dorjan",
        icon: FaUser,
      },
      {
        name: "Marco",
        icon: FaUser,
      },
    ],
  },

  {
    name: "Prepare presentation",
    status: "Pending",
    startDate: "2024-05-28T07:00:00-04:00",
    endDate: "2024-05-28T09:00:00-04:00",
    dueDate: "2024-05-28T08:00:00-04:00",
    priority: "High",
    members: [
      {
        name: "Dorjan",
        icon: FaUser,
      },
      {
        name: "Marco",
        icon: FaUser,
      },
    ],
  },
  {
    name: "Prepare presentation",
    status: "Overdue",
    startDate: "2024-05-29T09:00:00-04:00",
    endDate: "2024-05-29T07:00:00-04:00",
    dueDate: "2024-05-29T09:00:00-04:00",
    priority: "Low",
    members: [
      {
        name: "Dorjan",
        icon: FaUser,
      },
      {
        name: "Marco",
        icon: FaUser,
      },
    ],
  },
  {
    name: "Prepare presentation",
    status: "Suspended",
    startDate: "2024-05-15",
    endDate: "2024-05-19",
    dueDate: "2024-05-17",
    priority: "Medium",
    members: [
      {
        name: "Dorjan",
        icon: FaUser,
      },
      {
        name: "Marco",
        icon: FaUser,
      },
    ],
  },
];

const projects = [
  {
    projectName: "Website Redesign",
    lastUpdated: "2024-05-28T02:00:00-04:00",
    startDate: "2024-05-28T02:00:00-04:00",
    dueDate: "2024-05-28T03:00:00-04:00",
    members: [
      {
        name: "Dorjan",
        icon: FaUser,
      },
      {
        name: "Marco",
        icon: FaUser,
      },
    ],
    status: "Finished",
  },
  {
    projectName: "Application Creation",
    lastUpdated: "2024-05-29T08:00:00-04:00",
    startDate: "2024-05-30T08:00:00-04:00",
    dueDate: "2024-05-30T08:00:00-04:00",
    members: [
      {
        name: "Dorjan",
        icon: FaUser,
      },
      {
        name: "Marco",
        icon: FaUser,
      },
    ],
    status: "In Progress",
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
    priority: [{ name: "High" }, { name: "Low" }, { name: "Medium" }],
    lastReply: "2024-05-18",
  },
  {
    subject: "Billing discrepancy",
    status: "Pending",
    priority: [{ name: "High" }, { name: "Low" }, { name: "Medium" }],
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
