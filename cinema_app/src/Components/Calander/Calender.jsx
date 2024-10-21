import React from "react";
import "./Calender.css";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

function Calender() {
  return (
    <div className="week_days">
      <ul className="calender">
        <li className="pointer">Mon</li>
        <li className="pointer">Tue</li>
        <li className="pointer">Wed</li>
        <li className="pointer">Thu</li>
        <li className="pointer">Fri</li>
        <li className="pointer">Sat</li>
        <li className="pointer">Sun</li>
        <li className="pointer">
          <CalendarMonthIcon />
        </li>
      </ul>
    </div>
  );
}

export default Calender;
