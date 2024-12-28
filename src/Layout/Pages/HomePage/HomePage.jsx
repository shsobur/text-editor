import { Link } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {
  return (
    <>
      <div className="home_main_banner_container">
        <div className="home_banner_left_container">
          <h2>Craft Your Words Effortlessly</h2>
          <p>
            Experience seamless editing with our rich text editor,
            <br /> designed to bring your ideas to life.
          </p>
          <Link to="/textEditor">
            <button>Get started</button>
          </Link>
        </div>
        <div className="home_banner_right_container"></div>
      </div>
    </>
  );
};

export default HomePage;