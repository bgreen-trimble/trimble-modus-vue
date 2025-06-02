/**
 * Simple GitHub Pages Routing Test
 *
 * This is a direct, bare-bones test for the GitHub Pages routing.
 * It manually sets up exactly what the 404.html does and then reloads.
 */

function testGitHubPagesRedirect() {
  // Clear the console for better readability
  console.clear();
  console.log('======= GitHub Pages Redirect Test =======');
  
  // Make sure localStorage is working
  try {
    localStorage.setItem('test', 'test');
    localStorage.removeItem('test');
    console.log('✅ localStorage is working properly');
  } catch (e) {
    console.error('❌ localStorage is NOT working!');
    console.error('This test requires localStorage to work');
    return;
  }
  
  // Target route to test - this should be a valid route in your app
  // For example: 'menu-view' for the /menu-view route
  const targetRoute = 'menu-view';
  console.log(`Testing redirect to route: ${targetRoute}`);
  
  // Build the path that 404.html would create - JUST the route path, not including repo name
  const redirectPath = '/' + targetRoute;
  
  // Save to localStorage
  localStorage.setItem('redirectPath', redirectPath);
  console.log(`Set redirectPath in localStorage: "${redirectPath}"`);
  
  // Countdown
  console.log('Page will reload in 3 seconds...');
  console.log('After reload, the app should redirect to:', redirectPath);
  
  // Reload after 3 seconds
  setTimeout(() => {
    window.location.reload();
  }, 3000);
}

// Check the result after reload
function checkResult() {
  console.log('======= Redirect Test Results =======');
  console.log('Current path:', window.location.pathname);
  console.log('localStorage.redirectPath:', localStorage.getItem('redirectPath') || '(cleared)');
  
  // Verify if redirect worked
  if (window.location.pathname.includes('menu-view')) {
    console.log('✅ SUCCESS: Redirect worked!');
  } else {
    console.log('❌ FAILED: Redirect did not work');
  }
}

// Instructions
console.log(`
GitHub Pages Redirect Test
------------------------
1. To test the redirect mechanism, run:
   testGitHubPagesRedirect()
   
2. After the page reloads, run:
   checkResult()
   
This test simulates what happens when a user navigates
directly to a route on GitHub Pages.
`);
