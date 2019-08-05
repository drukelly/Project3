import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'
import styled from 'styled-components'
// this also works with react-router-native

const Image = styled.img`
display: block;
height: 32px;
margin: 0 auto .5rem;
width: 32px;
`

class LogoutButton extends Component {
  constructor (props) {
    super(props)
    this.state = {
      redirectTo: '/login'
    }
  }
  clearSession = () => {
    sessionStorage.clear()
  }
  render () {
    return (
      <Link className='dim f7 link tc white' to={{
        pathname: '/'
      }}>
        <div onClick={this.clearSession}>
          <Image src={this.props.image} alt={this.props.label} />
          {this.props.label}
        </div>
      </Link>
    )
  }
}

export default withRouter(LogoutButton)
