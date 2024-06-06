import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Start = React.lazy(() => import("./Pages/Start"));
const Contact = React.lazy(() => import("./Pages/Contact"));
const Company = React.lazy(() => import("./Pages/Company"));
const Offer = React.lazy(() => import("./Pages/Offer"));
const Imprint = React.lazy(() => import("./Pages/Imprint"));
const Privacy = React.lazy(() => import("./Pages/Privacy"));


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Start} />
        <Route path="/contact" Component={Contact} />
        <Route path="/company" Component={Company} />
        <Route path="/offer" Component={Offer} />
        <Route path="/Imprint" Component={Imprint} />
        <Route path="/Privacy" Component={Privacy} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
