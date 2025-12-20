import { useState } from 'react';
import styles from "./Vision.module.css";

const Vision = () => {

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
  const [activeSection, setActiveSection] = useState('about');


  const renderContent = () => {
    switch(activeSection) {
      case 'about':
        return (
          <div>
            <h2>About Us</h2>
            <p>Three students studying at "Københavns Erhvervsakademi"</p>
          </div>
        );
      case 'why':
        return (
          <div>
            <h2>Why Pokemon?</h2>
            <p>We decided to choose pokemon for a multiple of reasons.</p>
            <p>First of, we knew of a REST-api called PokéAPI, where you can request specific data via JSON and use it for own personal use</p>
            <p>Secondly, we all knew of pokemon and wanted to see what was possible with our knowledge of Java, Javascript, React and CSS as of right now</p>
            <p>Pokemon is also something mostly everyone knows, so they "sort of" know what to expect with our project and that can remove the fog of confusion from developer to user</p>
          </div>
        );
      case 'functionality':
        return (
          <div>
            <h2>Functionality</h2>
            <p>Content about functionality goes here...</p>
          </div>
        );
      case 'more':
        return (
          <div>
            <h2>More</h2>
            <p>Additional content goes here...</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <button 
          className={`${styles.sidebarButton} ${activeSection === 'about' ? styles.active : ''}`}
          onClick={() => setActiveSection('about')}
        >
          About us
        </button>
        <button 
          className={`${styles.sidebarButton} ${activeSection === 'why' ? styles.active : ''}`}
          onClick={() => setActiveSection('why')}
        >
          Why pokemon
        </button>
        <button 
          className={`${styles.sidebarButton} ${activeSection === 'functionality' ? styles.active : ''}`}
          onClick={() => setActiveSection('functionality')}
        >
          Functionality
        </button>
        <button 
          className={`${styles.sidebarButton} ${activeSection === 'more' ? styles.active : ''}`}
          onClick={() => setActiveSection('more')}
        >
          More..
        </button>
      </div>
      <div className={styles.content}>
        {renderContent()}
      </div>
    </div>
  );
};

export default Vision;