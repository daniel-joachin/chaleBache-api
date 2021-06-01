import React, { useContext } from 'react'
import { BacheContext } from './bacheContext'
import './styles/info.css'
import './styles/crud.css'

function BacheCRUD() {
    const { bache } = useContext(BacheContext)
    return (
            <div className="infoBaches">
                <ul>
                    {/* <li>{bache.name}</li> */}
                    <li id="bacheName">{bache.name}</li>
                    <li id="fechaB">Fecha de nacimiento:  {bache.firstIncident?.toString().substring(0,10)}</li>
                    <li id="ultiB">Ultimo incidente: {bache.lastIncident?.toString().substring(0,10)}</li>
                    <li id="numB">Numero de incidentes: {bache.numIncidents}</li>
                </ul>
                
               

               
            
                <div className="bacheCRUD">
                    <button id="modiButton" className="crudButton">Modificar</button>
                    <button id="descButton" className="crudButton">Descartar</button>
                    <button id="elimiButton" className="crudButton">Eliminar</button>
                </div>
            </div>
    
    )
}

export default BacheCRUD