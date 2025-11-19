import GLabsIcon from "../assets/GLabsIcon";
import MenuIcon from "../assets/MenuIcon";
import CurrentTime from "./CurrentTime";

const Header = () => {
  return (
    <header className="text-white flex justify-between items-start p-2 ">
      <CurrentTime />
      <div className="flex items-center justify-center gap-5">
        <a className="text-[14px]" href="https://mail.google.com/mail/?tab=rm&ogbl">
          Gmail
        </a>
        <a className="text-[14px]" href="https://www.google.com/imghp?hl=en&tab=ri&ogbl">
          Images
        </a>
        <div className="flex gap-3">
          <a href="https://labs.google.com/search?source=ntp" className="size-10 hover:bg-[#e8eaed14] grid place-items-center rounded-full transition-all">
            <GLabsIcon className="fill-white/87" />
          </a>
          <button className="size-10 hover:bg-[#e8eaed14] grid place-items-center rounded-full transition-all cursor-pointer">
            <MenuIcon className="fill-white/87" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
