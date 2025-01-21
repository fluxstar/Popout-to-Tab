## Overview ##
This Chrome extension, called Popout To Tab, moves any pop-out window into a new tab instead. See `manifest.json` for extension configuration and `background.js` for the service worker logic.

## Installation ##
1. In Chrome, go to the Extensions page.
2. Enable "Developer mode".
3. Choose "Load unpacked" and select this folder.

## Usage ##
When a new pop-out window would open, it is closed and a new tab is created in the same window. This behavior is managed by `chrome.webNavigation.onCreatedNavigationTarget`.
