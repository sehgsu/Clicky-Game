import React from "react";
import "./style.css";

const Card = props => (

    <div className="card" 
    onClick={() => props.handleCount(props.id)}>
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
    </div>
  );  

export default Card;