import { useState } from "react";
import { NavLink } from "react-router";
import Login from "../login/Login.jsx";
import styles from "./header/Header.module.css"


const Welcome = ({ username, logout }) => (
  <div className={styles.welcome}>
    <span>Welcome, {username}!</span>
    <button onClick={logout}>Logout</button>
  </div>
);

const Header = ({ headers }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  const login = (username, password) => {
    // Dummy login function
    if (username && password) {
      setUsername(username);
      setIsLoggedIn(true);
    }
  };

  return (
    <div className={styles.header}>
      <nav>
        {headers.map((header, index) => (
          <NavLink
            key={index}
            to={header.url}
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            {header.title}
          </NavLink>
        ))}
      </nav>
      {isLoggedIn ? (
        <Welcome username={username} logout={() => setIsLoggedIn(false)} />
      ) : (
        <Login login={login} />
      )}
    </div>
  );
};

export default Header;