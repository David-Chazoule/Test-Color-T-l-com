import React from "react";

import menu from "./img/menu.png";
import logo from "./img/logo.PNG";

import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="logo-box">
        <img className="logo" src={logo} alt="" />
      </div>
      <div className="menu-burger-box">
        <img className="menu" src={menu} alt="" />
      </div>
    </div>
  );
}

export default Header;
