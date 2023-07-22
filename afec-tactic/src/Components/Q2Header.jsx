import React from "react";

const Q2Header = () => {

    return (

      <div className="qheader-container mt-5">
          <img src={require('../img/logo-afectactic.png')} className="qheader-logo" alt="Logo AFEC Tactic" height="140" />
          <ul>
              <li className="qheader-title">Cuestionario 2</li>
              <li className="qheader-title">Plan de Partido</li>
          </ul>
      </div>
    );
  };

export default Q2Header;