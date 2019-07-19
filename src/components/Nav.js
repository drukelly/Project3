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
    <ul className='bottom-0 fixed flex items-center list justify-around pl0 w-100'>
      <li className='tc'>
        <Link to='/teams' className={window.location.pathname === '/teams' ? 'active link' : 'link'}> Teams </Link>
      </li>
      <li className='tc'>
        <Link to='/players' className={window.location.pathname === '/players' ? 'active link' : 'link'}> Players </Link>
      </li>
      <li className='tc'>
        <Link to='/settings' className={window.location.pathname === '/settings' ? 'active link' : 'link'}> Settings </Link>
      </li>
    </ul>
  )
}

export default Nav
