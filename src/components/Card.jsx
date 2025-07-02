import React from 'react'
import "./Main.css"

function Card({ reading }) {

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
        {reading.temperature} degrees
      </p>
      <span className="card-footer">
        {new Date(reading.timestamp).toLocaleTimeString()}
      </span>
    </div>
  )
}

export default Card
