# Chrome Home Page

A beautiful, modern Chrome home page clone built with React and Tailwind CSS.

## Features

- 🕐 **Live Clock** - Real-time clock with date display
- 🔍 **Google Search Bar** - Fully functional search bar with image and voice search options
- 🔗 **Quick Links** - Easy access to popular Google services (YouTube, Gmail, Drive, Maps, etc.)
- 📱 **Responsive Design** - Works seamlessly on desktop and mobile devices
- 🎨 **Modern UI** - Clean, minimalist design with smooth animations and transitions
- 🎯 **Interactive Menu** - Dropdown menu with Google apps
- 👤 **Profile Integration** - Profile picture with Google Pro border

## Technologies Used

- **React 19** - Modern React with hooks
- **Tailwind CSS 4** - Utility-first CSS framework
- **Vite** - Fast build tool and dev server
- **ESLint** - Code linting

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Chrome-Home-Page
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── Components/
│   ├── Header.jsx          # Top navigation bar with time and menu
│   ├── CurrentTime.jsx     # Live clock component
│   ├── GoogleSearchBar.jsx # Search bar component
│   └── QuickLinks.jsx      # Quick access links
├── assets/
│   ├── bg.jpg             # Background image
│   ├── profile.jpg        # Profile picture
│   ├── GLabsIcon.jsx      # Google Labs icon
│   ├── MenuIcon.jsx       # Menu icon
│   ├── ProBorder.jsx      # Google Pro border
│   ├── SearchIcon.jsx     # Search icon
│   ├── MicIcon.jsx        # Microphone icon
│   └── ImageSearchIcon.jsx # Image search icon
├── App.jsx                # Main app component
├── App.css                # Global styles
└── main.jsx               # Entry point
```

## Features in Detail

### Google Search Bar
- Search functionality that redirects to Google search results
- Image search option
- Voice search button (UI ready)
- Auto-focus on page load
- Smooth hover effects

### Quick Links
- 8 popular Google services
- Responsive grid layout
- Hover animations
- Opens in new tabs

### Header Menu
- Dropdown menu with 14 Google apps
- Click outside to close
- Smooth animations
- Responsive design

### Current Time
- Real-time clock updates every 500ms
- Displays time, date, and AM/PM
- Animated colon separator
- Backdrop blur effect

## Customization

### Change Background Image
Replace `src/assets/bg.jpg` with your own image.

### Modify Quick Links
Edit the `links` array in `src/Components/QuickLinks.jsx`:

```jsx
const links = [
  { name: "Your Service", url: "https://example.com", icon: "🎯" },
  // Add more links...
];
```

### Update Menu Items
Edit the `menuItems` array in `src/Components/Header.jsx`.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License.

## Contributing

Contributions, issues, and feature requests are welcome!

