import { useState } from "react";
import RandomPokemon from "../../components/random/RandomPokemon";
import RandomPokemonByType from "../../components/random/RandomPokemonByType";
import AddToPokedex from "../../components/pokedex/AddToPokedex";
import facade from "../../apiFacade";
import styles from "../../components/random/RandomPokemon.module.css";

const GetRandomPokemon = () => {
    const [pokemon, setPokemon] = useState(null);
    const isLoggedIn = facade.loggedIn();

    return (
        <div className="getRandom-wrapper">
            <RandomPokemon setPokemon={setPokemon} />
            <RandomPokemonByType setPokemon={setPokemon} />

            {/* Shared Pokémon display */}
            {pokemon && (
                <div className={styles.searchContainer}>
                    <div key={pokemon.id} className={styles.pokemonCard}>
                        <h3>#{pokemon.id}</h3>
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

                        {isLoggedIn && (
                            <AddToPokedex pkmonID={pokemon.id} />
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default GetRandomPokemon;
