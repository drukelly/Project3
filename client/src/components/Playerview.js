import React from 'react'

class Playerview extends React.Component {
    state = {
        players: [],
        isInEditMode: false,
        value: 'update'
        }

    changeEditMode = () => {
        this.setState({
            isInEditMode: !this.state.isInEditMode
        })
    }

    updateComponentValue = () => {
        this.setState({
            isInEditMode: false,
            value: this.refs.theTextInput.value
        })
    }

    renderEditView = () => {
        return <div>
            <input
                type='text'
                defaultValue={this.state.value}
                ref ='theTextInput'/>
            <button onClick={this.changeEditMode}>X</button>
            <button onClick={this.updateComponentValue}>Ok</button>
        </div>
    }

    renderDefaultView = () => {
        return <div onDoubleClick={this.changeEditMode}>
            {this.state.value}
        </div>
    }

    componentDidMount() {
        fetch('/api/team/')
            .then(results => results.json())
            .then(res => {
                console.log(res)
                this.setState({ players: res })
                console.log('state players', this.state.players)
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

            <div>{this.state.isInEditMode ? 
            this.renderEditView() :
            this.renderDefaultView()}
            </div>

      
            // <table>
            //     <tbody>
            //         {this.state.players.map((player) => (
            //             <tr key={player.id} id={player.id}>
            //                     <td><img src={player.image} id={player.id} alt={player.name}/></td>
            //                     <td>{player.name}</td>
            //                     <td>{player.jersey_number}</td>
            //                     <td>{player.position}</td>
            //                     <td>W-L: {player.wins} - {player.losses}</td>
            //                     <td> <div className="form-group" style={{margin:'15px'}}>
            //                     <div id="Team" ref={ inTeam => this.inputTeam = inTeam }/></div>
            //                     <button onClick={this.active.bind(this)}>Mark Player Active</button><button onClick={this.inactive}>Mark Player Inactive</button></td>
            //             </tr>
            //         ))}
            //     </tbody>
            // </table>
 


        )
    }
}

export default Playerview