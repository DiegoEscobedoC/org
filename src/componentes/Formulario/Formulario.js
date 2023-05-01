import { v4 as uuid } from 'uuid';
import { useState } from "react"
import "./Formulario.css"
import Campo from "../Campo"
import ListaOpciones from "../ListaOpciones/Index"
import Boton from "../Boton/Index"


const Formulario =(props)=>{
     
    const [nombre,setNombre]= useState("") 
    const [puesto,setPuesto]= useState("")
    const [foto,setFoto]= useState("")
    const [equipo,setEquipo] = useState("")

    const [titulo, setTitulo]= useState("")
    const [colorPrimario, setcolorPrimario]= useState("")
    
    
    const {registrarColaborador, registrarNuevoEquipo} = props 
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
            equipo,
            id: uuid(),
            fav: false
        }
        registrarColaborador(datosAenviar)      
    }
    
    const envioInfoEquipo = (e)=>{
        e.preventDefault()
        const datosEquipo={
            titulo:titulo,
            colorPrimario:colorPrimario,
            id: uuid()
        }
        registrarNuevoEquipo(datosEquipo)
    }

    return <section className="formulario">

        <form onSubmit={manejarEnvio}>
            <h1>Rellena el formulario para crear el colaborador.</h1>
            <Campo 
            titulo="Nombre" 
            placeholder="Ingresar Nombre" 
            required 
            valor={nombre}
            funcion={setNombre}
            />

            <Campo 
            titulo="Puesto" 
            placeholder="Ingresar Puesto" 
            required
            valor={puesto}
            funcion={setPuesto}
            />

            <Campo 
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

        <form onSubmit={envioInfoEquipo}>
            <h1>Rellena el formulario para crear el Equipo.</h1>
            <Campo 
            titulo="Nombre del Equipo" 
            placeholder="Ingresar Equipo" 
            required 
            valor={titulo}
            funcion={setTitulo}
            />

            <Campo
            titulo="Color del Equipo" 
            placeholder="Ingresar Color" 
            required
            valor={colorPrimario}
            funcion={setcolorPrimario}
            tipo={"color"}
            />
            <Boton>
                Crear Equipo
            </Boton>
        </form>    
    </section>
}

export default Formulario