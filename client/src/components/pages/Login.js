import React from 'react'
import styled from 'styled-components'
import { Link, Redirect } from 'react-router-dom'
import Modal from './../Modal'

const Button = styled.button`
background: transparent;
border-radius: 4px;
border: 2px solid;
display: block;
font-weight: bold;
margin: 2rem auto;
padding: 1rem;
width: 100%;
`

const Login = props => {
  return (
    <div>
      {props.showDialog ? <Modal message={props.message} dismissModal={props.dismissModal} /> : null}
      <div className='flex items-center justify-center pa3 bg-lightest-blue navy' style={{ display: props.location.state === undefined ? 'none' : props.location.state.style }}>
        <svg className='w1' data-icon='info' viewBox='0 0 32 32' style={{ fill: 'currentcolor' }}>
          <title>info icon</title>
          <path d='M16 0 A16 16 0 0 1 16 32 A16 16 0 0 1 16 0 M19 15 L13 15 L13 26 L19 26 z M16 6 A3 3 0 0 0 16 12 A3 3 0 0 0 16 6' />
        </svg>
        <span className='lh-title ml3'>{props.location.state === undefined ? null : props.location.state.message}</span>
      </div>
      <form action='/login' method='POST' className='ph4 pv3'>
        <h1 className='lh-title tc'>Log In</h1>
        <div className='mb3'>
          <label className='db f6 mb2' htmlFor='username'>Username</label>
          <input
            className='b--black-20 br1 ba input-reset ph2 pv1 w-100'
            onChange={props.handleChange}
            type='text'
            name='username'
            value={typeof username !== undefined ? props.username : ''} />
        </div>
        <div className='mb3'>
          <label className='db f6 mb2' htmlFor='password'>Password</label>
          <input
            className='b--black-20 br1 ba input-reset ph2 pv1 w-100'
            onChange={props.handleChange}
            type='password'
            name='password'
            value={typeof password !== undefined ? props.password : ''}
            maxLength='15' />
        </div>
        <Button type='submit' onClick={props.handleSubmit}> Log In </Button>
        {props.redirectTo ? <Redirect to={props.redirectTo} /> : ''}
        <p className='f6 tc'>No Account? <Link to='/signup' className='blue link'>Sign Up</Link></p>
      </form>
    </div>
  )
}

export default Login
