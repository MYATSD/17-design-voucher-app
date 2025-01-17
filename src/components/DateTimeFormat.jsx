import React from 'react'

const DateTimeFormat = ({timestamp}) => {
  console.log(timestamp)
    
      const date = new Date(timestamp);
    
      const currentDate = date.toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric",
      });
      const currentTime = date.toLocaleTimeString("en-GB", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      });
      return (
        <div>
          <p className=" text-xs">{currentDate}</p>
          <p className=" text-xs">{currentTime}</p>
        </div>
      );
    };
    


export default DateTimeFormat