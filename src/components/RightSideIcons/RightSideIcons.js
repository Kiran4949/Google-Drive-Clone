import React from "react";
import "./style.css";
import AddIcon from "@material-ui/icons/Add";
import PersonIcon from "@material-ui/icons/Person";

function RightSideIcons() {
  return (
    <div className="sideIcons">
      <div className="sideIcons__top">
        <img src="https://cdn4.iconfinder.com/data/icons/logos-brands-in-colors/48/google-calendar-512.png" className="calender" alt="Google Calendar" />
        <img src="https://assets.materialup.com/uploads/64f5506e-2577-4d19-9425-11a1e1fa31a8/0x0ss-85.jpg" alt="Google Keep" />
        <img src="https://www.androidpolice.com/wp-content/uploads/2018/03/nexus2cee_new-tasks-icon.png" alt="Google Tasks" />
        <PersonIcon />
      </div>
      <hr />
      <div className="sideIcons__plusIcon">
        <AddIcon />
      </div>
    </div>
  );
}

export default RightSideIcons;
