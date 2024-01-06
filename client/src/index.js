import React from "react";
import ReactDOM from "react-dom/client"; 
import { GoogleOAuthProvider } from '@react-oauth/google';

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";

const clientId = "975454066980-4g7e706rtl1ukvctquj9g5ubg3cbvgrq.apps.googleusercontent.com";


const root = ReactDOM.createRoot(document.getElementById("root")); 
root.render(
  <GoogleOAuthProvider clientId={clientId}>
    <React.StrictMode>
      <Router>
        <App />
      </Router>
    </React.StrictMode>
  </GoogleOAuthProvider>

    // document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// React.StrictMode highlights possible problems
