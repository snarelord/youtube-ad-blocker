"use strict";
const blockedUrls = [
    "*://www.youtube.com/api/stats/ads*",
    "*://www.youtube.com/get_midroll_info*",
    "*://www.youtube.com/pagead/*",
    "*://www.youtube.com/ad*",
];
chrome.webRequest.onBeforeRequest.addListener((details) => {
    console.log("Blocked YouTube ad:", details.url);
    return { cancel: true };
}, { urls: blockedUrls }, ["blocking"]);
