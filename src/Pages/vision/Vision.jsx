import styles from "./Vision.module.css";
import Header from "../../components/header/Header";

const Vision = () => {
  const headers = [
    { title: "Home", url: "/" },
    { title: "Pokedex", url: "/pokedex" },
    { title: "Vision", url: "/vision" },
    {
      title: "Endpoints",
      url: "/endpoint-overview",
      children: [
        { title: "Overview", url: "/endpoint-overview" },
        { title: "Search Pokemon", url: "/search-pokemon" },
      ],
    },
  ];

  return (
    <div className={styles.background}>
      <Header headers={headers} />

      {/* PUT MEAT IN HERE */
      
      }
    </div>
  );
};

export default Vision;