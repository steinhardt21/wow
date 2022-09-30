import { Route, Routes } from 'react-router-dom'

import App from './App'
import Registration from './pages/Registration/Registration'

const ROUTES = [
  { path: '/', key: 'ROOT', exact: true, component: <App /> },
  { path: '/register', key: 'REGISTER_ACCOUNT', exact: true, component: <Registration />}
]

export default ROUTES

export function RenderRoutes({routes}) {
  return (
    <Routes>
      {routes.map(route => 
         <Route 
           key={route.key}
           path={route.path}
           exact={route.exact}
           element={route.component}
          />
      )}
      <Route element={<h1>{'Not found!'}</h1>} />
    </Routes>
  )
}