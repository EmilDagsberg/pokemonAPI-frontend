import { useEffect, useState } from "react";
import facade from "../../apiFacade"

const AddToPokedex = ({ pkmonID }) => {
    const [inPokedex, setInPokedex] = useState(false);

    useEffect (() => {
        const options = facade.makeOptions("GET", true);

        fetch("http://localhost:7070/api/pokedex", options)
        .then(res => {
            if (!res.ok) {
                throw new Error("Failed to fetch Pokedex");
            }
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
            if(!res.ok) {
                throw new Error("Not authorized or request failed");
            }
            return res.json();
        })
        .then(data => {
            console.log("Added to Pokedex:", data)
            setInPokedex(true);
        })
        .catch(err => {
            console.error(err);
        });
    };

    if (inPokedex) {
        return (
            <div className="alreadyAdded">
                <p>Already added in your Pokedex</p>
            </div>
        )
    }

    return (
        <div className="addPokemon-wrapper">
            <button onClick={handleSubmit}>Add to your Pokedex</button>
        </div>
    );
}

export default AddToPokedex;