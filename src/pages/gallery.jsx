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
    <div className="flex overflow-hidden">
      {/* HEADER */}
      <div className="absolute flex w-screen h-[120px] bg-red-600">
        {/* header left */}
        <div className="w-1/2 flex">
          <Link
            to="/"
            className="bg-tint text-beige h-[120px] w-[41.28%] p-3 flex justify-center items-center"
          >
            <img
              src="./arts/logo.webp"
              alt=""
              className="h-9 mt-[2px] mr-[6px] -ml-[12px] mb-[5px]"
            />
            <span className="text-[40px]">artalic</span>
          </Link>
          <div className="flex justify-center items-center w-[calc(100%-41.28%)] text-[28px] text-beige">
            my art gallery
          </div>
        </div>

        {/* header right */}
        <div className="h-1/1 w-1/2 flex justify-start items-center text-[20px] pl-40 font-bold text-[beige]">
          <Link to="/" className="mr-[120px]">
            Home
          </Link>
          <Link to="/gallery" className="mr-[120px]">
            Gallery
          </Link>
          <Link to="/about" className="mr-[120px]">
            About
          </Link>
        </div>
      </div>

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

      {/* social media icons */}
      <div className="absolute right-0 bottom-0 flex justify-end items-center m-[60px]">
        <a href="https://www.instagram.com" rel="noreferrer" target="_blank">
          <img src="./arts/insta.webp" alt="" className="h-[30px]" />
        </a>

        <a href="https://youtube.com" rel="noreferrer" target="_blank">
          <img
            src="./arts/youtube.webp"
            alt=""
            className="h-[40px] ml-[80px]"
          />
        </a>
        <a
          href="mailto:mitalykumari07@gmail.com"
          rel="noreferrer"
          target="_blank"
        >
          <img src="./arts/email.webp" alt="" className="h-[35px] ml-[80px]" />
        </a>
      </div>
    </div>
  );
}

export default Gallery;
