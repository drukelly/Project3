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


class Playerview extends Component {
    state = {
        players: [],
        isInEditMode: false,
        // value: 'update'

        }
    //for click edit functionality
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
        return <div id='era'>
            <input
                type='text'
                defaultValue={this.state.value}
                ref ='theTextInput'/>
            <button onClick={this.changeEditMode}>X</button>
            <button onClick={this.updateComponentValue}>OK</button>
        </div>
    }

    renderDefaultView = () => {
        return <div>
                { <div>
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
                    <div id ='era' onDoubleClick={this.changeEditMode}><DetailStatLine stat='ERA' value={player.era} /></div>
                    <div id = 'w' onDoubleClick={this.changeEditMode}><DetailStatLine stat='W' value={player.wins} /></div>
                    <div id = 'l' onDoubleClick={this.changeEditMode}><DetailStatLine stat='L' value={player.losses} /></div>
                    <div id = 'so' onDoubleClick={this.changeEditMode}><DetailStatLine stat='K' value={player.so} /></div>
                </div>
                :
                <div id='flex items-center justify-center w-100'>
                    <div id ='ba' onDoubleClick={this.changeEditMode}><DetailStatLine stat='BA' value={player.batting_average} /></div>
                    <div id ='hr' onDoubleClick={this.changeEditMode}><DetailStatLine stat='HR' value={player.hr} /></div>
                    <div id ='h' onDoubleClick={this.changeEditMode}><DetailStatLine stat='H' value={player.hits} /></div>
                    <div id ='sb' onDoubleClick={this.changeEditMode}><DetailStatLine stat='SB' value={player.sb} /></div>
                </div>
              }
            </div>
            <div className="form-group" style={{margin:'15px'}}>
            <div id="Team" ref={ inTeam => this.inputTeam = inTeam }/></div>
            <div className='tc'>
              {player.on_team === 0 ?
                <Button onClick={this.active.bind(this)}>Activate Player</Button> :
                <Button onClick={this.inactive.bind(this)}>Deactivate Player</Button>}
              </div>
          </div>
        ))}
      </div>}
                </div>
    }

    updateStats () {
        var id = this.props.id
        let updatedStats = {
            wins: this.id.wins,
            losses:this.id.losses,
            era: this.id.era,
            so: this.id.so,
            batting_average: this.id.batting_average,
            hr: this.id.hr,
            hits: this.id.hits,
            sb: this.id.sb
          }
        fetch('/api/players/' + id, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({updatedStats}),
          })
            .then(data => {
              console.log(data)
            })
            .catch(function (error) {
                console.log(error);
            });   
    }


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
            var id = this.props.id
            var on_team = 1
            fetch('/api/players/' + id, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({id, on_team}),
            })
                .then(data => {
                console.log(data)
                })
                .catch(function (error) {
                    console.log(error);
                })
    }

    inactive() {
        alert('Player is no longer active!')
            var id = this.props.id
            var on_team = 0
            fetch('/api/players/' + id, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({id, on_team}),
              })
                .then(data => {
                  console.log(data)
                })
                .catch(function (error) {
                    console.log(error);
                  });
    }

    render() {
        return (
            <div>{this.state.isInEditMode ? 
            this.renderEditView() :
            this.renderDefaultView()}
            </div>
        )
    }
}

export default Playerview
