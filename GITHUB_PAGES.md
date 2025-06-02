# GitHub Pages Deployment Guide

This document explains how to deploy the Trimble Modus Vue application to GitHub Pages with proper routing support.

## Understanding the Challenge

Vue Router with `createWebHistory` uses HTML5 History API for clean URLs without hash fragments. However, this requires server-side configuration to handle client-side routes. GitHub Pages doesn't provide this capability out of the box, which causes 404 errors when:

1. Users refresh the page while on a route other than the root
2. Users navigate directly to a non-root route via URL
3. Users share links to specific routes

## Solution Overview

Our solution uses a custom 404.html page to handle direct navigation to client-side routes:

1. When a user navigates directly to a route (e.g., `/trimble-modus-vue/menu-view`), GitHub Pages serves the 404.html page
2. The 404.html page shows a loading spinner, saves the requested path to localStorage, and redirects to the root of the application
3. The main application reads the saved path from localStorage and performs the appropriate client-side navigation

## Files Involved

- **public/404.html**: Handles the redirect for direct navigation to routes with a loading indicator
- **src/main.ts**: Reads the saved path from localStorage and performs navigation
- **src/router/index.ts**: Includes appropriate base path and a catch-all route for fallback
- **scripts/fix-gh-pages-paths.js**: Ensures all asset paths in the built index.html are correct
- **scripts/test-redirect.sh**: Script to test the GitHub Pages redirect mechanism locally

## Implementation Details

### 1. The 404.html Redirect

The 404.html file:
- Shows a loading spinner with the target route
- Extracts the current path from the URL
- Saves it to localStorage (without the repo name)
- Redirects to the application root

### 2. The Main Application

On initialization, the main.ts file:
- Checks for a saved path in localStorage
- If found, it navigates to that path after mounting the app
- Clears the localStorage entry to prevent redirect loops
- Includes error handling for failed navigation

### 3. Router Configuration

The router is configured with:
- Appropriate base path for GitHub Pages (`/trimble-modus-vue/`)
- Catch-all route to handle any invalid routes

## Deployment Steps

1. Build the application for GitHub Pages:
   ```bash
   npm run github-pages
   ```

2. Deploy the `dist` folder to GitHub Pages. You can do this manually or use GitHub Actions.

3. Test the deployment by navigating directly to a route:
   ```
   https://yourusername.github.io/trimble-modus-vue/menu-view
   ```

## Testing Locally

To test the GitHub Pages routing locally, you can use the following script:

```bash
npm run test:redirect
```

This script:
1. Builds the application for GitHub Pages
2. Copies the test scripts to the built distribution
3. Starts a local HTTP server serving the built files
4. Provides instructions for testing the redirect mechanism

### Using the Test and Analysis Tools

Once the server is running, you can use several tools to test the redirect mechanism:

#### Basic Redirect Test
In the browser console, run:
```javascript
testGitHubPagesRedirect()
```
This will:
1. Store a test route in localStorage
2. Reload the page to simulate a redirect
3. After reload, run `checkResult()` to verify the redirect worked

#### Advanced Analysis
For more detailed analysis, run:
```javascript
fetch('/trimble-modus-vue/redirect-analysis.js').then(r=>r.text()).then(t=>eval(t))
```
This will analyze the current URL and path and provide instructions for further testing.

### Test Scenarios

1. **Normal Navigation**: Navigate to the home page and then use links to other routes
2. **Direct Route Navigation**: Navigate directly to a specific route
3. **404 Handling**: Navigate to a non-existent route and verify the redirect
4. **Reload Testing**: Navigate to a route and then refresh the page

## Troubleshooting

If routing doesn't work correctly:

1. Check the browser console for errors
2. Verify localStorage is working and not blocked
3. Make sure the base paths in your configuration match
4. Confirm all scripts are correctly referenced in the built files

### Common Issues

- **Missing Assets**: If assets don't load, check paths in the built index.html
- **Redirect Loops**: Clear localStorage if you encounter redirect loops
- **CORS Issues**: Make sure your browser allows localStorage in the test environment

## References

- [SPA GitHub Pages](https://github.com/rafgraph/spa-github-pages)
- [Vue Router History Mode](https://router.vuejs.org/guide/essentials/history-mode.html)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
