import facade from "../../apiFacade";
import styles from "./ShowPokemon.module.css";

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

  return (
    <button onClick={handleDelete} className={styles.deleteButton}>
      Delete
    </button>
  );
};

export default DeletePokemon;
