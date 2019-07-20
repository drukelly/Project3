import React from 'react'

const TeamHeader = (props) => {
  return (
    <div>
      <img src={props.teamLogo} alt={props.teamName} />
      <h2>{props.teamName}</h2>
      <h3>{props.wins}-{props.losses}-{props.tie}</h3> | <h3>{props.seeding} Place</h3>
    </div>
  )
}

export default TeamHeader
