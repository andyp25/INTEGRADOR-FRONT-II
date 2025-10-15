import React, { useState, useEffect } from "react";
import Filtros from "../components/Filtros";
import TablaAsistencias from "../components/TablaAsistencias";
import TarjetasEstadisticas from "../components/TarjetasEstadisticas";
import ModalAsistencia from "../components/ModalAsistencia";
import Paginacion from "../components/Paginacion";
import PieDePagina from "../components/PieDePagina";

const PaginaAsistencias = () => {
  const [asistencias, setAsistencias] = useState([]);
  const [filtros, setFiltros] = useState({
    fecha: "",
    grado: "",
    asignatura: "",
    estado: "",
  });
  const [busqueda, setBusqueda] = useState("");
  const [asistenciaSeleccionada, setAsistenciaSeleccionada] = useState(null);

  useEffect(() => {
    setAsistencias([
      {
        id: 1,
        estudiante: "Alan Brito",
        grado: "10°",
        asignatura: "Matemáticas",
        fecha: "2024-03-15",
        hora: "08:00 AM",
        estado: "Presente",
        observaciones: "-",
      },
      {
        id: 2,
        estudiante: "Zoyla Vaca",
        grado: "11°",
        asignatura: "Matemáticas",
        fecha: "2024-03-15",
        hora: "08:15 AM",
        estado: "Tardanza",
        observaciones: "Llegó 15 minutos tarde",
      },
    ]);
  }, []);

  const manejarCambioFiltro = (campo, valor) =>
    setFiltros({ ...filtros, [campo]: valor });

  const manejarBusqueda = (valor) => setBusqueda(valor);

  const manejarVerAsistencia = (id) => {
    const seleccionada = asistencias.find((a) => a.id === id);
    setAsistenciaSeleccionada(seleccionada);
  };

  const manejarCerrarModal = () => setAsistenciaSeleccionada(null);

  return (
    <div className="container-fluid mt-4">
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Control de Asistencias</h1>
        <button className="btn btn-sm btn-primary shadow-sm">
          <i className="fas fa-plus fa-sm text-white-50"></i> Registrar Asistencia
        </button>
      </div>

      <Filtros filtros={filtros} onChange={manejarCambioFiltro} />

      <TablaAsistencias
        asistencias={asistencias}
        busqueda={busqueda}
        onVerAsistencia={manejarVerAsistencia}
        onBuscar={manejarBusqueda}
      />

      <TarjetasEstadisticas />
      <Paginacion />
      <PieDePagina />

      {asistenciaSeleccionada && (
        <ModalAsistencia
          asistencia={asistenciaSeleccionada}
          onClose={manejarCerrarModal}
        />
      )}
    </div>
  );
};

export default PaginaAsistencias;

