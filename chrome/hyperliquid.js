let pattern = "https://api-ui.hyperliquid.xyz/info*";

function redirect(requestDetails) {
    return {
        redirectUrl: "https://raw.githubusercontent.com/skynetcap/hyperliquid-extension/master/info"
    };
}

chrome.webRequest.onBeforeRequest.addListener(
    redirect,
    {urls: [pattern]},
    ["blocking"]
);
