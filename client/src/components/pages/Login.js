import React, { Component } from 'react'
import styled from 'styled-components'

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

class Login extends Component {
  state = {
    username: '',
    password: ''
  }
  handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
        [name]: value
    });
    console.log(this.state.username, this.state.password)
}
  handleSubmit = event => {
        event.preventDefault()
        console.log('login-form, username: ')
        console.log(this.state.username)
        let user = {username: this.state.username, password: this.state.password}
        fetch('/login', {
            method: 'post',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            if (response.data) {
                console.log('successful login')
                this.setState({
                    redirectTo: '/players'
                })
            } else {
                console.log('login error')
            }
        }).catch(error => {
            console.log('login server error: ')
            console.log(error)
        })
  }
  render() {
    return (
        <form action='/login' method='POST' className='pa4'>
            <h1 className='lh-title tc'>Log In</h1>
            <div className='mb3'>
                <label className='db f6 mb2' htmlFor='username'>Username</label>
                <input
                    className='b--black-20 br1 ba input-reset ph2 pv1 w-100'
                    onChange={this.handleChange}
                    type='text'
                    name='username'
                    placeholder='Enter Username'
                    value={typeof username !== undefined ? this.state.username : ''} />
            </div>
            <div className='mb3'>
                <label className='db f6 mb2' htmlFor='password'>Password</label>
                <input
                    className='b--black-20 br1 ba input-reset ph2 pv1 w-100'
                    onChange={this.handleChange}
                    type='password'
                    name='password'
                    placeholder='Enter Password'
                    value={typeof password !== undefined ? this.state.password : ''}
                    maxLength='15' />
            </div>
            <Button type='submit' onClick={this.handleSubmit}> Log In </Button>
            <p className='tc'>No Account? <a href='/signup' className='blue link'>Sign-Up</a></p>
        </form>
    )
  }
}

export default Login
