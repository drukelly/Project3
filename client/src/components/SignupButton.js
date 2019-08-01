import React from 'react'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'
// this also works with react-router-native

const Button = styled.button`
  background: blue;
  border: 2px solid navy;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  margin: 1rem auto;
  width: 80%;
  padding: 1rem;
`

const SignupButton = withRouter(({ history }) => (
  <Button type='button' onClick={() => { history.push('/signup') }}> Create Account </Button>
))

export default SignupButton
