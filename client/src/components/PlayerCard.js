import React from 'react'

class PlayerCard extends React.Component {
    state = {
        players: []
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
                    <td><img src={player.image}/></td>
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