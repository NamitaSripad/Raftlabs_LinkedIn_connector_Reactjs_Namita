// background.js
chrome.action.onClicked.addListener((tab) => {
    chrome.tabs.create({ url: 'https://www.linkedin.com/mynetwork/grow/' });
  });
  