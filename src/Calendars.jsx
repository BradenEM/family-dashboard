import React from "react";
import Calendar from "@ericz1803/react-google-calendar";

const API_KEY = import.meta.env.VITE_API_KEY; 
let calendars = [
  { calendarId:  import.meta.env.VITE_CALENDAR_ID1},
  {
    calendarId: import.meta.env.VITE_CALENDAR_ID2,
    color: "#B241D1", //optional, specify color of calendar 2 events
  },
];

let styles = {
  //you can use object styles (no import required)
  calendar: {
    borderWidth: "3px",
    backgroundColor: "white",
  },
  day: {
    borderBottom: "5px solid",
    // padding: "auto",
    // height: "auto",
    borderColor: "#4a4990",
  },

  //you can also use emotion's string styles
  today: {
    color: "red",
    border: "5px solid red",
  },

  eventText: {
    // whiteSpace: "normal",
  },
};

class Calendars extends React.Component {
  render() {
    return (
      <div>
        <Calendar apiKey={API_KEY} calendars={calendars} styles={styles} />
      </div>
    );
  }
}

export default Calendars;
