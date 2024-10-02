const menu = document.getElementById('menu');
const hero = document.getElementById('home');
const scrollContainer = document.getElementById('main');
const aboutVar = document.getElementById('about');

scrollContainer.addEventListener('scroll', function() {
    if ((scrollContainer.scrollTop > hero.offsetHeight - menu.offsetHeight)||(scrollContainer.scrollTop > about.offsetHeight - menu.offsetHeight)) {
        menu.classList.add('scrolled');
    } else {
        menu.classList.remove('scrolled');
    }
});

function about(){
    hero.classList.toggle("off");
    aboutVar.classList.toggle("off");
}

// Ajuste na viewport
function setVh() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}

// Execute na carga da página
setVh();

// Atualize ao redimensionar a janela
window.addEventListener('resize', setVh);
