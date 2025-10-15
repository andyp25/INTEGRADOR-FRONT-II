import React from "react";
import { Link } from "react-router-dom";

const BarraSuperior = () => {
  return (
    <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
      {/* Botón para colapsar la barra lateral (solo móvil) */}
      <button
        id="sidebarToggleTop"
        className="btn btn-link d-md-none rounded-circle mr-3"
      >
        <i className="fa fa-bars"></i>
      </button>

      {/* Título o breadcrumb */}
      <div className="text-primary fw-bold">Panel de Administración</div>

      {/* Separador */}
      <ul className="navbar-nav ml-auto">
        {/* Usuario */}
        <li className="nav-item dropdown no-arrow">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            id="userDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <span className="mr-2 d-none d-lg-inline text-gray-600 small">
              Admin Escolar
            </span>
            <img
              className="img-profile rounded-circle"
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="usuario"
              width="32"
            />
          </a>

          {/* Menú desplegable */}
          <div
            className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
            aria-labelledby="userDropdown"
          >
            <Link className="dropdown-item" to="/perfil">
              <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
              Perfil
            </Link>

            <div className="dropdown-divider"></div>

            <Link className="dropdown-item" to="/login">
              <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
              Cerrar Sesión
            </Link>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default BarraSuperior;
