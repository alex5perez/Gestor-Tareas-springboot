import React from "react";
import styles from "./TareaList.module.css";

function TareaList({ tareas }) {
  if (!tareas || tareas.length === 0) {
    return <p>No tienes tareas aún.</p>;
  }

  return (
    <div className={styles.listContainer}>
      <h3>Mis tareas</h3>
      <ul className={styles.tareaList}>
        {tareas.map((tarea) => (
          <li key={tarea.id} className={styles.tareaItem}>
            <div>
              <strong>{tarea.titulo}</strong>
              <p>{tarea.descripcion}</p>
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
