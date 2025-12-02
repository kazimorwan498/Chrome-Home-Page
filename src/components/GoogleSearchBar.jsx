import { useState, useEffect, useRef, useCallback } from "react";
import SearchIcon from "../assets/SearchIcon";
import MicIcon from "../assets/MicIcon";
import ImageSearchIcon from "../assets/ImageSearchIcon";

const GoogleSearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isListening, setIsListening] = useState(false);
  const recognitionRef = useRef(null);

  // Check if input is a URL
  const isURL = (str) => {
    try {
      // Check if it's a valid URL
      const urlPattern = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/i;
      const ipPattern = /^(https?:\/\/)?(\d{1,3}\.){3}\d{1,3}(:\d+)?(\/.*)?$/i;
      
      if (urlPattern.test(str) || ipPattern.test(str)) {
        // If it doesn't start with http:// or https://, add https://
        if (!str.match(/^https?:\/\//i)) {
          return `https://${str}`;
        }
        return str;
      }
      
      // Check for common TLDs without protocol
      const commonTLDs = ['.com', '.org', '.net', '.edu', '.gov', '.io', '.co', '.dev'];
      const hasTLD = commonTLDs.some(tld => str.toLowerCase().includes(tld));
      const hasDot = str.includes('.');
      
      if (hasTLD && hasDot && !str.includes(' ')) {
        return `https://${str}`;
      }
      
      return null;
    } catch {
      return null;
    }
  };

  const handleSearch = useCallback((query = searchQuery) => {
    const trimmedQuery = query.trim();
    if (!trimmedQuery) return;

    const url = isURL(trimmedQuery);
    if (url) {
      // Navigate directly to URL
      window.location.href = url;
    } else {
      // Perform Google search
      window.location.href = `https://www.google.com/search?q=${encodeURIComponent(trimmedQuery)}`;
    }
  }, [searchQuery]);

  // Initialize Web Speech API for voice search
  useEffect(() => {
    if ("webkitSpeechRecognition" in window || "SpeechRecognition" in window) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = false;
      recognitionRef.current.interimResults = false;
      recognitionRef.current.lang = "en-US";

      recognitionRef.current.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setSearchQuery(transcript);
        setIsListening(false);
        // Auto-submit after voice input
        if (transcript.trim()) {
          handleSearch(transcript);
        }
      };

      recognitionRef.current.onerror = (event) => {
        console.error("Speech recognition error:", event.error);
        setIsListening(false);
      };

      recognitionRef.current.onend = () => {
        setIsListening(false);
      };
    }

    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.abort();
      }
    };
  }, [handleSearch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch();
  };

  const handleImageSearch = () => {
    if (searchQuery.trim()) {
      window.location.href = `https://www.google.com/search?tbm=isch&q=${encodeURIComponent(searchQuery.trim())}`;
    } else {
      window.location.href = "https://www.google.com/imghp?hl=en&tab=ri&ogbl";
    }
  };

  const handleVoiceSearch = () => {
    if (!recognitionRef.current) {
      alert("Voice search is not supported in your browser. Please use Chrome or Edge.");
      return;
    }

    if (isListening) {
      recognitionRef.current.stop();
      setIsListening(false);
    } else {
      try {
        recognitionRef.current.start();
        setIsListening(true);
      } catch (error) {
        console.error("Error starting voice recognition:", error);
        setIsListening(false);
      }
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      setSearchQuery("");
      if (recognitionRef.current && isListening) {
        recognitionRef.current.stop();
        setIsListening(false);
      }
    }
  };

  return (
    <div className="w-full max-w-[584px] mx-auto">
      <form onSubmit={handleSubmit} className="relative">
        <div className="flex items-center w-full h-[44px] md:h-[46px] bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-shadow px-4 md:px-5 border border-gray-200/50">
          <SearchIcon className="fill-gray-500 mr-3 shrink-0" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 outline-none text-gray-800 text-base md:text-lg bg-transparent placeholder-gray-400"
            placeholder="Search Google or type a URL"
            autoFocus
          />
          <div className="flex items-center gap-2 ml-2">
            <button
              type="button"
              onClick={handleImageSearch}
              className="p-1 hover:bg-gray-100 rounded-full transition-colors"
              title="Search by image"
            >
              <ImageSearchIcon className="fill-gray-500" />
            </button>
            <button
              type="button"
              onClick={handleVoiceSearch}
              className={`p-1 rounded-full transition-colors ${
                isListening
                  ? "bg-red-100 hover:bg-red-200 animate-pulse"
                  : "hover:bg-gray-100"
              }`}
              title={isListening ? "Listening... Click to stop" : "Search by voice"}
            >
              <MicIcon className={isListening ? "fill-red-500" : "fill-gray-500"} />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default GoogleSearchBar;

