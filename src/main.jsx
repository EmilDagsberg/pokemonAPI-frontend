import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import App from "./App";
import Home from "./Pages/home/Home";
import LoginPage from "./Pages/login/LoginPage";
import EndpointTable from "./pages/endpointTable/EndpointTable";
import FetchPokemon from "./pages/fetchPokemon/FetchPokemon";
import Pokedex from "./Pages/pokedex/Pokedex";


const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>

        {/* Default route inside App */}
        <Route index element={<Home />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="endpoint-overview" element={<EndpointTable />} />
        <Route path="search-pokemon" element={<FetchPokemon />} />
        <Route path="pokedex" element={<Pokedex />} />
      </Route>
    </Routes>
  </BrowserRouter>
);