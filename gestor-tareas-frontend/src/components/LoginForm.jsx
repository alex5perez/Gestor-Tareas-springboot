import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./AuthForm.module.css";
import.meta.env.VITE_API_URL

function LoginForm({ onLogin, switchToRegister }) {
  const [form, setForm] = useState({ username: "", password: "" });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const auth = "Basic " + btoa(`${form.username}:${form.password}`);

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/tareas`, {
        headers: { Authorization: auth },
      });

      if (res.ok) {
        const tareas = await res.json();
        onLogin({ ...form, tareas });
      } else {
        setError("Credenciales incorrectas");
      }
    } catch {
      setError("Error de conexión");
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
            name="username"
            value={form.username}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Contraseña:
          <input
            className={styles.input}
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            required
          />
        </label>

        <button className={styles.button} type="submit">
          Entrar
        </button>

        <button
          type="button"
          className={styles.toggle}
          onClick={() => navigate("/register")}
        >
          ¿No tienes cuenta? Regístrate
        </button>

        {error && <p className={styles.error}>{error}</p>}
      </form>
    </div>
  );
}

export default LoginForm;
