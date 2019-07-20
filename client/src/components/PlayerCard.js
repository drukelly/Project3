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
        players: [],
        link: ''
    }
    componentDidMount() {
        fetch('/api/team')
            .then(results => results.json())
            .then(res => {
                console.log(res)
                this.setState({ players: res })
                console.log('state players', this.state.players)
            })
    }
    showCardDetail = (event) => {
        console.log(event.target.id)
        this.setState({link: '/players/' + event.target.id})
        console.log(this.state.link)
    }
    render() {
        return (
          <Wrapper>
            {this.state.players.map((player) => (
              <Link to={'/players/' + player.id} key={player.id} className='link near-black'>
                <div className='b--black-10 bb flex items-center w-100'>
                  <Image style={{backgroundImage: `url(${player.image})`}} id={player.id} alt={player.name} />
                  <div className='f6 lh-copy pv2'>
                    <div>{player.jersey_number} - {player.position}</div>
                    <div className='b'>{player.name}</div>
                    <div>{player.position === 'Pitcher' ? `ERA: ${player.era} W: ${player.wins} - L: ${player.losses}` : `BA: ${player.batting_average}`}</div>
                  </div>
                </div>
              </Link>
            ))}
          </Wrapper>
        )
    }
}

export default PlayerCard
