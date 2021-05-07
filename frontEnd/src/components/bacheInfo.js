import React, { useContext } from 'react'
import { BacheContext } from './bacheContext'
import './styles/info.css'

function BacheInfo () {
    const {bache } = useContext(BacheContext)

    return (
        <div className="infoBaches">
            <ul>
                <li>{bache.name}</li>
                <li>{bache.title}</li>
            </ul>
        </div>
    )
}

export default BacheInfo
