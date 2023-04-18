import { useState } from "react"
import "./Formulario.css"
import CampoTexto from "../CampoTexto"
import ListaOpciones from "../ListaOpciones/Index"
import Boton from "../Boton/Index"


const Formulario =()=>{
     
    const [nombre,setNombre]= useState("") 
    const [puesto,setPuesto]= useState("")
    const [foto,setFoto]= useState("")
    const [equipo,setEquipo] = useState("")    
    
    const manejarEnvio = (e)=>{
        e.preventDefault()
        const datosAenviar={
            nombre,
            puesto,
            foto
        }
        console.log(datosAenviar)
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
            />

            <Boton>
                Crear
            </Boton>

        </form>        
    </section>
}

export default Formulario