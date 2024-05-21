import "./topBar.scss";
import { MdTaskAlt } from "react-icons/md";
import { CiTimer } from "react-icons/ci";
import { IoIosNotifications } from "react-icons/io";
import { RxAvatar } from "react-icons/rx";
import { useState } from "react";

const TopBar = () => {
  return (
    <div className="topBar">
      <div className="left">
        {/* <div className="searchBox">
          <input type="text" placeholder="Search" />
          <img src="./searchIcon.png" alt="" />
        </div> */}
      </div>

      <div className="right">
        <div className="customersArea">
          <span>Customers Area</span>
        </div>
        <div className="todoItems">
          <span>
            <MdTaskAlt size={24} />
          </span>
        </div>

        <div className="timeSheets">
          <span>
            <CiTimer size={24} />
          </span>
        </div>
        <div className="notification">
          <span>
            <IoIosNotifications size={24} />
          </span>
        </div>
        <div className="avatar">
          <RxAvatar size={24} />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
