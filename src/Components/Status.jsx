

import React from "react";

import "./Status.css"

const Stats = () => {
  return (
    <div className="Stats" id="status" >
         <h1>Github Stats</h1>
      <div   className="StatsChild1">
        <a href="https://github.com/Soumya955">
          <img
            align="left"
            src="https://github-readme-streak-stats.herokuapp.com?user=Soumya955&theme=radical"
          />
        </a>
        <a href="https://github.com/Soumya955">
          <img 
            align="left"
            src="https://github-readme-stats.vercel.app/api?username=Soumya955&theme=radical&count_private=true&show_icons=true" //stats
          />
        </a>
        
      </div>
 
      <div className="StatsChild2">
        <a href="https://github.com/Soumya955">  
          <img
            align="center"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=Soumya955&theme=radical"  //launguages
          />
        </a>
       
      </div>
    </div>
  );
};

export default Stats;