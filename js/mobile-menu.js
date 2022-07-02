(() => {
  const refs = {
    openMenuBtn: document.querySelector('.header__menu-open-button'),
    closeMenuBtn: document.querySelector('.header__menu-close-button'),
    menu: document.querySelector('.header__menu'),
    body: document.querySelector('body'),
  };

  refs.openMenuBtn.addEventListener("click", toggleMenu);
  refs.closeMenuBtn.addEventListener("click", toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle("is-hidden");
    refs.body.classList.toggle("no-scroll");
  }
})();