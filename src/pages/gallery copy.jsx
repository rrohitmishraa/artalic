import { Link } from "react-router-dom";
import Masonry from "../components/masonry.jsx";
import { useEffect, useState } from "react";

function Gallery() {
  const [images, setImages] = useState([]);
  const [className, setClassName] = useState("images");

  const handlCLick = (a) => {
    setClassName(a);
    fetchImages(a);
  };

  function fetchImages(a) {
    fetch("/" + a + ".json")
      .then((response) => response.json())
      .then((data) => setImages(data))
      .catch((error) => console.error("Error loading images:", error));
  }

  useEffect(() => {
    fetchImages("images");
  }, []);

  return (
    <div className="flex flex-col">
      <header className="header">
        <div className="logo">
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
            <Link className="link active" to="/gallery">
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

      <div className="galContainer">
        <h1>my art gallery</h1>
        <ul>
          <li
            className={className === "images" ? "images" : ""}
            onClick={() => handlCLick("images")}
          >
            All
          </li>
          <li
            className={className === "sketches" ? "sketches" : ""}
            onClick={() => handlCLick("sketches")}
          >
            Sketches
          </li>
          <li
            className={className === "paintings" ? "paintings" : ""}
            onClick={() => handlCLick("paintings")}
          >
            Paintings
          </li>
          <li
            className={className === "digitals" ? "digitals" : ""}
            onClick={() => handlCLick("digitals")}
          >
            DigitalArts
          </li>
          <li
            className={className === "animations" ? "animations" : ""}
            onClick={() => handlCLick("animations")}
          >
            Animations
          </li>
        </ul>

        <Masonry images={images} columnCount="3" gap="5"></Masonry>
      </div>
    </div>
  );
}

export default Gallery;
