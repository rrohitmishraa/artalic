import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header(props) {
  const [page, setPage] = useState(window.location.pathname);
  return (
    <div>
      {/* HEADER */}
      <div
        className={`md:absolute md:flex md:w-screen md:h-[120px] ${props.headerBG}`}
      >
        {/* header left */}
        <div className="md:w-1/2 flex md:flex-row w-[100%]">
          <Link
            to="/"
            className="md:static absolute top-0 left-0 bg-tint text-white h-[80px] md:h-[120px] w-[41.28%] md:p-3 flex justify-center items-center"
          >
            <img
              src="./arts/logo.webp"
              alt=""
              className="h-6 md:h-8 md:mt-[2px] mr-[4px] md:mr-[6px] md:-ml-[12px] md:mb-[5px]"
            />
            <span className="md:text-[40px] text-[30px]">artalic</span>
          </Link>
          <div
            className={`hidden md:flex md:justify-center md:items-center md:w-[calc(100%-41.28%)] md:text-[28px] ${props.textColor}`}
          >
            {props.text}
          </div>
        </div>

        {/* header right */}
        <div
          className={`fixed bottom-0 md:shadow-none shadow-[rgba(0,_0,_0,_0.2)_0px_-10px_10px_-7px] md:bg-transparent bg-white p-[20px] justify-around font-bold md:static md:h-full w-[100%] md:w-1/2 flex md:justify-start md:items-center md:text-[20px] md:pl-40 md:font-bold ${props.menuTextColor}`}
        >
          <Link
            to="/"
            className={`md:mr-[120px] md:py-[8px] md:px-[15px] ${
              page === "/" ? "bg-white text-red-600" : "md:bg-transparent"
            }`}
          >
            Home
          </Link>
          <Link
            to="/gallery"
            className={`md:mr-[120px] md:py-[8px] md:px-[15px] ${
              page === "/gallery"
                ? "bg-white text-red-600"
                : "md:bg-transparent"
            }`}
          >
            Gallery
          </Link>
          <Link
            to="/about"
            className={`md:mr-[120px] md:py-[8px] md:px-[15px] ${
              page === "/about"
                ? "md:bg-red-600 md:text-white text-red-600"
                : "md:bg-transparent"
            }`}
          >
            About
          </Link>
        </div>
      </div>
    </div>
  );
}
