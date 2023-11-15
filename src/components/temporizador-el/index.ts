import { state } from "../../state";

export function temporizadorEl() {
  class TemporizadorEl extends HTMLElement {
    constructor() {
      super();
      // this.render();
      //   this.texto = this.getAttribute("texto") || "";
    }
    connectedCallback() {
      this.render();
      //   console.log("Fui añadido al dom");
      const containerGral = document.querySelector(".container-gral") as any;
      containerGral.style.display = "block";

      const numberTres = document.querySelector(".number3");
      numberTres?.classList.add("animation");
      //   console.log("temporizador");
      //   console.log(numberTres);

      setTimeout(() => {
        const numberDos = document.querySelector(".number2");
        numberDos?.classList.add("animation");
      }, 1000);
      setTimeout(() => {
        const numberUno = document.querySelector(".number1");
        numberUno?.classList.add("animation");
      }, 2000);
      setTimeout(() => {
        //   const containerGral = document.querySelector(
        //     ".container-gral"
        //   ) as any;
        containerGral.style.display = "none";
      }, 3000);
    }

    render() {
      //   const shadow = this.attachShadow({ mode: "open" });
      const div = document.createElement("div");
      div.classList.add("container-gral");
      div.innerHTML = `
            <div class="loading">
                <div class="spiner"></div>
                <span class="number3">3</span>
                <span class="number2">2</span>
                <span class="number1">1</span>
            </div>
         `;
      // this.style.position = "absolute";
      this.classList.add("temporizador");
      this.appendChild(div);

      // div.classList.add("temporizador");
      // return div;
    }
    // const temporizador = new TemporizadorEl();
  }

  customElements.define("temporizador-el", TemporizadorEl);
  //   return new TemporizadorEl();
}
