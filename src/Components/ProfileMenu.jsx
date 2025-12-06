import { useState, useRef, useEffect } from "react";
import ProfileIcon from "../assets/profile.jpg";
import ProBorder from "../assets/ProBorder.jsx";
import GmailIcon from "../assets/GmailIcon";
import AccountIcon from "../assets/AccountIcon";
import SettingsIcon from "../assets/SettingsIcon";
import PrivacyIcon from "../assets/PrivacyIcon";
import SignOutIcon from "../assets/SignOutIcon";

const ProfileMenu = ({ onProfileToggle, isMenuOpen }) => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const profileRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfileOpen(false);
        if (onProfileToggle) onProfileToggle(false);
      }
    };

    const handleEscapeKey = (event) => {
      if (event.key === "Escape" && isProfileOpen) {
        setIsProfileOpen(false);
        if (onProfileToggle) onProfileToggle(false);
      }
    };

    if (isProfileOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEscapeKey);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [isProfileOpen, onProfileToggle]);

  const handleToggle = () => {
    const newState = !isProfileOpen;
    setIsProfileOpen(newState);
    if (onProfileToggle) onProfileToggle(newState);
  };

  return (
    <div className="relative" ref={profileRef}>
      <button
        onClick={handleToggle}
        className="size-10 grid place-items-center rounded-full transition-all cursor-pointer hover:ring-2 hover:ring-white/30"
        title="Google Account"
      >
        <div className="relative">
          <img src={ProfileIcon} alt="Profile" className="rounded-full w-8 h-8 md:w-10 md:h-10" />
          <div className="absolute -bottom-1 -right-1">
            <ProBorder />
          </div>
        </div>
      </button>
      {isProfileOpen && (
        <div className="absolute right-0 top-12 md:top-14 bg-white rounded-lg shadow-2xl w-[calc(100vw-2rem)] max-w-[280px] md:max-w-[320px] border border-gray-200 overflow-hidden z-50">
          <div className="p-3 md:p-4 border-b border-gray-200">
            <div className="flex items-center gap-2 md:gap-3">
              <div className="relative shrink-0">
                <img src={ProfileIcon} alt="Profile" className="rounded-full w-9 h-9 md:w-10 md:h-10" />
                <div className="absolute -bottom-0.5 -right-0.5 md:-bottom-1 md:-right-1">
                  <ProBorder />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">Your Name</p>
                <p className="text-xs text-gray-500 truncate">youremail@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="py-1 md:py-2">
            <a
              href="https://mail.google.com"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-3 md:px-4 py-2 md:py-2.5 hover:bg-gray-100 active:bg-gray-200 transition-colors text-gray-700"
              onClick={() => {
                setIsProfileOpen(false);
                if (onProfileToggle) onProfileToggle(false);
              }}
            >
              <GmailIcon className="w-5 h-5 text-red-500 shrink-0" />
              <span className="text-sm font-medium">Gmail</span>
            </a>
            <a
              href="https://myaccount.google.com"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-3 md:px-4 py-2 md:py-2.5 hover:bg-gray-100 active:bg-gray-200 transition-colors text-gray-700"
              onClick={() => {
                setIsProfileOpen(false);
                if (onProfileToggle) onProfileToggle(false);
              }}
            >
              <AccountIcon className="w-5 h-5 text-gray-600 shrink-0" />
              <span className="text-sm font-medium">Manage your Google Account</span>
            </a>
            <a
              href="https://myaccount.google.com/data-and-privacy"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-3 md:px-4 py-2 md:py-2.5 hover:bg-gray-100 active:bg-gray-200 transition-colors text-gray-700"
              onClick={() => {
                setIsProfileOpen(false);
                if (onProfileToggle) onProfileToggle(false);
              }}
            >
              <PrivacyIcon className="w-5 h-5 text-gray-600 shrink-0" />
              <span className="text-sm font-medium">Privacy & Security</span>
            </a>
            <a
              href="https://myaccount.google.com/settings"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-3 md:px-4 py-2 md:py-2.5 hover:bg-gray-100 active:bg-gray-200 transition-colors text-gray-700"
              onClick={() => {
                setIsProfileOpen(false);
                if (onProfileToggle) onProfileToggle(false);
              }}
            >
              <SettingsIcon className="w-5 h-5 text-gray-600 shrink-0" />
              <span className="text-sm font-medium">Settings</span>
            </a>
          </div>
          <div className="border-t border-gray-200 py-1 md:py-2">
            <button
              className="flex items-center gap-3 px-3 md:px-4 py-2 md:py-2.5 hover:bg-gray-100 active:bg-gray-200 transition-colors text-gray-700 w-full text-left"
              onClick={() => {
                setIsProfileOpen(false);
                if (onProfileToggle) onProfileToggle(false);
                // Add sign out logic here if needed
                alert("Sign out functionality can be implemented here");
              }}
            >
              <SignOutIcon className="w-5 h-5 text-gray-600 shrink-0" />
              <span className="text-sm font-medium">Sign out</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileMenu;

