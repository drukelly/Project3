import React from 'react'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'
// this also works with react-router-native

const Button = styled.button`
background: rgba(255, 255, 255, .75);
border: 2px solid;
border-radius: 4px;
font-size: .8em;
font-weight: bold;
margin: 0 auto;
width: 80%;
padding: 1rem;
`
const LoginButton = withRouter(({ history }) => (
  <Button type='button' onClick={() => { history.push('/login') }}> Log In </Button>
))

export default LoginButton
