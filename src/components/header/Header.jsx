import { useState, useEffect } from "react";
import { NavLink } from "react-router";
import LoginAuth from "../login/LoginAuth";
import facade from "../../apiFacade";
import styles from "./Header.module.css"


const Welcome = ({ username, logout }) => (
  <div className={styles.welcome}>
    <button onClick={logout} className={styles.loginButton}>Logout</button>
    <span className={styles.loginGreet}> Welcome, {username}!</span>
  </div>
);

const Header = ({ headers }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    // Check if user is logged in from localStorage
    const storedUsername = localStorage.getItem("username");
    const loggedIn = facade.loggedIn();
    
    if (loggedIn && storedUsername) {
      setUsername(storedUsername);
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = (username, password) => {
    setError("");
    
    facade.login(username, password)
      .then(() => {
        localStorage.setItem("username", username);
        setUsername(username);
        setIsLoggedIn(true);
        setShowLoginModal(false);
      })
      .catch((err) => {
        setError("Invalid username or password");
        console.error("Login failed:", err);
      });
  };

  const logout = () => {
    facade.logout();
    localStorage.removeItem("username");
    setIsLoggedIn(false);
    setUsername("");
  };

  return (
    <>
      <div className={styles.header}>
        {isLoggedIn ? (
          <Welcome username={username} logout={logout} />
        ) : (
          <button onClick={() => setShowLoginModal(true)} className={styles.loginButton}>
            Login
          </button>
        )}

        <nav className={styles.nav}>
          <ul className={styles.navList}>
            {headers.map((header, index) => (
              <li key={index} className={styles.navItem}>
                <NavLink
                  to={header.url}
                  className={({ isActive }) =>
                    isActive ? styles.active : styles.navLink
                  }
                >
                  {header.title}
                </NavLink>

                {/* Dropdown (only if children exist) */}
                {header.children && (
                  <ul className={styles.dropdown}>
                    {header.children.map((child, i) => (
                      <li key={i}>
                        <NavLink
                          to={child.url}
                          className={({ isActive }) =>
                            isActive ? styles.active : styles.dropdownLink
                          }
                        >
                          {child.title}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>

      </div>

          {/* Shows the popup and everything inside of it */}
      {showLoginModal && (
        <div className={styles.modalOverlay} onClick={() => setShowLoginModal(false)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={() => setShowLoginModal(false)}>
              × {/* DONT REMOVE X */}
            </button>
            {error && <div style={{color: 'red', marginBottom: '10px', textAlign: 'center'}}>{error}</div>}
            <LoginAuth login={handleLogin} />
          </div>
        </div>
      )}
    </>
  );
};

export default Header;