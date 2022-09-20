// ==UserScript==
// @name         fucking csdn
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  filter csdn from bing search results
// @author       You
// @match        http*://*.bing.com/*
// @grant        none
// ==/UserScript==

function fuckingCsdn() {
    let searchItems = document.querySelectorAll(".b_algo");
    searchItems.forEach(function (item) {
        let bingAttr = item.querySelector(".b_attribution").innerHTML;
        if (bingAttr.toLowerCase().indexOf("csdn") >= 0) {
            item.style.display = "none";
        }
    });
}

document.onreadystatechange = () => (document.readyState === 'complete') && fuckingCsdn()