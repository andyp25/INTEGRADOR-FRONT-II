import React from "react";

const EstadisticasEstudiante = ({ data }) => {
  if (!data) {
    return (
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">
            Estadísticas del Estudiante
          </h6>
        </div>
        <div className="card-body text-muted">
          Selecciona un estudiante para ver sus estadísticas.
        </div>
      </div>
    );
  }

  return (
    <div className="card shadow mb-4">
      <div className="card-header py-3">
        <h6 className="m-0 font-weight-bold text-primary">
          Estadísticas del Estudiante
        </h6>
      </div>
      <div className="card-body">
        <div className="mb-3">
          <strong>{data.nombre}</strong>
          <br />
          <small className="text-muted">{data.grado}</small>
        </div>
        <div className="mb-2">
          <span className="badge badge-success">
            Asistencia: {data.asistencia_total}
          </span>
        </div>
        <div className="mb-1">
          <small>Ausencias: {data.ausencias}</small>
        </div>
        <div className="mb-1">
          <small>Tardanzas: {data.tardanzas}</small>
        </div>
        <div className="mb-1">
          <small>Justificados: {data.justificados}</small>
        </div>
        <div className="mt-2">
          <small className="text-muted">
            Última asistencia:{" "}
            {new Date(data.ultima_asistencia).toLocaleDateString("es-ES")}
          </small>
        </div>
      </div>
    </div>
  );
};

export default EstadisticasEstudiante;
