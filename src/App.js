import React, { Fragment } from 'react'
import { BrowserRouter as Switch, Route, BrowserRouter } from "react-router-dom";
import './App.css'
import 'semantic-ui-css/semantic.min.css'
import logo from './images/logo.png';
import { Button, Image, Grid, Divider } from 'semantic-ui-react'

import InformacionContainer from './containers/InformacionContainer'
import BitacoraContainer from './containers/BitacoraContainer'
import BuscarContainer from './containers/BuscarContainer'
import MapContainer from './containers/MapContainer'

export default function App () {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={BuscarContainer} />
          <Fragment>
          <div className="contenedor-general">
              <Grid container columns={1}>
                <Grid.Row centered className="logo-container">
                  <Image src={logo} size='small' />
                </Grid.Row>

                <Route path="/informacion/:folio">
                  <InformacionContainer />

                  <Divider className="ui divider" />

                  <BitacoraContainer />

                  <Divider className="ui divider" />

                  <MapContainer/>

                </Route>
                
                <Button fluid color='orange' href="https://suma.mx/cotizacion/" target="_blank">Solicitar una nueva cotización</Button>
              </Grid>
            </div>
          </Fragment>
        </Switch>
      </BrowserRouter>
    );
}