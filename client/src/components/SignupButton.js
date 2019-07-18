import React from 'react'
import { withRouter } from 'react-router-dom'
// this also works with react-router-native

const SignupButton = withRouter(({ history }) => (
    <button
        type='button'
        onClick={() => { history.push('/signup') }}
    >
        Create Account
    </button>
))

export default SignupButton