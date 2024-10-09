document.getElementById("connect-all-btn").addEventListener("click", () => {
    // Execute a content script to handle clicking Connect buttons
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.scripting.executeScript({
            target: { tabId: tabs[0].id },
            func: connectAll,
        });
    });
});

function connectAll() {
    // Find all visible Connect buttons and click them
    const connectButtons = document.querySelectorAll('button');
    
    connectButtons.forEach(button => {
        if (button.innerText.includes('Connect')) {
            button.click();
        }
    });
}
