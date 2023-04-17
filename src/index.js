import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "./i18n";
// import { CircularProgress } from "@mui/material";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  
  <Provider store={store}>
    <BrowserRouter basename="/8donate">
      {/* <Suspense fallback={<CircularProgress />}> */}
      <App />
      {/* </Suspense> */}
    </BrowserRouter>
  </Provider>
);
