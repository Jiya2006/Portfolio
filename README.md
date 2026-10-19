# Jiya Baghel — Personal Portfolio & Technical Showcase

A modern, responsive, and aesthetically refined developer portfolio built for **Jiya Baghel**, Computer Science Engineering Undergraduate specializing in Artificial Intelligence and Machine Learning at **Symbiosis Institute of Technology, Nagpur** (Graduation: 2028).

---

## 🚀 Quick Start (Run Locally)

1. **Navigate to the project folder:**
   ```bash
   cd jiya-portfolio
   ```

2. **Install dependencies (if not already installed):**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

4. **Build for production:**
   ```bash
   npm run build
   ```

---

## 🛠️ Project Structure

```
jiya-portfolio/
├── public/
│   ├── favicon.svg          # Custom glowing monogram favicon
│   ├── resume.pdf           # Resume PDF placeholder (drop your real PDF here)
│   └── profile.jpg          # (Optional) Drop your photo here to replace avatar
├── src/
│   ├── components/
│   │   ├── Navbar.tsx           # Sticky nav with scroll indicator & mobile drawer
│   │   ├── Hero.tsx             # Striking hero with floating badges & avatar frame
│   │   ├── About.tsx            # Split layout: narrative, leadership & credentials
│   │   ├── Skills.tsx           # Grouped cards (Programming, ML, Web, Tools)
│   │   ├── Projects.tsx         # Filterable project showcase & category tabs
│   │   ├── ProjectModal.tsx     # In-depth modal with problem statements & roles
│   │   ├── Experience.tsx       # Timeline: Organising Secretary & Club Coordinator
│   │   ├── Achievements.tsx     # National Dance, Gold Dodgeball & campus leadership
│   │   ├── Contact.tsx          # Copy email, mailto generator, validation & resume CTA
│   │   ├── Footer.tsx           # Back to top, copyright & social links
│   │   ├── Icons.tsx            # Scalable custom SVG icons for GitHub & LinkedIn
│   │   ├── ResumeModal.tsx      # Modal with download trigger & instructions
│   │   └── BackgroundCanvas.tsx # Lightweight constellation & particle canvas
│   ├── data/
│   │   └── portfolioData.ts     # SINGLE configuration file for all content & links
│   ├── types/
│   │   └── portfolio.ts         # Strict TypeScript definitions
│   ├── App.tsx                  # Root layout & modal management
│   ├── index.css                # Tailwind directives & glassmorphism utilities
│   └── main.tsx                 # React DOM root
├── index.html                   # SEO tags, OpenGraph metadata & Google Fonts
├── tailwind.config.js           # Electric violet & cyan dark theme styling
├── tsconfig.json                # TypeScript compiler configuration
└── package.json                 # Dependencies & build scripts
```

---

## 📝 Customization & Updating Instructions

### 1. Replacing Your Profile Photograph
- Save your portrait as `profile.jpg` or `profile.png`.
- Place it directly into `jiya-portfolio/public/profile.jpg`.
- In `src/components/Hero.tsx`, swap the avatar illustration container with `<img src="/profile.jpg" alt="Jiya Baghel" className="w-full h-full object-cover rounded-2xl" />`.

### 2. Updating Resume PDF
- Drop your compiled resume PDF directly into `jiya-portfolio/public/resume.pdf`.
- All "Download Resume" buttons on the website will automatically serve your real PDF file with zero code edits needed!

### 4. Configuring Contact Form API Key (Direct Inbox Delivery)
The contact form supports direct background sending via a free **Web3Forms** API key:
1. Go to [web3forms.com](https://web3forms.com) (100% free, no credit card, no password).
2. Enter your email (`jiyab623@gmail.com`) to generate an Access Key.
3. Open `.env` in the project root and paste your key:
   ```env
   VITE_WEB3FORMS_ACCESS_KEY=your_access_key_here
   ```
4. Now, when visitors submit the contact form, their messages are delivered directly to your email without opening an email client! If no key is set, the site seamlessly falls back to pre-filled `mailto:` client invocation.

### 5. Live View Counter Feature
* **Portfolio Views:** Automatically tracked and displayed in the Navbar and Hero with persistent browser storage and online API sync.
* **Project Views:** Each project card tracks views interactively when clicked/inspected via "Quick View".
* Configured in `.env` via `VITE_ENABLE_VIEW_COUNTER=true`.

---

## 🌐 Free Deployment Options

### Option A: Vercel (Recommended — 2 Minutes)
1. Push your repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git branch -M main
   git remote add origin https://github.com/Jiya2006/portfolio.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) and log in with your GitHub account.
3. Click **Add New Project**, select your repository, and set the Root Directory to `jiya-portfolio` (if in a subfolder) or `./`.
4. Vite build commands are detected automatically (`npm run build`, output: `dist`). Click **Deploy**!

### Option B: GitHub Pages
1. Install `gh-pages`:
   ```bash
   npm install --save-dev gh-pages
   ```
2. In `vite.config.ts`, add `base: '/portfolio/'` (matching your GitHub repository name).
3. In `package.json`, add:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
4. Run `npm run deploy`.
