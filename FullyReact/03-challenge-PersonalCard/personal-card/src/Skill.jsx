import React from "react";
import "./styles.css";

function Skill({ skill, color, level }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span> {skill}</span>
      <span>
        {level === "beginner" && "👶🏻"}
        {level === "intermediate" && "👍🏻"}
        {level === "advanced" && "💪🏻"}
      </span>
    </div>
  );
}

export default Skill;
