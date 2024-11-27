
import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";

import { store } from "./app/store";
import { Provider } from "react-redux";

// WebSocket Connection
const connectWebSocket = () => {
  const socket = new WebSocket('wss://ws-us3.pusher.com/app/7d55ac978a3647512f45?protocol=7&client=js&version=7.0.6&flash=false');

  socket.onopen = () => {
    console.log("WebSocket connection established");
  };

  socket.onclose = (event) => {
    console.error("WebSocket closed:", event.reason);
    console.log("Retrying connection in 5 seconds...");
    setTimeout(connectWebSocket, 5000); // Retry connection
  };

  socket.onerror = (error) => {
    console.error("WebSocket error:", error);
  };
};

// Initialize WebSocket
connectWebSocket();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
