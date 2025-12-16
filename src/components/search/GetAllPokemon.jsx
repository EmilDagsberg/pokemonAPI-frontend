import { useEffect, useState } from "react";

const GetAllPokemon = () => {

    const [pokemon, setPokemon] = useState([]);
    
      useEffect(() => {
        fetch("http://localhost:7070/api/pokemon")
        .then((res) => res.json())
        .then((data) => setPokemon(data))
        .catch((err) => console.error("Error fetching driver: ", err));
      }, []);

      return (
            <div className="search-container">
            {pokemon.map((pkmon) => (
                <div key={pkmon.id} className="pokemon-card">
                <h3>{pkmon.name}</h3>
                <p>{pkmon.types[0].type.name}</p>
                <ul>
                    {pkmon.locations.length > 0 ? (
                    pkmon.locations.map((loc, index) => (
                        <li key={index}>{loc}</li>
                    ))
                    ) : (
                    <li>No known locations</li>
                    )}
                </ul>
                <img src={pkmon.sprite} alt={pkmon.name} />
                </div>
            ))}
            
            </div>
        );
}

export default GetAllPokemon;