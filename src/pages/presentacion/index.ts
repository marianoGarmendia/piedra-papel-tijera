export function jugarPage(goTo) {
  const div = document.createElement("div");

  div.innerHTML = `
      <div class="init-page">
          <p class="jugar__parrafo">Presioná jugar y elegí: piedra, papel o tijera antes de que pasen los 3 segundos. Gana 2 de 3 manos para ser el/la vencedor/a</p>
          <button-el texto="Jugar" class="btn-jugar"></button-el>
          <hands-container></hands-container>
      </div>
      `;

  const jugarBtnEl = div.querySelector(".btn-jugar");
  jugarBtnEl?.addEventListener("click", () => {
    goTo("game");
  });

  return div;
}
