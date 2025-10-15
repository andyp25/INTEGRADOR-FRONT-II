import React from "react";

const Filtros = ({ filtros, onChange }) => {
  return (
    <div className="card shadow mb-4">
      <div className="card-body">
        <div className="row g-3">
          <div className="col-md-3">
            <label className="form-label">Fecha</label>
            <input
              type="date"
              className="form-control"
              value={filtros.fecha}
              onChange={(e) => onChange("fecha", e.target.value)}
            />
          </div>
          <div className="col-md-3">
            <label className="form-label">Grado</label>
            <select
              className="form-select"
              value={filtros.grado}
              onChange={(e) => onChange("grado", e.target.value)}
            >
              <option value="">Todos</option>
              <option>10°</option>
              <option>11°</option>
            </select>
          </div>
          <div className="col-md-3">
            <label className="form-label">Asignatura</label>
            <select
              className="form-select"
              value={filtros.asignatura}
              onChange={(e) => onChange("asignatura", e.target.value)}
            >
              <option value="">Todas</option>
              <option>Matemáticas</option>
              <option>Lengua</option>
            </select>
          </div>
          <div className="col-md-3">
            <label className="form-label">Estado</label>
            <select
              className="form-select"
              value={filtros.estado}
              onChange={(e) => onChange("estado", e.target.value)}
            >
              <option value="">Todos</option>
              <option>Presente</option>
              <option>Ausente</option>
              <option>Tardanza</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filtros;
