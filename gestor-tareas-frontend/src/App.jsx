import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import Dashboard from "./components/Dashboard";

function App() {
  const [userData, setUserData] = useState(null);

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
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to={userData ? "/dashboard" : "/login"} />} />
        <Route path="/login" element={<LoginForm onLogin={handleLogin} />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route
          path="/dashboard"
          element={
            userData ? (
              <Dashboard userData={userData} onLogout={handleLogout} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        {/* 404 Not Found route */}
        <Route path="*" element={<h2>Página no encontrada</h2>} />
      </Routes>
    </Router>
  );
}

export default App;
