import { useEffect, useState } from "react";
import styles from "./ShowPokemon.module.css";
import UpdatePokemon from "./UpdatePokemon";
import DeletePokemon from "./DeletePokemon";

const ShowPokemon = () => {
  const [pokemon, setPokemon] = useState([]);

  const fetchPokemon = () => {
    fetch("http://localhost:7070/api/pokemon")
      .then((res) => res.json())
      .then((data) => setPokemon(data))
      .catch((err) => console.error("Error fetching pokemon: ", err));
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  return (
    <div className={styles.searchContainer}>
      {pokemon.map((pkmon) => (
        <div key={pkmon.id} className={styles.pokemonCard}>
          <h3>#{pkmon.id}</h3>
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

          {/* Update & Delete */}
          <UpdatePokemon pokemon={pkmon} onUpdated={fetchPokemon} />
          <DeletePokemon id={pkmon.id} onDeleted={fetchPokemon} />
        </div>
      ))}
    </div>
  );
};

export default ShowPokemon;
