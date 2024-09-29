export default function SocialMediaIcons() {
  return (
    <div className="absolute right-0 bottom-0 flex justify-end items-center m-[60px]">
      <a href="https://www.instagram.com" rel="noreferrer" target="_blank">
        <img src="./arts/insta.webp" alt="" className="h-[30px]" />
      </a>

      <a href="https://youtube.com" rel="noreferrer" target="_blank">
        <img src="./arts/youtube.webp" alt="" className="h-[40px] ml-[80px]" />
      </a>
      <a
        href="mailto:mitalykumari07@gmail.com"
        rel="noreferrer"
        target="_blank"
      >
        <img src="./arts/email.webp" alt="" className="h-[35px] ml-[80px]" />
      </a>
    </div>
  );
}
