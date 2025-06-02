#!/usr/bin/env zsh

# This script tests the GitHub Pages deployment locally
# It builds the app, starts a local server, and tests the routing

# Colors for output
GREEN='\033[0;32m'
RED='\033[0;31m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo "${BLUE}=== Testing GitHub Pages Deployment ===${NC}"

# 1. Build the application for GitHub Pages
echo "${BLUE}Building application for GitHub Pages...${NC}"
npm run github-pages

if [ $? -ne 0 ]; then
  echo "${RED}Build failed. Exiting.${NC}"
  exit 1
fi

echo "${GREEN}Build successful!${NC}"

# 2. Create a test HTML file that will simulate a direct navigation
echo "${BLUE}Creating test file for direct navigation simulation...${NC}"

# Create a test directory inside dist
mkdir -p dist/test-direct-navigation

# Create a test HTML file that will redirect to a specific route
cat > dist/test-direct-navigation/index.html << EOF
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Testing Direct Navigation</title>
  <script>
    // This simulates what happens when a user navigates directly to a route
    // It redirects to the 404.html page with a specific path
    window.location.href = "/trimble-modus-vue/non-existent-path";
  </script>
</head>
<body>
  <p>Redirecting to test path...</p>
</body>
</html>
EOF

echo "${GREEN}Test file created!${NC}"

# 3. Start a local server with cache disabled
echo "${BLUE}Starting local server...${NC}"
echo "${BLUE}Please test the following scenarios:${NC}"
echo "${GREEN}1. Normal navigation:${NC} http://localhost:8080/trimble-modus-vue/"
echo "${GREEN}2. Direct route navigation:${NC} http://localhost:8080/trimble-modus-vue/menu-view"
echo "${GREEN}3. Test the 404 handler:${NC} http://localhost:8080/trimble-modus-vue/non-existent-path"
echo "${GREEN}4. Test redirect simulation:${NC} http://localhost:8080/test-direct-navigation/"
echo "${BLUE}Press Ctrl+C to stop the server when done testing.${NC}"

# Start the server with caching disabled (-c-1)
npx http-server ./dist -o /trimble-modus-vue/ -c-1
