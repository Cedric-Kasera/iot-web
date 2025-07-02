import React, { useContext } from 'react'
import Card from './Card'
import { WebSocketContext } from '../WebSocketContext'

// const readingData = [
//     { groupId: "Group 1", timestamp: "2023-10-01 12:00", data: "Reading 1" },
//     { groupId: "Group 2", timestamp: "2023-10-01 12:05", data: "Reading 2" },
//     { groupId: "Group 3", timestamp: "2023-10-01 12:10", data: "Reading 3" },
//     { groupId: "Group 4", timestamp: "2023-10-01 12:15", data: "Reading 4" },
//     { groupId: "Group 5", timestamp: "2023-10-01 12:20", data: "Reading 5" },
//     { groupId: "Group 6", timestamp: "2023-10-01 12:25", data: "Reading 6" },
//     { groupId: "Group 7", timestamp: "2023-10-01 12:30", data: "Reading 7" },
//     { groupId: "Group 8", timestamp: "2023-10-01 12:35", data: "Reading 8" },
// ];

function Dashboard() {
    const { readings } = useContext(WebSocketContext);

    return (
        <div className="App">
            <header className="App-header bg-blue-500 text-white p-4 flex items-center justify-center">
                <h1 className="font-bold text-2xl">IoT Live Readings Dashboard</h1>
            </header>

            <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {readings.length === 0 ? (
                    <div className="col-span-4 text-center text-gray-500">
                        No readings available
                    </div>
                ) : (
                    readings.map((reading, index) => (
                        <Card
                            key={index}
                            reading={reading}
                        />
                    ))
                )}
            </div>
        </div>
    )
}

export default Dashboard
