import React from "react";

const Paginacion = () => {
  return (
    <nav className="mt-4">
      <ul className="pagination justify-content-center">
        <li className="page-item disabled">
          <a className="page-link">Anterior</a>
        </li>
        <li className="page-item active">
          <a className="page-link">1</a>
        </li>
        <li className="page-item">
          <a className="page-link">2</a>
        </li>
        <li className="page-item">
          <a className="page-link">Siguiente</a>
        </li>
      </ul>
    </nav>
  );
};

export default Paginacion;
