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
        }
    //for click edit functionality
    changeEditMode = () => {
        this.setState({
            isInEditMode: !this.state.isInEditMode

        })
    }

    // updateComponentstatValue = (event) => {
    //     this.setState({
    //         isInEditMode: false,
    //         [event.target.name]: event.target.temp           
    //     })
    // }

    updateStats = (event) => {
        this.setState({
            isInEditMode: false,
            [event.target.name]: event.target.value          
        })
        event.preventDefault()
        var id = this.props.id
        console.log(id)
        let updatedStats = {
            wins: this.state.wins,
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

    renderEditView = () => {
        return <div>{this.state.players.map((player) => (
    <div key={player.id} id={player.id}>
            <div className='bg-near-black pa3 tc white'>
              {player.position === 'Pitcher' ?
                <div className='flex items-center justify-center w-100'>
                    <DetailStatLine stat='ERA' statValue={
                        <div> 
                            <input
                                type='text'
                                name='era'
                                placeholder=''
                                value = {this.state.era}/>
                            <button onClick={this.changeEditMode}>X</button>
                            <button onClick={this.updateStats}>OK</button>
                        </div>
                        } />
                    
                    
                    <div name = 'w' onDoubleClick={this.changeEditMode}><DetailStatLine stat='W' statValue={
                        <div> 
                            <input
                                type='text'
                                defaultstatValue={player.wins}
                                ref ='theTextInput'/>
                            <button onClick={this.changeEditMode}>X</button>
                            {console.log(this)}
                            <button onClick={this.updateComponentstatValue}>OK</button>
                        </div>
                        } />
                    </div>
                    <div name = 'l' onDoubleClick={this.changeEditMode}><DetailStatLine stat='L' statValue={
                        <div> 
                            <input
                                type='text'
                                defaultstatValue={player.losses}
                                ref ='theTextInput'/>
                            <button onClick={this.changeEditMode}>X</button>
                            {console.log(this)}
                            <button onClick={this.updateComponentstatValue}>OK</button>
                        </div>
                        } />
                    </div>
                    <div name = 'so' onDoubleClick={this.changeEditMode}><DetailStatLine stat='K' statValue={player.so} /></div>
                </div>
                :
                <div id='flex items-center justify-center w-100'>
                    <div name ='ba' onDoubleClick={this.changeEditMode}><DetailStatLine stat='BA' statValue={player.batting_average} /></div>
                    <div name ='hr' onDoubleClick={this.changeEditMode}><DetailStatLine stat='HR' statValue={player.hr} /></div>
                    <div name ='h' onDoubleClick={this.changeEditMode}><DetailStatLine stat='H' statValue={player.hits} /></div>
                    <div name ='sb' onDoubleClick={this.changeEditMode}><DetailStatLine stat='SB' statValue={player.sb} /></div>
                </div>
              
                }
             </div>
    </div>
    ))}
</div>
    }

    renderDefaultView = () => {
        return <div>{this.state.players.map((player) => (
            <div key={player.id} id={player.id}>
                    <div className='bg-near-black pa3 tc white'>
                      {player.position === 'Pitcher' ?
                        <div className='flex items-center justify-center w-100'>
                            <div name ='era' onDoubleClick={this.changeEditMode}><DetailStatLine stat='ERA' statValue={player.era} /></div>
                            <div name = 'w' onDoubleClick={this.changeEditMode}><DetailStatLine stat='W' statValue={player.wins} /></div>
                            <div name = 'l' onDoubleClick={this.changeEditMode}><DetailStatLine stat='L' statValue={player.losses} /></div>
                            <div name = 'so' onDoubleClick={this.changeEditMode}><DetailStatLine stat='K' statValue={player.so} /></div>
                        </div>
                        :
                        <div id='flex items-center justify-center w-100'>
                            <div name ='ba' onDoubleClick={this.changeEditMode}><DetailStatLine stat='BA' statValue={player.batting_average} /></div>
                            <div name ='hr' onDoubleClick={this.changeEditMode}><DetailStatLine stat='HR' statValue={player.hr} /></div>
                            <div name ='h' onDoubleClick={this.changeEditMode}><DetailStatLine stat='H' statValue={player.hits} /></div>
                            <div name ='sb' onDoubleClick={this.changeEditMode}><DetailStatLine stat='SB' statValue={player.sb} /></div>
                        </div>
                      
                        }
                     </div>
            </div>
            ))}
        </div>
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
                        <div>{this.state.isInEditMode ? 
                        this.renderEditView() :
                        this.renderDefaultView()}
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
              </div>
        )
    }
}

export default Playerview
