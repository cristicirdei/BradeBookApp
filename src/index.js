import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import "../src/styles/App.scss";
import "../src/styles/Layout.scss";
import "../src/styles/Check.scss";
import "../src/styles/Add.scss";
import "../src/styles/CreateClass.scss";
import "../src/styles/Tables.scss";
import "../src/styles/Class.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
