import React from 'react'
import { withRouter } from 'react-router-dom'
// this also works with react-router-native

const LoginButton = withRouter(({ history }) => (
  <button type='button' onClick={() => { history.push('/login') }}> Login </button>
))

export default LoginButton
