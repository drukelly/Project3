import React from 'react'
import TeamHeader from './../TeamHeader'
import PlayerCard from './../PlayerCard'

const Coach = props => {
  console.log('props', props)
  console.log('sport', props.match.params.team)
  return (
    <div>
      <TeamHeader teamName={props.location.state.name} teamLogo={props.location.state.image} wins='12' losses='4' tie='0' seeding='2nd' />
      <PlayerCard sport={props.match.params.team} />
    </div>
  )
}

export default Coach
