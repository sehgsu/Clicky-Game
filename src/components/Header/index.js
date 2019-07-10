import React from "react";
import "./style.css";

const Header = props => (
    <div className = "header">
        <div className ="title">{props.children}</div>
        <div className="scoreboard">
            Highscore: {props.highscore} Score: {props.score}
        </div>
    </div>
);

export default Header;