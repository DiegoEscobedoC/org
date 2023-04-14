import "./ListaOpciones.css"

const ListaOpciones =  ()=>{

    const equipos = [
        "Front-End",
        "Data Science",
        "Devops",
        "Ux y Diseño",
        "Móvil",
        "Inovación y Gestión"
    ]

    return <div className="Lista-Opciones">
        <label>Equipo</label>
        <select>
            {equipos.map( (listaEquipo,index) => <option key={index}>{listaEquipo}</option>
            )}
        </select>
    </div>
}
export default ListaOpciones

/*
    const fantasia = [
        <option> font End </option>,
        <option> Data Science </option>,
        <option> Ux-Uix </option>,
        <option> DevOps </option>
    ]*/

