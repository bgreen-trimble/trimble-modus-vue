#!/usr/bin/env zsh

# Build the application
echo "Building application for GitHub Pages..."
npm run github-pages

# Copy the test scripts to the dist folder
echo "Setting up test scripts..."
mkdir -p dist/trimble-modus-vue
cp public/simple-redirect-test.js dist/trimble-modus-vue/
cp public/redirect-test.js dist/trimble-modus-vue/

echo "✅ Test scripts copied to dist folder"

# Start the server
echo "Starting HTTP server. Access the test at:"
echo "http://localhost:8080/trimble-modus-vue/"
echo "Then use the browser console to run testGitHubPagesRedirect()"
echo ""
echo "For testing from the console, you can run:"
echo "fetch('/trimble-modus-vue/simple-redirect-test.js').then(r=>r.text()).then(t=>eval(t))"
echo ""

npx http-server ./dist -c-1
