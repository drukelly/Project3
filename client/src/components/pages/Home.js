import React, { Component } from 'react'
import SignupButton from './../SignupButton'
import LoginButton from './../LoginButton'
import styled from 'styled-components'

const Video = styled.video`
bottom: 0;
min-height: 100vh;
min-width: 100vw;
position: fixed;
right: 0;
z-index: -1;
`

class Home extends Component {
  // sessionStorage.clear()
  componentDidMount () {
    document.getElementById('playVideo').click()
  }
  render () {
    return (
      <div className='flex flex-column min-vh-100 justify-center'>
        <Video autoplay loop muted preload='auto' id='bgLoop'>
          <source src='/video/bg-loop.mp4' type='video/mp4' />
        </Video>
        <button id='playVideo' onClick={() => document.getElementById('bgLoop').play()} style={{ opacity: 0 }}>Play Video</button>
        <h1 className='lh-title ma0 pa0 tc white'>Sports Team Manager</h1>
        <div className='center flex justify-around items-center w-80'>
          <SignupButton />
          <div className='w-10' />
          <LoginButton />
        </div>
      </div>
    )
  }
}

export default Home
