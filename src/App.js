import "./App.css";
import { useEffect, useState } from "react";
import birthday_dates_names from "./BirtdayJson";

function App() {
  const [Today_date, SetTodayDate] = useState("");
 
let names =  (birthday_dates_names.filter((fil) => 
  fil["Edited birthday dates"] == Today_date

))
  function logTodayMonthAndDateIST() {
    const date = new Date();

    // Get UTC time
    const utcTime = date.getTime() + date.getTimezoneOffset() * 60000;

    // Offset for IST (UTC + 5 hours 30 minutes)
    const istOffset = 5.5 * 60 * 60000;

    // IST time
    const istTime = new Date(utcTime + istOffset);

    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const day = istTime.getDate();
    const month = monthNames[istTime.getMonth()];
    const time = istTime.getMonth();
    const final_date = month + "-" + day;
    SetTodayDate(final_date);

  }
  useEffect(() => {
    logTodayMonthAndDateIST(); // Example output: "Today's date in IST: Sep 20 output: "Today is: Sep 20"
  }, []);

  return (
    <div className="App">
      <div>{Today_date}</div>
      <div>
        <h2>Today's Birthday Members</h2>
        {names.length > 0 ? (
          <ul>
            {names.map((member, index) => (
              <li key={index}>{member["Employee Name"]}</li>
            ))}
          </ul>
        ) : (
          <p>No birthdays today.</p>
        )}
      </div>
    </div>
  );
}

export default App;
