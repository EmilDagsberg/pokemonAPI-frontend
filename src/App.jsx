import './App.css'
import { Outlet } from 'react-router'
import Header from './components/header/Header'
import { jwtDecode } from 'jwt-decode';
import { useState, useEffect } from 'react';

function App() {
    const [isAdmin, setIsAdmin] = useState(false)

    useEffect(() => {
    const updateAuth = () => {
      const token = localStorage.getItem("jwtToken")

      if (token) {
        const decoded = jwtDecode(token)
        setIsAdmin(
          decoded.roles === "admin"
        )
      } else {
        setIsAdmin(false)
      }
    }

    updateAuth()
    window.addEventListener("auth-change", updateAuth)

    return () => window.removeEventListener("auth-change", updateAuth)
  }, [])

  
       const headers = [
        { title: "Home", url: "/" },
        { title: "Pokedex", url: "/pokedex" },
        { title: "Vision", url: "/vision" }, 
        { title: "Endpoints", url: "/endpoint-overview", 
            children: [
                { title: "Overview", url: "/endpoint-overview"},
                { title: "Search Pokemon", url: "/search-pokemon"},
                { title: "Get Pokemon by type", url: "/get-pokemon-by-type"},
                { title: "Get a random Pokemon", url: "/get-random-pokemon"}
            ],
        },
        ...(isAdmin ? [{ title: "Admin", url: "/admin" }] : [])
    ];

  return (
    <div className="background">
      <Header headers={headers} />
      <Outlet />
    </div>
  )
}

export default App
