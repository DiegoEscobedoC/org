
import "./CampoTexto.css"

const CampoTexto = (props)=>{
    const placerHolderModificado = `${props.placeholder}...`

    return <div className="campo-texto">
       <label>{props.titulo}</label>
       <input placeholder={placerHolderModificado}/>
    </div>
}

export default CampoTexto