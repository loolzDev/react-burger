import React from "react";
import ReactDOM from "react-dom/client";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { rootReducer } from "./services/reducers";
import thunk from "redux-thunk";

import "./index.css";
import App from "./components/app/app";
import reportWebVitals from "./reportWebVitals";

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
  devTools: process.env.NODE_ENV !== "production",
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();