import facade from "../../apiFacade"

const AddToPokedex = ({ pkmonID }) => {
    
    
    
   

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
        })
        .catch(err => {
            console.error(err);
        });
    };

    return (
        <div className="addPokemon-wrapper">
            <button onClick={handleSubmit}>Add to your Pokedex</button>
        </div>
    );
}

export default AddToPokedex;