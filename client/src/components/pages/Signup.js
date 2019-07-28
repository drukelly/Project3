import React, { Component } from 'react'
import FormField from '../FormField'
import styled from 'styled-components'
import { Redirect } from 'react-router-dom'

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

class Signup extends Component {
    state = {
        name: '',
        email: '',
        phone: '',
        username: '',
        password: '',
        password2: '',
        redirectTo: '',
        created: ''
    }
    update() {
        this.forceUpdate()
    }
    handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
        console.log(this.state.username, this.state.password)
    }
    handleSubmit = (event) => {
        event.preventDefault()
        console.log('sign-up-form, username: ')
        console.log(this.state.username)
        let user = { 
            name: this.state.name,
            email: this.state.email,
            phone: this.state.phone,
            username: this.state.username,
            password: this.state.password,
            password2: this.state.password2 
        }
        fetch("/signup", {
            method: "POST",
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                if (response.status === 200) {
                    console.log('successful signup')
                    this.setState({
                        redirectTo: '/login'
                    })
                    this.update()
                } else {
                    console.log(response)
                    console.log('Sign-up error')
                    this.setState({created: 'Sign-up Error'})
                    this.update()
                }
            }).catch(error => {
                console.log('Sign up server error: ')
                console.log(error)
                this.setState({created: `Sign-up Server Error: ${error}`})
                this.update()
            })
    }
    render() {
        return (
            <form action='/signup' method='POST' className='pa4' style={{ paddingBottom: 100 }}>
                <div className="flex items-center justify-center pa4 bg-lightest-blue navy" style={{display: !this.state.created ? 'none' : 'run-in'}}>
                    <svg className="w1" data-icon="info" viewBox="0 0 32 32" style={{fill:"currentcolor"}}>
                        <title>info icon</title>
                        <path d="M16 0 A16 16 0 0 1 16 32 A16 16 0 0 1 16 0 M19 15 L13 15 L13 26 L19 26 z M16 6 A3 3 0 0 0 16 12 A3 3 0 0 0 16 6"></path>
                    </svg>
                    <span className="lh-title ml3">{this.state.created}</span>
                </div>
                <h1 className='lh-title tc'>Create An Account</h1>
                <div>{}</div>
                <FormField
                    htmlFor='name'
                    type='text'
                    name='name'
                    placeholder='Enter your Name'
                    value={this.state.name}
                    onChange={this.handleChange} />
                <FormField
                    htmlFor='email'
                    type='email'
                    name='email'
                    label='E-Mail Address'
                    placeholder='Enter your E-mail'
                    value={this.state.email}
                    onChange={this.handleChange} />
                <FormField
                    htmlFor='phone'
                    type='tel'
                    name='phone'
                    label='Phone Number'
                    placeholder='Enter your Phone Number'
                    value={this.state.phone}
                    onChange={this.handleChange} />
                <div className='mb3'>
                    <label className='db f6 mb2' htmlFor='username'>Username</label>
                    <input
                        className='b--black-20 br1 ba input-reset ph2 pv1 w-100'
                        type='text'
                        name='username'
                        placeholder='Enter a Username'
                        value={typeof username !== undefined ? this.state.username : ''}
                        onChange={this.handleChange} />
                </div>
                <div className='mb3'>
                    <label className='db f6 mb2' htmlFor='password'>Password</label>
                    <input
                        className='b--black-20 br1 ba input-reset ph2 pv1 w-100'
                        type='password'
                        name='password'
                        placeholder='Enter a Password'
                        onChange={this.handleChange}
                        value={typeof password !== undefined ? this.state.password : ''}
                        maxLength='15' />
                </div>
                <div className='mb3'>
                    <label className='db f6 mb2' htmlFor='password'>Confirm Password</label>
                    <input
                        className='b--black-20 br1 ba input-reset ph2 pv1 w-100'
                        type='password'
                        name='password2'
                        placeholder='Confirm your Password'
                        onChange={this.handleChange}
                        value={typeof password2 !== undefined ? this.state.password2 : ''}
                        maxLength='15' />
                </div>
                <Button type='submit' onClick={this.handleSubmit}> Create Account </Button>
                {this.state.redirectTo ? <Redirect to={{
                    pathname: this.state.redirectTo,
                    state: {
                        style: 'run-in'
                    }
                    }} /> : ''}
                <p className='f6 tc'>Have An Account? <a href='/login' className='blue link'>Login</a></p>
            </form>
        )
    }
}

export default Signup
