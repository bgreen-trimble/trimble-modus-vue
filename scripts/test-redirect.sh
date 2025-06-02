#!/usr/bin/env zsh

# Build the application
echo "Building application for GitHub Pages..."
npm run github-pages

# Copy the test scripts to the dist folder
echo "Setting up test scripts..."
mkdir -p dist/trimble-modus-vue
cp public/simple-redirect-test.js dist/trimble-modus-vue/
cp public/redirect-test.js dist/trimble-modus-vue/
cp public/redirect-analysis.js dist/trimble-modus-vue/

echo "✅ Test scripts copied to dist folder"

# Start the server
echo "Starting HTTP server. Access the test at:"
echo "http://localhost:8080/trimble-modus-vue/"
echo ""
echo "For testing the redirect mechanism:"
echo "1. Run testGitHubPagesRedirect() in the console"
echo "2. After redirect, run checkResult() to verify"
echo ""
echo "For advanced analysis, load the analysis tool:"
echo "fetch('/trimble-modus-vue/redirect-analysis.js').then(r=>r.text()).then(t=>eval(t))"
echo ""

npx http-server ./dist -c-1
