import React from 'react'
import NavItem from './NavItem'
import styled from 'styled-components'

const NavWrapper = styled.nav`
  align-items: center;
  background-color: black;
  bottom: 0;
  color: white;
  display: flex;
  justify-content: space-around;
  margin: 0;
  padding: 1rem 2rem;
  position: fixed;
  width: 100%;
`

/**
 * Link: Provides declarative, accessible navigation around your application.
 * navigates our application to another route when clicked, just like an anchor tag.
 * But the Link component prevents our entire React application from reloading when we go to different URLs.
 * Instead, only the components that need to change will change.
 */
function Nav () {
  return (
    <NavWrapper>
      <NavItem url='/' image='/images/home.png' label='Home' />
      <NavItem url='/teams' image='/images/teams.png' label='Teams' />
      <NavItem url='/players' image='/images/players.png' label='Players' />
    </NavWrapper>
  )
}

export default Nav
