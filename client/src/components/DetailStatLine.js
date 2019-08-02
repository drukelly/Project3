import React from 'react'
import styled from 'styled-components'

const Stat = styled.dl`
color: white;
margin: 0;
padding-left: .75em;
padding-right: .75em;
`

const DetailStatLine = props => {
  return (
    <Stat>
      <dt className='gray lh-copy'><abbr title={props.title}>{props.stat}</abbr></dt>
      <dd className='f4 lh-copy ma0 pa0 tc'>{props.statValue}</dd>
    </Stat>
  )
}

export default DetailStatLine
