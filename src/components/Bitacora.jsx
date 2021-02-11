import React from 'react'
import { Image, Header, Grid, Icon } from 'semantic-ui-react'
import ContenedorComponente from '../components/Contenedor'

const BitacoraComponent = (props) => (
    <ContenedorComponente>
        <Grid centered>
            <Grid.Row>
                <Grid.Column width={16}>
                    <Header as="h3" textAlign='center'>Datos del servicio</Header>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column width={8} className="col-bitacora">
                    <Header as='h4'><Icon className="map marker alternate orange" size='large' />Punto de partida</Header>
                    <p><span>Fecha: </span>{props.fechaInicial}</p>
                    <p><span>Hora: </span>{props.tiempoInicial}</p>
                    <p><span>Lugar: </span></p>
                    <p><span>Dirección: </span></p>
                    <p><span>Comentarios: </span></p>
                </Grid.Column>

                <Grid.Column width={8} className="col-bitacora">
                    <Header as='h4'><Icon className="map marker alternate orange" size='large' />Punto de destino</Header>
                    <p><span>Fecha: </span>{props.fechaFinal}</p>
                    <p><span>Hora: </span>{props.tiempoFinal}</p>
                    <p><span>Lugar: </span></p>
                    <p><span>Dirección: </span></p>
                    <p><span>Comentarios: </span></p>
                </Grid.Column>
            </Grid.Row>

            <Grid.Row>
                <Grid.Column width={8} className="col-bitacora">
                    <Header as='h4'>Unidad</Header>
                    <div className="box-img">
                        <Image src={props.unidad.fotografia} className="unidad-imagenes" />
                    </div>
                    <p><span>Tipo: </span>{props.unidad.tipo}</p>
                    <p><span>Capacidad: </span>{props.unidad.pasajeros}</p>
                </Grid.Column>
                <Grid.Column width={8} className="col-bitacora">
                    <Header as='h4'>Operador</Header>
                    <div className="box-img">
                        <Image src={props.operador.fotografia} className="unidad-imagenes" />
                    </div>
                    <p><span>Nombre: </span>{props.operador.nombre}</p>
                    <p><span>Cel: </span>{props.operador.numeroTelefono}</p>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </ContenedorComponente>
)

export default BitacoraComponent