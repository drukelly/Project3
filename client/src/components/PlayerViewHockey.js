import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import BackButton from './BackButton'
import DetailStatLine from './DetailStatLine'
import Modal from './Modal'
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
border-radius: 4px;
border: 2px solid;
font-weight: bold;
margin: 1rem auto;
padding: 1rem;
width: 80%;
`
class PlayerViewHockey extends Component {
  constructor (props) {
    super (props)

    this.state = {
      players: [],
      isInEditMode: false,
      message: '',
      showDialog: false,
    }
    this.dismissModal = this.dismissModal.bind(this)
  }

  // for click edit functionality
  changeEditMode = () => {
    this.setState({
      isInEditMode: !this.state.isInEditMode
    })
  }
  
  _handleChangeEvent = (val) => {
    return val
  }

  updateComponentStatValue = event => {
    console.log(event)
    this.setState({
      [event.target.name]: event.target.value
    })
    console.log(event.target.value)
    this._handleChangeEvent = event.target.value
  }
  
  updateStats = event => {
    event.preventDefault()
    this.setState({ 
      isInEditMode: false
     })
    let id = this.props.id
    console.log(id)
    let updatedStats = {
      id: this.props.id,
      wins: this.state.wins,
      losses:this.state.losses,
      goals_scored: this.state.goals_scored,
      assists: this.state.assists
    }
    console.log(updatedStats.wins)
    fetch('/api/players/hockey/' + id, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedStats),
    })
    .then(data => {
      console.log(data)
    })
    .catch(function (error) {
      console.log(error);
    })
  }
    
  renderEditView = () => {
    return <div>
      {this.state.players.map((player) => (
        <div key={player.id} id={player.id}>
          <div className='bg-near-black pa3 tc white'>
            <div className='flex flex-wrap items-center justify-center w-100' id='statState'>
              <DetailStatLine stat='GOALS' statValue={
                <div> 
                  <input type='number' name='goals_scored' value={this.state.goals_scored} onChange={this.updateComponentStatValue} defaultValue={player.goals_scored} step='1' style={{ width: 75 }} />
                  <button onClick={this.changeEditMode}>X</button>
                  <button onClick={this.updateStats}>OK</button>
                </div>
              } />
              <DetailStatLine stat='W' statValue={
                <div>
                  <input type='number' name='wins' value={this.state.wins} onChange={this.updateComponentStatValue} defaultValue={player.wins} step='1' style={{ width: 75 }} />
                  <button onClick={this.changeEditMode}>X</button>
                  <button onClick={this.updateStats}>OK</button>
                </div>
              } />
              <DetailStatLine stat='L' statValue={
                <div>
                  <input type='number' name='losses' value={this.state.losses} onChange={this.updateComponentStatValue} defaultValue={player.losses} step='1' style={{ width: 75 }} />
                  <button onClick={this.changeEditMode}>X</button>
                  <button onClick={this.updateStats}>OK</button>
                </div>
              } />
              <DetailStatLine stat='K' statValue={
                <div>
                  <input type='number' name='assists' value={this.state.assists} onChange={this.updateComponentStatValue} defaultValue={player.assists} step='1' style={{ width: 75 }} />
                  <button onClick={this.changeEditMode}>X</button>
                  <button onClick={this.updateStats}>OK</button>
                </div>
              } />
            </div>
          </div>
        </div>
      ))}
    </div>
  }

  renderDefaultView = () => {
    return <div>
      {this.state.players.map((player) => (
        <div key={player.id} id={player.id}>
          <div className='bg-near-black pa3 tc white'>            
            <div className='flex items-center justify-center w-100'>
              <div name='goals_scored' onDoubleClick={this.changeEditMode}><DetailStatLine stat='GOALS' statValue={player.goals_scored} /></div>
              <div name='w' onDoubleClick={this.changeEditMode}><DetailStatLine stat='W' statValue={player.wins} /></div>
              <div name='l' onDoubleClick={this.changeEditMode}><DetailStatLine stat='L' statValue={player.losses} /></div>
              <div name='assists' onDoubleClick={this.changeEditMode}><DetailStatLine stat='ASSISTS' statValue={player.assists} /></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  }

  componentDidMount() {
    let id = this.props.id
    fetch(`/api/players/hockey/` + id)
    .then(results => results.json())
    .then(res => {
      console.log(res)
      this.setState({ players: res })
    })
  }

  active () {
    // todo: modal instead of alert
    this.setState({
      message: 'Player is now active!',
      showDialog: true
    })
    let id = this.props.id
    let on_team = 1
    fetch('/api/players/hockey/' + id, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({id, on_team}),
    })
    .then(data => {
      console.log(data)
    })
    .catch(error => {
      console.log(error)
    })
    const button = (<Button onClick={this.inactive.bind(this)}>Deactivate Player</Button>)
    ReactDOM.render(button, document.getElementById('ButtonState'))
  }

  inactive () {
    // todo: modal instead of alert
    this.setState({
      message: 'Player is no longer active!',
      showDialog: true
    })
    let id = this.props.id
    let on_team = 0
    fetch('/api/players/hockey/' + id, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({id, on_team}),
    })
    .then(data => {
      console.log(data)
    })
    .catch(error => {
      console.log(error)
    })
    const button = (<Button onClick={this.active.bind(this)}>Activate Player</Button>)
    ReactDOM.render(button, document.getElementById('ButtonState'))
  }

  dismissModal = () => {
    this.setState({
      showDialog: false
    })
  }

  render () {
    return (
      <div>
        {this.state.showDialog ? <Modal message={this.state.message} dismissModal={this.dismissModal} /> : null }
        {this.state.players.map((player) => (
          <div>
            <PlayerPhoto key={player.id} id={player.id} style={{ backgroundImage: `url(${player.image})`}}>
              <BackButton src='/images/btn-back.png' alt='Go Back' />
              <div className='absolute bottom-0 f4 flex flex-column pa4'>
                <div className='lh-copy'>
                  <span className='bg-black-80 pa2 white'>#{player.jersey_number} <span className='b'>{player.name}</span></span>
                </div>
                <div className='f7 lh-copy' style={{ paddingTop: 7.5 }}>
                  <span className='bg-black-80 ph2 pv1 white'>{player.position}</span>
                </div>
              </div>
            </PlayerPhoto>
            <div>{this.state.isInEditMode ? this.renderEditView() : this.renderDefaultView()}</div>
            <div className="form-group" style={{margin:'15px'}}>
              <div id="Team" ref={ inTeam => this.inputTeam = inTeam }/></div>
              <div id="ButtonState" className='tc'>
                {player.on_team === 0 ?
                  <Button onClick={this.active.bind(this)}>Activate Player</Button> :
                  <Button onClick={this.inactive.bind(this)}>Deactivate Player</Button>}
              </div>
            </div>
        ))}
      </div>
    )
  }
}

export default PlayerViewHockey