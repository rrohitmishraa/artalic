export default function SocialMediaIcons() {
  return (
    <div className="absolute right-0 bottom-0 flex justify-end items-center m-[60px]">
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
        <img src="./arts/youtube.webp" alt="" className="h-[40px] ml-[80px]" />
      </a>
      <a
        href="mailto:mitalykumari07@gmail.com"
        rel="noreferrer"
        target="_blank"
      >
        <img src="./arts/email.webp" alt="" className="h-[25px] ml-[80px]" />
      </a>
    </div>
  );
}
