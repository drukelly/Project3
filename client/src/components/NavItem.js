import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Image = styled.img`
`

const NavItem = props => {
  return (
    <Link to={props.url}>
      <Image src={props.image} alt={props.label} />
      {props.label}
    </Link>
  )
}

export default NavItem
