import React from "react";
import "./FriendCard.css";

const FriendCard = props => (
  <div>
    <div className="playas">
      <img className="headshot" alt= {props.name} src={props.image} onClick={() =>
        {props.handleIncrement(props.id); props.shufflePeople()}}
        />
      <li className="text">Name: {props.name}</li>
      <li className="text">Occupation: {props.occupation}</li>
      <li className="text">Location: {props.location}</li>
      </div>
  </div>      
  ); 

export default FriendCard;
