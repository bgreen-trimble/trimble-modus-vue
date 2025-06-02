// This script fixes paths in the built index.html for GitHub Pages
// It should be run after the build process

import fs from 'fs';
import path from 'path';

// The path to the dist directory
const distPath = path.resolve('./dist');
const indexPath = path.join(distPath, 'index.html');

console.log('Fixing paths in index.html for GitHub Pages...');

try {
  // Read the index.html file
  let indexContent = fs.readFileSync(indexPath, 'utf8');
  
  // First check if paths are already correct
  if (indexContent.includes('src="/trimble-modus-vue/assets/')) {
    console.log('Paths already include base - skipping fixes');
    process.exit(0);
  }
  
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
      }
    })();
  </script>
`;
    
    // Insert the script right before </head>
    indexContent = indexContent.slice(0, headEndPos) + redirectScript + indexContent.slice(headEndPos);
  }
  
  // Write the fixed content back to the file
  fs.writeFileSync(indexPath, indexContent);
  
  console.log('✅ Successfully fixed paths in index.html');
} catch (error) {
  console.error('❌ Error fixing paths:', error);
}
