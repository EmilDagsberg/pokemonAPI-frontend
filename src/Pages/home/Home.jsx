import styles from "./Home.module.css"
import Header from "../../components/header/Header"
import logo from "../../assets/PokemonApiLogo.png"

const Home = () => {
    const headers = [
        { title: "Home", url: "/" },
        { title: "Pokedex", url: "/pokedex" },
        { title: "Vision", url: "/vision" }
    ];

    return (
        <>
            <Header headers={headers} />
            <div className={styles.container}>
                <div className={styles.logoSection}>
                    <img src={logo} alt="Pokeball Logo" className={styles.logo} />
                </div>
                <h2 className={styles.welcome}>Welcome to the PKMON API !!</h2>
            </div>
        </>
    )
}


export default Home;