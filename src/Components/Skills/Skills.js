import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./SkillsElements.js";
function Skills() {
  return (
    <ContactWrapper id="skills">
      <div className="Container">
        <div className="SectionTitle">
          <div
            style={{
              fontSize: "40px",
              fontFamily: "'Trebuchet MS', sans-serif",
            }}
          >
            Skills
          </div>
          <hr
            style={{
              marginLeft: "5px",
              width: "95px",
              background: "#d24d57",
            }}
          />
        </div>
        <div className="BigCard">
          <div className="AboutBio tagline2">
            The <strong>tech stacks</strong> I use are
          </div>
          <Technologies>
            {stackList.map((stack, index) => (
              <Tech key={index} className="tech">
                <TechImg src={stack.img} alt={stack.name} />
                <TechName>{stack.name}</TechName>
              </Tech>
            ))}
          </Technologies>
        </div>
      </div>
    </ContactWrapper>
  );
}

export default Skills;
