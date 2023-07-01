// ==UserScript==
// @name        Youlikehits reset
// @namespace   https://github.com/CryptoXSS/Youlikehits-2023/
// @match       https://www.youlikehits.com/youtube2.php
// @grant       none
// @version     1.0
// @author      CryptoXSS
// @description 1/7/2023, 07:58:41
// ==/UserScript==


// Función para verificar si se encuentra un problema y recargar la página
function verificarTexto() {
  var centro = document.querySelector('center');
  console.log("check problem")
  var texto = centro.innerText;
  if (texto.includes('This YouTube account no longer exists.')) {
    console.log("Reiniciar")
    location.reload();
  }
}

// Ejecutar la función cada 60 segundos
setInterval(verificarTexto, 60000);
