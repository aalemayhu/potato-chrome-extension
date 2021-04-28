chrome.runtime.onInstalled.addListener(() => {
  console.log('init potato');
  chrome.contextMenus.create({
        "id": "potatoMenu",
        "title": "Plant potato",
        "contexts": ["selection"]
  });
})
