import React from "react";
import "./styles.css";

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span> {props.skill}</span>
      <span> {props.emoji}</span>
    </div>
  );
}

export default Skill;
