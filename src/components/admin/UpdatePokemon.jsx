import { useState } from "react";
import facade from "../../apiFacade";

const UpdatePokemon = ({ pokemon, onUpdated}) => {

  const [name, setName] = useState(pokemon.name);
  const [type, setType] = useState(
    pokemon.types?.[0]?.type?.name || ""
  );

  const handleUpdate = async (e) => {
    e.preventDefault();

    const updatedPokemon = {
      id: pokemon.id,
      name: name,
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
    <form onSubmit={handleUpdate}>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />

      <input
        value={type}
        onChange={(e) => setType(e.target.value)}
        placeholder="Type"
      />

      <button type="submit">Update</button>
    </form>
  );
};

export default UpdatePokemon;
