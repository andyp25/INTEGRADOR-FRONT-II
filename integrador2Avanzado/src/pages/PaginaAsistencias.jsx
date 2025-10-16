import React, { useEffect, useState } from "react";

const PaginaAsistencias = () => {
  const [asistencias, setAsistencias] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("asistencias")) || [];
    setAsistencias(data);
  }, []);

  return (
    <div className="container">
      <h3 className="mb-4">Mis Asistencias</h3>

      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Estudiante</th>
            <th>Asignatura</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          {asistencias.length === 0 ? (
            <tr>
              <td colSpan="3" className="text-center">
                No hay registros disponibles
              </td>
            </tr>
          ) : (
            asistencias.map((a, i) => (
              <tr key={i}>
                <td>{a.estudiante}</td>
                <td>{a.asignatura}</td>
                <td>{a.estado}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default PaginaAsistencias;
