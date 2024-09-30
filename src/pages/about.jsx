import Header from "../components/header";
import SocialMediaIcons from "../components/socialmediaicons";

function About() {
  return (
    <div className="flex">
      <Header
        text="about me"
        textColor="text-red-600"
        headerBG=""
        menuTextColor="text-red-600"
      />

      {/* left section */}
      <div className="w-1/2 bg-white flex flex-col h-screen justify-center items-start pl-[120px]">
        <h1 className="text-[20px] font-bold">About Me</h1>
        <h1 className="text-red-600 text-[80px]">Mittaly Kumari</h1>
        <h2 className="text-[20px] mb-[20px]">artist | educator</h2>

        <p>
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
      <div className="w-1/2 h-screen flex bg-white flex-col pt-[120px] overflow-scroll">
        <div className="absolute bottom-0 bg-red-600 text-[28px] text-white px-5 py-2 flex justify-center items-center rounded-[6px] mb-[240px] ml-[90px] z-50">
          artist
        </div>

        <img
          src="./arts/mittaly1.webp"
          alt=""
          className="h-[90%] absolute bottom-0 right-0 mr-[120px]"
        />

        <div className="absolute bottom-0 right-0 bg-red-600 text-[28px] text-white px-5 py-2 flex justify-center items-center rounded-[6px] mb-[540px] mr-[190px] z-50">
          educator
        </div>
      </div>

      <SocialMediaIcons />
    </div>
  );
}

export default About;
