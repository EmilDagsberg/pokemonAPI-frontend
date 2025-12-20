import './App.css'
import { Outlet } from 'react-router'
import Header from './components/header/Header'

function App() {
  
      const headers = [
        { title: "Home", url: "/" },
        { title: "Pokedex", url: "/pokedex" },
        { title: "Vision", url: "/vision" }, 
        { title: "Endpoints", url: "/endpoint-overview", 
            children: [
                { title: "Overview", url: "/endpoint-overview"},
                { title: "Search Pokemon", url: "/search-pokemon"}
            ],
        },
    ];

  return (
    <div className="background">
      <Header headers={headers} />
      <Outlet />
    </div>
  )
}

export default App
