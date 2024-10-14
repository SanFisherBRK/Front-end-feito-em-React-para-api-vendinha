import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CadastroUser from "./components/CadastroUser";
import SidebarMenu from "./components/SiderbarMenu";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/Hopme" element={<SidebarMenu />} />
        <Route path="/cadastro-usuario" element={<CadastroUser />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
