import { useState } from "react"
import "./CampoTexto.css"

const CampoTexto = (props)=>{
    const placerHolderModificado = `${props.placeholder}...`


    const manejarCambio = e => {
        props.funcion(e.target.value)
    }

    return <div className="campo-texto">
            <label>{props.titulo}</label>
            <input 
                placeholder={placerHolderModificado} 
                required={props.required}
                value={props.valor}
                onChange={manejarCambio}
                />                
            </div>
}
export default CampoTexto