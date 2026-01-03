import './App.css'
import { Outlet } from 'react-router'
import Header from './components/header/Header'
import { jwtDecode } from 'jwt-decode';
import { useState, useEffect } from 'react';

function App() {
    const [isAdmin, setIsAdmin] = useState(false)
    const backgroundMode = localStorage.getItem("__darkreader__wasEnabledForHost")
    const [isDarkMode, setIsDarkMode] = useState(backgroundMode === "true")

    useEffect(() => {
    const updateAuth = () => {
      const token = localStorage.getItem("jwtToken")

      if (token) {
        const decoded = jwtDecode(token)
        setIsAdmin(
          decoded.roles.includes("admin")
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
        ...(isAdmin ? [{ title: "Admin",
          children: [
            { title: "Create new Pokemon in database", url: "/create-pokemon"},
            { title: "Update or delete Pokemon", url: "/delete-update-pokemon"}
          ]
         }] : [])
    ];

  return (
    <div className={isDarkMode ? "background" : "background-light"}>
      <Header headers={headers} />
      <Outlet />
      <button 
        onClick={() => {
          
          const newMode = !isDarkMode
          setIsDarkMode(newMode)
          localStorage.setItem("__darkreader__wasEnabledForHost", newMode.toString())
        }}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          padding: '10px 20px',
          cursor: 'pointer',
          borderRadius: '5px',
          border: 'none',
          backgroundColor: isDarkMode ? '#fff' : '#333',
          color: isDarkMode ? '#333' : '#fff'
        }}
      >
        {isDarkMode ? 'Switch to: ☀️ Light Mode' : 'Switch to: 🌙 Dark Mode'}
      </button>
    </div>
  )
}

export default App
