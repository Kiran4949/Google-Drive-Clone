import React from "react";
import "../css/header.css";
import SearchIcon from "@material-ui/icons/Search";
import FormatAlignCenterIcon from "@material-ui/icons/FormatAlignCenter";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import SettingsIcon from "@material-ui/icons/Settings";
import AppsIcon from "@material-ui/icons/Apps";
import { Avatar } from "@material-ui/core";

function Header({ photoURL }) {
  return (
    <div className="header">
      <div className="header__logo">
        <img src="https://upload.wikimedia.org/wikipedia/commons/d/da/Google_Drive_logo.png" alt="Google Drive" />
        <span>Drive</span>
      </div>

      <div className="header__search">
        <SearchIcon />
        <input type="text" placeholder="Search in Drive" />
        <FormatAlignCenterIcon />
      </div>

      <div className="header__icons">
        <span>
          <HelpOutlineIcon style={{ marginRight: "1px" }} />
          <SettingsIcon />
        </span>
        <span>
          <AppsIcon />
          <Avatar src={photoURL} />
        </span>
      </div>
    </div>
  );
}

export default Header;
