import { useState } from "react";
import AddToPokedex from "../pokedex/AddToPokedex";
import facade from "../../apiFacade";
import styles from "./RandomPokemon.module.css";

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

const RandomPokemonByType = () => {
    const [pokemon, setPokemon] = useState(null);
    const [type, setType] = useState("");
    
    const isLoggedIn = facade.loggedIn();

    const fetchRandomPokemonByType = () => {
        if (!type) return;

        fetch(`http://localhost:7070/api/pokemon/random/${type}`)
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
                onClick={fetchRandomPokemonByType}
                disabled={!type}
            >
                Get a random Pokémon
            </button>

            <div className={styles.searchContainer}>
                {pokemon && (
                    <div key={pokemon.id} className={styles.pokemonCard}>
                        <h3>{pokemon.name}</h3>

                        <img src={pokemon.sprite} alt={pokemon.name} />

                        <p className={styles.type}>
                            {pokemon.types?.[0]?.type?.name || "Unknown type"}
                        </p>

                        <p className={styles.sectionTitle}>Locations</p>
                        <ul className={styles.locations}>
                            {pokemon.locations?.length > 0 ? (
                                pokemon.locations.map((loc, index) => (
                                    <li key={index}>{loc}</li>
                                ))
                            ) : (
                                <li>No known locations</li>
                            )}
                        </ul>

                        {isLoggedIn && <AddToPokedex pkmonID={pokemon.id} />}
                    </div>
                )}
            </div>
        </div>
    );
};

export default RandomPokemonByType;
