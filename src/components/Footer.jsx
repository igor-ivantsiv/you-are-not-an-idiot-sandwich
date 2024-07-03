import { Link } from "react-router-dom"
import gmail from "../assets/gmail_icon.png"
import gitHub from "../assets/github.png"

function Footer() {
    return <footer>

<ul className="footerList">
<li> <a href="https://github.com/igor-ivantsiv/" target="_blank"> <img src={gitHub} className="envelope" alt="gitHub" /> Igor </a></li>
<li> <a href="https://github.com/SantiMora06" target="_blank"> <img src={gitHub} className="envelope" alt="gitHub" /> Santiago </a></li>
<li> <a href="mailto:idk@gmail.com"><img src={gmail} className="envelope" alt="mail" /> </a></li>
<Link to={"/about"}> <li>About us</li> </Link>
<li>Made by Igor & Santiago ©</li>
</ul>
    </footer>
}

export default Footer