import { useEffect, useState } from "react";
import styles from "./GetAllPokemon.module.css";
import AddToPokedex from "../pokedex/AddToPokedex";
import facade from "../../apiFacade";

const GetAllPokemon = () => {
  const [pokemon, setPokemon] = useState([]);
  const isLoggedIn = facade.loggedIn();

  useEffect(() => {
    fetch("http://localhost:7070/api/pokemon")
      .then((res) => res.json())
      .then((data) => setPokemon(data))
      .catch((err) => console.error("Error fetching pokemon: ", err));
  }, []);

  return (
    <div className={styles.searchContainer}>
      {pokemon.map((pkmon) => (
        <div key={pkmon.id} className={styles.pokemonCard}>
          <h3>{pkmon.name}</h3>

          <img src={pkmon.sprite} alt={pkmon.name} />

          <p className={styles.type}>
            {pkmon.types?.[0]?.type?.name || "Unknown type"}
          </p>

          <p className={styles.sectionTitle}>Locations</p>
          <ul className={styles.locations}>
            {pkmon.locations.length > 0 ? (
              pkmon.locations.map((loc, index) => (
                <li key={index}>{loc}</li>
              ))
            ) : (
              <li>No known locations</li>
            )}
          </ul>
          
          {isLoggedIn ? (<AddToPokedex pkmonID={pkmon.id}/>) : null }
        
        </div>
      ))}
    </div>
  );
};

export default GetAllPokemon;
