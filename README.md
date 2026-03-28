# Personal Online Portfolio

A minimalist, responsive, and modern single-page portfolio built with React. Designed to cleanly showcase projects, technical skills, and professional experience with an emphasis on readable typography and smooth user experience.

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

## 🚀 Features

- **Single-Page Architecture**: Seamless scrolling navigation managed via an `IntersectionObserver` that highlights active sections.
- **Dark/Light Mode**: Fully realized custom CSS custom-property theme system (featuring a sleek matte-black dark mode) that persists via `localStorage`.
- **Responsive Layouts**: Designed mobile-first. Grids stack perfectly on phones and expand gracefully on larger displays.
- **Scroll Progress & Animations**: Subtle fade-in animations as you scroll down the page, combined with a dynamic reading-progress bar across the top navigation.
- **Dynamic Content rendering**: Skills, Experiences, and Projects are defined in clean data arrays, making it incredibly easy to update and maintain.
- **Visual Polish**: Features dynamic background tinting for project cards and colorful devicons that naturally adapt to the active theme.

## 🛠 Tech Stack

- **Core**: React 19 (Hooks-based architecture)
- **Styling**: Vanilla CSS (Using modern CSS Custom Properties for tokens)
- **Icons**: [Devicon](https://devicon.dev/) for tech stack branding

## 📁 Project Structure

Following a clean, component-based methodology:

```text
src/
 ├── components/       # Reusable UI elements
 │    ├── Navbar        # Fixed navigation with intersection tracking
 │    ├── ProjectCard   # Grid cards with background image effects
 │    ├── SectionWrapper# Standardized section shell with fade-ins
 │    └── ThemeToggle   # Animated sun/moon button
 ├── sections/         # Main page content blocks
 │    ├── Home          # Hero section & profile picture
 │    ├── About         # Background and education details
 │    ├── Skills        # Tech stack grid with categorized Devicons
 │    ├── Projects      # Showcase array mapping to ProjectCards
 │    └── Contact       # Interactive detail cards and external links
 ├── styles/           # Global style system
 │    ├── global.css    # Typography, resets, and utility animations
 │    └── variables.css # Theming tokens (colors, spacing, radii)
 └── App.js            # Main composition and theme provider shell
```

## ⚙️ Getting Started

To run this project locally:

1. **Clone the repository**
   ```bash
   git clone https://github.com/MackOfalda125/online-portfolio.git
   ```
2. **Install dependencies**
   ```bash
   npm install
   ```
3. **Start the development server**
   ```bash
   npm start
   ```
   Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 🎨 Customization

Updating the portfolio is designed to be frictionless:
- **Change the Colors**: Open `src/styles/variables.css` and tweak the HSL values to re-theme the entire application.
- **Update Your Details**: Navigate to `src/sections/` and update the data arrays (`projects`, `categories`, `education`) at the top of the respective files.
- **Update Your Logo**: Swap out the URLs or replace the `profile-picture.png` in the `public` directory.

## 📄 License

This project is open-source and free to be adapted for your own personal portfolio.
