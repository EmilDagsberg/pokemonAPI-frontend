import styles from "./RandomPokemon.module.css"
const RandomPokemon = ({ setPokemon }) => {
    

    const fetchRandomPokemon = () => {
        fetch("http://localhost:7070/api/pokemon/random")
            .then(res => res.json())
            .then(data => setPokemon(data))
            .catch(err => console.error("Error fetching pokemon:", err));
    };

    return (
        <button
            className={styles.randomButton}
            type="button"
            onClick={fetchRandomPokemon}
        >
            Get a random Pokémon
        </button>
    );
};

export default RandomPokemon;
