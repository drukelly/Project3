import React from 'react'

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
            <form>
                <label htmlFor='name'>Name</label><br />
                <input
                    type='text'
                    name='name'
                /><br />
                <label htmlFor='email'>E-mail Address</label><br />
                <input
                    type='email'
                    name='email'
                /><br />
                <label htmlFor='phone'>Phone Number</label><br />
                <input
                    type='tel'
                    name='phone'
                /><br />
                <label htmlFor='username'>Username</label><br />
                <input
                    type='text'
                    name='username'
                    value={this.state.username}
                    onChange={this.handleChange}
                /><br />
                <label htmlFor='password'>Password</label><br />
                <input
                    type='password'
                    name='password'
                    value={this.state.password}
                    onChange={this.handleChange}
                    maxlength='15'
                /><br />
                <button type='submit'>Submit</button>
            </form>
        )
    }
}

export default Signup