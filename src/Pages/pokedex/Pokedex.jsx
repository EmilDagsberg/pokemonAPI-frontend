import { useEffect, useState } from "react";
import facade from "../apiFacade.js";

export default function Pokedex() {
  const [pokedex, setPokedex] = useState([]);
  const [loading, setLoading] = useState(true);

  /*     useEffect(() => {
        const API_URI = "http://localhost:7070/api/pokedex/"

        facade.fetchPokedex()
        .then((data) => {
          setPokedex(data);
        })
        .catch((error) => {
        console.error("Error while fetching Pokedex data", error);
      });
    }, []) */

  useEffect(() => {
    // Mock data. Ovenstående useEffect bruges når backend virker.
    const mockPokedex = [
      { pokemonId: 1, userId: 1, isOnTeam: true },
      { pokemonId: 25, userId: 1, isOnTeam: false },
      { pokemonId: 6, userId: 1, isOnTeam: true },
      { pokemonId: 4, userId: 1, isOnTeam: false },
      { pokemonId: 7, userId: 1, isOnTeam: true },
      { pokemonId: 150, userId: 1, isOnTeam: false },
    ];

    setPokedex(mockPokedex);
    setLoading(false);
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="pokedex-container">
      <h1>Your pokedex</h1>
      <div className="pokemon-grid">
        {pokedex.map((pokemon) => (
          <div key={pokemon.id} className="pokemon-card">
            <img src={pokemon.sprite} alt={pokemon.name} />
            <h3>Name: {pokemon.name}</h3>
            <div className="locations">
              <strong>Locations:</strong>
              <ul>
                {pokemon.locations.map((location, index) => (
                  <li key={index}>{location}</li>
                ))}
              </ul>
            </div>
            <div>
              <strong>Types:</strong>
              <ul>
                {pokemon.types.map((type, index) => (
                  <li key={index}>{type}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
