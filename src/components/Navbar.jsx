import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import menu from "../assets/menu.png";
import { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the state of the menu
  }



  return (
    <>
      <section className="navbar">
        <div className="mainNav">
          <Link to="/">
            <img className="logo" src={logo} alt="logo" />
          </Link>
          <Link className="links" to="/"> 
            <p className="pageName">You are Not an Idiot Sandwich</p>
          </Link>
          <img onClick={toggleMenu} className="menuIcon" src={menu} alt="menu icon" />
        </div>
        {isMenuOpen && (<div className={`menu ${isMenuOpen ? 'show' : ''}`}>
          <Link className="links" to="/">
            <p className="menuItem">Home</p>
          </Link>
          <Link className="links" to="/About">
            <p className="menuItem">About Us</p>
          </Link>
        </div>)} 
      </section>
    </>
  );
}

export default Navbar;
