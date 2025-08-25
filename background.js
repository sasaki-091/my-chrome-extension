chrome.action.onClicked.addListener((tab) => {
  if (!tab.id) return;
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: () => {
      const title = document.title;
      const url = window.location.href;
      const textToCopy = `${title}\n${url}`;
      navigator.clipboard.writeText(textToCopy)
        .then(() => {
          alert('タイトルとURLをコピーしました！');
        })
        .catch((err) => {
          console.error('コピーに失敗:', err);
          alert('コピーに失敗しました');
        });
    }
  });
});
