import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./i18n";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { BrowserRouter } from "react-router-dom";
import { CSpinner } from "@coreui/react";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  
  <Provider store={store}>
    <BrowserRouter basename="/8donate">
      <Suspense fallback={<CSpinner/>}>
      <App />
      </Suspense>
    </BrowserRouter>
  </Provider>
);
