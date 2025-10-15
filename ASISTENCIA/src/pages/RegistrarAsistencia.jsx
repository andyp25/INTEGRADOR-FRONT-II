// import React, { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import BarraLateral from "../components/BarraLateral";
import BarraSuperior from "../components/BarraSuperior";
// import Footer from "../components/Footer";
import EstadisticasEstudiante from "../components/EstadisticasEstudiante";

const RegistrarAsistencia = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const asistenciaId = searchParams.get("id");

  const [formData, setFormData] = useState({
    estudiante_id: "",
    asignatura: "",
    fecha_clase: "",
    hora_clase: "",
    estado: "presente",
    minutos_tardanza: "",
    tipo_justificacion: "",
    observaciones: "",
    notificar_familia: false,
  });

  const [estadisticas, setEstadisticas] = useState(null);

  // Simulaciones de datos
  const estudiantes = [
    { id: "1", nombre: "Alan Brito", grado: "10°" },
    { id: "2", nombre: "Zoyla Vaca", grado: "11°" },
  ];

  const asignaturas = [
    { id: "matematicas", nombre: "Matemáticas" },
    { id: "lenguaje", nombre: "Lenguaje" },
    { id: "ciencias", nombre: "Ciencias" },
    { id: "sociales", nombre: "Sociales" },
  ];

  const estadisticasEjemplo = {
    1: {
      nombre: "Alan Brito",
      grado: "10°",
      asistencia_total: "95%",
      ausencias: 2,
      tardanzas: 3,
      justificados: 1,
      ultima_asistencia: "2024-03-15",
    },
    2: {
      nombre: "Zoyla Vaca",
      grado: "11°",
      asistencia_total: "88%",
      ausencias: 5,
      tardanzas: 2,
      justificados: 3,
      ultima_asistencia: "2024-03-15",
    },
  };

  const asistenciasEjemplo = {
    1: {
      estudiante_id: "1",
      asignatura: "matematicas",
      fecha_clase: "2024-03-15",
      hora_clase: "08:00",
      estado: "presente",
      observaciones: "",
      notificar_familia: false,
    },
    2: {
      estudiante_id: "2",
      asignatura: "matematicas",
      fecha_clase: "2024-03-15",
      hora_clase: "08:15",
      estado: "tardanza",
      minutos_tardanza: 15,
      observaciones: "Llegó 15 minutos tarde",
      notificar_familia: true,
    },
  };

  useEffect(() => {
    // Fecha y hora por defecto
    const today = new Date().toISOString().split("T")[0];
    const now = new Date();
    const time = `${now.getHours().toString().padStart(2, "0")}:${now
      .getMinutes()
      .toString()
      .padStart(2, "0")}`;

    setFormData((prev) => ({
      ...prev,
      fecha_clase: prev.fecha_clase || today,
      hora_clase: prev.hora_clase || time,
    }));

    if (asistenciaId && asistenciasEjemplo[asistenciaId]) {
      setFormData(asistenciasEjemplo[asistenciaId]);
      cargarEstadisticas(asistenciasEjemplo[asistenciaId].estudiante_id);
    }
  }, [asistenciaId]);

  const cargarEstadisticas = (id) => {
    if (estadisticasEjemplo[id]) {
      setEstadisticas(estadisticasEjemplo[id]);
    } else {
      setEstadisticas(null);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });

    if (name === "estudiante_id") {
      cargarEstadisticas(value);
    }
  };

  const validarFormulario = () => {
    if (!formData.estudiante_id || !formData.asignatura) {
      alert("Debes completar todos los campos obligatorios.");
      return false;
    }
    const fecha = new Date(formData.fecha_clase);
    const hoy = new Date();
    hoy.setHours(0, 0, 0, 0);
    if (fecha > hoy) {
      alert("La fecha no puede ser futura.");
      return false;
    }
    if (formData.estado === "tardanza" && (!formData.minutos_tardanza || formData.minutos_tardanza < 1)) {
      alert("Debes ingresar minutos válidos de tardanza.");
      return false;
    }
    if (
      (formData.estado === "ausente" || formData.estado === "justificado") &&
      !formData.tipo_justificacion
    ) {
      alert("Selecciona un tipo de justificación.");
      return false;
    }
    return true;
  };

  const manejarRegistro = () => {
    if (!validarFormulario()) return;
    if (asistenciaId) {
      alert("Asistencia actualizada correctamente.");
    } else {
      alert("Asistencia registrada correctamente.");
    }
    navigate("/listado-asistencias");
  };

  return (
    <div id="page-top">
      <div id="wrapper" className="d-flex">
        <BarraLateral />

        <div id="content-wrapper" className="d-flex flex-column w-100">
          <div id="content">
            <BarraSuperior />

            <div className="container-fluid">
              <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Registrar Asistencia</h1>
                <button
                  className="btn btn-primary btn-sm shadow-sm"
                  onClick={() => navigate("/listado-asistencias")}
                >
                  <i className="fas fa-list fa-sm text-white-50"></i> Listado
                </button>
              </div>

              <div className="row">
                {/* Formulario principal */}
                <div className="col-8">
                  <div className="card shadow p-4">
                    <form>
                      <div className="row">
                        <div className="col-sm-6 mb-3">
                          <label>Estudiante</label>
                          <select
                            name="estudiante_id"
                            className="form-control"
                            value={formData.estudiante_id}
                            onChange={handleChange}
                            required
                          >
                            <option value="">Seleccionar</option>
                            {estudiantes.map((e) => (
                              <option key={e.id} value={e.id}>
                                {e.nombre} - {e.grado}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div className="col-sm-6 mb-3">
                          <label>Asignatura</label>
                          <select
                            name="asignatura"
                            className="form-control"
                            value={formData.asignatura}
                            onChange={handleChange}
                            required
                          >
                            <option value="">Seleccionar</option>
                            {asignaturas.map((a) => (
                              <option key={a.id} value={a.id}>
                                {a.nombre}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-sm-6 mb-3">
                          <label>Fecha</label>
                          <input
                            type="date"
                            name="fecha_clase"
                            className="form-control"
                            value={formData.fecha_clase}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="col-sm-6 mb-3">
                          <label>Hora</label>
                          <input
                            type="time"
                            name="hora_clase"
                            className="form-control"
                            value={formData.hora_clase}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      {/* Estado */}
                      <div className="card shadow-sm mb-4">
                        <div className="card-header py-3">
                          <h6 className="m-0 font-weight-bold text-primary">
                            Estado de Asistencia
                          </h6>
                        </div>
                        <div className="card-body">
                          <div className="d-flex flex-wrap gap-3">
                            {["presente", "ausente", "tardanza", "justificado"].map((estado) => (
                              <div key={estado} className="form-check me-3">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="estado"
                                  value={estado}
                                  checked={formData.estado === estado}
                                  onChange={handleChange}
                                />
                                <label className="form-check-label text-capitalize">
                                  {estado}
                                </label>
                              </div>
                            ))}
                          </div>

                          {formData.estado === "tardanza" && (
                            <div className="mt-3">
                              <label>Minutos de Tardanza</label>
                              <input
                                type="number"
                                name="minutos_tardanza"
                                className="form-control"
                                value={formData.minutos_tardanza}
                                onChange={handleChange}
                                min="1"
                                max="120"
                              />
                            </div>
                          )}

                          {(formData.estado === "ausente" ||
                            formData.estado === "justificado") && (
                            <div className="mt-3">
                              <label>Tipo de Justificación</label>
                              <select
                                name="tipo_justificacion"
                                className="form-control"
                                value={formData.tipo_justificacion}
                                onChange={handleChange}
                              >
                                <option value="">Seleccionar</option>
                                <option value="enfermedad">Enfermedad</option>
                                <option value="cita_medica">Cita médica</option>
                                <option value="emergencia_familiar">Emergencia familiar</option>
                                <option value="actividad_institucional">Actividad institucional</option>
                                <option value="otro">Otro</option>
                              </select>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Observaciones */}
                      <div className="mb-3">
                        <label>Observaciones</label>
                        <textarea
                          name="observaciones"
                          className="form-control"
                          rows="3"
                          value={formData.observaciones}
                          onChange={handleChange}
                        />
                      </div>

                      {/* Notificar */}
                      <div className="form-check mb-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="notificar_familia"
                          checked={formData.notificar_familia}
                          onChange={handleChange}
                        />
                        <label className="form-check-label">Notificar a la familia</label>
                      </div>

                      <button
                        type="button"
                        className={`btn ${
                          asistenciaId ? "btn-success" : "btn-primary"
                        } btn-block`}
                        onClick={manejarRegistro}
                      >
                        {asistenciaId ? "Actualizar Asistencia" : "Registrar Asistencia"}
                      </button>
                    </form>
                  </div>
                </div>

                {/* Panel derecho */}
                <div className="col-4">
                  <EstadisticasEstudiante data={estadisticas} />
                  <div className="card shadow mt-4">
                    <div className="card-header">
                      <h6 className="m-0 font-weight-bold text-primary">
                        Información del Sistema
                      </h6>
                    </div>
                    <div className="card-body small text-muted">
                      <p><strong>Nota:</strong> El sistema registra automáticamente:</p>
                      <ul>
                        <li>Fecha y hora del registro</li>
                        <li>Usuario que registra</li>
                        <li>IP del equipo</li>
                      </ul>
                      <p>Las asistencias se pueden exportar para reportes.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default RegistrarAsistencia;
