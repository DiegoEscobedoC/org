import { v4 as uuid } from 'uuid';
import { useState } from 'react';
import './App.css';
import Header from './componentes/header/header.js';
import Formulario from './componentes/Formulario/Formulario';
import MiOrg from './componentes/MiOrg/Index';
import Equipo from './componentes/Equipo/Index';
import Footer from './componentes/Footer/Index.jsx';

function App() {

  // Seccion HOOKS
  const [equipo,setEquipo] = useState([
    {
    id: uuid(),
    titulo: "Programación",
    colorSecundario: "#D9F7E9",
    colorPrimario: "#57C278"
  },
  {
    id: uuid(),
    titulo: "Front-End",
    colorSecundario: "#E8F8FF",
    colorPrimario: "#82CFFA"
  },
  {
    id: uuid(),
    titulo: "Data Science",
    colorSecundario: "#F0F8E2",
    colorPrimario: "#A6D157"
  },
  {
    id: uuid(),
    titulo: "Devops",
    colorSecundario: "#FDE7E8",
    colorPrimario: "#E06B69"
  },
  {
    id: uuid(),
    titulo: "Ux Diseño",
    colorSecundario: "#DB6EBF",
    colorPrimario: "#FAE9F5"
  },
  {
    id: uuid(),
    titulo: "Móvil",
    colorSecundario: "#FFF5D9",
    colorPrimario: "#FFBA05"
  },
  {
    id: uuid(),
    titulo: "Innovación y Gestión",
    colorSecundario: "#FFEEDF",
    colorPrimario: "#FF8A29"
  },
  ])
  const [mostrarFormulario, actualizarMostrar] = useState(true)
  const [colaboradores, setcolaboradores] = useState([{
    id: uuid(),
    equipo: "Front-End",
    foto: "https://github.com/harlandlohora.png",
    nombre: "Harland Lohora",
    puesto: "Instructor"
  },
  {
    id: uuid(),
    equipo: "Programación",
    foto: "https://github.com/genesysaluralatam.png",
    nombre: "Genesys Rondón",
    puesto: "Desarrolladora de software e instructora"
  },
  {
    id: uuid(),
    equipo: "Ux Diseño",
    foto: "https://github.com/JeanmarieAluraLatam.png",
    nombre: "Jeanmarie Quijada",
    puesto: "Instructora en Alura Latam"
  },
  {
    id: uuid(),
    equipo: "Programación",
    foto: "https://github.com/christianpva.png",
    nombre: "Christian Velasco",
    puesto: "Head de Alura e Instructor"
  },
  {
    id: uuid(),
    equipo: "Innovación y Gestión",
    foto: "https://github.com/JoseDarioGonzalezCha.png",
    nombre: "Jose Gonzalez",
    puesto: "Dev FullStack"
  }])

  /// Termina Seccion hooks---------------------------------------------------

  // Mostrar el Formulario
  const cambiarMostrar =()=>{
    actualizarMostrar(!mostrarFormulario)
  }
 
  // Registrar Colaborador:
  const registrarColaborador= (colaborador)=>{
    setcolaboradores([...colaboradores,colaborador])
  }

  // Eliminar Colaborador
  const eliminarColaborador = (id)=>{
    const nuevoArreglo = colaboradores.filter((elemento)=>{
      console.log(elemento.id)
      return elemento.id !== id
    })
    setcolaboradores(nuevoArreglo)
  }

  // Actualizar Color
  const actualizarColor = (color,id)=>{
    const equiposActualizados = equipo.map(verificar=>{
      if(verificar.id === id){
        verificar.colorPrimario = color
      }
      return verificar
    })
    setEquipo(equiposActualizados)
  }

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

  return (
    <div className="App">
      <Header />
      {
      mostrarFormulario && <Formulario 
        equipos={equipo.map(array => array.titulo)}
        registrarColaborador={registrarColaborador}        
      />}
        
      <MiOrg funcionBoton = {cambiarMostrar} />

      {equipo.map( info => <Equipo 
        datos={info} 
        key={info.titulo}
        colaboradores = {colaboradores.filter( index => index.equipo=== info.titulo)}
        eliminarColaborador= {eliminarColaborador}
        actualizarColor={actualizarColor}
        /> )}

        <Footer/>

    </div>
  );
}

export default App;

