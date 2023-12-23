import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="nav">
      <Link to="/">
        <div>Home</div>
      </Link>
      <Link to="/portfolio">
        <div>Portfolio</div>
      </Link>
      <Link to="/Resume">
        <div>Resume</div>
      </Link>
      <Link to="/Contact">
        <div>Contact</div>
      </Link>
    </div>
  );
}
export default Nav;
