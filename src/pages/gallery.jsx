import { Link } from "react-router-dom";
import Masonry from "../components/masonry.jsx";
import { useEffect, useState } from "react";
import Header from "../components/header.jsx";
import SocialMediaIcons from "../components/socialmediaicons.jsx";

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
    <div className="flex overflow-hidden">
      {/* HEADER */}
      <Header
        text="my art gallery"
        textColor="text-white"
        headerBG="bg-red-600"
        menuTextColor="text-white"
      />

      {/* left section */}
      <div className="w-[26%] bg-beige flex h-screen flex-col pt-[85px]">
        <div className="flex pt-24 h-screen">
          <ul className="text-gray-400 text-[22px] mt-20 ml-[105px]">
            <li
              className={`mb-12 cursor-pointer ${
                className === "images" ? "text-red-600" : ""
              }`}
              onClick={() => handlCLick("images")}
            >
              All
            </li>
            <li
              className={`mb-12 cursor-pointer ${
                className === "sketches" ? "text-red-600" : ""
              }`}
              onClick={() => handlCLick("sketches")}
            >
              Sketches
            </li>
            <li
              className={`mb-12 cursor-pointer ${
                className === "paintings" ? "text-red-600" : ""
              }`}
              onClick={() => handlCLick("paintings")}
            >
              Paintings
            </li>
            <li
              className={`mb-12 cursor-pointer ${
                className === "digitals" ? "text-red-600" : ""
              }`}
              onClick={() => handlCLick("digitals")}
            >
              DigitalArts
            </li>
            <li
              className={`mb-12 cursor-pointer ${
                className === "animations" ? "text-red-600" : ""
              }`}
              onClick={() => handlCLick("animations")}
            >
              Animations
            </li>
          </ul>
        </div>
      </div>

      {/* right section */}
      <div className="w-screen h-screen flex flex-col bg-red-600 pt-[120px] overflow-scroll">
        <Masonry
          images={images}
          columnCount="3"
          gap="10"
          className="z-50"
        ></Masonry>
      </div>

      <SocialMediaIcons />
    </div>
  );
}

export default Gallery;
