import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import App from "./App";
import Home from "./Pages/home/Home";
import LoginPage from "./Pages/login/LoginPage";


const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>

        {/* Default route inside App */}
        <Route index element={<Home />} />
        <Route path="login" element={<LoginPage />} />

      </Route>
    </Routes>
  </BrowserRouter>
);