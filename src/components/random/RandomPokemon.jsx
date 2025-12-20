import { useState } from "react";
import AddToPokedex from "../pokedex/AddToPokedex";
import facade from "../../apiFacade";
import styles from "./RandomPokemon.module.css";

const RandomPokemon = () => {
    const [pokemon, setPokemon] = useState(null);
    
    const isLoggedIn = facade.loggedIn();

    const fetchRandomPokemon = () => {
        fetch("http://localhost:7070/api/pokemon/random")
            .then(res => res.json())
            .then(data => setPokemon(data))
            .catch(err => console.error("Error fetching pokemon:", err))
            
    };


    return (
        <div>
            <button
                className={styles.randomButton}
                type="button"
                onClick={fetchRandomPokemon}
                >Get a random Pokemon</button>
                
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

export default RandomPokemon;
