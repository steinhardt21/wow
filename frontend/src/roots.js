import App from './App'
import Registration from './pages/Registration/Registration'

const ROUTES = [
  { path: '/', key: 'ROOT', exact: true, component: <App /> },
  { path: '/register', key: 'REGISTER_ACCOUNT', exact: true, component: <Registration />}
]