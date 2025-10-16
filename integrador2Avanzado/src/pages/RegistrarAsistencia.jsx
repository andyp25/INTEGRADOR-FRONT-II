import React, { useState, useEffect } from "react";

const RegistrarAsistencia = () => {
  const [formData, setFormData] = useState({
    estudiante: "",
    asignatura: "",
    estado: "presente",
  });
  const [asistencias, setAsistencias] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  // Cargar asistencias desde localStorage al inicio
  useEffect(() => {
    const dataGuardada = JSON.parse(localStorage.getItem("asistencias")) || [];
    setAsistencias(dataGuardada);
  }, []);

  // Guardar cambios en localStorage cada vez que cambie el estado
  useEffect(() => {
    localStorage.setItem("asistencias", JSON.stringify(asistencias));
  }, [asistencias]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const guardarAsistencia = () => {
    if (!formData.estudiante || !formData.asignatura) {
      alert("Completa todos los campos");
      return;
    }

    if (editIndex !== null) {
      const actualizadas = [...asistencias];
      actualizadas[editIndex] = formData;
      setAsistencias(actualizadas);
      setEditIndex(null);
    } else {
      setAsistencias([...asistencias, formData]);
    }

    setFormData({ estudiante: "", asignatura: "", estado: "presente" });
  };

  const editarAsistencia = (index) => {
    setFormData(asistencias[index]);
    setEditIndex(index);
  };

  const eliminarAsistencia = (index) => {
    if (window.confirm("¿Deseas eliminar este registro?")) {
      const nuevas = asistencias.filter((_, i) => i !== index);
      setAsistencias(nuevas);
    }
  };

  return (
    <div className="container">
      <h3 className="mb-4">Registrar Asistencia</h3>

      <div className="card p-3 shadow-sm mb-4">
        <div className="form-group mb-2">
          <label>Estudiante</label>
          <input
            type="text"
            className="form-control"
            name="estudiante"
            value={formData.estudiante}
            onChange={handleChange}
          />
        </div>
        <div className="form-group mb-2">
          <label>Asignatura</label>
          <input
            type="text"
            className="form-control"
            name="asignatura"
            value={formData.asignatura}
            onChange={handleChange}
          />
        </div>
        <div className="form-group mb-3">
          <label>Estado</label>
          <select
            className="form-control"
            name="estado"
            value={formData.estado}
            onChange={handleChange}
          >
            <option value="presente">Presente</option>
            <option value="ausente">Ausente</option>
            <option value="tardanza">Tardanza</option>
          </select>
        </div>
        <button className="btn btn-primary" onClick={guardarAsistencia}>
          {editIndex !== null ? "Actualizar Asistencia" : "Registrar Asistencia"}
        </button>
      </div>

      <h5>Listado de Asistencias</h5>
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Estudiante</th>
            <th>Asignatura</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {asistencias.length === 0 ? (
            <tr>
              <td colSpan="4" className="text-center">
                No hay registros aún
              </td>
            </tr>
          ) : (
            asistencias.map((a, i) => (
              <tr key={i}>
                <td>{a.estudiante}</td>
                <td>{a.asignatura}</td>
                <td>{a.estado}</td>
                <td>
                  <button
                    className="btn btn-sm btn-warning me-2"
                    onClick={() => editarAsistencia(i)}
                  >
                    Editar
                  </button>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => eliminarAsistencia(i)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default RegistrarAsistencia;
