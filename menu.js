
let botaoEl = document.querySelector('#alterna-menu');
let headerEl = document.querySelector('header');

function alternaMenu() {
  headerEl.classList.toggle('menu-visivel');
}

botaoEl.addEventListener('click', alternaMenu);