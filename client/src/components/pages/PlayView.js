import React from 'react'
import PlayerView from '../PlayerView'

const PlayView = (props) => {
  return (
    <PlayerView id={props.match.params.id} />
  )
}

export default PlayView
