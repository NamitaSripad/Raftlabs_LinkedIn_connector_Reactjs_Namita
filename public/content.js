chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "sendRequests") {
        // Logic to send connection requests on LinkedIn
        console.log("Sending connection requests...");
        // Add your connection request logic here
    }
});
