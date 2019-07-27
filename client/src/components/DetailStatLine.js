import React from 'react'
import styled from 'styled-components'

const Stat = styled.dl`
  border-left: 1px solid rgba(255, 255, 255, .25);
  color: white;
  margin: 0;
  padding-left: 2em;
  padding-right: 2em;
  &:first-child {
    border-left: 0;
  }
`

const DetailStatLine = props => {
  return (
    <Stat>
      <dt className='gray lh-copy'>{props.stat}</dt>
      <dd className='f4 lh-copy ma0 pa0 tc'>{props.statValue}</dd>
    </Stat>
  )
}

export default DetailStatLine
