import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import Nav from '../components/Nav'
// import Login from '../components/pages/Login'

export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      sessionStorage.getItem('loggedIn') ? (
        <div>
          <Component {...props} />
          <Nav />
        </div>
      ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: {
                from: props.location,
                style: 'run-in',
                message: 'Please log in to view this page.'
              }
            }}
          />
        )
    }
  />
)
