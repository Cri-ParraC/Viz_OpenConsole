//=============================================================================
// Viz_OpenConsole.js [MZ] (v1.0.1)
//=============================================================================

/*:
 * @target MZ
 * @plugindesc [MZ] (v1.0.1) Abre la consola en segundo plano tras iniciar el juego.
 * @author Vizcacha
 * @version 1.0.1
 * @url https://github.com/Cri-ParraC/Viz_OpenConsole
 * @help Viz_OpenConsole.js [MZ] (v1.0.1)
 * 
 * Plugin sencillo para RPG Maker MZ que abre la consola "DevTools" y la deja en
 * segundo plano.
 */

(() => {
  "use strict";
  console.info("Viz_OpenConsole.js [MZ] (v1.0.1) activado");

  nw.Window.get().showDevTools();

  const Scene_Boot_start = Scene_Boot.prototype.start;

  Scene_Boot.prototype.start = function () {
    Scene_Boot_start.call(this);
    nw.Window.get().focus();
  };
})();