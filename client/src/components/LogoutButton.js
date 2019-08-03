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

const LogoutButton = withRouter(({ history }) => (
    <Button type='button' onClick={(props) => {
      console.log('props', props)
        history.push('/login')
        sessionStorage.removeItem('loggedIn')
    }}> Logout </Button>
))

export default LogoutButton
