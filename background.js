chrome.webNavigation.onCreatedNavigationTarget.addListener(details => {
    chrome.tabs.get(details.tabId, poppedTab => {
        if (!poppedTab) return;
        chrome.windows.get(poppedTab.windowId, { populate: true }, poppedWindow => {
            if (poppedWindow.type === "popup" && details.sourceTabId !== undefined) {
                // Get the source tab in the main window
                chrome.tabs.get(details.sourceTabId, sourceTab => {
                    const mainWindowId = sourceTab.windowId;
                    // Close the popup window
                    chrome.windows.remove(poppedWindow.id, () => {
                        // Focus the main window
                        chrome.windows.update(mainWindowId, { focused: true }, () => {
                            // Create the new tab next to the source tab
                            chrome.tabs.create({
                                windowId: mainWindowId,
                                url: details.url,
                                index: sourceTab.index + 1
                            });
                        });
                    });
                });
            }
        });
    });
});