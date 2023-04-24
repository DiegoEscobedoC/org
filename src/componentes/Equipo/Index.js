import "./Equipo.css"
import Colaborador from "../Colaborador/Index"

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
  ]
   */
    const {colaboradores} = props
    const {colorPrimario, colorSecundario, titulo} = props.datos   
    const estiloTitulo= {borderColor: colorPrimario}

    return <section className="Equipo" style={{backgroundColor: colorSecundario}}>

        <h3 style={estiloTitulo}>{titulo}</h3>
        <div className="Colaboradores">
            
            {colaboradores.map((info,index)=> <Colaborador datos={info} key={index}/>)}
        </div>
    </section>
}

export default Equipo