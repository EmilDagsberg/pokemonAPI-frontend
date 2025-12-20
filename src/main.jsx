import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import App from "./App";
import Home from "./pages/home/Home";
import EndpointTable from "./Pages/endpointTable/EndpointTable";
import FetchPokemon from "./pages/fetchPokemon/FetchPokemon";
import Vision from "./Pages/vision/Vision";
import Pokedex from "./Pages/pokedex/Pokedex";
import GetRandomPokemon from "./pages/getRandom/GetRandomPokemon";
import FetchRandomPokemonByType from "./pages/fetchPokemon/FetchPokemonByType";



const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>

        {/* Default route inside App */}
        <Route index element={<Home />} />
        <Route path="endpoint-overview" element={<EndpointTable />} />
        <Route path="search-pokemon" element={<FetchPokemon />} />
        <Route path="vision" element={<Vision/>} />
        <Route path="pokedex" element={<Pokedex/>} />
        <Route path="get-random-pokemon" element={<GetRandomPokemon />} />
        <Route path="get-pokemon-by-type" element={<FetchRandomPokemonByType />} />


      </Route>
    </Routes>
  </BrowserRouter>
);