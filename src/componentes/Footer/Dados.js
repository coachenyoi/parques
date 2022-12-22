import React from "react";

var dados = 4
function Dados() {
  return (
    <div className="dados">
        <img src={`/img/${dados}.svg`} alt="" />
    </div>
  );
}

export default Dados;
