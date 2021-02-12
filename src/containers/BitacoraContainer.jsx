import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import axios from 'axios'
import Bitacora from '../modelos/bitacora/Bitacora'
import BitacoraComponent from '../components/Bitacora'
import { ValidarFecha } from '../helpers/regex'

class BitacoraContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bitacora: null,
        }
    }

    componentDidMount(){
        // let {folio} = this.props.match.params;
        let folio = 44468;
        axios.get(`http://tapi.sumaenlinea.mx/bitacoras?id_servicio_especial=${folio}`)
        .then(response =>{
            this.setState({
                bitacora: new Bitacora(response.data[0].data)
            })
        }).catch(console.log)
    }

    render() {
        /** @type {Bitacora} */
        const bitacora = this.state.bitacora
     
        if(!bitacora) {
            return (
                <div>
                    <h2>Bitacora</h2>
                </div>
            )
        } else {
            ValidarFecha(bitacora.tiempoInicial, bitacora.tiempoFinal)

            return (
                <BitacoraComponent 
                    modalidad={bitacora.modalidad} 
                    tiempoInicial={bitacora.tiempoInicial}
                    tiempoFinal={bitacora.tiempoFinal}
                    operador={bitacora.getOperador()}
                    unidad={bitacora.getUnidad()}
                />
            )
        }
    }
}

export default withRouter(BitacoraContainer)