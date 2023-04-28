/* eslint-disable array-callback-return */
import "./Equipo.css"
import Colaborador from "../Colaborador/Index"
import { useState } from "react"
import hexToRgba from "hex-to-rgba"

const Equipo = (props)=>{
    /*
  colaboradores = [
    {
      equipo: programacion
      foto: http
      nombre: Miguel
      puesto: Ux
  },
   {
      equipo: Front-end
      foto: http
      nombre: Ana
      puesto: Front
  },
    {
      equipo: Data Science
      foto: http
      nombre: Rigoberto
      puesto: Data Science
  },
  ]
   */
    
    const {colorPrimario, colorSecundario, titulo, id} = props.datos  
    const {colaboradores, eliminarColaborador, actualizarColor} = props 
    const estiloTitulo= {borderColor: colorPrimario}
    const obj = {
      backgroundColor: hexToRgba(colorPrimario,0.6)
    }
    

    return <>  {colaboradores.length > 0 &&
                <section className="Equipo" style={obj}>
                  <input
                  type="color"
                  className="input-color"
                  value={colorPrimario}
                  onChange={evento=>{
                    actualizarColor(evento.target.value, id)
                  }}  
                  />
                    <h3 style={estiloTitulo}>{titulo}</h3>
                    <div className="Colaboradores">
                        {colaboradores.map((info,index)=> <Colaborador 
                            datos={info} 
                            key={index} 
                            colorPrimario={colorPrimario}
                            eliminarColaborador={eliminarColaborador}/>            
                        )}            
                    </div>
                </section>
                }</>
}
export default Equipo