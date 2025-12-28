import facade from "../../apiFacade";

const DeletePokemon = ({ id, onDeleted }) => {

  const handleDelete = async () => {
    if (!window.confirm("Delete this Pokémon?")) return;

    try {
      await facade.deletePokemon(id);
      onDeleted();
    } catch (err) {
      console.error("Delete failed:", err);
    }
  };

  return <button onClick={handleDelete}>Delete</button>;
};

export default DeletePokemon;

