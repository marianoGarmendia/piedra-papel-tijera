export class ButtonEl extends HTMLElement {
  texto: string;
  constructor() {
    super();
    this.texto = this.getAttribute("texto") || "";
  }
  connectedCallback() {
    this.render();
  }
  render() {
    const shadow = this.attachShadow({ mode: "open" });
    const button = document.createElement("button");
    const style = document.createElement("style");
    button.textContent = `${this.texto}`;
    style.textContent = `
    button{
        border-radius: 10px;
        border: 10px solid #001997;
        font-family: "Odibee Sans";
        background-color: #006CFC;
        color: white;
        font-size: 27px;
        letter-spacing: 2.25px;
        width: 290px;
        height: 57px;
    }
    `;
    shadow.appendChild(button);
    shadow.appendChild(style);
  }
}
customElements.define("button-el", ButtonEl);
