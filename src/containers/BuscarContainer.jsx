import React, { Component } from 'react'
import { Link, withRouter } from "react-router-dom";

class BuscarContainer extends Component {

    render(){
        function getData(event) {
            console.log(event.target.value);
        }
        
        function enviar() {
            console.log('Click');
        }

        return (
            <div className="search-container">
                <div className="ui menu">
                <Link to="/" className="item">Inicio</Link>
                <Link to="/informacion" className="item">Información</Link>
                <Link to="/bitacoras?id_servicio_especial=" className="item">Bitacora</Link>
                </div>
                <div className="ui container">
                    <div className="row">
                    <div className="column">
                        <div className="ui input">
                        <input name="search" type="text" onChange={getData} placeholder="Buscar servicio..."/>
                        <button className="ui orange button" type="submit" onClick={() => {enviar()}}>Buscar</button>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        )
        
    }
} 

export default withRouter(BuscarContainer)