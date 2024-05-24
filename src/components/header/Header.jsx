// src/components/header/Header.jsx
import { Link } from "react-router-dom";
import {
  FaHome,
  FaTasks,
  FaProjectDiagram,
  FaChartBar,
  FaCompress,
  FaBook,
  FaUser,
} from "react-icons/fa";
import { RxAvatar } from "react-icons/rx";
import { IoMdSettings } from "react-icons/io";
import { useAuth } from "../../context/AuthContext.jsx";
import "./header.scss";

const menuItems = [
  { to: "/dashboard", icon: <FaHome size={20} />, label: "Dashboard" },
  { to: "/projects", icon: <FaProjectDiagram size={20} />, label: "Projects" },
  { to: "/tasks", icon: <FaTasks size={20} />, label: "Tasks" },
  {
    to: "/knowledge-base",
    icon: <FaBook size={20} />,
    label: "Knowledge Base",
  },
  { to: "/utilities", icon: <FaCompress size={20} />, label: "Utilities" },
  { to: "/reports", icon: <FaChartBar size={20} />, label: "Reports" },
  { to: "/setup", icon: <IoMdSettings size={20} />, label: "Setup" },
];

const Header = () => {
  const { isAuthenticated } = useAuth();

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
            <Link to={item.to} key={index} className="item">
              <span className="icon">{item.icon}</span>
              <span className="label">{item.label}</span>
            </Link>
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
