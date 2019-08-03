import React from 'react'
import { Redirect, Route } from 'react-router-dom'
// import Login from '../components/pages/Login'

export const AdminRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            sessionStorage.getItem('loggedIn') && sessionStorage.getItem('admin') === 1 ? (
                <Component {...props} />
            ) : (
                    <Redirect
                        to={{
                            pathname: '/notice'
                        }}
                    />
                )
        }
    />
)