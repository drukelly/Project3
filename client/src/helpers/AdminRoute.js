import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import Nav from '../components/Nav'
// import Login from '../components/pages/Login'

export const AdminRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            sessionStorage.getItem('loggedIn') && sessionStorage.getItem('admin') === '1' ? (
                <div>
                <Component {...props} />
                <Nav />
                </div>
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