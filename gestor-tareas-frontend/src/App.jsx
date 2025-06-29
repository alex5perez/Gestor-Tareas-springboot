import { useState } from "react";
import LoginForm from "./components/LoginForm";

function App() {
  const [userData, setUserData] = useState(null);

  return (
    <div style={{ padding: "2rem" }}>
      {!userData ? (
        <LoginForm onLogin={setUserData} />
      ) : (
        <div>
          <h2>Bienvenido, {userData.username}</h2>
          <h3>Tus tareas:</h3>
          <ul>
            {userData.tareas.map((tarea) => (
              <li key={tarea.id}>
                <strong>{tarea.titulo}</strong>: {tarea.descripcion}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
