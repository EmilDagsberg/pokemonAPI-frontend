import { useState } from "react";
import { Link } from "react-router";
import styles from "./Login.module.css";

const Login = ({ login }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    login(username, password);
  };

  return (
    <form className={styles.loginForm} onSubmit={handleSubmit}>
      <div className={styles.header}>
        <h2>Login</h2>
        <p>Need an Account? <Link to="/register" className={styles.createLink}>Create one</Link></p>
      </div>

      <div className={styles.inputGroup}>
        <label>Username</label>
        <input
          type="text"
          placeholder=""
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>

      <div className={styles.inputGroup}>
        <label>Password</label>
        <input
          type="password"
          placeholder=""
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className={styles.options}>
        <label className={styles.checkbox}>
          <input 
            type="checkbox" 
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
          />
          Remember me
        </label>
        <a href="#" className={styles.forgotLink}>Forgot password</a>
      </div>

      <button type="submit">Log in</button>
    </form>
  );
};

export default Login;
