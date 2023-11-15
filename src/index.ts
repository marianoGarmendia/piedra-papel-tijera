import "./components/tanteador-el";
import "./components/button-el";
import "./components/resultado";
import "./components/score-el";
import { handsEl } from "./components/hands-el";
import { goTo } from "./router";

import { temporizadorEl } from "./components/temporizador-el";
import { initRouter } from "./router";
import { state } from "./state";

(function () {
  state.initState();
  initRouter();
  handsEl();
  temporizadorEl();
})();
