import React from 'react'
import Header from '../Header'
import Player from '../Player'

const Players = () => {
  return (
    <div>
      <Header name='Oakland Roots' teamLogo='/images/oakland-roots.png' wins='12' losses='4' seeding='2nd' />
      <Player />
    </div>
  )
}

export default Players
