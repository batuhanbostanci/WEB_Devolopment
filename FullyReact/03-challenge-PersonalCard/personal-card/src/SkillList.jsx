import React from "react";
import Skill from "./Skill";
import "./styles.css";
import skills from "./skills";

function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill skill={skill.skill} level={skill.level} color={skill.color} />
      ))}
    </div>
  );
}

export default SkillList;
