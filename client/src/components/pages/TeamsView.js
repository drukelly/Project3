import React from 'react'
import TeamCard from '../TeamCard'

// the URL for each card is currently only going to the baseball page
const TeamsView = () => {
    return (
        <div>
            <img src='https://s14-eu5.startpage.com/cgi-bin/serveimage?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F0%2F07%2FEmperor_Penguin_Manchot_empereur.jpg%2F175px-Emperor_Penguin_Manchot_empereur.jpg&sp=3556486f6101754e4e18d5bf5f40be96&anticache=638857' alt='coach' />
            <h1>Coach McRandall</h1>
            <TeamCard 
            sport='Hockey'
            teamName='Hamilton Mustangs'
            image='https://s16-us2.startpage.com/cgi-bin/serveimage?url=https%3A%2F%2Fcdn0.iconfinder.com%2Fdata%2Ficons%2Fsports-82%2F24%2Fhockey-puck-512.png&sp=1b53c15501773f89703e4f2d4b579db6&anticache=111650'
            url='players'
            />
            <TeamCard 
            sport='Baseball'
            teamName='Roots'
            image='https://s15-us2.startpage.com/cgi-bin/serveimage?url=https%3A%2F%2Fcdn2.iconfinder.com%2Fdata%2Ficons%2Fballs%2F154%2Fball-baseball-game-sport-512.png&sp=08a53fd88980ebcdeec0d3fcd7f75fbd&anticache=753821'
            url='players'
            />
            <TeamCard 
            sport='Basketball'
            teamName='Toon Squad'
            image='https://s17-us2.startpage.com/cgi-bin/serveimage?url=https%3A%2F%2Fcdn0.iconfinder.com%2Fdata%2Ficons%2Fbasketball-19%2F32%2FBasketball_Icon_set_Outline_ball_1-512.png&sp=fece05e311379c450a9c5b73875e9acf&anticache=105447'
            url='players'
            />
        </div>
    )
}

export default TeamsView