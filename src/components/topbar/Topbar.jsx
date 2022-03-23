import "./topbar.scss";
import PersonIcon from '@mui/icons-material/Person';
import MailIcon from '@mui/icons-material/Mail';
import { useEffect, useState } from "react";

const Topbar = ({menuOpen,setMenuOpen}) => {

  const [isScrolled,setIsScrolled] = useState(false);

  window.onscroll = () =>{
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  // console.log(window.pageYOffset)
  console.log(isScrolled)
  console.log(window)

  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">[JT]</a>
          <div className="itemContainer">
            <PersonIcon className="icon" />
            <span>+51 999 600 566</span>
          </div>
          <div className="itemContainer">
            <MailIcon className="icon" />
            <span>jordan.terrazos@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;