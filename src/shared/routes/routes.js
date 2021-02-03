import { lazy } from 'react'

const Login = lazy(() => import('../../containers/authentication'))

const Routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
    hidden: true,
  },
]

export default Routes
