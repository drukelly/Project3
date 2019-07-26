import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './components/pages/Home'
import Login from './components/pages/Login'
import Players from './components/pages/Players'
import Signup from './components/pages/Signup'
import CreatePlayer from './components/pages/CreatePlayer'
import TeamsView from './components/pages/TeamsView'
import Playview from './components/pages/Playview'
// Read more ab out React Router: https://reacttraining.com/react-router/web/guides/quick-start

/**
 * BrowserRouter: Uses the HTML5 history API to keep the UI in sync with the URL. It is like the brain of our
 * application's router. We wrap our entire application with this component — without it, none of the routes
 * we define will work. BrowserRouter component can only have a single child element.
 *
 * Route: The Route component is perhaps the most important component in React Router to understand and learn
 * to use well. Its most basic responsibility is to render some UI when a location matches the route’s path.
 * Render methods will be passed the same three route props:
    - match
    - location
    - history
 * - path: Any valid URL path
 * - exact: When true, will only match if the path matches the location.pathname exactly.
 * - component: A React component to render only when the location matches. All route props (match, location and history) are available to the component
 * https://reacttraining.com/react-router/web/api/Route
 *
 * WARNING: Unlike routes in express, React Router will, by default, render routes inclusively rather than exclusively.
 * This means if two or more routes match the same path, `BOTH` will render.
 */
function App () {
  return (
    <Router>
      <div>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        {/* <Route exact path='/players' component={Players} /> */}
        <Route exact path='/players/:id' component={Playview} />
        <Route exact path='/signup' component={Signup} />
        <Route exact path='/create' component={CreatePlayer} />
        <Route exact path='/teams' component={TeamsView} />
        <Route exact path='/teams/:team' component={Players} />
        <Nav />
      </div>
    </Router>
  )
}

export default App
