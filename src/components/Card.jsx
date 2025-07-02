import React from 'react'

function Card({ reading }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 border border-gray-100 hover:shadow-lg transition">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-bold text-indigo-600">{reading.groupId}</h3>
        <span className="text-sm text-gray-500">
          {reading.timestamp}
        </span>
      </div>
      <p className="mt-2 text-gray-700 text-lg font-semibold">{reading.data}</p>
    </div>
  )
}

export default Card
