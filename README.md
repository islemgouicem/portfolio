# AI Designer Portfolio

A modern, responsive portfolio website built with React + Vite, showcasing the intersection of artificial intelligence and creative design. This project demonstrates both technical AI skills and design expertise through an interactive, beautifully crafted user experience.

## ✨ Features

- **Modern Design**: Clean, responsive UI with smooth animations and micro-interactions
- **Dark/Light Mode**: Toggle between themes with persistent user preference
- **Interactive Components**: Engaging animations using Framer Motion
- **Blog System**: Built-in blog with search and filtering capabilities
- **Project Showcase**: Filterable portfolio with AI and Design categories
- **Skills Visualization**: Animated progress bars and skill categorization
- **Contact Form**: Functional contact form with validation
- **Resume Download**: Downloadable resume functionality
- **SEO Optimized**: Meta tags and semantic HTML structure
- **Performance Optimized**: Code splitting and lazy loading

## 🚀 Tech Stack

- **Frontend**: React 18 + Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Package Manager**: npm

## 📁 Project Structure

\`\`\`
src/
├── components/
│   ├── layout/
│   │   ├── Layout.jsx
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   └── ui/
│       ├── AnimatedBackground.jsx
│       ├── FloatingCard.jsx
│       ├── SkillCard.jsx
│       ├── ProgressBar.jsx
│       ├── ProjectCard.jsx
│       └── CertificationCard.jsx
├── contexts/
│   └── ThemeContext.jsx
├── pages/
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Skills.jsx
│   ├── Projects.jsx
│   ├── Certifications.jsx
│   ├── Resume.jsx
│   ├── Blog.jsx
│   ├── BlogPost.jsx
│   └── Contact.jsx
├── styles/
│   └── index.css
├── App.jsx
└── main.jsx
\`\`\`

## 🛠️ Installation & Setup

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Step 1: Clone the Repository

\`\`\`bash
git clone https://github.com/yourusername/ai-designer-portfolio.git
cd ai-designer-portfolio
\`\`\`

### Step 2: Install Dependencies

\`\`\`bash
npm install
\`\`\`

### Step 3: Start Development Server

\`\`\`bash
npm run dev
\`\`\`

The application will open in your browser at \`http://localhost:3000\`

## 📦 Build & Deploy

### Build for Production

\`\`\`bash
npm run build
\`\`\`

This creates a \`dist\` folder with optimized production files.

### Preview Production Build

\`\`\`bash
npm run preview
\`\`\`

### Deploy to GitHub Pages

1. **Install gh-pages** (if not already installed):
   \`\`\`bash
   npm install --save-dev gh-pages
   \`\`\`

2. **Add deploy scripts to package.json**:
   \`\`\`json
   {
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   \`\`\`

3. **Update vite.config.js** for GitHub Pages:
   \`\`\`js
   export default defineConfig({
     base: '/your-repo-name/',
     // ... other config
   })
   \`\`\`

4. **Deploy**:
   \`\`\`bash
   npm run deploy
   \`\`\`

### Deploy to Vercel

1. **Install Vercel CLI**:
   \`\`\`bash
   npm i -g vercel
   \`\`\`

2. **Deploy**:
   \`\`\`bash
   vercel
   \`\`\`

### Deploy to Netlify

1. **Build the project**:
   \`\`\`bash
   npm run build
   \`\`\`

2. **Drag and drop** the \`dist\` folder to Netlify dashboard, or connect your GitHub repository for automatic deployments.

## 🎨 Customization

### Personal Information

Update the following files with your personal information:

1. **src/pages/Home.jsx** - Hero section content
2. **src/pages/About.jsx** - Personal story and information
3. **src/pages/Resume.jsx** - Professional experience and education
4. **src/pages/Contact.jsx** - Contact information and social links
5. **src/components/layout/Footer.jsx** - Footer links and information

### Projects & Portfolio

1. **src/pages/Projects.jsx** - Update the \`projects\` array with your actual projects
2. **src/pages/Blog.jsx** - Update the \`blogPosts\` array with your blog content
3. **src/pages/Skills.jsx** - Modify skill categories and proficiency levels
4. **src/pages/Certifications.jsx** - Add your actual certifications

### Styling & Branding

1. **src/styles/index.css** - Global styles and custom CSS
2. **Color Scheme** - Update Tailwind classes throughout components
3. **Fonts** - Change font imports in \`src/styles/index.css\`
4. **Logo** - Replace logo elements in \`src/components/layout/Navbar.jsx\`

### Images & Assets

Replace placeholder images with your actual content:
- Project screenshots
- Certification images
- Profile photos
- Blog post images

## 🔧 Available Scripts

- \`npm run dev\` - Start development server
- \`npm run build\` - Build for production
- \`npm run preview\` - Preview production build
- \`npm run lint\` - Run ESLint

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (\`git checkout -b feature/amazing-feature\`)
3. Commit your changes (\`git commit -m 'Add amazing feature'\`)
4. Push to the branch (\`git push origin feature/amazing-feature\`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - UI library
- [Vite](https://vitejs.dev/) - Build tool
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Lucide React](https://lucide.dev/) - Icon library

## 📞 Support

If you have any questions or need help with setup, please open an issue or contact me at [your-email@example.com](mailto:your-email@example.com).

---

**Built with ❤️ by [Your Name]**
\`\`\`
