import { useState } from "react";
import facade from "../../apiFacade";
import styles from "./ShowPokemon.module.css";

const UpdatePokemon = ({ pokemon, onUpdated }) => {
  const [name, setName] = useState(pokemon.name);
  const [type, setType] = useState(
    pokemon.types?.[0]?.type?.name || ""
  );

  const handleUpdate = async (e) => {
    e.preventDefault();

    const updatedPokemon = {
      id: pokemon.id,
      name,
      types: [
        {
          type: {
            name: type,
          },
        },
      ],
    };

    try {
      await facade.updatePokemon(pokemon.id, updatedPokemon);
      onUpdated();
    } catch (err) {
      console.error("Update failed:", err);
    }
  };

  return (
    <form onSubmit={handleUpdate} className={styles.updateForm}>
      <input
        className={styles.updateInput}
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />

      <input
        className={styles.updateInput}
        value={type}
        onChange={(e) => setType(e.target.value)}
        placeholder="Type"
      />

      <button type="submit" className={styles.updateButton}>
        Update
      </button>
    </form>
  );
};

export default UpdatePokemon;
