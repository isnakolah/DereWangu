# DereWangu Landing Page

A modern, responsive landing page for DereWangu - a premium ride-sharing service focused on safety, reliability, and professional chauffeur experiences.

## 🚀 Getting Started

### Prerequisites
- Node.js 20.x or higher
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the landing page.

## 📁 Project Structure

```
ProjectTransporter/
├── components/
│   └── landing/               # Landing page components
│       ├── Navigation.tsx     # Responsive navigation bar
│       ├── HeroSection.tsx    # Hero with live trip tracking demo
│       ├── StatsBar.tsx       # Key statistics display
│       ├── HowItWorks.tsx     # 4-step process walkthrough
│       ├── SafetySection.tsx  # Safety features showcase
│       ├── BusinessSection.tsx # B2B partnership options
│       ├── PricingSection.tsx  # Transparent pricing breakdown
│       ├── TestimonialsSection.tsx # Customer reviews
│       ├── CTASection.tsx     # App download call-to-action
│       ├── Footer.tsx         # Site footer
│       └── index.ts           # Component exports
├── types/
│   └── index.ts               # TypeScript type definitions
├── pages/
│   ├── _app.tsx               # Next.js app wrapper
│   └── index.tsx              # Main landing page
└── styles/
    └── globals.css            # Global styles and Tailwind
```

## 🛠️ Tech Stack

- **Framework**: Next.js 15.0
- **Language**: TypeScript 5.3
- **Styling**: Tailwind CSS 3.4
- **Icons**: Lucide React
- **UI**: React 19.2

## ✨ Features

### Landing Page Sections
- **Navigation**: Responsive navbar with mobile menu
- **Hero Section**: Interactive trip tracking card demo
- **Statistics**: Key metrics (10M+ rides, 4.9★ rating)
- **How It Works**: 4-step process guide
- **Safety Features**: Emergency controls & live monitoring
- **Business Solutions**: 3-tier B2B partnership options
- **Pricing**: Transparent cost breakdown
- **Testimonials**: Customer reviews and ratings
- **CTA**: App download links (iOS/Android)
- **Footer**: Comprehensive site links

### Design Features
- Fully responsive (mobile-first approach)
- Dark theme with gradient backgrounds
- Smooth animations and hover effects
- Accessible (semantic HTML, proper heading hierarchy)
- SEO-friendly structure

## 🎨 Customization

### Updating Content
All component data is defined within each component file. To update:

1. **Stats**: Edit the `stats` array in `StatsBar.tsx`
2. **Process Steps**: Modify `steps` in `HowItWorks.tsx`
3. **Pricing**: Update `pricingFeatures` in `PricingSection.tsx`
4. **Testimonials**: Edit `testimonials` array in `TestimonialsSection.tsx`

### Styling
The project uses Tailwind CSS. Customize the theme in `tailwind.config.mjs`.

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🚀 Deployment to GitHub Pages

This project is configured to automatically deploy to GitHub Pages when you push to the `main` branch.

### First-Time Setup

1. **Enable GitHub Pages in your repository**:
   - Go to your repository on GitHub
   - Navigate to **Settings** > **Pages**
   - Under "Build and deployment", select **Source**: `GitHub Actions`

2. **Push your code to the main branch**:
   ```bash
   git add .
   git commit -m "Add GitHub Pages deployment"
   git push origin main
   ```

3. **Monitor the deployment**:
   - Go to the **Actions** tab in your GitHub repository
   - Watch the "Deploy to GitHub Pages" workflow run
   - Once complete, your site will be live at: `https://[your-username].github.io/ProjectTransporter`

### Manual Deployment

You can also trigger a deployment manually:
- Go to **Actions** tab > **Deploy to GitHub Pages** > **Run workflow**

### Configuration

The deployment is configured in:
- **Workflow**: `.github/workflows/deploy.yml`
- **Next.js Config**: `next.config.mjs` (sets up static export and base path)

### Local Testing of Production Build

To test the static export locally before deploying:

```bash
npm run build
npx serve@latest out
```

This will serve the static site on `http://localhost:3000` (or another port if 3000 is occupied).

### Custom Domain (Optional)

To use a custom domain:
1. Add a `CNAME` file to the `public/` directory with your domain name
2. Configure your DNS settings to point to GitHub Pages
3. Update `basePath` and `assetPrefix` in `next.config.mjs` to empty strings

## 🔧 Troubleshooting

If you encounter styling issues after deployment (unstyled HTML), see [TROUBLESHOOTING.md](./TROUBLESHOOTING.md) for solutions.

Common issues:
- **No styling on GitHub Pages**: Check that `basePath` and `assetPrefix` match your repository name
- **404 errors for assets**: Verify `.nojekyll` file exists in build output
- **Blank page**: Ensure you're accessing the correct URL with the base path (e.g., `/ProjectTransporter/`)


## 🔧 Development

### Scripts
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

### Type Safety
All components are fully typed using TypeScript interfaces defined in `types/index.ts`.

## 📄 License

ISC

---

**Built with Next.js and Tailwind CSS**

