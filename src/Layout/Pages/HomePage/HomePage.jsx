import "./HomePage.css";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <div className="home_main_banner_container">
        <div className="home_banner_left_container">
          <h2>Craft Your Words<br/> Effortlessly</h2>
          <p>
            Experience seamless editing with our rich text editor,
            <br /> designed to bring your ideas to life.
          </p>
          <Link to="/textEditor">
            <button>Get started</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default HomePage;