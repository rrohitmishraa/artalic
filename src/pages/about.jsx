import { Link } from "react-router-dom";

function About() {
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
            <Link className="link" to="/">
              home
            </Link>
          </li>
          <li>
            <Link className="link" to="/gallery">
              gallery
            </Link>
          </li>
          <li>
            <Link className="link active" to="/about">
              about
            </Link>
          </li>
        </ul>
      </header>

      <div className="abtContainer">
        <div className="subImage">
          <img src="./arts/mittaly.webp" alt="" className="abtImage" />
        </div>
        <div className="sub">
          <h1>about me</h1>
          <div className="aboutme">
            Hey there! <br /> <br /> My name is Mittaly Kumari. I&apos;m an
            independent artist who loves to draw whenever she can. My journey
            started in my childhood, as my family noticed that I liked to draw
            and, according to them, was quite good at it (parents, they are
            always like this 😄). So my hobby has been embraced.
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
