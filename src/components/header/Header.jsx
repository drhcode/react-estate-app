import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { IoMdSettings } from "react-icons/io";
import { useAuth } from "../../context/AuthContext.jsx";
import {
  FaHome,
  FaTasks,
  FaProjectDiagram,
  FaChartBar,
  FaCompress,
  FaBook,
  FaUser,
  FaMusic,
  FaFileExport,
  FaAngleDown,
} from "react-icons/fa";
import "./header.scss";

const menuItems = [
  { to: "/dashboard", icon: <FaHome size={20} />, label: "Dashboard" },
  { to: "/projects", icon: <FaProjectDiagram size={20} />, label: "Projects" },
  { to: "/tasks", icon: <FaTasks size={20} />, label: "Tasks" },
  {
    to: "/knowledge-base",
    icon: <FaBook size={20} />,
    label: "Knowledge Base",
    submenu: [
      { to: "./article-list", label: "Article List" },
      { to: "./new-article-list", label: "New Article List" },
      { to: "./groups", label: "Groups" },
    ],
  },
  {
    to: "/utilities",
    icon: <FaCompress size={20} />,
    label: "Utilities",
    submenu: [
      {
        to: "/media",
        label: "Media",
      },
      {
        to: "/csv-export",
        label: "CSV Export",
      },
      { to: "/calendar", label: "Calendar" },
      { to: "/Announcements", label: "Announcements" },
      { to: "./Activity Log", label: "Activity Log" },
      { to: "./ticket-pipe-log", label: "Ticket Pipe Log" },
    ],
  },
  {
    to: "/reports",
    icon: <FaChartBar size={20} />,
    label: "Reports",
    submenu: [
      {
        to: "/timesheets-overview",
        label: "Timesheets Overview",
      },
    ],
  },
  { to: "/setup", icon: <IoMdSettings size={20} />, label: "Setup" },
];

const Header = () => {
  const { isAuthenticated } = useAuth();
  const [openSubmenuIndex, setOpenSubmenuIndex] = useState(null);
  const location = useLocation();

  const toggleSubmenu = (index) => {
    setOpenSubmenuIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  // Close submenu on route change
  useEffect(() => {
    setOpenSubmenuIndex(null);
  }, [location]);

  return (
    <div className="header">
      <div className="logo">
        <Link to="/">
          <img src="./logodark2.png" alt="Logo" />
        </Link>
      </div>
      {isAuthenticated && (
        <div className="items">
          {menuItems.map((item, index) => (
            <div key={index} className="item">
              <Link to={item.to} className="item-link">
                <span className="icon">{item.icon}</span>
                <span className="label">{item.label}</span>
              </Link>
              {item.submenu && (
                <div
                  className={`dropdown ${
                    openSubmenuIndex === index ? "active" : ""
                  }`}
                >
                  <span className="icon" onClick={() => toggleSubmenu(index)}>
                    <FaAngleDown size={20} />
                  </span>
                  <div className="dropdown-content">
                    {item.submenu.map((subitem, subIndex) => (
                      <Link
                        to={subitem.to}
                        key={`${index}-${subIndex}`}
                        className="subitem"
                      >
                        <span className="label">{subitem.label}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
      {isAuthenticated && (
        <Link to="/profile" className="userProfile">
          <span className="icon">
            <FaUser size={20} />
          </span>
          <span className="label">Profile</span>
        </Link>
      )}
    </div>
  );
};

export default Header;
