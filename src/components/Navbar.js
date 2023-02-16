import "../style/Styles.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="nav">
      <div className="top-nav">
        <div className="star-logo">
          <img
            className="star-logo"
            src="https://lumiere-a.akamaihd.net/v1/images/sw_logo_stacked_2x-52b4f6d33087_7ef430af.png?region=0,0,586,254"
            alt="Star Wars logo"
          />
        </div>
        <div className="user">
          <button>LOG IN</button>
          <p>//</p>
          <button>SING UP</button>
        </div>
      </div>
      <div className="low-nav">
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/starships">STARSHIPS</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
