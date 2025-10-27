# Troubleshooting: Styling Not Working on GitHub Pages

## Issue
After deploying to GitHub Pages, the site displays without styling (unstyled HTML).

## Root Cause
The styling issue was caused by inconsistent `basePath` and `assetPrefix` configuration in `next.config.mjs`. The original configuration used conditional logic based on `NODE_ENV`, which can behave unpredictably during GitHub Actions builds.

## Solution Applied

### Before (Problematic):
```javascript
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/ProjectTransporter' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/ProjectTransporter/' : '',
}
```

### After (Fixed):
```javascript
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  basePath: '/ProjectTransporter',
  assetPrefix: '/ProjectTransporter',
}
```

## Key Changes:

1. **Removed conditional logic**: No longer depends on `NODE_ENV` which may not be set correctly during GitHub Actions build
2. **Consistent paths**: Both `basePath` and `assetPrefix` use the same path without trailing slashes
3. **Added `trailingSlash: true`**: Ensures consistent URL handling on GitHub Pages

## How to Verify the Fix:

1. **Check the built HTML**: After running `npm run build`, check the `out/index.html` file:
   ```bash
   cat out/index.html | grep -E 'href.*css'
   ```
   You should see paths like: `/ProjectTransporter/_next/static/css/[hash].css`

2. **Local testing**: Test the production build locally:
   ```bash
   npm run build
   npx serve@latest out
   ```
   Navigate to `http://localhost:3000/ProjectTransporter/` (note the base path and trailing slash)

3. **GitHub Pages**: Once deployed, CSS files should load from:
   `https://[username].github.io/ProjectTransporter/_next/static/css/[hash].css`

## Additional Notes:

- The `.nojekyll` file in the `public/` directory ensures GitHub Pages doesn't ignore Next.js `_next` directory
- If your repository has a different name, update both `basePath` and `assetPrefix` accordingly
- For custom domains, set both `basePath` and `assetPrefix` to empty strings

## Still Having Issues?

1. **Clear GitHub Pages cache**: 
   - Go to repository Settings → Pages
   - Change the source to "None", save, then change back to "GitHub Actions"

2. **Check browser console**: 
   - Look for 404 errors on CSS/JS files
   - Verify the paths match your repository name

3. **Verify build output**:
   - Check that `.nojekyll` exists in the `out/` directory
   - Ensure CSS files exist in `out/_next/static/css/`

4. **Repository name mismatch**:
   - If your repo is named differently than "ProjectTransporter", update the config:
     ```javascript
     basePath: '/YourRepoName',
     assetPrefix: '/YourRepoName',
     ```

