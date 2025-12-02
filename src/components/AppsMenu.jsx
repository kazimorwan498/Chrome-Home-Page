import { useState, useRef, useEffect } from "react";
import MenuIcon from "../assets/MenuIcon";

const AppsMenu = ({ onMenuToggle, isProfileOpen }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
        if (onMenuToggle) onMenuToggle(false);
      }
    };

    const handleEscapeKey = (event) => {
      if (event.key === "Escape" && isMenuOpen) {
        setIsMenuOpen(false);
        if (onMenuToggle) onMenuToggle(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEscapeKey);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [isMenuOpen, onMenuToggle]);

  const menuItems = [
    { name: "Search", url: "https://www.google.com" },
    { name: "Maps", url: "https://www.google.com/maps" },
    { name: "YouTube", url: "https://www.youtube.com" },
    { name: "Play", url: "https://play.google.com" },
    { name: "News", url: "https://news.google.com" },
    { name: "Gmail", url: "https://mail.google.com" },
    { name: "Meet", url: "https://meet.google.com" },
    { name: "Chat", url: "https://chat.google.com" },
    { name: "Contacts", url: "https://contacts.google.com" },
    { name: "Drive", url: "https://drive.google.com" },
    { name: "Calendar", url: "https://calendar.google.com" },
    { name: "Translate", url: "https://translate.google.com" },
    { name: "Photos", url: "https://photos.google.com" },
    { name: "Shopping", url: "https://www.google.com/shopping" },
  ];

  const handleToggle = () => {
    const newState = !isMenuOpen;
    setIsMenuOpen(newState);
    if (onMenuToggle) onMenuToggle(newState);
  };

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={handleToggle}
        className="size-10 hover:bg-[#e8eaed14] grid place-items-center rounded-full transition-all cursor-pointer"
        title="Google apps"
      >
        <MenuIcon className="fill-white/87" />
      </button>
      {isMenuOpen && (
        <div className="absolute right-0 top-12 bg-gray-800 rounded-lg shadow-2xl p-3 md:p-4 w-[calc(100vw-2rem)] max-w-[320px] md:max-w-[360px] grid grid-cols-4 gap-2 md:gap-4 border border-gray-700 z-50">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.url}
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-1.5 md:gap-2 p-2 md:p-3 rounded-lg hover:bg-gray-700 active:bg-gray-600 transition-colors group"
              onClick={() => {
                setIsMenuOpen(false);
                if (onMenuToggle) onMenuToggle(false);
              }}
            >
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-700 rounded-full flex items-center justify-center text-lg md:text-xl text-white group-hover:bg-gray-600 transition-colors">
                {item.name.charAt(0)}
              </div>
              <span className="text-gray-200 text-[10px] md:text-xs font-medium text-center leading-tight">
                {item.name}
              </span>
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default AppsMenu;

