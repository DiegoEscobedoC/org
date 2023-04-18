import { useState } from 'react';
import './App.css';
import Header from './componentes/header/header.js';
import Formulario from './componentes/Formulario/Formulario';
import MiOrg from './componentes/MiOrg/Index';


function App() {
  
  const [mostrarFormulario, actualizarMostrar] = useState(true)

  const cambiarMostrar =()=>{
    actualizarMostrar(!mostrarFormulario)
  }

  return (
    <div className="App">
      <Header />
      {mostrarFormulario && <Formulario /> }
      <MiOrg funcionBoton = {cambiarMostrar} />
    </div>
  );
}

export default App;
