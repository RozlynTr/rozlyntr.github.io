const button = document.querySelector('.menu');
const nav = document.querySelector('.nav-list');
button.addEventListener('click', () => {nav.classList.toggle('responsive')}, false);
window.onresize = () => {if (window.innerWidth > 760) nav.classList.remove('responsive')};
