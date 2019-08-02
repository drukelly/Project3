import React from 'react'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'
// this also works with react-router-native

const Button = styled.button`
background: green;
border-radius: 4px;
border: 2px solid black;
color: white;
font-weight: bold;
margin: 1rem auto;
padding: 1rem;
width: 80%;
`

const SignupButton = withRouter(({ history }) => (
  <Button type='button' onClick={() => { history.push('/signup') }}> Create Account </Button>
))

export default SignupButton
