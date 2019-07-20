import React from 'react'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'
// this also works with react-router-native

const Button = styled.button`
  background: transparent;
  border: 2px solid;
  border-radius: 4px;
  font-weight: bold;
  margin: 0 auto;
  width: 80%;
  padding: 1rem;
`

const LoginButton = withRouter(({ history }) => (
  <Button type='button' onClick={() => { history.push('/login') }}> Login </Button>
))

export default LoginButton
