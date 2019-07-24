import React from 'react'
import { Link } from 'react-router-dom'

const TeamCard = (props) => {
    return (
        <Link to={props.url}>
            <img src={props.image} alt={props.sport} />
            <h2>{props.sport}</h2>
            <h2>{props.teamName}</h2>
        </Link>
    )
}

export default TeamCard