import { useState, useEffect } from "react";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";

function App() {
  const [userData, setUserData] = useState(null);
  const [view, setView] = useState("login");

  useEffect(() => {
    const stored = sessionStorage.getItem("authData");
    if (stored) {
      setUserData(JSON.parse(stored));
    }
  }, []);

  const handleLogin = (data) => {
    sessionStorage.setItem("authData", JSON.stringify(data));
    setUserData(data);
  };

  const handleLogout = () => {
    sessionStorage.removeItem("authData");
    setUserData(null);
    setView("login");
  };

  return (
    <div>
      {!userData ? (
        view === "login" ? (
          <LoginForm onLogin={handleLogin} switchToRegister={() => setView("register")} />
        ) : (
          <RegisterForm switchToLogin={() => setView("login")} />
        )
      ) : (
        <div style={{ padding: "2rem" }}>
          <h2>Bienvenido, {userData.username}</h2>
          <button onClick={handleLogout}>Cerrar sesión</button>
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
