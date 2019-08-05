import React from 'react'
import PlayerViewBasketball from '../PlayerViewBasketball'

const PlayViewBasketball = props => {
  return (
    <PlayerViewBasketball id={props.match.params.id} />
  )
}

export default PlayViewBasketball
