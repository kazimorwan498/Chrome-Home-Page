import YouTubeIcon from "../assets/YouTubeIcon";
import GmailIcon from "../assets/GmailIcon";
import DriveIcon from "../assets/DriveIcon";
import MapsIcon from "../assets/MapsIcon";
import TranslateIcon from "../assets/TranslateIcon";
import PhotosIcon from "../assets/PhotosIcon";
import CalendarIcon from "../assets/CalendarIcon";
import MeetIcon from "../assets/MeetIcon";

const QuickLinks = () => {
  const links = [
    { name: "YouTube", url: "https://www.youtube.com", Icon: YouTubeIcon, color: "text-red-600" },
    { name: "Gmail", url: "https://mail.google.com", Icon: GmailIcon, color: "text-red-500" },
    { name: "Drive", url: "https://drive.google.com", Icon: DriveIcon, color: "text-blue-500" },
    { name: "Maps", url: "https://www.google.com/maps", Icon: MapsIcon, color: "text-green-600" },
    { name: "Translate", url: "https://translate.google.com", Icon: TranslateIcon, color: "text-blue-600" },
    { name: "Photos", url: "https://photos.google.com", Icon: PhotosIcon, color: "text-green-500" },
    { name: "Calendar", url: "https://calendar.google.com", Icon: CalendarIcon, color: "text-blue-600" },
    { name: "Meet", url: "https://meet.google.com", Icon: MeetIcon, color: "text-green-600" },
  ];

  return (
    <div className="grid grid-cols-4 md:grid-cols-8 gap-4 md:gap-6 max-w-[640px] mx-auto">
      {links.map((link) => {
        const IconComponent = link.Icon;
        return (
          <a
            key={link.name}
            href={link.url}
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-white/10 transition-colors group"
          >
            <div className="w-12 h-12 md:w-14 md:h-14 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
              <IconComponent className={`w-6 h-6 md:w-7 md:h-7 ${link.color}`} />
            </div>
            <span className="text-white text-xs md:text-sm font-medium">{link.name}</span>
          </a>
        );
      })}
    </div>
  );
};

export default QuickLinks;

