import React from 'react'
import Zona from './Zona'

function Tablero() {
  return (
    <div className='tablero'>
        <Zona atr="zona1"></Zona>      
        <Zona atr="zona2"></Zona>      
        <Zona atr="zona3"></Zona>      
        <Zona atr="zona4"></Zona>      
    </div>
  )
}

export default Tablero