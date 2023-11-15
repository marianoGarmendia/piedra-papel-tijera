export class ScoreEl extends HTMLElement {
  title;

  puntajePlayerUno;
  puntajePlayerDos;

  constructor() {
    super();
    this.title = this.getAttribute("title");
    this.puntajePlayerUno = this.getAttribute("scoreUno");
    this.puntajePlayerDos = this.getAttribute("scoreDos");
  }
  connectedCallback() {
    this.render();
  }
  render() {
    const shadow = this.attachShadow({ mode: "open" });
    const container = document.createElement("div");

    const style = document.createElement("style");

    style.textContent = `
        .container{
            border-radius: 10px;
            border: 10px solid #000;
            text-align: center;
            padding: 10px;
            background-color: #fff;
        }

        .title{
            font-size: 55px;
            margin: 10px;
        }

        p{
            font-size: 45px;
            margin: 0
        }
    `;

    container.innerHTML = `
    <div class="container">
        <h2 class="title">${this.title}</h2>
        <p class="player-uno">Vos: ${this.puntajePlayerUno}</p>
        <p class="player-dos">Computer: ${this.puntajePlayerDos}</p>
    </div>
    
    `;

    shadow.appendChild(container);
    shadow.appendChild(style);
  }
}
// new ScoreEl();
customElements.define("score-el", ScoreEl);
