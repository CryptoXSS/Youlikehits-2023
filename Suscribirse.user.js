// ==UserScript==
// @name         AutoSuscribirse
// @namespace    https://github.com/CryptoXSS/Youlikehits-2023/
// @version      0.1
// @description  AutoSuscribirse YT
// @author       You
// @match        https://www.youtube.com/*
// @icon         https://i.imgur.com/ejxjYj4.gif
// @grant        none
// ==/UserScript==

function buscarPalabras() {
  var elemento1 = document.querySelector('.yt-spec-button-shape-next.yt-spec-button-shape-next--filled.yt-spec-button-shape-next--mono.yt-spec-button-shape-next--size-m');
  var elemento2 = document.querySelector('.ytd-subscribe-button-renderer');

  if (elemento1 && elemento1.innerText.includes('Suscribirse') | (elemento1 && elemento1.innerText.includes('Suscribirme'))) {
    console.log("¡Se encontró la palabra 'Suscribirse'!");
    elemento1.click();
    setTimeout(function() {
      window.close();
    }, 4000);
  }

  if (elemento2 && elemento2.innerText.includes('Suscrito')) {
    console.log("¡Se encontró la palabra 'Suscrito'!");
    setTimeout(function() {
      window.close();
    }, 4000);
  }
}

setInterval(buscarPalabras, 1000);

