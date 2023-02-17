const burgerMenu = document.getElementById('burger');
const iconMenuOpen = document.querySelector('.navbar__hamburger__open');
const iconMenuClose = document.querySelector('.navbar__hamburger__close');
const menu = document.querySelector('.navbar__menu--mobile');
const opacity = document.querySelector('.opacity');

const openMenu = () => {
  iconMenuOpen.classList.add('inactive');
  iconMenuClose.classList.remove('inactive');
  opacity.classList.remove('inactive');
  menu.style.width = '70%';
}

const closeMenu = () => {
  iconMenuOpen.classList.remove('inactive');
  iconMenuClose.classList.add('inactive');
  opacity.classList.add('inactive');
  menu.style.width = '0px';
}

iconMenuOpen.addEventListener('click', () => {
  openMenu();
});

iconMenuClose.addEventListener('click', () => {
  closeMenu();
});