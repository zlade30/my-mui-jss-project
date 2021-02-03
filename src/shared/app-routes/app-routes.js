import React, { Suspense } from 'react'
import { Switch, withRouter } from 'react-router-dom'
import { routes } from '../routes'
import Routing from '../routes/routing'

const AppRoutes = () => (
  <Suspense fallback={<div>Loading</div>}>
    <Switch>
      {routes &&
        routes.length &&
        routes.map((route) => <Routing key={route.path} {...route} />)}
    </Switch>
  </Suspense>
)

export default withRouter(AppRoutes)
