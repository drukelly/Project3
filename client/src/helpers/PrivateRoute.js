import React from 'react'
import { Redirect, Route } from 'react-router-dom'
// import Login from '../components/pages/Login'

export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      // browser.cookies.get() ? (
      sessionStorage.getItem('loggedIn') ? (
        <Component {...props} />
      ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location }
            }}
          />
        )
    }
  />
)