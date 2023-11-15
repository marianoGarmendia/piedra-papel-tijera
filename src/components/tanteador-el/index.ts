import { state } from "../../state";

export class TanteadorEl extends HTMLElement {
  computerPoints;
  myPoints;

  constructor() {
    super();
    this.computerPoints = this.getAttribute("computerPoints");
    this.myPoints = this.getAttribute("myPoints");
  }
  connectedCallback() {
    this.render();
  }
  render() {
    const shadow = this.attachShadow({ mode: "open" });
    const containerPoints = document.createElement("div");
    const containerTotalPoints = document.createElement("div");
    const computerTotalPoints = document.createElement("div");
    const myTotalPoints = document.createElement("div");
    containerTotalPoints.appendChild(computerTotalPoints);
    containerTotalPoints.appendChild(myTotalPoints);
    containerTotalPoints.classList.add("containerTotalPoints");

    const computerPoints = document.createElement("div");
    const myPoints = document.createElement("div");
    const style = document.createElement("style");
    containerPoints.classList.add("container");
    style.textContent = `

    .container .containerTotalPoints{
        left: 45px;
        font-size: 18px;
            color: white;
            position: absolute;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            // padding: 10px;
            // padding-top: 15px;
            width: 25px;
            height: 80px;
            border-radius: 30px;
            background: #212121;
            box-shadow: 15px 15px 30px rgb(25, 25, 25),
                        // -15px -15px 30px rgb(60, 60, 60);
           
           
    }
    .container {
        position: relative;
        width: 25px;
        height: 120px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        padding: 15px;
        border-radius: 30px;
        box-shadow: 15px 15px 30px #bebebe,
        -15px -15px 30px #ffffff;
        background-color: white;
      }

      .container > div{
        text-align: center;
        font-size: 30px;
      }
    `;

    this.classList.add("tanteador");

    computerTotalPoints.textContent = `0`;
    myTotalPoints.textContent = `0`;

    computerPoints.textContent = this.computerPoints || 0;
    myPoints.textContent = this.myPoints || 0;
    // containerPoints.appendChild(containerTotalPoints);
    containerPoints.appendChild(computerPoints);
    containerPoints.appendChild(myPoints);

    shadow.appendChild(containerPoints);
    shadow.appendChild(style);
  }
}
customElements.define("tanteador-el", TanteadorEl);
