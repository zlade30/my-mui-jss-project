import React from 'react'
import { Route } from 'react-router-dom'

const Routing = (route) => (
  <Route
    path={route.path}
    exact
    render={(props) => <route.component props={props} routes={route.routes} />}
  />
)

export default Routing
