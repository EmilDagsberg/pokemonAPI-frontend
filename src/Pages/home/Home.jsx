import styles from "./Home.module.css"
import Header from "../../components/header/Header"
import logo from "../../assets/PokemonApiLogo.png"
import darkmode from "../../assets/darkmode.png"
const Home = () => {
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
    ];

    return (
        <div className={styles.background}>
            <Header headers={headers} />
            <div className={styles.container}>
                <div className={styles.logoSection}>
                    <img src={logo} alt="Pokeball Logo" className={styles.logo} />
                </div>
                <h2 className={styles.welcome}>Welcome to the PKMON API</h2>
                <h2 className={styles.welcome}>Refer to the header for usage</h2>
            </div>
        </div>
    )
}


export default Home;