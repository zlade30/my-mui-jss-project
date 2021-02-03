import 'fontsource-roboto'
import CssBaseline from '@material-ui/core/CssBaseline'
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { AppRoutes } from './shared/app-routes'

const App = () => (
  <Router>
    <>
      <CssBaseline />
      <AppRoutes />
    </>
  </Router>
)

ReactDOM.render(<App />, document.getElementById('root'))
