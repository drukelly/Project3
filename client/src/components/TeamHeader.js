import React from 'react'
import styled from 'styled-components'

const Image = styled.img`
  width: 64px;
`

const TeamHeader = (props) => {
  return (
    <div className='bg-gray fixed pa4 tc white w-100'>
      <Image src={props.teamLogo} alt={props.teamName} />
      <h2 className='fw3 lh-title ma0 pa0 tracked ttu'>{props.teamName}</h2>
      <div className='center f7 flex items-center justify-around w-60'>
        <h3 className='lh-title ma0 pa0'>{props.wins}-{props.losses}-{props.tie}</h3>
        <h3 className='lh-title ma0 pa0'>{props.seeding} Place</h3>
      </div>
    </div>
  )
}

export default TeamHeader
