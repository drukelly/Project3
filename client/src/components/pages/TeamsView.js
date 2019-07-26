import React from 'react'
import TeamCard from '../TeamCard'

// the URL for each card is currently only going to the baseball page
const TeamsView = () => {
    return (
        <div>
            <img src='https://s14-eu5.startpage.com/cgi-bin/serveimage?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F0%2F07%2FEmperor_Penguin_Manchot_empereur.jpg%2F175px-Emperor_Penguin_Manchot_empereur.jpg&sp=3556486f6101754e4e18d5bf5f40be96&anticache=638857' alt='coach' />
            <h1>Coach McRandall</h1>
            <TeamCard />
        </div>
    )
}

export default TeamsView