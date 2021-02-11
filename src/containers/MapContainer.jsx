import React, { Component } from "react"
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import { Grid, Header } from 'semantic-ui-react'
import ContenedorComponente from '../components/Contenedor'

const MyComponent = withGoogleMap((props) =>
    <GoogleMap
      defaultZoom={15}
      defaultCenter={{ lat: 20.633848, lng: -103.43247 }}
    >
      {props.isMarkerShown && <Marker position={{ lat: 20.633848, lng:-103.43247 }} onClick={props.onMarkerClick} />}
    </GoogleMap>
)

class MapContainer extends Component {
   /*state = {
        isMarkerShown: false,
    }

    componentDidMount() {
        this.delayedShowMarker()
    }

    delayedShowMarker = () => {
        setTimeout(() => {
        this.setState({ isMarkerShown: true })
        }, 3000)
    }

    handleMarkerClick = () => {
        this.setState({ isMarkerShown: false })
        this.delayedShowMarker()
    }*/

    render() {
        return (
            <ContenedorComponente>
                <Grid centered>
                    <Grid.Row>
                        <Grid.Column width={16}>
                            <Header as="h3" textAlign="center">Datos del servicio</Header>
                            <p className="subTitle">Sigue la ruta de tu sevicio</p>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>

                <MyComponent
                /* isMarkerShown={this.state.isMarkerShown}
                    onMarkerClick={this.handleMarkerClick}*/
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `400px` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                />
            </ContenedorComponente>
        )
    }
}

export default MapContainer