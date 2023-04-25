/* eslint-disable array-callback-return */
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
    {
      equipo: Data Science
      foto: http
      nombre: Rigoberto
      puesto: Data Science
  },
  ]
   */
    
    const {colorPrimario, colorSecundario, titulo} = props.datos  
    const {colaboradores} = props 
    const estiloTitulo= {borderColor: colorPrimario}    

    return <>  {colaboradores.length > 0 &&
                <section className="Equipo" style={{backgroundColor: colorSecundario}}>
                    <h3 style={estiloTitulo}>{titulo}</h3>
                    <div className="Colaboradores">
                        {colaboradores.map((info,index)=> <Colaborador 
                            datos={info} 
                            key={index} 
                            colorPrimario={colorPrimario}/>            
                        )}            
                    </div>
                </section>
                }</>
}
export default Equipo