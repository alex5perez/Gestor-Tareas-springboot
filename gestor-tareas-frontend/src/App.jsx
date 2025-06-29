import { useState, useEffect } from "react";
import LoginForm from "./components/LoginForm";

function App() {
  const [userData, setUserData] = useState(null);

  // Leer del sessionStorage al cargar
  useEffect(() => {
    const stored = sessionStorage.getItem("authData");
    if (stored) {
      const parsed = JSON.parse(stored);
      setUserData(parsed);
    }
  }, []);

  const handleLogin = (data) => {
    sessionStorage.setItem("authData", JSON.stringify(data));
    setUserData(data);
  };

  const handleLogout = () => {
    sessionStorage.removeItem("authData");
    setUserData(null);
  };

  return (
    <div>
      {!userData ? (
        <LoginForm onLogin={handleLogin} />
      ) : (
        <div style={{ padding: "2rem" }}>
          <h2>Bienvenido, {userData.username}</h2>
          <button onClick={handleLogout} style={{ marginBottom: "1rem" }}>
            Cerrar sesión
          </button>
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
