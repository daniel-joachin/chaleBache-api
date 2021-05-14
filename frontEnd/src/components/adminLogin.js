import React, { Component } from 'react'
import './styles/adminLogin.css'

export default class AdminLogin extends Component {
    render() {
        return (
            <div >
                <div className='loginApp'></div>
                <div id='formLogin'>
                    <form className='box'>
                        <h1>Inicio de Sesión</h1>
                        <input id="loginI" type="text" name="" placeholder="USUARIO / CORREO"></input>
                        <input id="loginI" type="password" name="" placeholder="CONTRASEÑA" ></input>
                        <input type="button" name="" value="Iniciar" onclick="sayHola()"></input>
                    </form>
                
                </div>
            </div>
        )
    }
}
