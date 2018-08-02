function start() {
  chrome.tabs.executeScript({
    file: 'start.js'
  });
}

function download() {
  chrome.tabs.executeScript({
    file: 'download.js'
  });
}

document.getElementById('start').addEventListener('click', start);
document.getElementById('download').addEventListener('click', download);
