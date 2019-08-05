import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
// import Players from './pages/Players'
// import { BrowserRouter as Router, Route } from 'react-router-dom'

const Wrapper = styled.section`
padding-bottom: 86px;
padding-top: 112px;
`
const Image = styled.img`
width: 60px;
`

class TeamCard extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor (props) {
    super(props)
    this.state = {
      teams: [{
        sport: 'basketball',
        name: 'Toon Squad',
        image: '/images/basketball.png'
      },
      {
        sport: 'baseball',
        name: 'Oakland Roots',
        image: '/images/baseball.png'
      },
      {
        sport: 'hockey',
        name: 'Hamilton Mustangs',
        image: '/images/hockey.png'
      }]
    }
  }
  render () {
    return (
      <Wrapper>
        {this.state.teams.map((team) => (
          <Link to={{
            pathname: `/teams/${team.sport}`,
            state: team
          }} key={team.sport} className='link near-black'>
            <div className='bg-animate hover-bg-blue hover-white b--black-10 bb flex items-center w-100'>
              <Image src={team.image} alt={team.sport} className='ph3 pv4' />
              <h2 className='fw3'>{team.name}</h2>
            </div>
          </Link>
        ))}
      </Wrapper>
    )
  }
}

export default TeamCard
