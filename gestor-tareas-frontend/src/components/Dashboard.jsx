import TareaList from "./TareaList";
import TareaForm from "./TareaForm";

function Dashboard({ userData, setUserData, onLogout }) {
  return (
    <div style={{ padding: "2rem" }}>
      <h2>Bienvenido, {userData.username}</h2>
      <button onClick={onLogout}>Cerrar sesión</button>

      {/* Formulario para crear tarea */}
      <TareaForm
        userData={userData}
        onTareaCreada={(nueva) =>
          setUserData({
            ...userData,
            tareas: [...userData.tareas, nueva],
          })
        }
      />

      {/* Lista de tareas */}
      <TareaList
        tareas={userData.tareas}
        userData={userData}
        onTareaEliminada={(id) =>
          setUserData({
            ...userData,
            tareas: userData.tareas.filter((t) => t.id !== id),
          })
        }
        onTareaEditada={(actualizada) =>
          setUserData({
            ...userData,
            tareas: userData.tareas.map((t) =>
              t.id === actualizada.id ? actualizada : t
            ),
          })
        }
      />
    </div>
  );
}

export default Dashboard;
