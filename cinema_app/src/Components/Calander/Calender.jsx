import React from "react";
import "./Calender.css";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Pagination from "react-bootstrap/Pagination";

function Calender() {
  let active = 2;
  let items = [];
  let day = " ";
  for (let number = 1; number <= 7; number++) {
    if (number === 1) {
      day = "Mon";
    } else if (number === 2) {
      day = "Tue";
    } else if (number === 3) {
      day = "Wed";
    } else if (number === 4) {
      day = "Thu";
    } else if (number === 5) {
      day = "Fri";
    } else if (number === 6) {
      day = "Sat";
    } else {
      day = "Sun";
    }
    items.push(
      <Pagination.Item key={day} active={number === active}>
        {day}
      </Pagination.Item>
    );
  }
  return (
    <div className="week_days">
      {/* <ul className="calender">
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
      </ul> */}

      {/* <div className="calender"> */}
      <Pagination className="Pagination">{items}</Pagination>
      <CalendarMonthIcon />
      {/* </div> */}
    </div>
  );
}

export default Calender;
