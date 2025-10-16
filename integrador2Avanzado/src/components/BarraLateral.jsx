import React from "react";
import { Link, useLocation } from "react-router-dom";

const BarraLateral = () => {
  const location = useLocation();

  const enlaces = [
    { ruta: "/dashboard", icono: "fas fa-home", texto: "Inicio" },
    { ruta: "/estudiantes", icono: "fas fa-user-graduate", texto: "Estudiantes" },
    { ruta: "/asistencias", icono: "fas fa-calendar-check", texto: "Asistencias" },
    { ruta: "/registrar-asistencia", icono: "fas fa-plus-circle", texto: "Registrar Asistencia" },
    { ruta: "/reportes", icono: "fas fa-chart-bar", texto: "Reportes" },
  ];

  return (
    <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
      {/* Marca del sistema */}
      <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/dashboard">
        <div className="sidebar-brand-icon rotate-n-15">
          <i className="fas fa-school"></i>
        </div>
        <div className="sidebar-brand-text mx-3">Sistema Educativo</div>
      </Link>

      <hr className="sidebar-divider my-0" />

      {enlaces.map((link, index) => (
        <li
          key={index}
          className={`nav-item ${location.pathname === link.ruta ? "active" : ""}`}
        >
          <Link className="nav-link" to={link.ruta}>
            <i className={link.icono}></i>
            <span>{link.texto}</span>
          </Link>
        </li>
      ))}

      <hr className="sidebar-divider d-none d-md-block" />

      {/* Botón de colapsar barra lateral */}
      <div className="text-center d-none d-md-inline">
        <button className="rounded-circle border-0" id="sidebarToggle"></button>
      </div>
    </ul>
  );
};

export default BarraLateral;
