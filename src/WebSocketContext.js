import React, { createContext, useEffect, useRef, useState } from "react";

export const WebSocketContext = createContext();

export const WebSocketProvider = ({ children }) => {
  const [readings, setReadings] = useState([]);
  const ws = useRef(null);

  useEffect(() => {
    // 1. Connect to WebSocket server
    ws.current = new WebSocket("https://iot-584n.onrender.com");

    ws.current.onopen = () => {
      console.log("[WebSocket] Connected to server");
    };

    // 2. On message received
    ws.current.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        console.log("[WebSocket] Received:", data);

        // 3. Add new reading at top
        setReadings((prev) => [data, ...prev.slice(0, 49)]); // Limit to 50 readings
      } catch (err) {
        console.error("Invalid message:", event.data);
      }
    };

    ws.current.onclose = () => {
      console.log("[WebSocket] Disconnected");
    };

    ws.current.onerror = (err) => {
      console.error("[WebSocket] Error:", err);
    };

    // Cleanup on unmount
    return () => {
      ws.current.close();
    };
  }, []);

  return (
    <WebSocketContext.Provider value={{ readings }}>
      {children}
    </WebSocketContext.Provider>
  );
};
