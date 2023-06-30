// ==UserScript==
// @name         YouTube
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Kang Creator
// @match        https://www.youtube.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    function clss(){
        window.close();
    }
    function runn(){
        document.querySelector(".yt-spec-button-shape-next.yt-spec-button-shape-next--filled.yt-spec-button-shape-next--mono.yt-spec-button-shape-next--size-m").click();
        setTimeout(clss, 2000);
    }
    setTimeout(runn, 2000);
})();
