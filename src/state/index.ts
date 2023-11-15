export type play = "piedra" | "papel" | "tijera";

export const state = {
  data: {
    currentGame: {
      computerPlay: 0,
      myPlay: 0,
      playTime: 0,
      ganador: "",
    },

    historyGame: [],
  },
  listener: [],
  optionsPlay: ["piedra", "papel", "tijera"],
  initState() {
    const state: string = localStorage.getItem("juego") || this.getState();
    if (typeof state == "string") {
      this.setState(JSON.parse(state));
    } else {
      this.setState(state);
    }
  },
  getState() {
    return this.data;
  },
  suscrcribe(callback: Function): void {
    this.listener.push(callback);
  },
  setState(newState) {
    this.data = newState;
    localStorage.setItem("juego", JSON.stringify(newState));
    for (const cb of this.listener) {
      cb();
    }
  },
  whoWins(ganador) {
    const cg = this.getState();

    cg.currentGame.ganador = ganador;
    this.setState(cg);
  },

  computerPlay() {
    let sendMove = false;
    while (sendMove == false) {
      const position = Math.floor(Math.random() * 10);
      if (position <= 2) {
        sendMove = true;
        return this.optionsPlay[position];
      }
    }
  },
  setMove(myMove: play, computedMove: play) {
    if (myMove == "papel" && computedMove == "piedra") {
      const currentState = this.getState();
      currentState.currentGame.myPlay += 1;
      currentState.currentGame.playTime += 1;
      this.setState(currentState);
    }
    if (myMove == "papel" && computedMove == "tijera") {
      const currentState = this.getState();
      currentState.currentGame.computerPlay += 1;
      currentState.currentGame.playTime += 1;

      this.setState(currentState);
    }
    if (myMove == "papel" && computedMove == "papel") {
      const currentState = this.getState();
      currentState.currentGame.playTime += 1;

      this.setState(currentState);
    }
    if (myMove == "piedra" && computedMove == "papel") {
      const currentState = this.getState();
      currentState.currentGame.computerPlay += 1;
      currentState.currentGame.playTime += 1;

      this.setState(currentState);
    }
    if (myMove == "piedra" && computedMove == "tijera") {
      const currentState = this.getState();
      currentState.currentGame.myPlay += 1;
      currentState.currentGame.playTime += 1;

      this.setState(currentState);
    }
    if (myMove == "piedra" && computedMove == "piedra") {
      const currentState = this.getState();
      currentState.currentGame.playTime += 1;

      this.setState(currentState);
    }
    if (myMove == "tijera" && computedMove == "papel") {
      const currentState = this.getState();
      currentState.currentGame.myPlay += 1;
      currentState.currentGame.playTime += 1;

      this.setState(currentState);
    }
    if (myMove == "tijera" && computedMove == "piedra") {
      const currentState = this.getState();
      currentState.currentGame.computerPlay += 1;
      currentState.currentGame.playTime += 1;

      this.setState(currentState);
    }
    if (myMove == "tijera" && computedMove == "tijera") {
      const currentState = this.getState();
      currentState.currentGame.playTime += 1;

      this.setState(currentState);
    }
  },
};
