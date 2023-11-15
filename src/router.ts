import { gamePage } from "./pages/juego";
import { initPage } from "./pages/inicio";
import { jugarPage } from "./pages/presentacion";
import { endPage } from "./pages/end-game";
const root = document.querySelector(".root");
const BASE_PATH = "/piedra-papel-tijera";

const routes = [
  {
    path: /\/inicio$/,
    handle: initPage,
  },
  {
    path: /\/jugar$/,
    handle: jugarPage,
  },
  {
    path: /\/game$/,
    handle: gamePage,
  },
  {
    path: /\/endgame$/,
    handle: endPage,
  },
];

function handleRoute(path) {
  if (isGithubPages()) {
    const newRoute = path.replace(BASE_PATH, "");
    for (const route of routes) {
      if (route.path.test(newRoute)) {
        const page = route.handle(goTo);
        renderPage(page);
      }
    }
  } else {
    for (const route of routes) {
      if (route.path.test(path)) {
        const page = route.handle(goTo);
        renderPage(page);
      }
    }
  }
}

function renderPage(page: Element) {
  if (root?.firstChild) {
    root.firstChild.remove();
    root.appendChild(page);
  } else {
    root?.appendChild(page);
  }
}

export function goTo(path) {
  if (isGithubPages()) {
    const completePath = BASE_PATH + path;
    history.pushState({}, "", completePath);
    handleRoute(completePath);
  } else {
    history.pushState({}, "", path);
    handleRoute(path);
  }
}

// TENER EN CUENTA EL RUTEO DESDE GITHUB PAGES - VER INSTRUCCIONES EN APX-CARRERA
export function initRouter() {
  if (location.pathname == "/") {
    goTo("/inicio");
  } else {
    handleRoute(location.pathname);
  }
}

function isGithubPages() {
  return location.host.includes("github.io");
}

window.addEventListener("popstate", () => {
  initRouter();
});
