import { useState } from "react";
import GLabsIcon from "../assets/GLabsIcon";
import CurrentTime from "./CurrentTime";
import AppsMenu from "./AppsMenu";
import ProfileMenu from "./ProfileMenu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const handleMenuToggle = (isOpen) => {
    setIsMenuOpen(isOpen);
    if (isOpen) {
      setIsProfileOpen(false);
    }
  };

  const handleProfileToggle = (isOpen) => {
    setIsProfileOpen(isOpen);
    if (isOpen) {
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="text-white flex justify-between items-start p-4 md:p-6 relative z-50">
      <CurrentTime />
      <div className="flex items-center justify-center gap-3 md:gap-5">
        <a className="text-[14px] hover:underline hidden md:inline-block" href="https://mail.google.com/mail/?tab=rm&ogbl">
          Gmail
        </a>
        <a className="text-[14px] hover:underline hidden md:inline-block" href="https://www.google.com/imghp?hl=en&tab=ri&ogbl">
          Images
        </a>
        <div className="flex gap-2 md:gap-3">
          <a href="https://labs.google.com/search?source=ntp" className="size-10 hover:bg-[#e8eaed14] grid place-items-center rounded-full transition-all" title="Google Labs">
            <GLabsIcon className="fill-white/87" />
          </a>
          <AppsMenu onMenuToggle={handleMenuToggle} isProfileOpen={isProfileOpen} />
          <ProfileMenu onProfileToggle={handleProfileToggle} isMenuOpen={isMenuOpen} />
        </div>
      </div>
    </header>
  );
};

export default Header;
