import React from 'react'
import PropTypes from 'prop-types'
import '../App.css';
import Stats from "./Stats"
import StopWatch from "./StopWatch"

const Header = ({title,players}) => {

return (
<header>
    <Stats players={players}></Stats>
    <h1>{title}</h1>
    <StopWatch/>

</header>

)

}

Header.propTypes = {
    players: PropTypes.arrayOf(PropTypes.object),
    title : PropTypes.string
}

export default Header
