import { configureStore } from "@reduxjs/toolkit";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import taskReducer from "../src/features/taskSlice";
import { Provider } from "react-redux";
const store = configureStore({
  reducer: {
    tasks: taskReducer,
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
