const menu_btn = document.querySelector('.hamburger');
const mbile_menu = document.querySelector('.mobile-nav');

menu_btn.addEventListener('click', function(){
    menu_btn.classList.toggle('is-active');
    mbile_menu.classList.toggle('is-active');
});


