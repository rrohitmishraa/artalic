import { Link } from "react-router-dom";
import Header from "../components/header";
import SocialMediaIcons from "../components/socialmediaicons";

function Home() {
  return (
    <div className="flex overflow-hidden">
      <img
        src="./arts/mittaly.webp"
        alt=""
        className="h-[90%] absolute bottom-0 left-1/2 transform -translate-x-1/2"
      />

      {/* HEADER */}
      <Header text="art by mittaly" textColor="text-red-600" />

      {/* left section */}
      <div className="w-1/2 bg-beige flex h-screen flex-col pt-[85px]">
        <div className="flex pt-24 h-screen">
          <img
            src="./arts/text-mittaly.webp"
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

      {/* right section */}
      <div className="w-1/2 h-screen flex flex-col bg-red-600 pt-[120px]">
        <div className="ml-[340px] mt-[120px] text-[50px] font-bold text-[beige]">
          Choices define you, <br />I chose art.
        </div>
        <Link
          to="./gallery"
          className="bg-[beige] text-red-600 w-[180px] h-[60px] ml-[340px] mt-[80px] text-[20px] hover:bg-transparent hover:border-2 hover: border-[beige] hover:text-[beige] flex items-center justify-center"
        >
          See My Work
        </Link>
      </div>

      <SocialMediaIcons />
    </div>
  );
}

export default Home;
