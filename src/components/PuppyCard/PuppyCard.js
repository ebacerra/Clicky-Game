import React from "react";
import "./PuppyCard.css";

const PuppyCard = props => (
  <div>
    <div className="row">
      <div
        className="card"
        value={props.id}
        onClick={() => props.handleClick(props.id)}
      >
        <div className="img-container">
          <img alt={props.name} src={props.image} />
        </div>
        {/* <div className="content">
      <ul>
        <li>
          <strong>Name:</strong> {props.name}
        </li>
        <li>
          <strong>Occupation:</strong> {props.occupation}
        </li>
        <li>
          <strong>Location:</strong> {props.location}
        </li>
      </ul>
    </div> */}
      </div>
    </div>
  </div>
);

export default PuppyCard;
