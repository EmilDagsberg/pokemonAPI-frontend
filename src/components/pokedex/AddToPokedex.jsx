import { useEffect, useState } from "react";
import facade from "../../apiFacade";
import styles from "./AddToPokedex.module.css";

const AddToPokedex = ({ pkmonID }) => {
  const [inPokedex, setInPokedex] = useState(false);

  useEffect(() => {
    const options = facade.makeOptions("GET", true);

    fetch("http://localhost:7070/api/pokedex", options)
      .then(res => {
        if (!res.ok) throw new Error("Failed to fetch Pokedex");
        return res.json();
      })
      .then(data => {
        const exists = data.some(pokemon => pokemon.id === pkmonID);
        setInPokedex(exists);
      })
      .catch(err => console.error(err));
  }, [pkmonID]);

  const handleSubmit = () => {
    const postOptions = facade.makeOptions("POST", true);

    fetch(`http://localhost:7070/api/pokedex/${pkmonID}`, postOptions)
      .then(res => {
        if (!res.ok) throw new Error("Request failed");
        return res.json();
      })
      .then(() => setInPokedex(true))
      .catch(err => console.error(err));
  };

  if (inPokedex) {
    return (
      <div className={styles.alreadyAdded}>
        ✔ Already in your Pokédex
      </div>
    );
  }

  return (
    <div className={styles.wrapper}>
      <button onClick={handleSubmit} className={styles.addButton}>
        ➕ Add to Pokédex
      </button>
    </div>
  );
};

export default AddToPokedex;
