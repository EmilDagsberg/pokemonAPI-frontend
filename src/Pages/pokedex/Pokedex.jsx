import { useEffect, useState } from "react";
import styles from "./Pokedex.module.css";
import facade from "../../apiFacade.js";

export default function Pokedex() {
  const [pokedex, setPokedex] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showOnlyTeam, setShowOnlyTeam] = useState(false);

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

  const displayedPokemon = showOnlyTeam
    ? pokedex.filter((pokemon) => pokemon.isOnTeam)
    : pokedex;

  if (loading) return <div>Loading...</div>;

  return (
    <div className={styles.pokedexContainer}>
      <h1 className={styles.pokedexHeader}>Your pokedex</h1>
      <button
        className={styles.onTeamButton}
        onClick={() => setShowOnlyTeam(!showOnlyTeam)}
      >
        {showOnlyTeam ? "Show entire Pokedex" : "Show Pokemon on your team"}
      </button>
      <div className={styles.pokemonGrid}>
        {displayedPokemon.map((pokemon) => (
          <div key={pokemon.id} className={styles.pokemonCard}>
            <img src={pokemon.sprite} alt={pokemon.name} />
            <h3>Name: {pokemon.name}</h3>
            <div className="locations">
              <strong>Locations:</strong>
              <ul>
                {pokemon.locations.map((location, index) => (
                  <li key={index}>{location}</li>
                ))}
              </ul>
            </div>
            <div>
              <strong>Types:</strong>
              <ul>
                {pokemon.types.map((type, index) => (
                  <li key={index}>{type.name}</li>
                ))}
              </ul>
            </div>
            <p>On team: {pokemon.isOnTeam ? "✅" : "❌"}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
