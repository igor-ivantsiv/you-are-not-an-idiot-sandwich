import { Link } from "react-router-dom"

function Navbar() {
  return (
    <>
      <section className="navbard">
        <Link to="/">
        <img src="" alt="logo" />
        </Link>
        <Link to="/">
        <div>company name</div>
        </Link>
        <img src="" alt="menu icon" />
        <div>
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
