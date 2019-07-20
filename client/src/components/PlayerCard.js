import React from 'react'
import { Link } from 'react-router-dom'

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
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Jersey Number</th>
                        <th>Position</th>
                        <th>Games Played</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.players.map((player) => (
                        <tr key={player.id} id={player.id}>
                                <td><Link to={'/players/' + player.id}><img src={player.image} id={player.id} alt={player.name}/></Link></td>
                                <td>{player.name}</td>
                                <td>{player.jersey_number}</td>
                                <td>{player.position}</td>
                                <td>{player.games_played}</td>
                            </tr>
                    ))}
                </tbody>
            </table>
        )
    }
}

export default PlayerCard