import React, { useContext } from 'react'
import { BacheContext } from './bacheContext'
import './styles/info.css'

function BacheInfo () {
    const { bache } = useContext(BacheContext)

    return (
        <div className="infoBaches">
            <ul>
                {/* <li>{bache.name}</li> */}
                <li id="bacheName">{bache.name}</li>
                <li>Fecha de nacimiento:  {bache.firstIncident}</li>
                <li>Ultimo incidente: {bache.lastIncident}</li>
                <li>Numero de incidentes: {bache.numIncidents}</li>
            </ul>
        </div>
    )
}

export default BacheInfo
