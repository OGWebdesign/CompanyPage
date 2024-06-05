import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Start = React.lazy(() => import("./Pages/Start"));
const Contact = React.lazy(() => import("./Pages/Contact"));

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Start} />
        <Route path="/contact" Component={Contact} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
