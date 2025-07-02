import React from "react";
import Dashboard from "./components/Dashboard";
import { WebSocketProvider } from "./WebSocketContext";

function App() {
  return (
    <WebSocketProvider>
      <Dashboard />
    </WebSocketProvider>
  );
}

export default App;
