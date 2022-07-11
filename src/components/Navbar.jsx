
import img from "../images/logo.png";
import "../style.css"
export default function Navbar()
{
    return (
      <>
        <nav className="navbar">
          <img src={img} alt="react-logo" className="react-logo" />
          <h3 className="reactFacts">ReactFacts</h3>
          <h4 className="MadeBy">Made By : Swarup Yeole</h4>
        </nav>
      </>
    );
}