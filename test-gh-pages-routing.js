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
  
  // Check if we're in a valid context for testing
  if (!window.location.pathname.includes('trimble-modus-vue')) {
    console.error('This test should be run from the /trimble-modus-vue/ path');
    return;
  }
  
  // 1. Create a test route path
  const testRoute = 'menu-view'; // This should be a valid route in your app
  console.log(`Testing navigation to route: ${testRoute}`);
  
  // 2. Construct the path as the 404.html script would
  const l = window.location;
  const repoName = 'trimble-modus-vue';
  
  // Build the full path including repo name
  const fullPath = '/' + repoName + '/' + testRoute;
  console.log(`Setting redirectPath in localStorage: ${fullPath}`);
  
  // 3. Save to localStorage just like the 404.html script would
  localStorage.setItem('redirectPath', fullPath);
  
  // 4. Reload the page to test if the main.ts redirect handling works
  console.log('Reloading page in 3 seconds to test redirect handling...');
  console.log('After reload, check if:');
  console.log('1. You were redirected to the test route');
  console.log('2. localStorage.redirectPath was cleared');
  
  // Wait a moment before reloading
  setTimeout(() => {
    window.location.reload();
  }, 3000);
}

// Add a function to check if a redirect was successful
function checkRedirectResult() {
  console.log('Checking redirect result:');
  console.log('Current path:', window.location.pathname);
  console.log('localStorage.redirectPath:', localStorage.getItem('redirectPath'));
  
  if (window.location.pathname.includes('menu-view')) {
    console.log('✅ SUCCESS: Redirect worked! You are on the menu-view route.');
  } else {
    console.log('❌ FAILED: Redirect did not work. You are not on the test route.');
  }
  
  if (!localStorage.getItem('redirectPath')) {
    console.log('✅ SUCCESS: localStorage.redirectPath was cleared.');
  } else {
    console.log('❌ FAILED: localStorage.redirectPath was not cleared.');
  }
}

// Instructions for how to use the test
console.log(`
GitHub Pages Routing Test
------------------------
1. Run this function in your browser console:
   testGHPagesRouting()
   
2. After the page reloads, run:
   checkRedirectResult()
   
3. You should see success messages if the redirect worked correctly.

Note: This test uses 'menu-view' as the test route. Make sure this is a valid
route in your application, or change it to a route that exists.
`);
