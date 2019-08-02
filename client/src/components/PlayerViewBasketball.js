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

const EditInput = styled.input`
background: lavender;
border: none;
color: black;
font-size: .88rem;
padding: .25rem;
text-align: center;
width: 48px;
`

class PlayerViewBasketball extends Component {
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
      rebounds: this.state.rebounds,
      field_goals:this.state.field_goals,
      ast: this.state.ast,
      pts: this.state.pts
    }
    console.log(updatedStats.wins)
    fetch('/api/players/basketball/' + id, {
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
              <DetailStatLine stat='PTS' title='Points' statValue={
                <div className='flex items-center justify-around w-100'> 
                  <EditInput type='number' name='pts' value={this.state.pts} onBlur={this.changeEditMode} onChange={this.updateComponentStatValue} defaultValue={player.pts} step='1' />
                  {/* <button onClick={this.changeEditMode}>X</button> */}
                  {/* <button onClick={this.updateStats}>OK</button> */}
                </div>
              } />
              <DetailStatLine stat='REB' title='Rebounds' statValue={
                <div className='flex items-center justify-around w-100'>
                  <EditInput type='number' name='rebounds' value={this.state.rebounds} onBlur={this.changeEditMode} onChange={this.updateComponentStatValue} defaultValue={player.rebounds} step='1' />
                  {/* <button onClick={this.changeEditMode}>X</button> */}
                  {/* <button onClick={this.updateStats}>OK</button> */}
                </div>
              } />
              <DetailStatLine stat='FG%' title='Field Goal Percentage' statValue={
                <div className='flex items-center justify-around w-100'>
                  <EditInput type='number' name='field_goals' value={this.state.field_goals} onBlur={this.changeEditMode} onChange={this.updateComponentStatValue} defaultValue={player.field_goals} step='1' />
                  {/* <button onClick={this.changeEditMode}>X</button> */}
                  {/* <button onClick={this.updateStats}>OK</button> */}
                </div>
              } />
              <DetailStatLine stat='AST' title='Assists' statValue={
                <div className='flex items-center justify-around w-100'>
                  <EditInput type='number' name='assists' value={this.state.ast} onBlur={this.changeEditMode} onChange={this.updateComponentStatValue} defaultValue={player.ast} step='1' />
                  {/* <button onClick={this.changeEditMode}>X</button> */}
                  {/* <button onClick={this.updateStats}>OK</button> */}
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
              <div name='pts' onDoubleClick={this.changeEditMode}><DetailStatLine stat='PTS' title='Points' statValue={player.pts} /></div>
              <div name='rebounds' className='bl b--white-10' onDoubleClick={this.changeEditMode}><DetailStatLine stat='REB' title='Rebounds' statValue={player.rebounds} /></div>
              <div name='field_goals' className='bl b--white-10' onDoubleClick={this.changeEditMode}><DetailStatLine stat='FG%' title='Field Goal Percentage' statValue={player.field_goals} /></div>
              <div name='assists' className='bl b--white-10' onDoubleClick={this.changeEditMode}><DetailStatLine stat='AST' title='Assists' statValue={player.ast} /></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  }

  componentDidMount() {
    let id = this.props.id
    fetch(`/api/players/basketball/` + id)
    .then(results => results.json())
    .then(res => {
      console.log(res)
      this.setState({ players: res })
    })
  }

  active () {
    this.setState({
      message: 'Player is now active!',
      showDialog: true
    })
    let id = this.props.id
    let on_team = 1
    fetch('/api/players/basketball/' + id, {
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
    this.setState({
      message: 'Player is no longer active!',
      showDialog: true
    })
    let id = this.props.id
    let on_team = 0
    fetch('/api/players/basketball/' + id, {
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
                  <Button className='activate' onClick={this.active.bind(this)}>Activate Player</Button> :
                  <Button className='deactivate' onClick={this.inactive.bind(this)}>Deactivate Player</Button>}
              </div>
            </div>
        ))}
      </div>
    )
  }
}

export default PlayerViewBasketball
