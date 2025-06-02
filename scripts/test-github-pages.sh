#!/usr/bin/env zsh

# Script to test the GitHub Pages deployment locally
# This creates a complete test environment in the dist folder

# Colors for output
GREEN='\033[0;32m'
RED='\033[0;31m'
BLUE='\033[0;34m'
YELLOW='\033[0;33m'
NC='\033[0m' # No Color

echo "${BLUE}=========================================${NC}"
echo "${BLUE}   GitHub Pages Deployment Test Suite    ${NC}"
echo "${BLUE}=========================================${NC}"

# 1. Build the application
echo "\n${YELLOW}Building application for GitHub Pages...${NC}"
npm run github-pages

if [ $? -ne 0 ]; then
  echo "${RED}Build failed. Exiting.${NC}"
  exit 1
fi
echo "${GREEN}✓ Build successful${NC}"

# 2. Copy the test script to the dist folder
echo "\n${YELLOW}Copying test script to dist folder...${NC}"
cp gh-pages-router-test.js dist/
echo "${GREEN}✓ Test script copied${NC}"

# 3. Create a test page that simulates direct navigation
echo "\n${YELLOW}Creating test pages...${NC}"

# Create a test menu of routes to try
cat > dist/test-routes.html << EOF
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>GitHub Pages Routing Test</title>
  <style>
    body { font-family: system-ui, -apple-system, sans-serif; line-height: 1.5; max-width: 800px; margin: 0 auto; padding: 20px; }
    h1 { color: #0366d6; }
    .test-card { border: 1px solid #e1e4e8; border-radius: 6px; padding: 16px; margin-bottom: 16px; }
    .test-card h2 { margin-top: 0; }
    .button { display: inline-block; padding: 8px 16px; background-color: #2ea44f; color: white; text-decoration: none; border-radius: 6px; font-weight: 500; }
    .button:hover { background-color: #2c974b; }
    .info { background-color: #f6f8fa; border-left: 4px solid #0366d6; padding: 16px; margin: 16px 0; }
    code { background-color: #f6f8fa; padding: 2px 4px; border-radius: 3px; }
  </style>
</head>
<body>
  <h1>GitHub Pages Routing Test</h1>
  
  <div class="info">
    <p>This page helps test the GitHub Pages routing solution for single-page applications.</p>
    <p>Current path: <code id="current-path"></code></p>
  </div>
  
  <div class="test-card">
    <h2>1. Test Direct Route Navigation</h2>
    <p>Click these links to test direct navigation to routes:</p>
    <ul id="route-list">
      <li><a href="/trimble-modus-vue/menu-view">Menu Component</a></li>
      <li><a href="/trimble-modus-vue/button-view">Button Component</a></li>
      <li><a href="/trimble-modus-vue/color-palette-view">Color Palette</a></li>
    </ul>
  </div>
  
  <div class="test-card">
    <h2>2. Test 404 Handling</h2>
    <p>This link points to a non-existent route to test the 404 handler:</p>
    <p><a href="/trimble-modus-vue/non-existent-path" class="button">Test 404 Handler</a></p>
  </div>
  
  <div class="test-card">
    <h2>3. Test with Console Script</h2>
    <p>Open your browser console and run this test:</p>
    <pre><code>fetch('/trimble-modus-vue/gh-pages-router-test.js')
  .then(response => response.text())
  .then(script => {
    eval(script);
    testGHPagesRouting();
  });</code></pre>
  </div>
  
  <script>
    // Display the current path
    document.getElementById('current-path').textContent = window.location.pathname;
    
    // Dynamically build the route list from actual app routes
    fetch('/trimble-modus-vue/')
      .then(response => response.text())
      .then(html => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        const links = Array.from(doc.querySelectorAll('a[href^="/trimble-modus-vue/"]'));
        
        const uniqueRoutes = [...new Set(links.map(link => link.getAttribute('href')))];
        
        if (uniqueRoutes.length > 0) {
          const routeList = document.getElementById('route-list');
          routeList.innerHTML = '';
          
          uniqueRoutes.forEach(route => {
            if (route !== '/trimble-modus-vue/') {
              const li = document.createElement('li');
              const a = document.createElement('a');
              a.href = route;
              a.textContent = route.replace('/trimble-modus-vue/', '').replace(/-/g, ' ');
              li.appendChild(a);
              routeList.appendChild(li);
            }
          });
        }
      })
      .catch(error => console.error('Error fetching routes:', error));
  </script>
</body>
</html>
EOF

echo "${GREEN}✓ Test pages created${NC}"

# 4. Start the server
echo "\n${YELLOW}Starting local server...${NC}"
echo "${BLUE}Test your GitHub Pages routing at:${NC}"
echo "${GREEN}http://localhost:8080/trimble-modus-vue/${NC}"
echo "${GREEN}http://localhost:8080/test-routes.html${NC}\n"

npx http-server ./dist -c-1
