import { useState } from "react";

import styles from "./LoginForm.module.css";

function LoginForm({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const authHeader = "Basic " + btoa(`${username}:${password}`);

    try {
      const response = await fetch("http://localhost:8080/api/tareas", {
        method: "GET",
        headers: {
          "Authorization": authHeader,
        },
      });

      if (response.ok) {
        const tareas = await response.json();
        onLogin({ username, password, tareas });
      } else {
        setError("Credenciales incorrectas");
      }
    } catch (err) {
      console.error(err);
      setError("Error de conexión con el servidor");
    }
  };

  return (
  <div className={styles.wrapper}>
    <form onSubmit={handleSubmit} className={styles.form}>
      <h2>Iniciar sesión</h2>

      <label>
        Usuario:
        <input
          className={styles.input}
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </label>

      <label>
        Contraseña:
        <input
          className={styles.input}
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>

      <button type="submit" className={styles.button}>Entrar</button>

      {error && <p className={styles.error}>{error}</p>}
    </form>
  </div>
);


}

export default LoginForm;
