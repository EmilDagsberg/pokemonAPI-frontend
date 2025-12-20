import { useEffect, useState } from "react";
import styles from "./Pokedex.module.css";

import Header from "../../components/header/Header";

export default function Pokedex() {
    const headers = [
        { title: "Home", url: "/" },
        { title: "Pokedex", url: "/pokedex" },
        { title: "Vision", url: "/vision" }, 
        { title: "Endpoints", url: "/endpoint-overview", 
            children: [
                { title: "Overview", url: "/endpoint-overview"},
                { title: "Search Pokemon", url: "/search-pokemon"},
                { title: "Get Pokemon by type", url: "/get-pokemon-by-type"},
                { title: "Get a random Pokemon", url: "/get-random-pokemon"}
            ],
        },
    ];
  const [pokedex, setPokedex] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showOnlyTeam, setShowOnlyTeam] = useState(false);
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  useEffect(() => {
    const API_URI = "http://localhost:7070/api/pokedex/";

    facade
      .fetchPokedex()
      .then((data) => {
        setPokedex(data);
      })
      .catch((error) => {
        console.error("Error while fetching Pokedex data", error);
      });

    setLoading(false);
  }, []);

  const handleAddtoTeam = (pokemonId) => {
    facade
      .addPokemonToTeam(pokemonId)
      .then(() => {
        return facade.fetchPokedex();
      })
      .then((data) => {
        setPokedex(data);
      })
      .catch((error) => {
        console.error("Error while adding Pokemon to team", error);
      });
  };

  const displayedPokemon = showOnlyTeam
    ? pokedex.filter((pokemon) => pokemon.onTeam)
    : pokedex;

  if (loading) return <div>Loading...</div>;


  return (
    <div className={styles.background}>
      <h1 className={styles.pokedexHeader}>Your pokedex</h1>
      <button
        className={styles.onTeamButton}
        onClick={() => setShowOnlyTeam(!showOnlyTeam)}
      >
        {showOnlyTeam ? "Show entire Pokedex" : "Show Pokemon on your team"}
      </button>
      <div className={styles.pokemonContainer}>
        <div className={styles.pokemonGrid}>
          {displayedPokemon.map((pokemon) => (
            <div
              key={pokemon.id}
              className={styles.pokemonCard}
              onClick={() => setSelectedPokemon(pokemon)}
            >
              <img src={pokemon.sprite} alt={pokemon.name} />
              <h3>Name: {pokemon.name}</h3>
              {pokemon.onTeam ? (
                <p>On team: ✅</p>
              )
            :
            (
              <button onClick={() => handleAddtoTeam(pokemon.id)}>Add to team</button>
            )
            }
            </div>
          ))}
        </div>
        <div className={styles.pokemonDetails}>
          {selectedPokemon ? (
            <div>
              <h3>{selectedPokemon.name}</h3>
              <strong>Types:</strong>
              <ul>
                {selectedPokemon.types.map((type, index) => (
                  <li key={index}>{type.type.name}</li>
                ))}
              </ul>
              <strong>Locations:</strong>
              <ul>
                {selectedPokemon.locations.map((location, index) => (
                  <li key={index}>{location}</li>
                ))}
              </ul>
            </div>
          ) : (
            <p>Click a pokemon to view more details</p>
          )}
        </div>
      </div>
    </div>
  );
}
