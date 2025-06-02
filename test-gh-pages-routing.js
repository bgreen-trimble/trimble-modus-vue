/**
 * Simple script to test GitHub Pages routing
 * 
 * To use this script:
 * 1. Build your project: npm run github-pages (or whatever your build command is)
 * 2. Start a local server in the dist directory: npx http-server ./dist
 * 3. Open your browser to http://localhost:8080/trimble-modus-vue/
 * 4. Open the console and run this script in the browser console
 */

function testGHPagesRouting() {
  console.log('Testing GitHub Pages SPA routing...');
  
  // 1. Simulate a direct navigation to a non-existent path
  const testPath = '/trimble-modus-vue/some-random-path';
  console.log(`Testing navigation to: ${testPath}`);
  
  // 2. Manually simulate the 404.html behavior
  const pathSegmentsToKeep = 1;
  const repoName = 'trimble-modus-vue';
  
  // Extract the path after the repository name
  let path = 'some-random-path';
  
  // Save the route information to localStorage
  const redirectPath = '/' + repoName + '/' + path;
  localStorage.setItem('redirectPath', redirectPath);
  console.log(`Set redirectPath in localStorage: ${redirectPath}`);
  
  // 3. Reload the page to see if our handling code works
  console.log('Reloading page to test redirect handling...');
  console.log('After reload, check if you were redirected to the home page');
  console.log('and if localStorage.redirectPath was cleared');
  
  // Wait a moment before reloading
  setTimeout(() => {
    window.location.reload();
  }, 3000);
}

// Instructions for how to use the test
console.log(`
GitHub Pages Routing Test
------------------------
1. Run this function in your browser console:
   testGHPagesRouting()
   
2. After the page reloads, check:
   - You should be redirected to the home page
   - localStorage.redirectPath should be cleared
   - Check console logs for any errors

3. To test a real route, modify the script to use a valid route
   like '/trimble-modus-vue/menu-view'
`);
