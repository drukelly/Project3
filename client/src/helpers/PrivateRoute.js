import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import Nav from '../components/Nav'

// eslint-disable-next-line no-undef
let isLoggedIn = sessionStorage.getItem('loggedIn')

export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isLoggedIn ? (
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
