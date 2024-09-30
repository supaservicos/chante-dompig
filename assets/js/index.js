const menu = document.getElementById('menu');
const hero = document.getElementById('home');
const scrollContainer = document.getElementById('main');

scrollContainer.addEventListener('scroll', function() {
    if (scrollContainer.scrollTop > hero.offsetHeight - menu.offsetHeight) {
        menu.classList.add('scrolled');
    } else {
        menu.classList.remove('scrolled');
    }
});

