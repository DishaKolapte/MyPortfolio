// Import necessary modules and components
import React from "react"; 
import ReactDOM from "react-dom/client"; 
import App from "./App"; // Import the main App component
import "./index.css"; 

// Render the App component into the root element of the HTML
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    {/* <React.StrictMode> is a wrapper that helps identify potential problems in an application during development */}
  </React.StrictMode>
);
