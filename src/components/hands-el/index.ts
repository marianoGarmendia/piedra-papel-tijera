export function handsEl() {
  class HandsEl extends HTMLElement {
    size;
    constructor() {
      super();
      this.size = this.getAttribute("size");
    }
    connectedCallback() {
      this.render();
    }
    render() {
      const containerImg = document.createElement("div");
      const style = document.createElement("style");
      const imgPapelEl = document.createElement("img");
      const imgPiedraEl = document.createElement("img");
      const imgTijeraEl = document.createElement("img");
      imgPapelEl.id = "papel";
      imgPiedraEl.id = "piedra";
      imgTijeraEl.id = "tijera";
      containerImg.classList.add("container");

      style.textContent = `
            .container{
                display: flex;
                column-gap: ${this.size == "grande" ? "10px" : "45px"};
                justify-content: center;
                width: 100%;
                // overflow: hidden;
             }

             .computer{
                transform: translate(0,0px) rotate(180deg); 
             }

             
    
            //  img{
            //     transform: translate(0, 30px);
            //  }
        `;

      if (this.size == "grande") {
        const imgPapelGrande = new URL(
          "../../img/papel-grande.png",
          import.meta.url
        ) as any;
        imgPapelEl.src = imgPapelGrande;

        const imgPiedraGrande = new URL(
          "../../img/piedra-grande.png",
          import.meta.url
        ) as any;
        imgPiedraEl.src = imgPiedraGrande;

        const imgTijeraGrande = new URL(
          "../../img/tijera-grande.png",
          import.meta.url
        ) as any;
        imgTijeraEl.src = imgTijeraGrande;
      } else {
        const imgPapel = new URL("../../img/papel.png", import.meta.url) as any;
        imgPapelEl.src = imgPapel;

        const imgPiedra = new URL(
          "../../img/piedra.png",
          import.meta.url
        ) as any;
        imgPiedraEl.src = imgPiedra;

        const imgTijera = new URL(
          "../../img/tijera.png",
          import.meta.url
        ) as any;
        imgTijeraEl.src = imgTijera;
      }
      containerImg.appendChild(imgPapelEl);
      containerImg.appendChild(imgPiedraEl);
      containerImg.appendChild(imgTijeraEl);

      this.appendChild(containerImg);
      this.appendChild(style);
    }
  }
  customElements.define("hands-container", HandsEl);
  return new HandsEl();
}
