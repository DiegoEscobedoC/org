import { useState } from "react"
import "./Formulario.css"
import CampoTexto from "../CampoTexto"
import ListaOpciones from "../ListaOpciones/Index"
import Boton from "../Boton/Index"


const Formulario =(props)=>{
     
    const [nombre,setNombre]= useState("") 
    const [puesto,setPuesto]= useState("")
    const [foto,setFoto]= useState("")
    const [equipo,setEquipo] = useState("")   
    
    const {registrarColaborador} = props 
    /* props = {
        equipos={equipos.map(array => array.titulo)}
        registrarColaborador={registrarColaborador}
    } */
    
    const manejarEnvio = (e)=>{
        e.preventDefault()
        const datosAenviar={
            nombre,
            puesto,
            foto,
            equipo
        }
        registrarColaborador(datosAenviar)       
    }       

    return <section className="formulario">

        <form onSubmit={manejarEnvio}>
            <h1>Rellena el formulario para crear el colaborador.</h1>
            <CampoTexto 
            titulo="Nombre" 
            placeholder="Ingresar Nombre" 
            required 
            valor={nombre}
            funcion={setNombre}
            />

            <CampoTexto 
            titulo="Puesto" 
            placeholder="Ingresar Puesto" 
            required
            valor={puesto}
            funcion={setPuesto}
            />

            <CampoTexto 
            titulo="Foto" 
            placeholder="Ingresar enlace de foto" 
            required
            valor={foto}
            funcion={setFoto}
            />

            <ListaOpciones
            valor= {equipo}
            funcion={setEquipo}
            equipos = {props.equipos}
            />

            <Boton>
                Crear
            </Boton>

        </form>        
    </section>
}

export default Formulario