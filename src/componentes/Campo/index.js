import { useState } from "react"
import "./Campo.css"

const Campo = (props)=>{

    const placerHolderModificado = `${props.placeholder}...`

    const manejarCambio = e => {
        props.funcion(e.target.value)
    }

    //Destructuramos el tipo:
    const{tipo = "text"} = props

    return <div className={`campo campo-${tipo}`}>
            <label>{props.titulo}</label>
            <input 
                placeholder={placerHolderModificado} 
                required={props.required}
                value={props.valor}
                onChange={manejarCambio}
                type={tipo}
                />                
            </div>
}
export default Campo