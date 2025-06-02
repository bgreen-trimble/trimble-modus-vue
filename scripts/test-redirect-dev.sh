#!/usr/bin/env zsh

# This script helps test the GitHub Pages redirect mechanism during development
# It copies the test scripts to the public folder and runs the dev server

# Copy test scripts to ensure they're available in both locations
echo "Setting up test scripts..."
cp simple-redirect-test.js public/
echo "✅ Test scripts copied to public folder"

# Add message about how to test
echo "Starting development server..."
echo ""
echo "To test the GitHub Pages redirect mechanism:"
echo "1. Open the browser console"
echo "2. Run testGitHubPagesRedirect()"
echo "3. After the page reloads, run checkResult()"
echo ""
echo "If the test script doesn't load automatically, you can load it manually by running:"
echo "fetch('/simple-redirect-test.js').then(r=>r.text()).then(t=>eval(t))"
echo ""

# Start the development server
npm run dev
