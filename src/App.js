import { useState } from 'react';
import './App.css';
import Header from './componentes/header/header.js';
import Formulario from './componentes/Formulario/Formulario';
import MiOrg from './componentes/MiOrg/Index';
import Equipo from './componentes/Equipo/Index';
import Footer from './componentes/Footer/Index.jsx';

function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(true)
  const [colaboradores, setcolaboradores] = useState([])

  const cambiarMostrar =()=>{
    actualizarMostrar(!mostrarFormulario)
  }
 
  // Registrar Colaborador:
  const registrarColaborador= (colaborador)=>{
    setcolaboradores([...colaboradores,colaborador])
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

  const equipos = [
    {
    titulo: "Programación",
    colorSecundario: "#D9F7E9",
    colorPrimario: "#57C278"
  },
  {
    titulo: "Front-End",
    colorSecundario: "#E8F8FF",
    colorPrimario: "#82CFFA"
  },
  {
    titulo: "Data Science",
    colorSecundario: "#F0F8E2",
    colorPrimario: "#A6D157"
  },
  {
    titulo: "Devops",
    colorSecundario: "#FDE7E8",
    colorPrimario: "#E06B69"
  },
  {
    titulo: "Ux Diseño",
    colorSecundario: "#DB6EBF",
    colorPrimario: "#FAE9F5"
  },
  {
    titulo: "Móvil",
    colorSecundario: "#FFF5D9",
    colorPrimario: "#FFBA05"
  },
  {
    titulo: "Innovación y Gestión",
    colorSecundario: "#FFEEDF",
    colorPrimario: "#FF8A29"
  },
  ]

  return (
    <div className="App">
      <Header />
      {
      mostrarFormulario && <Formulario 
        equipos={equipos.map(array => array.titulo)}
        registrarColaborador={registrarColaborador}        
      />}
        
      <MiOrg funcionBoton = {cambiarMostrar} />

      {equipos.map( info => <Equipo 
        datos={info} 
        key={info.titulo}
        colaboradores = {colaboradores.filter( index => index.equipo=== info.titulo)}
        /> )}

        <Footer/>

    </div>
  );
}

export default App;

