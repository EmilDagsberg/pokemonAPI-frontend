import { useState } from "react";
import GetAllPokemon from "../../components/search/GetAllPokemon";
import SearchPokemon from "../../components/search/SearchPokemon";

const FetchPokemon = () => {
  const [showAll, setShowAll] = useState(false);

  return (
    <div className="search-container">

      <SearchPokemon />

      <button
        className="get-all-button"
        type="button"
        onClick={() => setShowAll(true)}
      >
        Get all Pokemon
      </button>

      {showAll && <GetAllPokemon />}
    </div>
  );
};

export default FetchPokemon;
