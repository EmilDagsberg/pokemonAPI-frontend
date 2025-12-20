import styles from "./Home.module.css"
import logo from "../../assets/PokemonApiLogo.png"
import darkmode from "../../assets/darkmode.png"
const Home = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logoSection}>
                <img src={logo} alt="Pokeball Logo" className={styles.logo} />
            </div>
            <h2 className={styles.welcome}>Welcome to the PKMON API</h2>
            <h2 className={styles.welcome}>Refer to the header for usage</h2>
        </div>
    )
}


export default Home;