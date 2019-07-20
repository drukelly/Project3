import React from 'react'
import FormField from '../FormField'
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

class Signup extends React.Component {
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
    handleSubmit = (event) => {
        event.preventDefault()
        console.log('sign-up-form, username: ')
        console.log(this.state.username)
        fetch("/", {
            method: "POST",
            body: {
                username: this.state.username,
                password: this.state.password
            },
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                if (response.data) {
                    console.log('successful signup')
                    this.setState({
                        redirectTo: '/login'
                    })
                } else {
                    console.log('Sign-up error')
                }
            }).catch(error => {
                console.log('Sign up server error: ')
                console.log(error)
            })
    }
    render() {
        return (
            <form class="pa4">
                <h1 className='lh-title tc'>Create An Account</h1>
                <FormField htmlFor='name' type='text' name='name' />
                <FormField htmlFor='email' type='email' name='email' label='E-Mail Address' />
                <FormField htmlFor='phone' type='tel' name='phone' label='Phone Number' />
                <div className='mb3'>
                    <label className='db f6 mb2' htmlFor='username'>Username</label>
                    <input
                        className='b--black-20 br1 ba input-reset ph2 pv1 w-100'
                        type='text'
                        name='username'
                        value={this.state.username}
                        onChange={this.handleChange} />
                </div>
                <div className='mb3'>
                    <label className='db f6 mb2' htmlFor='password'>Password</label>
                    <input
                        className='b--black-20 br1 ba input-reset ph2 pv1 w-100'
                        type='text'
                        name='password'
                        onChange={this.handleChange}
                        maxLength='15' />
                </div>
                <Button type='submit'> Create Account </Button>
            </form>
        )
    }
}

export default Signup