import React from 'react'
import TeamHeader from './../TeamHeader'
import Playerview from './../Playerview'

const Playview = (props) => {
  return (
    <div>
      <TeamHeader teamName='Oakland Roots' teamLogo='/images/oakland-roots.png' wins='12' losses='4' tie='0' seeding='2nd' />
      <Playerview id={props.match.params.id} />
    </div>
  )
}

export default Playview
