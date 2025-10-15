import React from "react";

const TablaAsistencias = ({ asistencias, busqueda, onBuscar, onVerAsistencia }) => {
  const filtradas = asistencias.filter((a) =>
    a.estudiante.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <>
      <div className="input-group mb-3 rounded-pill overflow-hidden border w-50">
        <span className="input-group-text bg-white border-0 pe-1">
          <i className="fas fa-search"></i>
        </span>
        <input
          type="search"
          className="form-control border-0"
          placeholder="Buscar Estudiante"
          value={busqueda}
          onChange={(e) => onBuscar(e.target.value)}
        />
      </div>

      <div className="table-responsive">
        <table className="table align-middle mb-0 bg-white">
          <thead className="bg-light">
            <tr>
              <th>#</th>
              <th>Estudiante</th>
              <th>Grado</th>
              <th>Asignatura</th>
              <th>Fecha</th>
              <th>Hora</th>
              <th>Estado</th>
              <th>Observaciones</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {filtradas.map((a) => (
              <tr key={a.id}>
                <td>{a.id}</td>
                <td>{a.estudiante}</td>
                <td>{a.grado}</td>
                <td>{a.asignatura}</td>
                <td>{a.fecha}</td>
                <td>{a.hora}</td>
                <td>
                  <span
                    className={`badge ${
                      a.estado === "Presente"
                        ? "bg-success"
                        : a.estado === "Tardanza"
                        ? "bg-warning text-dark"
                        : a.estado === "Ausente"
                        ? "bg-danger"
                        : "bg-info"
                    }`}
                  >
                    {a.estado}
                  </span>
                </td>
                <td>{a.observaciones}</td>
                <td>
                  <button
                    className="btn btn-sm btn-info"
                    onClick={() => onVerAsistencia(a.id)}
                  >
                    <i className="fas fa-eye"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TablaAsistencias;
