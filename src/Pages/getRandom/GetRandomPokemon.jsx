import RandomPokemon from "../../components/random/RandomPokemon";
import RandomPokemonByType from "../../components/random/RandomPokemonByType";

const GetRandomPokemon = () => {

    return (
        <div className="getRandom-wrapper">
            <RandomPokemon />
            <RandomPokemonByType />
        </div>
    );
};

export default GetRandomPokemon;
