import React, { useContext } from 'react'
import Card from './Card'
import { WebSocketContext } from '../WebSocketContext'
import "./Main.css"

function Dashboard() {
    const { readings } = useContext(WebSocketContext);

    return (
        <div className="App">
            <header className="navbar">
                <h1>IoT Live Readings Dashboard</h1>
            </header>

            <div className="card-section p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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
