export class ResultadoEl extends HTMLElement {
  texto;
  color;
  constructor() {
    super();
    this.texto = this.getAttribute("texto");
    this.color = this.getAttribute("color");
    this.render();
  }
  render() {
    const shadow = this.attachShadow({ mode: "open" });
    const container = document.createElement("div");
    container.classList.add("container");
    const texto = document.createElement("p");
    const imgRed = document.createElement("img");
    const imgGreen = document.createElement("img");
    const style = document.createElement("style");
    imgRed.src = new URL("../../img/star-red.png", import.meta.url) as any;
    imgGreen.src = new URL("../../img/star-green.png", import.meta.url) as any;

    texto.textContent = this.texto || "";

    style.textContent = `
        .container{
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .container > p {
            position: absolute;
            color: white;
            font-size: 45px;
        }
    `;

    if (this.color == "red") {
      container.appendChild(imgRed);
    } else if (this.color == "green") {
      container.appendChild(imgGreen);
    }
    container.appendChild(texto);
    shadow.appendChild(style);
    shadow.appendChild(container);

    return shadow;
  }
}
customElements.define("resultado-el", ResultadoEl);
