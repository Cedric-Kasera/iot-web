import React, { createContext, useEffect, useRef, useState } from "react";

export const WebSocketContext = createContext();

export const WebSocketProvider = ({ children }) => {
  const [readingsMap, setReadingsMap] = useState({});
  const ws = useRef(null);

  useEffect(() => {
    ws.current = new WebSocket("wss://iot-584n.onrender.com"); // use wss not https

    ws.current.onopen = () => {
      console.log("[WebSocket] Connected to server");
    };

    ws.current.onmessage = (event) => {
      try {
        const newReading = JSON.parse(event.data);
        console.log("[WebSocket] Received:", newReading);

        // Update or insert based on groupName
        setReadingsMap((prev) => ({
          ...prev,
          [newReading.groupName]: newReading,
        }));
      } catch (err) {
        console.error("Invalid WebSocket data:", event.data);
      }
    };

    ws.current.onclose = () => {
      console.log("[WebSocket] Disconnected");
    };

    ws.current.onerror = (err) => {
      console.error("[WebSocket] Error:", err);
    };

    return () => {
      ws.current.close();
    };
  }, []);

  return (
    <WebSocketContext.Provider value={{ readingsMap }}>
      {children}
    </WebSocketContext.Provider>
  );
};
