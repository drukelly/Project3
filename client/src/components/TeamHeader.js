import React from 'react'
import styled from 'styled-components'

const Image = styled.img`
width: 64px;
`
const Button = styled.a`
background: transparent;
border: 2px solid;
border-radius: 4px;
color: white;
padding: .25em .65em .25em .5em;
  &:hover {
    background: green;
  }
`

const TeamHeader = props => {
  return (
    <div className='bg-gray fixed pa3 white w-100'>
      <div className='flex items-center'>
        <Image src={props.teamLogo} alt={props.teamName} className='center w-30' />
        <div className='w-70'>
          <h2 className='fw3 lh-title ma0 pa0 tracked ttu'>{props.teamName}</h2>
          <div className='f7 flex items-center ma0 mb2'>
            <h3 className='lh-title ma0 mr3 pa0'>{props.wins}-{props.losses}-{props.tie}</h3>
            <h3 className='lh-title ma0 pa0'>{props.seeding} Place</h3>
          </div>
          {/* eslint-disable-next-line no-undef */}
          {sessionStorage.getItem('admin') === '1' ? <Button href='/create' className='dib link'> + Add Player </Button> : null}
        </div>
      </div>
    </div>
  )
}

export default TeamHeader
