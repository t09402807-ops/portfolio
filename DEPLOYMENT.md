# Deployment Guide

Your portfolio is now ready for deployment. Follow these steps:

## Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

## Deployment Options

### 1. **Vercel** (Recommended - Free & Easy)
- Push your code to GitHub
- Go to [vercel.com](https://vercel.com)
- Click "New Project" and import your repository
- Vercel auto-detects Vite and deploys automatically
- Your site goes live instantly

### 2. **Netlify** (Free & Easy)
- Push your code to GitHub
- Go to [netlify.com](https://netlify.com)
- Click "New site from Git"
- Select your repository
- Build command: `npm run build`
- Publish directory: `dist`
- Deploy

### 3. **GitHub Pages**
```bash
npm run build
# Push dist folder to gh-pages branch
```

### 4. **Traditional Hosting** (Shared/VPS)
1. Run `npm run build`
2. Upload the `dist/` folder contents to your web server
3. Configure your server to serve `index.html` for all routes (SPA routing)

## Pre-Deployment Checklist

- [ ] Run `npm run lint` to check for errors
- [ ] Test locally with `npm run preview`
- [ ] Update meta tags in `index.html` (title, description)
- [ ] Ensure all images and assets are optimized
- [ ] Test on mobile devices
- [ ] Check all links and navigation work

## Environment Variables

If you need environment variables, create a `.env` file:
```
VITE_API_URL=https://your-api.com
```

Access in code: `import.meta.env.VITE_API_URL`

## Performance Tips

- Images are already optimized by Vite
- CSS is minified automatically
- JavaScript is bundled and minified
- Consider adding image optimization tools for large images

Your portfolio is production-ready!
