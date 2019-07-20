import React from 'react'

const Header = props => {
  return (
    <header className='bg-gray pa4 tc white'>
      <img src={props.teamLogo} alt={props.name} className='w-25' />
      <h1 className='lh-title ma0 pa0'>{props.name}</h1>
      <h3 className='lh-title ma0 pa0'>{props.wins} &ndash; {props.losses} | {props.seeding} place</h3>
    </header>
  )
}

export default Header
