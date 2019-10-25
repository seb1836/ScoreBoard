import React from 'react'
import '../App.css';
import Stats from "./Stats"

const Header = (props) => {
return (
<header>
    <Stats players={props.players}></Stats>
    <h1>{props.title}</h1>
    <span className="stats">Player : {props.totalPlayers}</span>

</header>

)

}


export default Header
