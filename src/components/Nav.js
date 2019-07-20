import React from 'react'
import NavImage from './NavImage'
import { Link } from 'react-router-dom'

/**
 * Link: Provides declarative, accessible navigation around your application.
 * navigates our application to another route when clicked, just like an anchor tag.
 * But the Link component prevents our entire React application from reloading when we go to different URLs.
 * Instead, only the components that need to change will change.
 */
const Nav = () => {
  return (
    <ul className='bg-black bottom-0 fixed flex items-center list justify-around ma0 pl0 pt3 pb4 w-100 white'>
      <li className={window.location.pathname === '/teams' ? 'active tc' : 'tc'}>
        <Link to='/teams' className='f6 link white'>
          <NavImage icon='/images/teams.png' />
          Teams
        </Link>
      </li>
      <li className={window.location.pathname === '/players' ? 'active tc' : 'tc'}>
        <Link to='/players' className='f6 link white'>
          <NavImage icon='/images/players.png' />
          Players
        </Link>
      </li>
      <li className={window.location.pathname === '/settings' ? 'active tc' : 'tc'}>
        <Link to='/settings' className='f6 link white'>
          <NavImage icon='/images/settings.png' />
          Settings
        </Link>
      </li>
    </ul>
  )
}

export default Nav
