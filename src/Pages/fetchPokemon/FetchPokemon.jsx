import { useState } from "react";
import GetAllPokemon from "../../components/search/GetAllPokemon";

const FetchPokemon = () => {
  const [showAll, setShowAll] = useState(false);

  return (
    <div className="search-container">
      <h1>Search Pokemon by Name or ID</h1>

      <input
        className="search-field"
        type="text"
        placeholder="Enter Pokemon name or ID..."
      />

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
