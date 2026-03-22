# Ravi Singh Portfolio

A modern, responsive personal developer portfolio website built with React, Vite, and modern web technologies.

## Features

✨ **Modern Design**
- Beautiful gradient backgrounds with ambient animations
- Smooth reveal animations on page load
- Responsive layout for desktop and mobile devices
- Premium typography and spacing

🌓 **Dark/Light Mode**
- Toggle between dark and light themes
- Theme preference saved to browser local storage
- Smooth transitions between themes

📸 **Profile Photo**
- Upload your profile photo directly from the UI
- Photo saved to browser local storage
- Graceful fallback image support

🔗 **Social Links**
- GitHub repositories direct integration
- LinkedIn profile
- X (Twitter) profile
- LeetCode profile
- Email and phone contact

📱 **Responsive Sections**
- Hero intro with animated wave emoji
- About me section
- Skills organized by category
- Project portfolio with repository links
- Education and achievements
- Contact information

## Tech Stack

- **Frontend Framework**: React 18+
- **Build Tool**: Vite
- **Styling**: CSS3 with custom variables
- **Fonts**: Google Fonts (Plus Jakarta Sans, Space Grotesk)
- **State Management**: React Hooks
- **Deployment Ready**: Built for production

## Installation & Setup

### Prerequisites
- Node.js 16+ installed
- npm or yarn package manager

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/ravisingh-6386/Portfolio.git
   cd Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

4. **Build for production**
   ```bash
   npm run build
   ```
   Output will be in the `dist/` folder.

## Project Structure

```
Portfolio/
├── src/
│   ├── App.jsx              # Main portfolio component
│   ├── App.css              # Styles and theme variables
│   ├── index.css            # Global styles
│   ├── main.jsx             # React entry point
│   └── assets/              # Images and icons
├── public/                  # Static files
├── index.html               # HTML template
├── package.json             # Dependencies
├── vite.config.js           # Vite configuration
└── README.md                # This file
```

## Usage

### Upload Profile Photo
1. Click the "📷 Upload Photo" button in the hero section
2. Select your image file from your computer
3. Your photo will display immediately and persist across sessions

### Toggle Dark/Light Mode
- Click the "🌙 Dark" or "☀️ Light" button in the top right
- Your theme preference is automatically saved

### Update Portfolio Content
Edit `src/App.jsx` to customize:
- Name and title
- About section
- Skills categories
- Projects and descriptions
- Education and achievements
- Contact links

## Customization

### Colors & Theme
Edit the CSS variables in `src/App.css`:
```css
:root {
  --bg-main: #f6f2eb;
  --text-primary: #1f2937;
  --brand: #0f766e;
  --accent: #ea580c;
  /* ... more variables */
}
```

### Fonts
Change font imports in `src/App.css` or modify globally in `src/index.css`

### Add New Projects
Add entries to the `projects` array in `src/App.jsx` with:
- name, icon, subtitle
- points (bullet list)
- stack (technologies used)
- repoUrl (GitHub repository link)

## Deployment

### Deploy to Vercel (Recommended)
```bash
npm i -g vercel
vercel
```

### Deploy to GitHub Pages
```bash
npm run build
# Push dist/ folder to gh-pages branch
```

### Deploy to Netlify
Connect your GitHub repository to Netlify and it will auto-deploy on push.

## Contact

- 📧 Email: ravisingh98199@gmail.com
- 📱 Phone: +91 9555131042
- 💻 GitHub: https://github.com/ravisingh-6386
- 🔗 LinkedIn: https://www.linkedin.com/in/ravi-singh-294b37327/
- 🐦 Twitter: https://x.com/RaviSin64398992
- 🧠 LeetCode: https://leetcode.com/u/ravisingh98199

## License

Open source - feel free to use as a template for your own portfolio.

## Author

**Ravi Singh**
- B.Tech CSE, Sharda University (CGPA: 8.8)
- Full Stack Developer | MERN Stack Enthusiast
- AI & Web Development Enthusiast
