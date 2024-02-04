import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="nav_bar">
        <Link to="/" className="nav_itmes">
          {" "}
          Home{" "}
        </Link>
        <Link to="/About" className="nav_itmes">
          {" "}
          About{" "}
        </Link>
        <Link to="/Tutorials" className="nav_itmes">
          {" "}
          Tutorials{" "}
        </Link>
        <div id="sn">
          <Link to="/signup">Sign-up</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
