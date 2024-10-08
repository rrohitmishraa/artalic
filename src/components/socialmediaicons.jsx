export default function SocialMediaIcons() {
  return (
    <div className="flex absolute top-0 h-[80px] md:pr-0 pr-[40px] md:top-auto md:h-auto right-0 md:bottom-0 md:justify-end items-center md:m-[60px]">
      <a
        href="https://www.instagram.com/a.for.artalic"
        rel="noreferrer"
        target="_blank"
      >
        <img src="./arts/insta.webp" alt="" className="h-[25px]" />
      </a>

      <a
        href="https://www.youtube.com/@a.for.artalic"
        rel="noreferrer"
        target="_blank"
      >
        <img
          src="./arts/youtube.webp"
          alt=""
          className="h-[40px] md:ml-[80px] ml-[40px]"
        />
      </a>
      <a
        href="mailto:mitalykumari07@gmail.com"
        rel="noreferrer"
        target="_blank"
      >
        <img
          src="./arts/email.webp"
          alt=""
          className="h-[25px] md:ml-[80px] ml-[40px]"
        />
      </a>
    </div>
  );
}
