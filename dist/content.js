"use strict";
const removeAds = () => {
    const adSelectors = [
        ".video-ads",
        ".ytp-ad-module", // In-player ads
        ".ytp-ad-overlay-container", // Overlay ads
        ".ytp-ad-skip-button", // Skip button
    ];
    adSelectors.forEach((selector) => {
        const ads = document.querySelectorAll(selector);
        ads.forEach((ad) => ad.remove());
    });
    console.log("YouTube ads removed.");
};
// run every sec to remove any new ads
setInterval(removeAds, 1000);
