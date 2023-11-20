document.addEventListener('DOMContentLoaded', function () {
    const menuBtn = document.querySelector('.menu-btn');
    const menu = document.querySelector('.menu'); // Cambiado de 'nav' a '.menu'

    menuBtn.addEventListener('click', function () {
        menu.classList.toggle('active');
    });
});
