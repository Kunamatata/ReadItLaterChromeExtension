var url = '';

chrome.browserAction.onClicked.addListener(function() {
    chrome.tabs.query({ 'active': true }, function(tab) {
        url = tab[0].url;
        var xhr = new XMLHttpRequest();

        console.log("http://127.0.0.1:8000/link/add?url=" + url);
        xhr.open("GET", "http://127.0.0.1:8000/link/add?url=" + url, true);
        xhr.send();

        var result = xhr.responseText;
    });
});
