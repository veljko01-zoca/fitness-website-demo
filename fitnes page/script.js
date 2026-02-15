
let menu = document.querySelector('#menu-icon');
let nvbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    nvbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    nvbar.classList.remove('active');
}