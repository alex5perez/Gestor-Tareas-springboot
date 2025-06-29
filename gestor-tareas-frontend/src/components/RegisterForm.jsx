import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./AuthForm.module.css";

function RegisterForm({ switchToLogin }) {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    username: "",
    password: "",
  });
  const [error, setError] = useState(null);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/usuarios`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        alert("Usuario registrado correctamente.");
        switchToLogin();
      } else {
        setError("No se pudo registrar el usuario.");
      }
    } catch {
      setError("Error de conexión.");
    }
  };

  return (
    <div className={styles.wrapper}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h2>Registrarse</h2>

        <label>
          Nombre:
          <input
            className={styles.input}
            type="text"
            name="nombre"
            value={form.nombre}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Email:
          <input
            className={styles.input}
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </label>

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
          Crear cuenta
        </button>

        <button
          type="button"
          className={styles.toggle}
          onClick={() => navigate("/login")}
        >
          Ya tengo cuenta
        </button>

        {error && <p className={styles.error}>{error}</p>}
      </form>
    </div>
  );
}

export default RegisterForm;
