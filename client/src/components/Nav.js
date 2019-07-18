import React from 'react'
import { Link } from 'react-router-dom'

/**
 * Link: Provides declarative, accessible navigation around your application.
 * navigates our application to another route when clicked, just like an anchor tag.
 * But the Link component prevents our entire React application from reloading when we go to different URLs.
 * Instead, only the components that need to change will change.
 */
function Nav () {
  return (
    <ul className='nav nav-tabs'>
      <li className='nav-item'>
        <Link to='/' className={window.location.pathname === '/' ? 'nav-link active' : 'nav-link'}> Home </Link>
      </li>
      <li className='nav-item'>
        <Link to='/players' className={window.location.pathname === '/players' ? 'nav-link active' : 'nav-link'}> Players </Link>
      </li>
    </ul>
  )
}

export default Nav
