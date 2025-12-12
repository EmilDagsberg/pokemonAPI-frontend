import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import App from "./App";


const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>

        {/* Default route inside App */}
        <Route index element={<Home />} />

      </Route>
    </Routes>
  </BrowserRouter>
);