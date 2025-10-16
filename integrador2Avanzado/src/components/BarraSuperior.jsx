import React from "react";
import { useNavigate } from "react-router-dom";

const BarraSuperior = () => {
  const navigate = useNavigate();

  const cerrarSesion = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <nav className="navbar navbar-light bg-light shadow-sm mb-4">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <span className="navbar-brand mb-0 h4">
          Sistema de Asistencias Escolar
        </span>
        <div>
          <span className="me-3 text-muted">
            {user ? `Conectado como: ${user.user}` : ""}
          </span>
          <button className="btn btn-outline-danger btn-sm" onClick={cerrarSesion}>
            Cerrar sesión
          </button>
        </div>
      </div>
    </nav>
  );
};

export default BarraSuperior;
