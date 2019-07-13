import React from "react";
import "./style.css";

const Header = props => (
    <div className = "header justify-content-center">
        <div className ="title">{props.children}</div>
        <div className="scores">
            Highscore: {props.highscore} Score: {props.score}
        </div>
    </div>
);

export default Header;