import React, { Component } from 'react'
import './styles/info.css'

export default class BacheInfo extends Component {
    render() {
        return (
            <div className="infoBaches">

                <ul>
                    <li id="nameBache">{this.props.name}</li>
                    <li>Ubicación:  {this.props.location}</li>
                    <li>Seriedad: {this.props.seriedad}</li>
                </ul>
            </div>
        )
    }
}
