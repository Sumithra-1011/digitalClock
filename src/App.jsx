import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [currentTime, setCurrentTime] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    },1000);
  return () => clearInterval(timer);
  },[]);
  const formatTimeWithLeadingzero = (num)=>{
    return num < 10?`0${num}`:num
  }
  const formatHour = (hour)=>{
    return hour === 0 ? 12 : hour >12 ? hour -12 :hour; 
  }
  const formatDate=(date)=>{
    const options = {weekday:"long", year:"numeric", month:"long", day:"numeric"}
  return date.toLocaleDateString(undefined,options)
 }
  return (
    <>
      <div className="container">
        <h1>Digital Clock</h1>
        <div>
          <h3>
            {formatTimeWithLeadingzero(formatHour(currentTime.getHours()))}:
            {formatTimeWithLeadingzero(currentTime.getMinutes())}:
            {formatTimeWithLeadingzero(currentTime.getSeconds())}
            {currentTime.getHours()>=12?" PM":" AM"}
          </h3>
        </div>
        <div> 
          <p>{formatDate(currentTime)}</p>
        </div>
      </div>
    </>
  );
}

export default App;
