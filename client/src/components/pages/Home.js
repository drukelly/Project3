import React from 'react'
import SignupButton from './../SignupButton'
import LoginButton from './../LoginButton'

const Home = () => {
  return (
    <div className='flex flex-column min-vh-100 justify-center' style={{ paddingBottom: 80 }}>
      <h1 className='lh-title ma0 pa0 tc'>Sports Team Manager</h1>
      <SignupButton />
      <LoginButton />
    </div>
  )
}

export default Home
