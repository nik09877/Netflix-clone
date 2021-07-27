import React, { useState } from "react";
import "./navbar.styles.scss";
import Search from "@material-ui/icons/Search";
import Notifications from "@material-ui/icons/Notifications";
import ArrowDropDown from "@material-ui/icons/ArrowDropDown";

const NavBar = () => {
  const [isScrolled, setScrolled] = useState(false);

  //Tricky part (If we scroll the page the navbar will become darker and darker)
  window.onscroll = () => {
    setScrolled(window.pageYOffset === 0 ? false : true);

    //clean up function or else it will be on loop
    return () => (window.onscroll = null);
  };

  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
          <span>HomePage</span>
          <span>Series</span>
          <span>Movies</span>
          <span>New And Popular</span>
          <span>MyList</span>
        </div>
        <div className="right">
          <Search className="icon" />
          <span>KID</span>
          <Notifications className="icon" />
          <img
            src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
          />
          <div className="profile">
            <ArrowDropDown className="icon" />
            <div className="options">
              <span>Settings</span>
              <span>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
