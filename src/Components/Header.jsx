import React from 'react'
import '../App.css';
import Stats from "./Stats"
import StopWatch from "./StopWatch"

const Header = (props) => {
    console.log(props.players.length)
    
    console.log("props de header >",props,Array.isArray(props.players),typeof props.players)
return (
<header>
    <Stats players={props.players}></Stats>
    <h1>{props.title}</h1>
    <StopWatch/>

</header>

)

}


export default Header
