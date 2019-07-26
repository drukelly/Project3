import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Image = styled.div`
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: cover;
  border: 1px solid silver;
  border-radius: 60px;
  height: 60px;
  margin: .5em 1em;
  width: 60px;
`

const Wrapper = styled.section`
padding-bottom: 100px;
  padding-top: 189px;
`

class PlayerCard extends Component {
  state = {
    players: []
  }
  componentDidMount() {
    console.log('player card props', this.props)
    fetch(`/api/team/${this.props.sport}`)
      .then(results => results.json())
      .then(res => {
        console.log(res)
        this.setState({ players: res })
        console.log('state players', this.state.players)
        console.log(this.state.players)
      })
      .catch(err => console.log(err))
  }
  render() {
    return (
      <Wrapper>
        {this.state.players.map((player) => (
          <Link to={`/players/${player.id}`} key={player.id} className='link near-black'>
            <div className='b--black-10 bb flex items-center w-100'>
              <Image style={{ backgroundImage: `url(${player.image})` }} id={player.id} alt={player.name} />
              <div className='f6 lh-copy pv2'>
                <div>#{player.jersey_number} {player.position}</div>
                <div className='b'>{player.name}</div>
                <div>
                  {this.props.sport === 'baseball' && player.position === 'Pitcher'
                    ? `ERA: ${player.era} W: ${player.wins} - L: ${player.losses}`
                    : (this.props.sport === 'baseball'
                    ? `BA: ${player.batting_average}`
                    : (this.props.sport === 'basketball'
                      ? `Points: ${player.pts}`
                      : `Games Played: ${player.games_played}`
                    ))
                  }
                  </div>
              </div>
            </div>
          </Link>
        ))}
      </Wrapper>
    )
  }
}

export default PlayerCard
