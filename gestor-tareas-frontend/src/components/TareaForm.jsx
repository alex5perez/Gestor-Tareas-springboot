import { useState } from "react";
import styles from "./TareaForm.module.css";

function TareaForm({ userData, onTareaCreada }) {
  const [form, setForm] = useState({
    titulo: "",
    descripcion: "",
  });
  const [error, setError] = useState(null);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/api/usuarios/${userData.id}/tareas`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Basic " + btoa(`${userData.username}:${userData.password}`),
          },
          body: JSON.stringify(form),
        }
      );

      if (res.ok) {
        const nueva = await res.json();
        onTareaCreada(nueva);
        setForm({ titulo: "", descripcion: "" }); // limpia el form
      } else {
        setError("No se pudo crear la tarea.");
      }
    } catch (err) {
      setError("Error de conexión.");
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h3>Crear nueva tarea</h3>
      <input
        className={styles.input}
        type="text"
        name="titulo"
        placeholder="Título"
        value={form.titulo}
        onChange={handleChange}
        required
      />
      <textarea
        className={styles.textarea}
        name="descripcion"
        placeholder="Descripción"
        value={form.descripcion}
        onChange={handleChange}
        required
      />
      <button className={styles.button} type="submit">Crear</button>
      {error && <p className={styles.error}>{error}</p>}
    </form>
  );
}

export default TareaForm;
