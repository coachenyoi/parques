import React from "react";
import "./Zona.css";

function Zona(atributo) {
  return (
    <div className="contenedor" id={atributo.atr}>
      <div className="cielo"></div>
      <div className="carcel"></div>

      <div className="camino_vertical">
        <div className="casilla"></div>
        <div className="casilla"></div>
        <div className="casilla salida"><span>salida</span></div>
        <div className="casilla"></div>
        <div className="casilla "></div>
        <div className="casilla"></div>
        <div className="casilla"></div>
      </div>

      <div className="abanico">
        <div className="casilla_abanico casilla"></div>
        <div className="casilla_abanico casilla"></div>
      </div>

      <div className="camino_horizontal">
        <div className="casilla"></div>
        <div className="casilla"></div>
        <div className="casilla seguro"> <span>seguro</span></div>
        <div className="casilla"></div>
        <div className="casilla"></div>
        <div className="casilla"></div>
        <div className="casilla"></div>
      </div>

      <div className="llegada">
        <div className="casillaFin"></div>
        <div className="casillaFin"></div>
        <div className="casillaFin"></div>
        <div className="casillaFin"></div>
        <div className="casillaFin"></div>
        <div className="casillaFin"></div>
        <div className="casillaFin seguro"><span>seguro</span></div>
      </div>
    </div>
  );
}

export default Zona;
