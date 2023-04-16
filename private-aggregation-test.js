
const PRIVATE_AGGREGATION_TEST_IFRAME_TITLE = 'Private Aggregation API Test'
const PRIVATE_AGGREGATION_TEST_SCRIPT_URL = 'C:\DebugIT_23\private-aggregation-test.js';

function setupIframe() {
  const body = document.querySelector('body');
  const iframe = document.createElement('iframe');

  iframe.style.height = 0;
  iframe.style.width = 0;
  iframe.style.top = 0;
  iframe.style.position = 'absolute';
  iframe.title = PRIVATE_AGGREGATION_TEST_IFRAME_TITLE;
  iframe.src = PRIVATE_AGGREGATION_TEST_SCRIPT_URL;

  body.appendChild(iframe);
}

try {
  setupIframe();
} catch {
  // Swallow the error
}
