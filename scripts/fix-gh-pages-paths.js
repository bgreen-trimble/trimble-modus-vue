// This script fixes paths in the built index.html for GitHub Pages
// It should be run after the build process

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the directory path
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distPath = path.resolve(__dirname, '../dist');
const indexPath = path.join(distPath, 'index.html');

console.log('Fixing paths in index.html for GitHub Pages...');

try {
  // Read the index.html file
  let indexContent = fs.readFileSync(indexPath, 'utf8');
  
  // Fix the script paths to include the base path
  indexContent = indexContent.replace(
    /src="\/assets\//g, 
    'src="/trimble-modus-vue/assets/'
  );
  
  // Fix other resource paths if needed
  indexContent = indexContent.replace(
    /href="\/assets\//g, 
    'href="/trimble-modus-vue/assets/'
  );
  
  // Also fix relative paths if needed
  indexContent = indexContent.replace(
    /src="assets\//g, 
    'src="./assets/'
  );
  
  indexContent = indexContent.replace(
    /href="assets\//g, 
    'href="./assets/'
  );
  
  // Add the redirect detection script to <head>
  const headEndPos = indexContent.indexOf('</head>');
  if (headEndPos !== -1) {
    const redirectScript = `
  <!-- GitHub Pages SPA redirect script -->
  <script type="text/javascript">
    // Check if we need to restore a route from localStorage
    (function() {
      const redirectPath = localStorage.getItem('redirectPath');
      if (redirectPath) {
        console.log('Found redirect path:', redirectPath);
        
        // Log this for debugging
        console.log('Current URL:', window.location.href);
        console.log('Will navigate to:', redirectPath);
        
        // Add a class to the body to indicate we're redirecting
        // This allows for a loading state to be shown
        document.addEventListener('DOMContentLoaded', function() {
          document.body.classList.add('is-redirecting');
        });
      }
    })();
  </script>
`;
    
    // Insert the script right before </head>
    indexContent = indexContent.slice(0, headEndPos) + redirectScript + indexContent.slice(headEndPos);
  }
  
  // Add the redirect test script to the body (development only)
  const bodyEndPos = indexContent.indexOf('</body>');
  if (bodyEndPos !== -1) {
    const testScript = `
  <!-- GitHub Pages routing test script -->
  <script>
    console.log('Redirect test scripts available at:');
    console.log('- /trimble-modus-vue/redirect-test.js');
    console.log('- /trimble-modus-vue/simple-redirect-test.js');
    console.log('Run this in console to load them:');
    console.log('fetch("/trimble-modus-vue/simple-redirect-test.js").then(r=>r.text()).then(t=>eval(t))');
  </script>
`;
    
    // Insert the script right before </body>
    indexContent = indexContent.slice(0, bodyEndPos) + testScript + indexContent.slice(bodyEndPos);
  }
  
  // Write the fixed content back to the file
  fs.writeFileSync(indexPath, indexContent);
  
  console.log('✅ Successfully fixed paths in index.html');
} catch (error) {
  console.error('❌ Error fixing paths:', error);
}
