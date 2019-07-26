import React from 'react'
import TeamHeader from '../TeamHeader'
import PlayerView from '../PlayerView'

const PlayView = (props) => {
  return (
    <div>
      <TeamHeader teamName='Oakland Roots' teamLogo='/images/baseball.png' wins='12' losses='4' tie='0' seeding='2nd' />
      <PlayerView id={props.match.params.id} />
    </div>
  )
}

export default PlayView
