import { useState } from "react";
import { useNavigate } from "react-router";
import facade from "../../apiFacade";
import styles from "./Registerpage.module.css";

const Registerpage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    facade
      .createUser(username, password)
      .then(() => {
        localStorage.setItem("username", username);
        navigate("/");
      })
      .catch((err) => {
        setError("Registration failed. Username may already exist.");
        console.error("Registration failed:", err);
      });
  };

  return (
    <div className={styles.container}>
      <form className={styles.registerForm} onSubmit={handleSubmit}>
        <h2>Create Account</h2>

        {error && <p className={styles.error}>{error}</p>}

        <div className={styles.inputGroup}>
          <label>Username</label>
          <input
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <div className={styles.inputGroup}>
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className={styles.inputGroup}>
          <label>Confirm Password</label>
          <input
            type="password"
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit">Create Account</button>

        <p className={styles.loginLink}>
          Already have an account? <a href="/">Back to Home</a>
        </p>
      </form>
    </div>
  );
};

export default Registerpage;
