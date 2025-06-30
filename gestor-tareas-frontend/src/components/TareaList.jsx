import React from "react";
import styles from "./TareaList.module.css";

function TareaList({ tareas, userData, onTareaEliminada }) {
  if (!tareas || tareas.length === 0) {
    return <p>No tienes tareas aún.</p>;
  }

  const handleToggleCompletada = async (tarea) => {
    const updated = { ...tarea, completada: !tarea.completada };

    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/api/tareas/${tarea.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Basic " + btoa(`${userData.username}:${userData.password}`),
          },
          body: JSON.stringify(updated),
        }
      );

      if (res.ok) {
        const actualizada = await res.json();
        onTareaEditada(actualizada);
      } else {
        alert("No se pudo actualizar la tarea");
      }
    } catch {
      alert("Error de conexión");
    }
  };


  const handleDelete = async (id) => {
    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/api/tareas/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization:
              "Basic " + btoa(`${userData.username}:${userData.password}`),
          },
        }
      );

      if (res.ok) {
        onTareaEliminada(id);
      } else {
        alert("No se pudo eliminar la tarea");
      }
    } catch {
      alert("Error de conexión al eliminar");
    }
  };

  return (
    <div className={styles.listContainer}>
      <h3>Mis tareas</h3>
      <ul className={styles.tareaList}>
        {tareas.map((tarea) => (
          <li key={tarea.id} className={styles.tareaItem}>
            <input
              type="checkbox"
              checked={tarea.completada}
              onChange={() => handleToggleCompletada(tarea)}
            />
            <div style={{ flex: 1, marginLeft: "1rem" }}>
              <strong
                style={{
                  textDecoration: tarea.completada ? "line-through" : "none",
                  color: tarea.completada ? "#aaa" : "#000",
                }}
              >
                {tarea.titulo}
              </strong>
              <p>{tarea.descripcion}</p>
            </div>
            <div className={styles.actions}>
              <button
                className={styles.deleteBtn}
                onClick={() => handleDelete(tarea.id)}
              >
                🗑️
              </button>
            </div>
            <span
              className={tarea.completada ? styles.completada : styles.pendiente}
            >
              {tarea.completada ? "✅ Completada" : "🕒 Pendiente"}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TareaList;
