import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MovieIcon from "@mui/icons-material/Movie";

function Header() {
  return (
    <div className="header_outer_container">
      <div className="header_container">
        <div className="headerLeft">
          <h1 className="ethio_Cinema_Logo pointer"> Ethio Cinema </h1>
          <ul>
            <li className="home_Button pointer ">Home</li>
            <li className="home_Button pointer">My List</li>
          </ul>
        </div>
        <div className="headerMiddle">
          <div className="search">
            <SearchIcon className="pointer" />
            <input
              type="text"
              placeholder="Search Movies"
              className="search_bar"
            />
          </div>
          <div className="genre_bar">
            <input type="text" placeholder="Genre" className="genre" />
            <ArrowDropDownIcon className="pointer" />
          </div>
          <div className="location">
            <LocationOnIcon className="location_icon" />
            <input
              type="text"
              placeholder="Addis.A"
              className="location_input"
            />
            <ArrowDropDownIcon className="pointer" />
          </div>
          <div className="cinema">
            <MovieIcon className="cinema_icon" />
            <input
              type="text"
              placeholder="Cinema"
              className="location_input"
            />
            <ArrowDropDownIcon className="pointer" />
          </div>
        </div>
        <div className="headerRight">
          <div className="account">
            <AccountBoxIcon className="pointer" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
