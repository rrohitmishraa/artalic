import { Link } from "react-router-dom";

export default function Header(props) {
  return (
    <div>
      {/* HEADER */}
      <div className={`absolute flex w-screen h-[120px] ${props.headerBG}`}>
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
          <div
            className={`flex justify-center items-center w-[calc(100%-41.28%)] text-[28px] ${props.textColor}`}
          >
            {props.text}
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
    </div>
  );
}
