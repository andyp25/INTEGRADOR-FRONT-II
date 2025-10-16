import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Usuarios simulados
    const credenciales = [
      { user: "admin", pass: "1234", role: "admin" },
      { user: "estudiante", pass: "1234", role: "estudiante" },
    ];

    const encontrado = credenciales.find(
      (c) => c.user === usuario && c.pass === password
    );

    if (encontrado) {
      localStorage.setItem("user", JSON.stringify(encontrado));

      if (encontrado.role === "admin") {
        navigate("/admin/registrar-asistencia");
      } else {
        navigate("/estudiante/asistencias");
      }
    } else {
      alert("Credenciales incorrectas");
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Iniciar Sesión</h2>
      <div className="card shadow p-4">
        <form onSubmit={handleLogin}>
          <div className="form-group mb-3">
            <label>Usuario</label>
            <input
              type="text"
              className="form-control"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
              required
            />
          </div>
          <div className="form-group mb-4">
            <label>Contraseña</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
