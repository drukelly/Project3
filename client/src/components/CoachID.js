import React from 'react'
import styled from 'styled-components'

const Image = styled.div`
  background-color: whitesmoke;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 64px;
  height: 64px;
  margin: .5em auto;
  width: 64px;
`

const CoachID = props => {
  return (
    <div className='bg-gray fixed pa4 tc white w-100'>
      <Image style={{ backgroundImage: `url(${props.src})` }} alt={props.alt} />
      <h2 className='fw3 lh-title ma0 pa0 tracked'><span className='ttu'>Coach</span> {props.alt}</h2>
    </div>
  )
}

export default CoachID
