import React from "react";
import Skill from "./Skill";
import "./styles.css";

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="React" emoji="💪🏻" color="red" />
      <Skill skill="Java" emoji="🙉" color="orange" />
      <Skill skill="CyberSecurity" emoji="👾" color="green" />
      <Skill skill="JS" emoji="👾" color="yellow" />
    </div>
  );
}

export default SkillList;
