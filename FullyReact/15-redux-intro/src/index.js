import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import store from "./store.js";

store.dispatch({ type: "account/deposit", payload: 100 });
console.log(store.getState());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
