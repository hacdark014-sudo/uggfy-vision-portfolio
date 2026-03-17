# UGGFY.VISION - Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, Vite, Tailwind CSS, and Framer Motion.

## Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite 6
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4 with Tailwind Typography
- **UI Components**: Radix UI primitives
- **Animations**: Framer Motion
- **Icons**: Lucide React & React Icons
- **Forms**: React Hook Form with Zod validation

## Local Development

### Prerequisites
- Node.js 18+ and npm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`

### Other Scripts

```bash
# Type checking
npm run typecheck

# Build for production
npm run build

# Preview production build locally
npm run preview
```

## Deploy on Railway.app

This project is configured for easy deployment on Railway.app:

### Option 1: Deploy from GitHub (Recommended)

1. Push this repository to GitHub
2. Go to [railway.app](https://railway.app)
3. Click "New Project" → "Deploy from GitHub"
4. Select your repository
5. Railway will automatically:
   - Detect the Node.js project
   - Run `npm install && npm run build`
   - Start the app with `npm run start`
6. Your app will be deployed with a Railway-provided domain
7. (Optional) Add your custom domain in Railway Settings → Networking → Custom Domain

### Option 2: Deploy with Railway CLI

```bash
# Install Railway CLI
npm install -g @railway/cli

# Login to Railway
railway login

# Initialize project
railway init

# Deploy
railway up
```

### Environment Variables

The app automatically uses Railway's `PORT` environment variable. No manual configuration needed!

## Project Structure

```
├── src/
│   ├── components/     # React components
│   │   ├── ui/        # Reusable UI components (Radix-based)
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   ├── Services.tsx
│   │   ├── CareerEducation.tsx
│   │   ├── Contact.tsx
│   │   └── ...
│   └── App.tsx        # Main application component
├── public/            # Static assets
├── index.html         # HTML entry point
├── vite.config.ts     # Vite configuration
├── tsconfig.json      # TypeScript configuration
├── railway.json       # Railway deployment config
└── package.json       # Project dependencies
```

## Customization

To personalize this portfolio for your own use:

1. **Update Contact Information**: Edit `src/components/Contact.tsx`
2. **Add Your Projects**: Modify `src/components/Projects.tsx`
3. **Update About Section**: Edit `src/components/About.tsx`
4. **Change Skills**: Modify `src/components/Skills.tsx`
5. **Update Services**: Edit `src/components/Services.tsx`
6. **Add Your Experience**: Modify `src/components/CareerEducation.tsx`
7. **Replace Images**: Update images in `public/images/`

## License

Private project - All rights reserved.

  