import React from "react";

const ModalAsistencia = ({ asistencia, onClose }) => (
  <div className="modal fade show d-block" tabIndex="-1">
    <div className="modal-dialog modal-lg">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">
            <i className="fas fa-calendar-check me-2 text-gray-400"></i>
            Detalles de la Asistencia
          </h5>
          <button type="button" className="btn-close" onClick={onClose}></button>
        </div>
        <div className="modal-body">
          <p><strong>Estudiante:</strong> {asistencia.estudiante}</p>
          <p><strong>Grado:</strong> {asistencia.grado}</p>
          <p><strong>Asignatura:</strong> {asistencia.asignatura}</p>
          <p><strong>Fecha:</strong> {asistencia.fecha}</p>
          <p><strong>Hora:</strong> {asistencia.hora}</p>
          <p><strong>Estado:</strong> {asistencia.estado}</p>
          <p><strong>Observaciones:</strong> {asistencia.observaciones}</p>
        </div>
        <div className="modal-footer">
          <button className="btn btn-secondary" onClick={onClose}>
            Cerrar
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default ModalAsistencia;
