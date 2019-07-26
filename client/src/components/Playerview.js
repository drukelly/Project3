import React, { Component } from 'react'
import BackButton from './BackButton'
import DetailStatLine from './DetailStatLine'
import styled from 'styled-components'

const PlayerPhoto = styled.div`
  background-color: beige;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;
  height: 50vh;
  position: relative;
`

const Button = styled.button`
  background: transparent;
  border: 2px solid;
  border-radius: 4px;
  font-weight: bold;
  margin: 1rem auto;
  width: 80%;
  padding: 1rem;
`

//display 1 thing only
class PlayerView extends Component {
  state = {
    players: []
    // isInEditMode: false,
    // value: 'update'
  }

  //for click edit functionality
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
    var id = this.props.id
    console.log(`${this.props.id}`)
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
      //for click edit functionality
      // <div>{this.state.isInEditMode ? 
      // this.renderEditView() :
      // this.renderDefaultView()}
      // </div>
      
      <div>
        {this.state.players.map((player) => (
          <div>
            <PlayerPhoto key={player.id} id={player.id} style={{ backgroundImage: `url(${player.image})`}}>
              <BackButton src='/images/btn-back.png' alt='Go Back' />
              <div className='absolute bottom-0 f4 flex flex-column pa4'>
                <div className='lh-copy'><span className='bg-black-80 pa2 white'>#{player.jersey_number} <span className='b'>{player.name}</span></span></div>
                <div className='f7 lh-copy' style={{ paddingTop: 6 }}><span className='bg-black-80 ph2 pv1 white'>{player.position}</span></div>
              </div>
            </PlayerPhoto>
            <div className='bg-near-black pa3 tc white'>
              {player.position === 'Pitcher' ?
                <div className='flex items-center justify-center w-100'>
                  <DetailStatLine stat='ERA' value={player.era} />
                  <DetailStatLine stat='W' value={player.wins} />
                  <DetailStatLine stat='L' value={player.losses} />
                  <DetailStatLine stat='K' value={player.so} />
                </div>
                :
                <div>
                  <DetailStatLine stat='BA' value={player.batting_average} />
                </div>
              }
            </div>
            { /* this doesn't work yet */ }
            <div className="form-group" style={{margin:'15px'}}>
            <div id="Team" ref={ inTeam => this.inputTeam = inTeam }/></div>
            <div className='tc'>
              {player.on_team === false ?
                <Button onClick={this.active.bind(this)}>Activate Player</Button> :
                <Button onClick={this.inactive}>Deactivate Player</Button>}
              </div>
          </div>
        ))}
      </div>
    )
  }
}

export default PlayerView
