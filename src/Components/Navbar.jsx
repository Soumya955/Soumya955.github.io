import { useState } from "react";
import { Link } from 'react-scroll';
// import { PhoneIcon, AddIcon,SunIcon,Icon,AttachmentIcon,AtSignIcon ,HamburgerIcon
//   ,CalendarIcon,
//   MoonIcon
// } from '@chakra-ui/icons'
import "./Styles.css";

export const Navbar = () => {
  const [click,setClick]=useState(false)
const closeMenu=()=>setClick(false)
  const [isPage, setIsPage] = useState("hero");
  return (
    <div className="navMain">
           
      <div
        onClick={() => {
          setIsPage("hero");
        }}
        style={isPage === "hero" ? { color: "black" } : null}
      >
      <Link to="hero" spy={true} smooth={true} offset={-100} duration={700} onClick={closeMenu}> <h2 > Soumyaranjan Badajena </h2></Link>
        {/* <Link to="/">Soumyaranjan Badajena </Link> */}
      </div>
      <div>
      <div className="download">
              <Link
              style={{color:"#d24d57"}}
                to="/files/Soumyaranjan.pdf"
                className="btn btn--outline"
                target="_blank"
                download
              >
                Download Resume
              </Link>
            </div>
      <div
          onClick={() => {
            setIsPage("skill");
          }}
          style={isPage === "skills" ? { color: "black" } : null}
        >
         <Link to="skills" spy={true} smooth={true} offset={-100} duration={700} onClick={closeMenu}> <h2 > Skills </h2></Link>
          {/* <Link to="/skills">Skills</Link> */}
        </div>
        
        <div
          onClick={() => {
            setIsPage("project");
          }}
          style={isPage === "project" ? { color: "black" } : null}
        >
         <Link to="projects" spy={true} smooth={true} offset={-100} duration={700} onClick={closeMenu}> <h2 > Projects </h2></Link>
          {/* <Link to="/projects">Projects</Link> */}
        </div>
        <div
          onClick={() => {
            setIsPage("skill");
          }}
          style={isPage === "calender" ? { color: "black" } : null}
        >
         <Link to="calender" spy={true} smooth={true} offset={-100} duration={700} onClick={closeMenu}> <h2 > Calendar </h2></Link>
          {/* <Link to="/calender">Calender</Link> */}
        </div>
        <div
          onClick={() => {
            setIsPage("skill");
          }}
          style={isPage === "status" ? { color: "black" } : null}
        >
         <Link to="status" spy={true} smooth={true} offset={-100} duration={700} onClick={closeMenu}> <h2 > Status </h2></Link>
          {/* <Link to="/status">Status</Link> */}
        </div>
        
        <div
          onClick={() => {
            setIsPage("about");
          }}
          style={isPage === "about" ? { color: "black" } : null}
        >
        <Link to="about" spy={true} smooth={true} offset={-100} duration={700} onClick={closeMenu}> <h2 > Contact Me </h2></Link>
          {/* <Link to="/about-me">Contact Me</Link> */}
        </div>
        
      </div>
    </div>
  );
};
