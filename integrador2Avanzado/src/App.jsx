import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import RegistrarAsistencia from "./pages/RegistrarAsistencia";
import PaginaAsistencias from "./pages/PaginaAsistencias";
import BarraSuperior from "./components/BarraSuperior";

// Ruta protegida
const RutaPrivada = ({ children, rol }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (!user) return <Navigate to="/login" />;
  if (rol && user.role !== rol) return <Navigate to="/login" />;
  return children;
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Página de login */}
        <Route path="/login" element={<Login />} />

        {/* Rutas protegidas */}
        <Route
          path="/admin/registrar-asistencia"
          element={
            <RutaPrivada rol="admin">
              <div>
                <BarraSuperior />
                <RegistrarAsistencia />
              </div>
            </RutaPrivada>
          }
        />
        <Route
          path="/estudiante/asistencias"
          element={
            <RutaPrivada rol="estudiante">
              <div>
                <BarraSuperior />
                <PaginaAsistencias />
              </div>
            </RutaPrivada>
          }
        />

        {/* Redirección por defecto */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
