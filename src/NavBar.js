import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { VscAccount } from "react-icons/vsc";
import logo from "./Design/logo.png";

const NavBar = () => {
  return (
    <div className="NavBar">
      <div className="hamburger">
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <div className="nav-bar-icon">
        <img src={logo} alt="logo" />
      </div>
      <div className="search-bar">
        <input placeholder="产品/商店 搜寻"></input>
        <span
          style={{
            color: "lightblue",
            fontSize: "1.7rem",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <AiOutlineSearch />
        </span>
      </div>
      <div
        className="accout-icon"
        style={{
          color: "lightblue",
          fontSize: "1.7rem",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <VscAccount />
      </div>
    </div>
  );
};

export default NavBar;
