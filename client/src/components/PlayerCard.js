import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Image = styled.img`
  margin: .5em 1em;
  width: 100px;
`

const Wrapper = styled.section`
  padding-top: 200px;
`

class PlayerCard extends React.Component {
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
              <Link to={'/players/' + player.id} key={player.id} className='link blue'>
                <div className='flex items-center w-100'>
                  <Image src={player.image} id={player.id} alt={player.name} />
                  <div className='flex items-center justify-around'>
                    <div>{player.jersey_number}</div>
                    <div className='b'>{player.name}</div>
                    <div>{player.position}</div>
                    <div>{player.games_played}</div>
                  </div>
                </div>
              </Link>
            ))}
          </Wrapper>
        )
    }
}

export default PlayerCard
