export function initPage(goTo) {
  const div = document.createElement("div");

  div.innerHTML = `
    <div class="init-page">
        <h1 class="init-page__title">Piedra Papel o Tijera</h1>

        <button-el texto="Empezar" class="btn-empezar"></button-el>
        <hands-container></hands-container>
    </div>
    `;

  const empezarBtnEl = div.querySelector(".btn-empezar");
  empezarBtnEl?.addEventListener("click", () => {
    goTo("/jugar");
  });
  return div;
}
