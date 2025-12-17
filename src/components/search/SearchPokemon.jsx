import { useEffect, useState } from "react";
import styles from "./SearchPokemon.module.css";

const SearchPokemon = () => {
  const [pokemon, setPokemon] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const res = await fetch("http://localhost:7070/api/pokemon");
        const data = await res.json();
        setPokemon(data);
      } catch (error) {
        console.error("Failed to fetch pokemon", error);
      }
    };

    fetchPokemon();
  }, []);

  const filteredPokemon = pokemon.filter((p) => {
    return (
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.id.toString().includes(search)
    );
  });

  const isTyping = search.trim().length > 0;
  const noResults = isTyping && filteredPokemon.length === 0;

  return (
    <div className={styles.searchContainer}>
      <h1>Search Pokemon by Name or ID</h1>

      <input
        className={styles.searchField}
        type="text"
        placeholder="Enter Pokemon name or ID..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Results */}
      {isTyping && (
        <div className={styles.resultsGrid}>
          {filteredPokemon.map((pkmon) => (
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
            </div>
          ))}
        </div>
      )}

      {/* No results */}
      {noResults && (
        <p className={styles.noResults}>No results found</p>
      )}
    </div>
  );
};

export default SearchPokemon;
