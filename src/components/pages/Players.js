import React from 'react'
import styled from 'styled-components'

function Players () {
  const Header = styled.header`
    background-color: #4b4444;
    color: white;
    padding: 2em;
    text-align: center;
  `
  return (
    <div>
      <Header name='Oakland Roots' teamLogo='' />
    </div>
  )
}

export default Players
