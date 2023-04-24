import { useState } from "react"
import "./ListaOpciones.css"

const ListaOpciones =  (props)=>{    

    const mostrando = (e)=>{
        props.funcion(e.target.value)
    }    

    return <div className="Lista-Opciones">
        <label>Equipos</label>
        <select 
        value={props.valor}
        onChange={mostrando}>

            <option value="" disable defaultValue="" hidden>Seleccionar Equipo</option>
            {props.equipos.map((listaEquipo,index) => <option 
            key={index}
            value={listaEquipo}
           >
                {listaEquipo}
            </option>
            )}
        </select>
    </div>
    
}
export default ListaOpciones



