import React from "react";

const QHeader = () => {

    return (

      <div className="qheader-container mt-5">
          <img src={require('../img/logo-afectactic.png')} className="qheader-logo" alt="Logo AFEC Tactic" height="140" />
          <ul>
              <li className="qheader-title">Cuestionario 1</li>
              <li className="qheader-title">Objetivos de Entrenamiento</li>
          </ul>
      </div>
    );
  };

export default QHeader;