import { Link } from "react-router-dom";
import "../App.css";

function Home() {
  return (
    <div className="App">
      <header className="header">
        <div className="logo">
          {/* <img
            src={require("../src/components/logo-red.png")}
            className="icon"
          /> */}
          <Link className="brandName" to="/">
            artalic
          </Link>
        </div>
        <ul className="navBar">
          <li>
            <Link className="link active" to="/">
              home
            </Link>
          </li>
          <li>
            <Link className="link" to="/gallery">
              gallery
            </Link>
          </li>
          <li>
            <Link className="link" to="/about">
              about
            </Link>
          </li>
        </ul>
      </header>

      <div className="container">
        <h1>art by mittaly</h1>
        <h2>choices define you, i chose art.</h2>
        <ul>
          <li>drawing</li>
          <li>sketching</li>
          <li>painting</li>
          <li>caricature</li>
          <li>digital art</li>
          <li>animation</li>
        </ul>

        <Link className="btnWork" to="/gallery">
          see my works
        </Link>
      </div>
    </div>
  );
}

export default Home;
