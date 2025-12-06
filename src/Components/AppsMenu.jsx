import { useState, useRef, useEffect } from "react";
import MenuIcon from "../assets/MenuIcon";
import SearchIcon from "../assets/SearchIcon";
import MapsIcon from "../assets/MapsIcon";
import YouTubeIcon from "../assets/YouTubeIcon";
import PlayIcon from "../assets/PlayIcon";
import NewsIcon from "../assets/NewsIcon";
import GmailIcon from "../assets/GmailIcon";
import MeetIcon from "../assets/MeetIcon";
import ChatIcon from "../assets/ChatIcon";
import ContactsIcon from "../assets/ContactsIcon";
import DriveIcon from "../assets/DriveIcon";
import CalendarIcon from "../assets/CalendarIcon";
import TranslateIcon from "../assets/TranslateIcon";
import PhotosIcon from "../assets/PhotosIcon";
import ShoppingIcon from "../assets/ShoppingIcon";

const AppsMenu = ({ onMenuToggle }) => {
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
    { name: "Search", url: "https://www.google.com", Icon: SearchIcon, color: "text-blue-500" },
    { name: "Maps", url: "https://www.google.com/maps", Icon: MapsIcon, color: "text-green-600" },
    { name: "YouTube", url: "https://www.youtube.com", Icon: YouTubeIcon, color: "text-red-600" },
    { name: "Play", url: "https://play.google.com", Icon: PlayIcon, color: "text-green-500" },
    { name: "News", url: "https://news.google.com", Icon: NewsIcon, color: "text-blue-600" },
    { name: "Gmail", url: "https://mail.google.com", Icon: GmailIcon, color: "text-red-500" },
    { name: "Meet", url: "https://meet.google.com", Icon: MeetIcon, color: "text-green-600" },
    { name: "Chat", url: "https://chat.google.com", Icon: ChatIcon, color: "text-blue-500" },
    { name: "Contacts", url: "https://contacts.google.com", Icon: ContactsIcon, color: "text-blue-600" },
    { name: "Drive", url: "https://drive.google.com", Icon: DriveIcon, color: "text-blue-500" },
    { name: "Calendar", url: "https://calendar.google.com", Icon: CalendarIcon, color: "text-blue-600" },
    { name: "Translate", url: "https://translate.google.com", Icon: TranslateIcon, color: "text-blue-600" },
    { name: "Photos", url: "https://photos.google.com", Icon: PhotosIcon, color: "text-green-500" },
    { name: "Shopping", url: "https://www.google.com/shopping", Icon: ShoppingIcon, color: "text-orange-600" },
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
          {menuItems.map((item) => {
            const IconComponent = item.Icon;
            return (
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
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-700 rounded-full flex items-center justify-center group-hover:bg-gray-600 transition-colors">
                  <IconComponent className={`w-5 h-5 md:w-6 md:h-6 ${item.color}`} />
                </div>
                <span className="text-gray-200 text-[10px] md:text-xs font-medium text-center leading-tight">
                  {item.name}
                </span>
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default AppsMenu;

