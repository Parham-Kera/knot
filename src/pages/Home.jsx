import Background from "./backgrounddone.jsx";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="mainsec">
      <div className="logo1">
        <Background />
      </div>

      <div className="words">
        <h1 className="title"> Knotted</h1>
        <h3>An app made for fiber artist by a fiber artist</h3>
        <Link to="/signup">
          <button className="button1">Get Started</button>
        </Link>
      </div>
    </main>
  );
};

export default Home;
