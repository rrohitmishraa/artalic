import Header from "../components/header";
import SocialMediaIcons from "../components/socialmediaicons";

function About() {
  return (
    <div className="md:flex md:h-screen">
      <Header
        text="about me"
        textColor="md:text-red-600"
        headerBG=""
        menuTextColor="md:text-red-600 md:cursor-pointer"
      />

      {/* left section */}
      <div className="overflow-scroll h-[calc(100vh-175px)] pl-[20px] pr-[20px] pt-[100px] md:pt-[180px] pb-0 leading-[2] md:p-0 mt-0 md:flex md:w-1/2 bg-white md:flex-col md:h-screen md:justify-center md:items-start md:pl-[120px]">
        <h1 className="md:text-[20px] md:font-bold">About Me</h1>
        <h1 className="text-red-600 md:text-[80px] text-[30px]">
          Mittaly Kumari
        </h1>
        <h2 className="md:text-[20px] mb-[20px]">artist | educator</h2>

        <p className="md:h-screen">
          Hello,
          <br />
          I’m Mittaly Kumari, a passionate artist and dedicated painting
          instructor with years of experience in both creating art and teaching
          it to students of all ages. I’ve had the privilege of teaching in
          diverse settings, from institutes and schools to home tuitions. In
          addition to local classes, I offer online lessons to international
          students from the USA, Mexico, Australia, and beyond.
          <br />
          <br />
          My teaching approach focuses on nurturing creativity and technique,
          whether you’re a beginner or an advanced artist. I tailor my lessons
          to meet each student’s unique needs, ensuring they not only learn the
          fundamentals but also develop their own artistic style. I believe art
          is for everyone, and my goal is to inspire others to express
          themselves through painting.
          <br />
          <br />
          When I’m not teaching, you can find me working on my own pieces,
          constantly exploring new styles and techniques.
          <br />
          <br />
          Let’s create something beautiful together!
        </p>
      </div>

      {/* right section */}
      <div className="mt-[-440px] md:flex md:w-1/2 md:h-screen md:bg-white md:flex-col md:pt-[120px] md:overflow-scroll">
        <div className="hidden md:absolute md:bottom-0 md:bg-red-600 md:text-[28px] md:text-white md:px-5 md:py-2 md:flex md:justify-center md:items-center md:rounded-[6px] md:mb-[240px] md:ml-[90px] md:z-50">
          artist
        </div>

        <img
          src="./arts/mittaly1.webp"
          alt=""
          className="hidden md:flex md:h-[90%] md:absolute md:bottom-0 md:right-0 md:mr-[120px]"
        />

        <div className="hidden md:absolute md:bottom-0 md:right-0 md:bg-red-600 md:text-[28px] md:text-white md:px-5 md:py-2 md:flex md:justify-center md:items-center md:rounded-[6px] md:mb-[540px] md:mr-[190px] md:z-50">
          educator
        </div>
      </div>

      <SocialMediaIcons className="md:cursor-pointer" />
    </div>
  );
}

export default About;
