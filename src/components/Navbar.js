import React from "react";
import "./styles/Navbar.css"

function Navbar(props){
    return(
        <nav className="navbar navbar-dark bg-dark justify-content-between">
            <a className="navbar-brand" href="/clicky-game/"><h2>{props.title}</h2></a>
            <h5>Click an image to begin!</h5>
            <h5>Score: {props.score} | Top Score: {props.topScore}</h5>
        </nav>
    )
        
}

export default Navbar;