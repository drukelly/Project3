import React from 'react'
import { Link } from 'react-router-dom'
// import Players from './pages/Players'
// import { BrowserRouter as Router, Route } from 'react-router-dom'

class TeamCard extends React.Component {
    state = {
        teams: [{
            sport: 'basketball',
            name: 'Toon Squad',
            image: 'https://s17-us2.startpage.com/cgi-bin/serveimage?url=https%3A%2F%2Fcdn0.iconfinder.com%2Fdata%2Ficons%2Fbasketball-19%2F32%2FBasketball_Icon_set_Outline_ball_1-512.png&sp=fece05e311379c450a9c5b73875e9acf&anticache=105447'
        },
        {
            sport: 'baseball',
            name: 'Oakland Roots',
            image: 'https://s15-us2.startpage.com/cgi-bin/serveimage?url=https%3A%2F%2Fcdn2.iconfinder.com%2Fdata%2Ficons%2Fballs%2F154%2Fball-baseball-game-sport-512.png&sp=08a53fd88980ebcdeec0d3fcd7f75fbd&anticache=753821'
        },
        {
            sport: 'hockey',
            name: 'Hamilton Mustangs',
            image: 'https://s16-us2.startpage.com/cgi-bin/serveimage?url=https%3A%2F%2Fcdn0.iconfinder.com%2Fdata%2Ficons%2Fsports-82%2F24%2Fhockey-puck-512.png&sp=1b53c15501773f89703e4f2d4b579db6&anticache=111650'
        }]
    }
    render() {
        return (
            <div>
                {this.state.teams.map((team) => (
                    <Link to={{
                        pathname: `/teams/${team.sport}`,
                        state: team
                        }}
                        key={team.sport}>
                        <img src={team.image} alt={team.sport} />
                        <h2>{team.sport}</h2>
                        <h2>{team.name}</h2>
                    </Link>
                    // <Route exact path={`teams/${team.sport}`} component={Players} />
                ))}
            </div>
        )
    }
}

export default TeamCard