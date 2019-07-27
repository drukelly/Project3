import React from 'react'
import CoachID from '../CoachID'
import TeamCard from '../TeamCard'

// the URL for each card is currently only going to the baseball page
const TeamsView = () => {
  return (
    <div>
      <CoachID src='/images/penguin.png' alt='McRandall' />
      <TeamCard />
    </div>
  )
}

export default TeamsView
