# GitHub Pages Deployment Guide

This document explains how to deploy the Trimble Modus Vue application to GitHub Pages with proper routing.

## Understanding the Challenge

Vue Router with `createWebHistory` uses HTML5 History API, which requires server-side configuration to handle client-side routes. GitHub Pages doesn't support this out of the box, so we need a workaround.

## Solution Overview

Our solution uses a custom 404.html page to handle direct navigation to client-side routes:

1. When a user navigates directly to a route (e.g., `/trimble-modus-vue/menu-view`), GitHub Pages serves the 404.html page
2. The 404.html page saves the requested path to localStorage and redirects to the root
3. The main application reads the saved path from localStorage and performs the appropriate navigation

## Files Involved

- **public/404.html**: Handles the redirect for direct navigation to routes
- **src/main.ts**: Reads the saved path from localStorage and performs navigation
- **index.html**: Contains setup script to handle redirects
- **src/router/index.ts**: Includes a catch-all route for fallback

## Deployment Steps

1. Build the application for GitHub Pages:
   ```bash
   npm run github-pages
   ```

2. Deploy the `dist` folder to GitHub Pages. You can do this manually or use GitHub Actions.

3. Test the deployment by navigating directly to a route, e.g.:
   ```
   https://yourusername.github.io/trimble-modus-vue/menu-view
   ```

## Testing Locally

To test the GitHub Pages routing locally:

1. Build the application:
   ```bash
   npm run github-pages
   ```

2. Serve the dist directory:
   ```bash
   npx http-server ./dist
   ```

3. Test direct navigation to routes:
   ```
   http://localhost:8080/trimble-modus-vue/menu-view
   ```

4. You can also use the provided test script (`test-gh-pages-routing.js`) by loading it in the browser console

## Troubleshooting

If routing doesn't work correctly:

1. Check the browser console for errors
2. Verify that localStorage is working in your browser
3. Make sure the base path in `vite.config.ts` matches your repository name
4. Confirm that the path segments in 404.html match your deployment setup

## References

- [SPA GitHub Pages](https://github.com/rafgraph/spa-github-pages)
- [Vue Router GitHub Pages Deployment](https://router.vuejs.org/guide/essentials/history-mode.html#example-server-configurations)
