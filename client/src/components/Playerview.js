import React, { Component } from 'react'

//display 1 thing only
class Playerview extends Component {
    state = {
        players: [],
        // isInEditMode: false,
        // value: 'update'

        }

    // changeEditMode = () => {
    //     this.setState({
    //         isInEditMode: !this.state.isInEditMode
    //     })
    // }

    // updateComponentValue = () => {
    //     this.setState({
    //         isInEditMode: false,
    //         value: this.refs.theTextInput.value
    //     })
    // }

    // renderEditView = () => {
    //     return <div>
    //         <input
    //             type='text'
    //             defaultValue={this.state.value}
    //             ref ='theTextInput'/>
    //         <button onClick={this.changeEditMode}>X</button>
    //         <button onClick={this.updateComponentValue}>Ok</button>
    //     </div>
    // }

    // renderDefaultView = () => {
    //     return <div onDoubleClick={this.changeEditMode}>
    //         {this.state.value}
    //     </div>
    // }

    componentDidMount() {
        var id = this.props.match.params.id
        console.log(`${this.props.match.params.id}`)
        fetch(`/api/players/` + id)
            .then(results => results.json())
            .then(res => {
                console.log(res)
                this.setState({ players: res })
                console.log('state players', this.state.players[0].on_team)
            })
    }

    active () {
        alert('Player is now active!')
        fetch('/api/current', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: this.inputTeam.value
          })
            .then(data => {
              console.log(data)
            })
            .catch(function (error) {
                console.log(error);
              });
              this.inputTeam.value = true;

    }

    inactive() {
        alert('Player is no longer active!')
    }

    render() {
        return (

            // <div>{this.state.isInEditMode ? 
            // this.renderEditView() :
            // this.renderDefaultView()}
            // </div>

      
            <div>
                    {this.state.players.map((player) => (
                        <div key={player.id} id={player.id}>
                                <img src={player.image} id={player.id} alt={player.name}/><br/>
                                {player.name}<br/>
                                {player.jersey_number}<br/>
                                {player.position}<br/>
                                <div>{player.position === 'Pitcher' ? `ERA: ${player.era} W: ${player.wins} - L: ${player.losses}` : `BA: ${player.batting_average}`}</div>
                               { /* this doesn't work yet */ }
                                <div className="form-group" style={{margin:'15px'}}>
                                <div id="Team" ref={ inTeam => this.inputTeam = inTeam }/></div>
                                <div>{player.on_team === false ? <button onClick={this.active.bind(this)}>Mark Player Active</button> : <button onClick={this.inactive}>Mark Player Inactive</button>}</div>           
                        </div>
                    ))}
            </div>
 


        )
    }
}

export default Playerview