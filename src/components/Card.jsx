import React from 'react'
import "./Main.css"

function Card({ reading }) {

  const formattedTime = new Date(reading.timestamp).toLocaleString("en-US", {
    month: "short",           // e.g., "Jul"
    day: "2-digit",           // e.g., 02
    hour: "numeric",          // e.g., 7 or 10
    minute: "2-digit",        // e.g., 50
    second: "2-digit",        // optional
    hour12: true              // shows AM/PM
  });


  return (
    <div className="card">
      <h3 className="card-header">
        <span>Group Name: </span>
        {reading.groupName}
      </h3>
      <p className="card-header">
        <span>
          Temperature:
        </span>
        {reading.temperature} °C
      </p>
      <span className="card-footer">
        {formattedTime}
      </span>
    </div>
  )
}

export default Card
