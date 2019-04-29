import React from "react";

function Navbar(props){
    return(
        <nav>
            <ul>
                <li className="nav-title"><a href="/clicky-game/">{props.title}</a></li>
                <li id="greeting">Click an image to begin!</li>
                <li id="scoreboard">Score: {props.score}|Top Score: {props.topScore}</li>
            </ul>
        </nav>
    )
        
}

export default Navbar;