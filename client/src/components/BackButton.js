import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'

const Button = styled.button`
background-color: transparent;
border: 0;
cursor: pointer;
left: .77em;
position: fixed;
top: 1.5em;
`

class BackButton extends Component {
  goBack = props => {
    this.props.history.goBack()
  }
  render () {
    return (
      <Button onClick={this.goBack}>
        <img src={this.props.src} alt={this.props.alt} />
      </Button>
    )
  }
}

export default withRouter(BackButton)
