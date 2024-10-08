import { Link } from "react-router-dom";
import Header from "../components/header";
import SocialMediaIcons from "../components/socialmediaicons";

function Home() {
  return (
    <div className="md:flex md:overflow-hidden h-[screen] w-[100%]">
      {/* HEADER */}
      <Header
        text="art by mittaly"
        textColor="md:text-red-600"
        menuTextColor="md:text-white"
      />

      {/* left section */}
      <div className="md:w-1/2 w-[100%] h-[calc(100vh-168px)] bg-red-600 md:bg-white md:flex md:h-screen md:flex-col md:pt-[85px]">
        <img
          src="./arts/mittaly.webp"
          alt=""
          className="h-[370px] bottom-0 md:h-[90%] md:block md:mb-0 mb-[64px] right-0 pr-[40px] absolute md:bottom-0 md:left-1/2 md:transform md:-translate-x-1/2"
        />

        <div className="md:flex md:pt-24 md:h-screen h-[100%]">
          <img
            src="./arts/text-mittaly.webp"
            alt=""
            className="md:h-[85%] w-[220px] ml-[80px] md:opacity-100 opacity-30 md:block md:-ml-20 rotate-90 md:rotate-0 md:w-auto md:mt-0"
          />

          <ul className="md:text-gray-400 md:text-[22px] md:block md:mt-20 text-[rgba(255,255,255,0.6)] pl-[28px] mt-[-90px]">
            <li className="mb-12 md:mb-[80px] mr-[20px]">Drawing</li>
            <li className="mb-12 md:mb-[80px] mr-[20px]">Sketching</li>
            <li className="mb-12 md:mb-[80px] mr-[20px]">Painting</li>
            <li className="mb-12 md:mb-[80px] mr-[20px]">Digital Art</li>
            <li className="mb-12 md:mb-[80px] mr-[20px]">Animation</li>
            <li className="mb-12 md:mb-[80px] mr-[20px]">Caricature</li>
          </ul>
        </div>
      </div>

      {/* right section */}
      <div className="md:w-1/2 md:h-screen md:flex md:flex-col md:bg-red-600 md:pt-[120px]">
        <div className="md:ml-[340px] md:static absolute md:mt-[120px] right-0 top-0 mt-[250px] md:mr-auto mr-[20px] ml-[150px] md:text-[50px] text-[30px] font-bold text-white">
          Choices define you, <br />I chose art.
        </div>

        <Link
          to="./gallery"
          className="md:bg-white md:static hidden bottom-0 right-0 md:text-red-600 md:w-[180px] md:h-[60px] md:ml-[340px] md:mt-[80px] md:text-[20px] md:hover:bg-transparent md:hover:border-2 md:hover:border-[white] md:hover:text-[white] md:flex md:items-center md:justify-center"
        >
          See My Work
        </Link>
      </div>

      <SocialMediaIcons className="md:cursor-pointer" />
    </div>
  );
}

export default Home;
