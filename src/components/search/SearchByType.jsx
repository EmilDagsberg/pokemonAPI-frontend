import { useState } from "react";
import facade from "../../apiFacade";
import styles from "./GetAllPokemon.module.css";
 

const POKEMON_TYPES = [
    "fire",
    "water",
    "grass",
    "bug",
    "normal",
    "poison",
    "electric",
    "ground",
    "fairy",
    "ice",
    "fighting",
    "ground",
    "psychic",
    "rock",
    "dragon"
];

const SearchByType = () => {

    const [pokemon, setPokemon] = useState([]);
    const [type, setType] = useState("");
    
    const isLoggedIn = facade.loggedIn();

    const fetchPokemonByType = () => {
        if (!type) return;

        fetch(`http://localhost:7070/api/pokemon/type/${type}`)
            .then(res => res.json())
            .then(data => setPokemon(data))
            .catch(err => console.error("Error fetching pokemon:", err));
    };

    return (
        <div>
            {/* Type selector */}
            <select
                className={styles.typeSelect}
                value={type}
                onChange={(e) => setType(e.target.value)}
            >
                <option value="">Select a type</option>
                {POKEMON_TYPES.map(t => (
                    <option key={t} value={t}>
                        {t.charAt(0).toUpperCase() + t.slice(1)}
                    </option>
                ))}
            </select>

            <button
                className={styles.randomButton}
                type="button"
                onClick={fetchPokemonByType}
                disabled={!type}
            >
                Get a random Pokémon
            </button>

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
        </div>
    )
}

export default SearchByType;