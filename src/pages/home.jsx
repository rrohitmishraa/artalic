import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex">
      <img
        src="./arts/mittaly.png"
        alt=""
        className="h-[920px] absolute bottom-0 left-1/2 transform -translate-x-1/2"
      />

      <div className="w-1/2 bg-beige flex h-screen flex-col">
        <div className="bg-tint text-beige h-[120px] w-[340px] p-3 flex justify-center items-center">
          <img
            src="./arts/logo.png"
            alt=""
            className="h-8 mt-[2px] mr-[6px] -ml-[12px]"
          />
          <span className="text-[40px]">artalic</span>
        </div>
        <div className="flex pt-24 h-screen">
          <img
            src="./arts/text-mittaly.png"
            alt=""
            className="h-[720px] -ml-20"
          />
          <ul className="text-gray-400 text-[20px] mt-20">
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
        <div className="h-[120px] w-1/1 flex justify-start items-center text-[20px] ml-40 font-bold text-white">
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
        <div className="ml-[340px] mt-[120px] text-[50px] font-bold text-white">
          Choices define you, <br />I chose art.
        </div>
        <Link
          to="./gallery"
          className="bg-white text-red-500 w-[180px] h-[60px] ml-[340px] mt-[80px] text-[20px] active:bg-gray flex items-center justify-center"
        >
          See My Work
        </Link>
      </div>
    </div>
  );
}

export default Home;
