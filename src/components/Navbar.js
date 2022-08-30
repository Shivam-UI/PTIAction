import React from "react";
import {
  FaSistrix,
  FaTelegramPlane,
  FaRegCompass,
  FaRegHeart,
} from "react-icons/fa";
import { MdHome } from "react-icons/md";
import { ContextProvider } from "../Global/Context";

const Navbar = () => {
  const { model, openModel, user, loader, logout } = React.useContext(
    ContextProvider
  );
  console.log("my model", model);
  const openForms = () => {
    openModel();
  };
  const userLogout = () => {
    logout();
  };
  const userClicked = () => {
    alert('Hit Btn')
  }
  const checkUser = () => {
    return !loader ? (
      !loader && user ? (
        <li>
          {user.displayName}/ <span onClick={userLogout}>logout</span>{" "}
        </li>
      ) : (
        <li onClick={openForms}>Register/Login</li>
      )
    ) : (
      "..."
    );
  };
  return (
    <div className="navbar">
      <div className="navbar__first">
        <div className="main-logo">
          <img src="images/logo.svg" class="img-responsive" alt="logo" />
        </div>
      </div>
      <div className="navbar__middle">
        <div className="navbar__middle-search">
          <input type="text" className="navbar__search" placeholder="Search" />
          <FaSistrix className="searchIcon" />
        </div>
      </div>
      <div className="navbar__last">
        <li>
          <img style={{ width: 22, }} src="images/bell.png" onClick={userClicked} className="img-responsive navbar__icons" />
        </li>
        <li>
          <img style={{ width: 22, }} src="images/information-button.png" onClick={userClicked} className="img-responsive navbar__icons" />
        </li>
      </div>
    </div>
  );
};

export default Navbar;
