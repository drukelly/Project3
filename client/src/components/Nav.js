import React, { Component } from 'react'
import NavItem from './NavItem'
import LogoutButton from './LogoutButton'
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
class Nav extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props)
    // this.state = {
    //   isLoggedIn: sessionStorage.getItem('loggedIn')
    // }
  }

  updateNav() {
    return <LogoutButton image='/images/logout.png' label='Log Out' />
  }

  render() {
    // console.log('logout button should be => ' + this.state.isLoggedIn)
    return (
        <NavWrapper>
          <NavItem url='/teams' image='/images/teams.png' label='Teams' />
          <NavItem url='/messages' image='/images/msgs.png' label='Messages' />
          <LogoutButton image='/images/logout.png' label='Log Out' />
          {/* {this.state.isLoggedIn !== null ? this.updateNav() : ''} */}
        </NavWrapper>
    )
  }
}

export default Nav
