import React from 'react'
import PlayerViewHockey from '../PlayerViewHockey'

const PlayViewHockey = props => {
  return (
    <PlayerViewHockey id={props.match.params.id} />
  )
}

export default PlayViewHockey
