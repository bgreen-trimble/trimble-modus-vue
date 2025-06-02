/**
 * Comprehensive GitHub Pages SPA Routing Test
 * 
 * This script tests the GitHub Pages routing solution for Vue Router applications
 * that use HTML5 history mode. It simulates the redirect process that happens
 * when a user navigates directly to a route.
 * 
 * To use this script:
 * 1. Build your project: npm run github-pages
 * 2. Start a local server in the dist directory: npx http-server ./dist -c-1
 * 3. Open http://localhost:8080/trimble-modus-vue/ in your browser
 * 4. Open the console (F12) and paste this entire script
 * 5. Run testGHPagesRouting() in the console
 */

// Main test function
function testGHPagesRouting() {
  console.clear();
  console.log('%c GitHub Pages SPA Routing Test ', 'background: #0366d6; color: white; font-weight: bold; padding: 4px;');
  console.log('=============================================');

  // Get the environment info
  const baseUrl = '/trimble-modus-vue/';
  const currentPath = window.location.pathname;
  
  // Check if we're in the right context
  if (!currentPath.startsWith(baseUrl)) {
    console.error('❌ Error: This test must be run from ' + baseUrl);
    console.log('Current path:', currentPath);
    return;
  }
  
  console.log('✅ Running in correct context:', baseUrl);
  
  // Step 1: List all available routes
  const allRoutes = getAllRoutes();
  console.log('Available routes:', allRoutes);
  
  // Step 2: Test with a real route
  if (allRoutes.length === 0) {
    console.warn('⚠️ No routes found for testing. Using "menu-view" as fallback.');
    testRoute('menu-view');
  } else {
    // Use the first non-home route
    const testRoutePath = allRoutes[0].replace(baseUrl, '');
    testRoute(testRoutePath);
  }
}

// Helper to get all available routes from links in the app
function getAllRoutes() {
  const routes = [];
  const links = document.querySelectorAll('a[href^="/trimble-modus-vue/"]');
  
  links.forEach(link => {
    const href = link.getAttribute('href');
    if (href !== '/trimble-modus-vue/' && !routes.includes(href)) {
      routes.push(href);
    }
  });
  
  return routes;
}

// Test a specific route
function testRoute(routePath) {
  console.log('---------------------------------------------');
  console.log(`🧪 Testing route: ${routePath}`);
  
  // 1. Construct the full path as the 404.html script would
  const repoName = 'trimble-modus-vue';
  const fullPath = '/' + repoName + '/' + routePath;
  
  // 2. Save to localStorage as the 404.html script would
  localStorage.setItem('redirectPath', fullPath);
  console.log('✅ Saved to localStorage:', fullPath);
  
  // 3. Show instructions and countdown
  console.log('🔄 The page will reload in 3 seconds...');
  console.log('⏱️ After reload, the app should navigate to:', routePath);
  console.log('🔍 Run checkRedirectResult() to verify the result');
  
  // 4. Reload after countdown
  let countdown = 3;
  const timer = setInterval(() => {
    countdown--;
    console.log(`Reloading in ${countdown}...`);
    
    if (countdown <= 0) {
      clearInterval(timer);
      window.location.reload();
    }
  }, 1000);
}

// Check if the redirect was successful
function checkRedirectResult() {
  console.clear();
  console.log('%c GitHub Pages Redirect Test Results ', 'background: #2ea44f; color: white; font-weight: bold; padding: 4px;');
  console.log('=============================================');
  
  // Get current state
  const currentPath = window.location.pathname;
  const redirectPathInStorage = localStorage.getItem('redirectPath');
  
  console.log('Current URL path:', currentPath);
  console.log('localStorage.redirectPath:', redirectPathInStorage || '(cleared)');
  
  // Check if we were redirected correctly
  const baseUrl = '/trimble-modus-vue/';
  if (currentPath !== baseUrl && currentPath !== baseUrl.slice(0, -1)) {
    console.log('✅ SUCCESS: Redirect worked! You are on a non-root route.');
  } else {
    console.log('❌ FAILED: Redirect did not work. You are still on the root route.');
    console.log('   This might be because:');
    console.log('   1. The localStorage value was not read correctly');
    console.log('   2. The router navigation failed');
    console.log('   3. The path in localStorage was not correct');
  }
  
  // Check if localStorage was cleared
  if (!redirectPathInStorage) {
    console.log('✅ SUCCESS: localStorage.redirectPath was cleared.');
  } else {
    console.log('⚠️ WARNING: localStorage.redirectPath was not cleared.');
    console.log('   This might cause redirect loops. Check your main.ts file.');
  }
  
  // Show debugging info
  console.log('---------------------------------------------');
  console.log('🔍 Debugging Information:');
  console.log('Browser:', navigator.userAgent);
  console.log('localStorage enabled:', isLocalStorageEnabled());
  
  // Log Vue Router routes if available
  if (window.__VUE_ROUTER__ || window.router) {
    const router = window.__VUE_ROUTER__ || window.router;
    console.log('Current route:', router.currentRoute.value);
  }
}

// Helper to check if localStorage is enabled
function isLocalStorageEnabled() {
  try {
    localStorage.setItem('test', 'test');
    localStorage.removeItem('test');
    return true;
  } catch (e) {
    return false;
  }
}

// Instructions
console.log(`
GitHub Pages SPA Routing Test
============================
This script tests if the GitHub Pages routing solution works correctly.

To run the test:
1. Type testGHPagesRouting() in the console
2. Wait for the page to reload
3. After reload, type checkRedirectResult() to see the results

What this tests:
- Saving route information to localStorage
- Reading and using the route information after page load
- Proper clearing of localStorage to prevent redirect loops
`);
