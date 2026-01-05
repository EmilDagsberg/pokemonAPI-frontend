import { useState } from "react";
import GetAllPokemon from "../../components/search/GetAllPokemon";
import SearchPokemon from "../../components/search/SearchPokemon";
import styles from "./FetchPokemon.module.css";

const FetchPokemon = () => {
  const [showAll, setShowAll] = useState(false);

  return (
    <div className={styles.searchContainer}>

      <SearchPokemon />

      <button
        className={styles.getAllButton}
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
