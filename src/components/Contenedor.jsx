import React, { Component } from 'react'

export default class ContenedorComponente extends Component {
    render(){
        return (
            <div {...this.props} className="contenedor" />
        )
        
    }
} 
