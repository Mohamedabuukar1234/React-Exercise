


import { useContext } from "react";
import React from 'react'
import LanguegeChange from "./Languages";

function Language() {
    const luqadaha = useContext(LanguegeChange)
    const message = {
        en :  "Heloow! you  welcome sir Mohamed ",
        es : "¡Hola! ¡Bienvenido, señor Mohamed!" 
    }
  return (
    <div>
        <h1><strong>change the Language:</strong> {message[luqadaha]} </h1>
      
    </div>
  )
}

export default Language

