// Initialize dataLayer if it doesn't exist
window.dataLayer = window.dataLayer || [];

// Define the gtag function
function gtag() {
  dataLayer.push(arguments);
}

// Set the initial timestamp
gtag('js', new Date());

// Configure the Google Analytics property
gtag('config', 'G-XFP6M5GN4H');

// Function to load the Google Analytics script
function loadGoogleAnalytics() {
  const script = document.createElement('script');
  script.async = true;
  script.src = 'https://www.googletagmanager.com/gtag/js?id=G-XFP6M5GN4H';
  document.head.appendChild(script);
}

// Load Google Analytics
loadGoogleAnalytics();

// Example function to track custom events
function trackEvent(category, action, label, value) {
  gtag('event', action, {
    'event_category': category,
    'event_label': label,
    'value': value
  });
}

// Export functions if using as a module
export { gtag, trackEvent };
