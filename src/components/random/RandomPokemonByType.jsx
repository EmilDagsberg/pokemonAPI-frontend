import { useState } from "react";
import AddToPokedex from "../pokedex/AddToPokedex";
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

const RandomPokemonByType = ({ setPokemon }) => {
    const [type, setType] = useState("");

    const fetchRandomPokemonByType = () => {
        if (!type) return;

        fetch(`http://localhost:7070/api/pokemon/random/${type}`)
            .then(res => res.json())
            .then(data => setPokemon(data))
            .catch(err => console.error("Error fetching pokemon:", err));
    };

    return (
        <div>
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
        </div>
    );
};

export default RandomPokemonByType;
