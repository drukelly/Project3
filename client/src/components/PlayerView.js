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

    updateComponentstatValue = (event) => {
        this.setState({
            [event.target.name]: event.target.value           
        })
        console.log(this.state.era)
    }

    updateStats = (event) => {
        this.setState({
            isInEditMode: false,})
        event.preventDefault()
        console.log(this.state.wins)
        var id = this.props.id
        console.log(id)
        let updatedStats = {
            wins: this.state.wins,
            losses:this.state.losses,
            era: this.state.era,
            so: this.state.so,
            batting_average: this.state.batting_average,
            hr: this.state.hr,
            hits: this.state.hits,
            sb: this.state.sb
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
                                value = {this.state.era}
                                onChange={this.updateComponentstatValue}/>
                            <button onClick={this.changeEditMode}>X</button>
                            <button onClick={this.updateStats}>OK</button>
                        </div>
                        } />
                    
                    
                    <DetailStatLine stat='W' statValue={
                        <div> 
                            <input
                                type='text'
                                name='wins'
                                placeholder=''
                                value = {this.state.wins}
                                onChange={this.updateComponentstatValue}/>
                            <button onClick={this.changeEditMode}>X</button>
                            <button onClick={this.updateStats}>OK</button>
                      </div>
                        } />
                    
                    <DetailStatLine stat='L' statValue={
                        <div> 
                            <input
                                type='text'
                                name='losses'
                                placeholder=''
                                value = {this.state.losses}
                                onChange={this.updateComponentstatValue}/>
                            <button onClick={this.changeEditMode}>X</button>
                            <button onClick={this.updateStats}>OK</button>
                        </div>
                        } />
                    <DetailStatLine stat='K' statValue={                                                               
                         <div> 
                            <input
                                type='text'
                                name='so'
                                placeholder=''
                                value = {this.state.so}
                                onChange={this.updateComponentstatValue}/>
                            <button onClick={this.changeEditMode}>X</button>
                            <button onClick={this.updateStats}>OK</button>
                        </div>} />
                </div>
              
                :

                <div id='flex items-center justify-center w-100'>
                    <DetailStatLine stat='BA' statValue={                        
                        <div> 
                            <input
                                type='text'
                                name='batting_average'
                                placeholder=''
                                value = {this.state.batting_average}
                                onChange={this.updateComponentstatValue}/>
                            <button onClick={this.changeEditMode}>X</button>
                            <button onClick={this.updateStats}>OK</button>
                        </div>} />
                    <DetailStatLine stat='HR' statValue={                        
                        <div> 
                            <input
                                type='text'
                                name='hr'
                                placeholder=''
                                value = {this.state.hr}
                                onChange={this.updateComponentstatValue}/>
                            <button onClick={this.changeEditMode}>X</button>
                            <button onClick={this.updateStats}>OK</button>
                        </div>} />
                    <DetailStatLine stat='H' statValue={                        
                        <div> 
                            <input
                                type='text'
                                name='hits'
                                placeholder=''
                                value = {this.state.hits}
                                onChange={this.updateComponentstatValue}/>
                            <button onClick={this.changeEditMode}>X</button>
                            <button onClick={this.updateStats}>OK</button>
                        </div>} />
                    <DetailStatLine stat='SB' statValue={                        
                        <div> 
                            <input
                                type='text'
                                name='sb'
                                placeholder=''
                                value = {this.state.sb}
                                onChange={this.updateComponentstatValue}/>
                            <button onClick={this.changeEditMode}>X</button>
                            <button onClick={this.updateStats}>OK</button>
                        </div>} />
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
