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
border-radius: 4px;
border: 2px solid black;
color: white;
font-weight: bold;
margin: 1rem auto;
padding: 1rem;
width: 80%;
  &.activate {
    background-color: green;
  }
  &.deactivate {
    background-color: red;
  }
`
const UpdateStats = styled.button`
background: transparent;
border: 2px solid;
border-radius: 4px;
color: white;
cursor: pointer;
display: block;
font-size: .9em;
margin-top: 1.25em;
padding: .33em .5em;
text-transform: uppercase;
width: calc(100% - 42px);
  &:hover {
    background: lightsteelblue;
  }
`
const EditInput = styled.input`
background: lavender;
border: none;
color: black;
font-size: .88rem;
padding: .25rem;
text-align: center;
width: 48px;
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
  _handleChangeEvent = val => {
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
    .catch(error => {
      console.log(error)
    })
  }
  renderEditView = () => {
    return <div>
      {this.state.players.map((player) => (
        <div key={player.id} id={player.id}>
          <div className='bg-near-black pa3 tc white'>
            <div className='flex flex-wrap items-center justify-center w-100' id='statState'>
              <DetailStatLine stat='G' title='Goals' statValue={
                <div> 
                  <EditInput type='number' name='goals_scored' value={this.state.goals_scored} onBlur={this.changeEditMode} onChange={this.updateComponentStatValue} defaultValue={player.goals_scored} step='1' />
                </div>
              } />
              <DetailStatLine stat='W' title='Wins' statValue={
                <div>
                  <EditInput type='number' name='wins' value={this.state.wins} onBlur={this.changeEditMode} onChange={this.updateComponentStatValue} defaultValue={player.wins} step='1' />
                </div>
              } />
              <DetailStatLine stat='L' title='Losses' statValue={
                <div>
                  <EditInput type='number' name='losses' value={this.state.losses} onBlur={this.changeEditMode} onChange={this.updateComponentStatValue} defaultValue={player.losses} step='1' />
                </div>
              } />
              <DetailStatLine stat='A' title='Assists' statValue={
                <div>
                  <EditInput type='number' name='assists' value={this.state.assists} onBlur={this.changeEditMode} onChange={this.updateComponentStatValue} defaultValue={player.assists} step='1' />
                </div>
              } />
              <UpdateStats onClick={this.updateStats}> Update </UpdateStats>
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
              <div name='goals_scored' onDoubleClick={this.changeEditMode}><DetailStatLine stat='G' title='Goals' statValue={player.goals_scored} /></div>
              <div name='w' className='bl b--white-10' onDoubleClick={this.changeEditMode}><DetailStatLine stat='W' title='Wins' statValue={player.wins} /></div>
              <div name='l' className='bl b--white-10' onDoubleClick={this.changeEditMode}><DetailStatLine stat='L' title='Losses' statValue={player.losses} /></div>
              <div name='assists' className='bl b--white-10' onDoubleClick={this.changeEditMode}><DetailStatLine stat='A' title='Assists' statValue={player.assists} /></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  }
  componentDidMount () {
    let id = this.props.id
    fetch(`/api/players/hockey/` + id)
    .then(results => results.json())
    .then(res => {
      console.log(res)
      this.setState({ players: res })
    })
  }
  active () {
    let id = this.props.id
    let on_team = 1
    this.setState({
      message: `${this.state.players[0].name} is now active!`,
      showDialog: true
    })
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
    const button = (<Button className='deactivate' onClick={this.inactive.bind(this)}>Deactivate Player</Button>)
    ReactDOM.render(button, document.getElementById('ButtonState'))
  }
  inactive () {
    let id = this.props.id
    let on_team = 0
    this.setState({
      message: `${this.state.players[0].name} is no longer active!`,
      showDialog: true
    })
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
    const button = (<Button className='activate' onClick={this.active.bind(this)}>Activate Player</Button>)
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
                  <span className='bg-black-80 pa3 white'>#{player.jersey_number} <span className='b'>{player.name}</span></span>
                </div>
                <div className='f7 lh-copy' style={{ paddingTop: 7.5 }}>
                  <span className='bg-black-80 ph2 pv1 white'>{player.position}</span>
                </div>
              </div>
            </PlayerPhoto>
            {sessionStorage.getItem('admin') === '1' ? <div>{this.state.isInEditMode ? this.renderEditView() : this.renderDefaultView()}</div> : this.renderDefaultView()}
            <div style={{ margin:15 }}>
             <div id='Team' ref={ inTeam => this.inputTeam = inTeam }/></div>
             {sessionStorage.getItem('admin') === '1' ?
             <div id='ButtonState' className='tc'>
               {player.on_team === 0 ?
                 <Button className='activate' onClick={this.active.bind(this)}>Activate Player</Button> :
                 <Button className='deactivate' onClick={this.inactive.bind(this)}>Deactivate Player</Button>}
             </div>
             : null}
          </div>
        ))}
      </div>
    )
  }
}

export default PlayerViewHockey
