import { Link } from "react-router-dom"
import logo from "../assets/logo.png"
import menu from "../assets/menu.png"

function Navbar() {
  return (
    <>
      <section className="navbar">
        <div className="mainNav">
        <Link to="/">
        <img className="logo" src={logo} alt="logo" />
        </Link>
        <Link to="/">
        <div>Idiot Sandwich</div>
        </Link>
        <img className="menu" src={menu} alt="menu icon" />
        </div>
        <div className="menuNav">
        <Link to="/">
          <p>Home</p>
          </Link>
          <Link to="/About">
          <p>About Us</p>
          </Link>
        </div>
      </section>
    </>
  );
}

export default Navbar;
