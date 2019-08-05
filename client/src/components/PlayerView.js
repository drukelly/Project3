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
width: 50px;
`

class PlayerView extends Component {
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
    this.setState({ isInEditMode: false})
    let id = this.props.id
    console.log(id)
    let updatedStats = {
      id: this.props.id,
      wins: this.state.wins,
      losses:this.state.losses,
      era: this.state.era,
      batting_average: this.state.batting_average,
      so: this.state.so,
      hr: this.state.hr,
      hits: this.state.hits,
      sb: this.state.sb
    }
    console.log(updatedStats.wins)
    fetch('/api/players/baseball/' + id, {
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
            
            {player.position === 'Pitcher' ?
            
            <div className='flex flex-wrap items-center justify-center w-100' id='statState'>
              <DetailStatLine stat='ERA' title='Earned Run Average' statValue={
                <div> 
                  <EditInput type='number' name='era' value={this.state.era} onBlur={this.changeEditMode} onChange={this.updateComponentStatValue} defaultValue={player.era} step='0.01' style={{ width: 65 }} />
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
              <DetailStatLine stat='K' title='Strikeouts' statValue={
                <div>
                  <EditInput type='number' name='so' value={this.state.so} onBlur={this.changeEditMode} onChange={this.updateComponentStatValue} defaultValue={player.so} step='1' style={{ width: 65 }} />
                </div>
              } />
              <UpdateStats onClick={this.updateStats}> Update </UpdateStats>
            </div>
            
            :
            
            <div className='flex flex-wrap items-center justify-center w-100' id='statState'>
              <DetailStatLine stat='BA' title='Batting Average' statValue={
                <div>
                  <EditInput type='number' name='batting_average' value={this.state.batting_average} onBlur={this.changeEditMode} onChange={this.updateComponentStatValue} step='0.01' defaultValue={player.batting_average} style={{ width: 70 }} />
                </div>
              } />
              <DetailStatLine stat='HR' title='Home Runs' statValue={
                <div>
                  <EditInput type='number' name='hr' value={this.state.hr} onBlur={this.changeEditMode} onChange={this.updateComponentStatValue} step='1' defaultValue={player.hr} />
                </div>
              } />
              <DetailStatLine stat='H' title='Hits' statValue={
                <div> 
                  <EditInput type='number' name='hits' value={this.state.hits} onBlur={this.changeEditMode} onChange={this.updateComponentStatValue} step='1' defaultValue={player.hits} />
                </div>
              } />
              <DetailStatLine stat='SB' title='Stolen Bases' statValue={
                <div>
                  <EditInput type='number' name='sb' value={this.state.sb} onBlur={this.changeEditMode} onChange={this.updateComponentStatValue} step='1' defaultValue={player.sb} style={{ width: 55 }} />
                </div>
              } />
              <UpdateStats onClick={this.updateStats}> Update </UpdateStats>
            </div>
          }
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
            
            {player.position === 'Pitcher' ?
            
            <div className='flex items-center justify-center w-100'>
              <div name='era' onDoubleClick={this.changeEditMode}><DetailStatLine stat='ERA' title='Earned Run Average' statValue={player.era} /></div>
              <div name='w' className='bl b--white-10' onDoubleClick={this.changeEditMode}><DetailStatLine stat='W' title='Wins' statValue={player.wins} /></div>
              <div name='l' className='bl b--white-10' onDoubleClick={this.changeEditMode}><DetailStatLine stat='L' title='Losses' statValue={player.losses} /></div>
              <div name='so' className='bl b--white-10' onDoubleClick={this.changeEditMode}><DetailStatLine stat='K' title='Strikeouts' statValue={player.so} /></div>
            </div>
            
            :
            
            <div className='flex items-center justify-center w-100'>
              <div name='ba' onDoubleClick={this.changeEditMode}><DetailStatLine stat='BA' title='Batting Average' statValue={player.batting_average} /></div>
              <div name='hr' className='bl b--white-10' onDoubleClick={this.changeEditMode}><DetailStatLine stat='HR' title='Home Runs' statValue={player.hr} /></div>
              <div name='h' className='bl b--white-10' onDoubleClick={this.changeEditMode}><DetailStatLine stat='H' title='Hits' statValue={player.hits} /></div>
              <div name='sb' className='bl b--white-10' onDoubleClick={this.changeEditMode}><DetailStatLine stat='SB' title='Stolen Bases' statValue={player.sb} /></div>
            </div>
            
            }

          </div>
        </div>
      ))}
    </div>
  }
  componentDidMount () {
    let id = this.props.id
    console.log(id)
    fetch(`/api/players/baseball/` + id)
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
    fetch('/api/players/baseball/' + id, {
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
    fetch('/api/players/baseball/' + id, {
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

export default PlayerView
