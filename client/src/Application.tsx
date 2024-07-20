import React from 'react'
import { Route, Routes } from 'react-router-dom'
import routes from './config/routes'

export interface IApplicationProps {

}

const Application: React.FC<IApplicationProps> = () => {
  return (
    <Routes>
      {routes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          element={<route.component {...route.props} />}
        />
      ))}
    </Routes>
  )
}

export default Application