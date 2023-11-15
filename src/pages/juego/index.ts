import { state } from "../../state";
import { goTo } from "../../router";
import { play } from "../../state";

export function gamePage() {
  const div = document.createElement("div");

  const game = function (myPoints, computerPoints, playTime) {
    div.innerHTML = `
    <div class="game-page">
    <hands-container size="grande" class="computer"></hands-container>
    <div class="container-middle">
    <tanteador-el computerPoints=${computerPoints} myPoints=${myPoints}></tanteador-el>
    <div  class="container-tempo">
    <temporizador-el></temporizador-el>

    <p class="aviso">Partida n°${playTime + 1}</p>
    </div>
    
    </div>
    
    <hands-container size="grande" class="hands-container"></hands-container>
    </div>
    `;

    const handsContainer = div.querySelector(".hands-container");
    handsContainer?.addEventListener("click", (e) => {
      const cs = state.getState();

      const target = e.target as any;
      const computedMove = state.computerPlay();

      state.setMove(target.id, computedMove);
      myHandSelect(target.id, computedMove);
      setTimeout(() => {
        if (cs.currentGame.ganador == "") {
          return game(
            cs.currentGame.myPlay,
            cs.currentGame.computerPlay,
            cs.currentGame.playTime
          );
        } else {
          cs.historyGame.push({ ...cs.currentGame });
          state.setState(cs);
          goTo("/endgame");
        }
      }, 6000);
    });
    return div;
  };

  state.suscrcribe(() => {
    const currentState = state.getState();
    const myPoints = currentState.currentGame.myPlay;
    const computerPoints = currentState.currentGame.computerPlay;
    const playTime = currentState.currentGame.playTime;
    if (currentState.currentGame.ganador == "") {
      if (playTime >= 3) {
        const ganeYo = myPoints > computerPoints ? true : false;
        const ganoPc = myPoints < computerPoints ? true : false;
        const empate = myPoints == computerPoints ? true : false;
        if (ganeYo) {
          state.whoWins("yo");
        } else if (ganoPc) {
          state.whoWins("computer");
        } else if (empate) {
          // console.log("empate");
        }
      } else if (playTime == 2) {
        if (myPoints == 2) {
          state.whoWins("yo");
        } else if (computerPoints == 2) {
          state.whoWins("computer");
        }
      }
    }
  });
  return game(0, 0, 0);
}

export function myHandSelect(miMove: play, computedMove: play) {
  const images =
    document.querySelector(".hands-container")?.children[0].children;
  const arrImages = Array.prototype.slice.call(images);
  const handsContainer = document.querySelector(".hands-container");
  const container = handsContainer as any;
  container.style.pointerEvents = "none";
  setTimeout(() => {
    container.style.pointerEvents = "auto";
  }, 6000);
  if (miMove == "papel") {
    arrImages[0].style.transform = "translate(125px,-130px)";
    arrImages[0].style.transition = "transform 0.5s";

    arrImages[1].style.transform = "translate(-135px,80px)";
    arrImages[1].style.transition = "transform 0.5s";
    arrImages[1].style.opacity = "0.5";

    arrImages[2].style.transform = "translate(0,80px)";
    arrImages[2].style.transition = "transform 0.5s";
    arrImages[2].style.opacity = "0.5";
  } else if (miMove == "piedra") {
    arrImages[0].style.transform = "translate(0,80px)";
    arrImages[0].style.transition = "transform 0.5s";
    arrImages[0].style.opacity = "0.5";
    arrImages[1].style.transform = "translate(0,-130px)";
    arrImages[1].style.transition = "transform 0.5s";

    arrImages[2].style.transform = "translate(0,80px)";
    arrImages[2].style.transition = "transform 0.5s";
    arrImages[2].style.opacity = "0.5";
  } else if (miMove == "tijera") {
    arrImages[2].style.transform = "translate(-125px,-130px)";
    arrImages[2].style.transition = "transform 0.5s";
    arrImages[1].style.transform = "translate(125px,80px)";
    arrImages[1].style.transition = "transform 0.5s";
    arrImages[1].style.opacity = "0.5";

    arrImages[0].style.transform = "translate(0,80px)";
    arrImages[0].style.transition = "transform 0.5s";
    arrImages[0].style.opacity = "0.5";
  }
  setTimeout(() => {
    arrImages.forEach((img) => {
      img.style.transform = "";
      img.style.transition = "";
      img.style.opacity = "";
    });
  }, 6000);
  setTimeout(() => {
    computerSelect(computedMove);
  }, 3000);
}

function computerSelect(computedMove) {
  const images = document.querySelector(".computer")?.children[0].children;
  const arrImages = Array.prototype.slice.call(images);

  if (computedMove == "papel") {
    arrImages[0].style.transform = "translate(125px,-170px)";
    arrImages[0].style.transition = "transform 0.5s";
    // arrImages[0].style.opacity = "0.5";

    arrImages[1].style.transform = "translate(-125px,70px)";
    arrImages[1].style.transition = "transform 0.5s";
    arrImages[1].style.opacity = "0.5";

    arrImages[2].style.transform = "translate(0,70px)";
    arrImages[2].style.opacity = "0.5";
  } else if (computedMove == "piedra") {
    arrImages[1].style.transform = "translate(0,-170px)";
    arrImages[1].style.transition = "transform 0.5s";

    arrImages[0].style.transform = "translate(0,70px)";
    arrImages[0].style.transition = "transform 0.5s";
    arrImages[0].style.opacity = "0.5";

    arrImages[2].style.transform = "translate(0,70px)";
    arrImages[2].style.opacity = "0.5";
    arrImages[2].style.transition = "transform 0.5s";
  } else if (computedMove == "tijera") {
    arrImages[2].style.transform = "translate(-125px,-170px)";
    arrImages[2].style.transition = "transform 0.5s";

    arrImages[0].style.transform = "translate(0,70px)";
    arrImages[0].style.transition = "transform 0.5s";
    arrImages[0].style.opacity = "0.5";

    arrImages[1].style.transform = "translate(125px,70px)";
    arrImages[1].style.opacity = "0.5";
    arrImages[1].style.transition = "transform 0.5s";
  }
  setTimeout(() => {
    arrImages.forEach((img) => {
      img.style.transform = "";
      img.style.transition = "";
      img.style.opacity = "";
    });
  }, 3000);
}
