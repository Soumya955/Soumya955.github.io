import React from "react";
import ProjectCard from "./ProjectCard/ProjectCard";
function Projects() {
  return (
    <>
      <div className="projectmaindiv">
        <div className="ProjectWrapper" id="projects">
          <div className="Container">
            <div className="SectionTitle">
              <div
                style={{
                  fontSize: "40px",
                  fontFamily: "'Trebuchet MS', sans-serif",
                }}
              >
                Projects
              </div>
              <hr
                style={{
                  marginLeft: "5px",
                  width: "155px",
                  background: "#d24d57",
                }}
              />
            </div>

            <ProjectCard />
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
