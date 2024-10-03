import { Link } from "react-router-dom";
import Header from "../components/header";
import SocialMediaIcons from "../components/socialmediaicons";

function Home() {
  return (
    <div className="flex overflow-hidden">
      <img
        src="./arts/mittaly.webp"
        alt=""
        className="md:h-[90%] md:absolute md:bottom-0 md:left-1/2 md:transform md:-translate-x-1/2"
      />

      {/* HEADER */}
      <Header
        text="art by mittaly"
        textColor="text-red-600"
        menuTextColor="text-white"
      />

      {/* left section */}
      <div className="md:w-1/2 bg-white flex h-screen flex-col md:pt-[85px]">
        <div className="flex md:pt-24 h-screen">
          <img
            src="./arts/text-mittaly.webp"
            alt=""
            className="md:h-[85%] md:-ml-20"
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

      {/* right section */}
      <div className="md:w-1/2 h-screen flex flex-col bg-red-600 md:pt-[120px]">
        <div className="md:ml-[340px] md:mt-[120px] text-[50px] font-bold text-white">
          Choices define you, <br />I chose art.
        </div>
        <Link
          to="./gallery"
          className="bg-white text-red-600 md:w-[180px] md:h-[60px] md:ml-[340px] md:mt-[80px] text-[20px] hover:bg-transparent hover:border-2 hover:border-[white] hover:text-[white] flex items-center justify-center"
        >
          See My Work
        </Link>
      </div>

      <SocialMediaIcons />
    </div>
  );
}

export default Home;
