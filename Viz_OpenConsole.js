//=============================================================================
// Viz_OpenConsole.js [MZ] (v1.1.0)
//=============================================================================

/*:
 * @target MZ
 * @plugindesc [MZ] (v1.1.0) Abre la consola en segundo plano tras iniciar el juego.
 * @author Vizcacha
 * @url https://github.com/Cri-ParraC/Viz_OpenConsole
 * @help Viz_OpenConsole.js [MZ] (v1.1.0)
 * ----------------------------------------------------------------------------
 * Plugin sencillo para RPG Maker MZ que abre la consola "DevTools" y la deja en
 * segundo plano.
 * 
 * También activa el contador de FPS.
 */

(() => {
  "use strict";

  console.info("Viz_OpenConsole.js [MZ] (v1.1.0)");

  window.Imported ||= {};
  Imported.Viz_OpenConsole = 1.1;

  nw.Window.get().showDevTools();

  //-----------------------------------------------------------------------------
  // Scene_Boot
  //-----------------------------------------------------------------------------

  // Scene_Boot.start

  const Scene_Boot_start = Scene_Boot.prototype.start;

  Scene_Boot.prototype.start = function () {
    Scene_Boot_start.call(this);
    nw.Window.get().focus();
    Graphics._switchFPSCounter();
  };

})();