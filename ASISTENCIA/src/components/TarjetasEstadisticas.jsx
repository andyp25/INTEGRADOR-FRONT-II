import React from "react";

const TarjetasEstadisticas = () => {
  return (
    <div className="row mt-4">
      <div className="col-xl-3 col-md-6 mb-4">
        <div className="card border-left-success shadow h-100 py-2">
          <div className="card-body">
            <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
              Presentes
            </div>
            <div className="h5 mb-0 font-weight-bold text-gray-800">24</div>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-md-6 mb-4">
        <div className="card border-left-warning shadow h-100 py-2">
          <div className="card-body">
            <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
              Tardanzas
            </div>
            <div className="h5 mb-0 font-weight-bold text-gray-800">3</div>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-md-6 mb-4">
        <div className="card border-left-danger shadow h-100 py-2">
          <div className="card-body">
            <div className="text-xs font-weight-bold text-danger text-uppercase mb-1">
              Ausentes
            </div>
            <div className="h5 mb-0 font-weight-bold text-gray-800">1</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TarjetasEstadisticas;
