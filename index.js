document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.querySelector('.menu-btn');
    const menu = document.querySelector('.menu');

    menuBtn.addEventListener('click', function() {
        menu.classList.toggle('menu-hidden');
        closeIcon.classList.remove('close-icon');
    });
});