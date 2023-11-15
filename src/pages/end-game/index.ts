import { state } from "../../state";

export function endPage(goTo) {
  const endPageRender = function (params, myScore, pcScore) {
    const div = document.createElement("div");

    params.ganador == "yo"
      ? div.classList.add("container-end-game-winner")
      : div.classList.add("container-end-game-looser");
    div.innerHTML = `
          <div class="end-page">
              
              <resultado-el texto="${
                params.ganador == "yo"
                  ? "Ganaste"
                  : params.ganador == ""
                  ? ""
                  : "Perdiste"
              }" color="${
      params.ganador == "yo" ? "green" : "red"
    }" ></resultado-el>

      <score-el title="Score" scoreUno=${myScore} scoreDos=${pcScore}></score-el>

      <div class="container-buttons">
        <button-el texto="Volver a jugar" class="btn-empezar"></button-el>
        <button-el texto="Inicio" class="btn-inicio"></button-el>
      </div>
       
          </div>
          `;

    const btn = div.querySelector(".btn-empezar");
    btn?.addEventListener("click", () => {
      const currentState = state.getState();
      // currentState.historyGame.push({ ...currentState.currentGame });
      currentState.currentGame.myPlay = 0;
      currentState.currentGame.computerPlay = 0;
      currentState.currentGame.playTime = 0;
      currentState.currentGame.ganador = "";

      state.setState(currentState);
      goTo("/game");
    });

    const btnInicio = div.querySelector(".btn-inicio");
    btnInicio?.addEventListener("click", () => {
      const currentState = state.getState();
      // currentState.historyGame.push({ ...currentState.currentGame });
      currentState.currentGame.myPlay = 0;
      currentState.currentGame.computerPlay = 0;
      currentState.currentGame.playTime = 0;
      currentState.currentGame.ganador = "";
      currentState.historyGame = [];

      state.setState(currentState);
      goTo("/inicio");
    });

    return div;
  };

  let pcScore = 0;
  let myScore = 0;
  const currentState = state.getState();
  currentState.historyGame.map((game) => {
    if (game.ganador == "yo") {
      myScore += 1;
    } else if (game.ganador == "computer") {
      pcScore += 1;
    }
  });

  return endPageRender(currentState.currentGame, myScore, pcScore);
}
