import { Link } from "react-router-dom";
import santiago from "../assets/santiago.png"
import igor from "../assets/igor.png"

function About() {
  return (
    <section className="mainContent">
      <div className="h1div">
        <h1>About Us</h1>
        <Link to="/">
          <button type="button">Back</button>
        </Link>
      </div>
      <p className="aboutText">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit commodi
        accusantium ipsa quis, nisi a corrupti nesciunt labore praesentium
        beatae! Ea quae repellat voluptates magni deleniti beatae ab ipsam
        doloremque? Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Earum facilis vitae ducimus in aliquam blanditiis, libero illum
        inventore neque, ad porro consectetur esse facere iusto ut cumque quasi
        dignissimos cupiditate? Lorem ipsum dolor sit, amet consectetur
        adipisicing elit. Quidem sit earum, aut, amet quisquam ex velit debitis
        obcaecati laudantium dicta ratione tempora possimus officia rem
        accusamus ducimus dolore nam eaque.
      </p>
      <div>
        <h2 className="h1div">The Team</h2>
        <div className="recipeList">
          <div className="teamCard">
            <img className="teamImage" src={santiago} alt="santiago" /> 
            <div>
            <h3>Santiago Mora</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit reiciendis cumque adipisci perferendis nemo dolore minima nesciunt possimus</p>
            <p>LinkedIn</p>
            <p>Github</p>
            </div>
          </div>
          <div className="teamCard">
            <img className="teamImage" src={igor} alt="santiago" /> 
            <div>
            <h3>Igor Ivantsiv</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit reiciendis cumque adipisci perferendis nemo dolore minima nesciunt possimus</p>
            <p>LinkedIn</p>
            <p>Github</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
