import { useEffect, useState } from "react"
import facade from "../apiFacade.js"

export default function Pokedex () {
    const [pokeDex, setPokedex] = useState([]);

    useEffect(() => {
        const API_URI = "http://localhost:7070/api/pokedex/" //OBS mangler i backend

        
    })
}