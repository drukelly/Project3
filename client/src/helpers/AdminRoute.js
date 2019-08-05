import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import Nav from '../components/Nav'

// eslint-disable-next-line no-undef
let isLoggedIn = sessionStorage.getItem('loggedIn')
// eslint-disable-next-line no-undef
let isAdmin = sessionStorage.getItem('admin') === '1'

export const AdminRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isLoggedIn && isAdmin ? (
        <div>
          <Component {...props} />
          <Nav />
        </div>
      ) : (
        <Redirect to={{ pathname: '/notice' }} />
      )
    }
  />
)
