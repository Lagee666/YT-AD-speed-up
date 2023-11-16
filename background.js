// 監聽來自內容腳本的訊息
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'speedUpVideo') {
      // 傳送訊息給內容腳本，告訴它加速影片
      chrome.tabs.query({active: true, currentWindow: true}, tabs => {
        chrome.tabs.sendMessage(tabs[0].id, {action: 'speedUpVideo'});
      });
    }
  });
  