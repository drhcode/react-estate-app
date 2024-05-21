import { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "../header/Header";
import { CiMenuFries } from "react-icons/ci";
import { useAuth } from "../../context/AuthContext";
import "./layout.scss";
import TopBar from "./../topBar/TopBar";

import Login from "./../../pages/login/Login";

const Layout = () => {
  const { isAuthenticated } = useAuth() || {};
  const [isSidebarVisible, setSidebarVisible] = useState(true);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  if (!isAuthenticated) {
    return <Login />;
  }

  return (
    <div className="layout">
      <div className={`sidebar ${isSidebarVisible ? "visible" : "hidden"}`}>
        <Header />
      </div>
      <div className="content-wrapper">
        <div className="topBar">
          <button className="toggle-button" onClick={toggleSidebar}>
            <CiMenuFries />
          </button>
          <TopBar />
        </div>
        <div className="content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
