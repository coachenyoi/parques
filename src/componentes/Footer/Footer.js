import React from "react";
import VisorTurno from "./VisorTurno";
import Dados from "./Dados";
import FichasCielo from './FichasCielo'

function Footer() {
  return (
    <div className="footer">
      <VisorTurno></VisorTurno>
      <div>
      <Dados></Dados>
      <Dados></Dados>
      </div>
      <FichasCielo></FichasCielo>
    </div>
  );
}

export default Footer;
