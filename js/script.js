// ============================================
// PORTFOLIO PESSOAL - script.js
// Este arquivo nao precisa ser alterado.
// ============================================

// ----- Menu do celular (botao ☰) -----
const botaoMenu = document.querySelector(".botao-menu");
const menu = document.querySelector("#menu");

botaoMenu.addEventListener("click", function () {
  const aberto = menu.classList.toggle("aberto");
  botaoMenu.setAttribute("aria-expanded", aberto);
});

// fecha o menu quando a pessoa clica em um link
const linksDoMenu = document.querySelectorAll(".menu a");

linksDoMenu.forEach(function (link) {
  link.addEventListener("click", function () {
    menu.classList.remove("aberto");
    botaoMenu.setAttribute("aria-expanded", "false");
  });
});

// ----- Ano atual no rodape -----
const ano = document.querySelector("#ano");
ano.textContent = new Date().getFullYear();
