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
    <div className="flex md:overflow-hidden md:flex-row flex-col-reverse">
      {/* HEADER */}
      <Header
        text="my art gallery"
        textColor="md:text-white"
        headerBG="md:bg-red-600"
        menuTextColor="md:text-white"
      />

      {/* left section */}
      <div className="md:w-[26%] w-[100%] md:static fixed md:mb-0 mb-[60px] bottom-0 md:bg-beige bg-white flex md:h-screen md:flex-col md:pt-[85px]">
        <div className="flex md:pt-24 md:h-screen h-[40px] md:w-auto w-screen">
          <ul className="md:text-gray-400 md:text-[22px] w-[100%] flex md:flex-col md:justify-start justify-around md:items-start items-center md:mt-20 md:ml-[105px] overflow-scroll">
            <li
              className={`md:mb-12 md:cursor-pointer ${
                className === "images" ? "text-red-600" : ""
              }`}
              onClick={() => handlCLick("images")}
            >
              All
            </li>
            <li
              className={`md:mb-12 md:cursor-pointer ${
                className === "sketches" ? "text-red-600" : ""
              }`}
              onClick={() => handlCLick("sketches")}
            >
              Sketches
            </li>
            <li
              className={`md:mb-12 md:cursor-pointer ${
                className === "paintings" ? "text-red-600" : ""
              }`}
              onClick={() => handlCLick("paintings")}
            >
              Paintings
            </li>
            <li
              className={`md:mb-12 md:cursor-pointer ${
                className === "digitals" ? "text-red-600" : ""
              }`}
              onClick={() => handlCLick("digitals")}
            >
              DigitalArts
            </li>
            <li
              className={`md:mb-12 md:cursor-pointer ${
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
      <div className="md:w-screen h-[calc(100vh-200px)] md:h-screen md:flex md:flex-col bg-red-600 md:pt-[120px] pt-[100px] pb-[25px] overflow-scroll">
        <Masonry
          images={images}
          columnCount="3"
          gap="10"
          className="md:z-50"
        ></Masonry>
      </div>

      <SocialMediaIcons className="md:cursor-pointer" />
    </div>
  );
}

export default Gallery;
