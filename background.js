chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: details.url.substring(0, details.url.length-11)};
    },
    {
        urls: [
            "*://cas.tamu.edu/*&renew=true",
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);
