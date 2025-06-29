function Dashboard({ userData, onLogout }) {
  return (
    <div style={{ padding: "2rem" }}>
      <h2>Bienvenido, {userData.username}</h2>
      <button onClick={onLogout}>Cerrar sesión</button>
      <h3>Tus tareas:</h3>
      <ul>
        {userData.tareas.map((tarea) => (
          <li key={tarea.id}>
            <strong>{tarea.titulo}</strong>: {tarea.descripcion}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;
