import { useState } from "react";
import facade from "../../apiFacade";
import styles from "./Create.module.css";

const Create = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [sprite, setSprite] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const pokemonJson = {
      id: Number(id),
      name: name.toLowerCase(),
      sprite,
      types: [
        {
          type: {
            name: type.toLowerCase(),
          },
        },
      ],
    };

    try {
      await facade.createPokemon(pokemonJson);
      alert("Pokémon created!");

      setId("");
      setName("");
      setType("");
      setSprite("");
    } catch (err) {
      console.error(err);
      alert("Failed to create Pokémon");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h2 className={styles.title}>Create Pokémon</h2>

        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="number"
            placeholder="ID"
            value={id}
            onChange={(e) => setId(e.target.value)}
            className={styles.input}
            required
          />

          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={styles.input}
            required
          />

          <input
            type="text"
            placeholder="Type (e.g. psychic)"
            value={type}
            onChange={(e) => setType(e.target.value)}
            className={styles.input}
            required
          />

          <input
            type="text"
            placeholder="Sprite URL"
            value={sprite}
            onChange={(e) => setSprite(e.target.value)}
            className={styles.input}
          />

          <button type="submit" className={styles.button}>
            Create Pokémon
          </button>
        </form>
      </div>
    </div>
  );
};

export default Create;
