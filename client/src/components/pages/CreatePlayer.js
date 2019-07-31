import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import FormField from '../FormField'
import styled from 'styled-components'

const Wrapper = styled.form`
padding-bottom: 100px;
`

const Button = styled.button`
background: transparent;
border: 2px solid;
border-radius: 4px;
display: block;
font-weight: bold;
margin: 2rem auto;
width: 100%;
padding: 1rem;
`

class CreatePlayer extends Component {
  state = {
    name: '',
    image: '',
    jersey_number: '',
    sport: '',
    position: '',
    redirectTo: '',
    teamName: '',
    teamLogo: ''
  }
  handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  }
  handleSubmit = (event) => {
    event.preventDefault()
    event.persist()
    let sport = event.target.previousSibling.previousSibling.children[1].value
    sport === 'baseball'
      ? this.setState({ teamName: 'Oakland Roots', teamLogo: '/images/baseball.png' })
      : sport === 'basketball'
        ? this.setState({ teamName: 'Toon Squad', teamLogo: '/images/basketball.png' })
        : this.setState({ teamName: 'Hamilton Mustangs', teamLogo: '/images/hockey.png' })
  let newPlayer = {
    name: this.state.name,
    image: this.state.image,
    jersey_number: this.state.jersey_number,
    sport: this.state.sport,
    position: this.state.position
  }
  console.log('create new player: ')
  fetch("/api/team", {
    method: "POST",
    body: JSON.stringify(newPlayer),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => {
      if (response) {
        console.log(`after submit: => ${response}`)
        this.setState({
          redirectTo: `/teams/${this.state.sport}/`
        })
        console.log(this.state.redirectTo)
      } else {
        console.log('---player creation error---')
        console.log(response)
        console.log('---player creation error---')
      }
    }).catch(error => {
      console.log('fatal error (player creation)')
      console.log(error)
    })
}
render() {
  return (
    <Wrapper className='pa4'>
      <h1 className='lh-title mt0 tc'>Add Player</h1>
      <FormField htmlFor='name' type='text' name='name' onChange={this.handleChange} />
      <FormField htmlFor='image' type='text' name='image' label='Photo (URL)' onChange={this.handleChange} />
      <FormField htmlFor='jersey_number' type='number' name='jersey_number' label='Jersey Number' onChange={this.handleChange} />
      <FormField htmlFor='sport' type='text' name='sport' onChange={this.handleChange} />
      <FormField htmlFor='position' type='text' name='position' onChange={this.handleChange} />
      <Button type='submit' onClick={this.handleSubmit}> Add Player </Button>
      { this.state.redirectTo ? <Redirect to={{
          pathname: this.state.redirectTo,
          state: {
            name: this.state.teamName,
            image: this.state.teamLogo,
            team: this.state.sport
          }}} /> : '' }
    </Wrapper>
  )
}
}

export default CreatePlayer
