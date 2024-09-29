import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex">
      <img
        src="./arts/mittaly.png"
        alt=""
        className="h-[90%] absolute bottom-0 left-1/2 transform -translate-x-1/2"
      />

      <div className="w-1/2 bg-beige flex h-screen flex-col">
        <div className="bg-tint text-beige h-[120px] w-[340px] p-3 flex justify-center items-center">
          <img
            src="./arts/logo.png"
            alt=""
            className="h-9 mt-[2px] mr-[6px] -ml-[12px] mb-[5px]"
          />
          <span className="text-[40px]">artalic</span>
        </div>
        <div className="flex pt-24 h-screen">
          <img
            src="./arts/text-mittaly.png"
            alt=""
            className="h-[85%] -ml-20"
          />
          <ul className="text-gray-400 text-[22px] mt-20">
            <li className="mb-12">Drawing</li>
            <li className="mb-12">Sketching</li>
            <li className="mb-12">Painting</li>
            <li className="mb-12">Digital Art</li>
            <li className="mb-12">Animation</li>
            <li className="mb-12">Caricature</li>
          </ul>
        </div>
      </div>

      <div
        className="w-1/2 h-screen flex flex-col
       bg-red-600"
      >
        <div className="h-[120px] w-1/1 flex justify-start items-center text-[20px] ml-40 font-bold text-[beige]">
          <Link to="/" className="mr-[120px]">
            Home
          </Link>
          <Link to="./gallery" className="mr-[120px]">
            Gallery
          </Link>
          <Link to="./about" className="mr-[120px]">
            About
          </Link>
        </div>
        <div className="ml-[340px] mt-[120px] text-[50px] font-bold text-[beige]">
          Choices define you, <br />I chose art.
        </div>
        <Link
          to="./gallery"
          className="bg-[beige] text-red-500 w-[180px] h-[60px] ml-[340px] mt-[80px] text-[20px] hover:bg-transparent hover:border-2 hover: border-[beige] hover:text-[beige] flex items-center justify-center"
        >
          See My Work
        </Link>

        <div className="absolute right-0 bottom-0 flex justify-end items-center m-[60px]">
          <a href="https:/instagram.com" target="_blank">
            <img src="./arts/insta.png" alt="" className="h-[30px]" />
          </a>

          <a href="https:/youtube.com" target="_blank">
            <img
              src="./arts/youtube.png"
              alt=""
              className="h-[40px] ml-[80px]"
            />
          </a>
          <a href="mailto:mitalykumari07@gmail.com" target="_blank">
            <img src="./arts/email.png" alt="" className="h-[35px] ml-[80px]" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
