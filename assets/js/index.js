const hero = document.getElementById('home');
const aboutVar = document.getElementById('about');
//const scrollContainer = document.getElementById('body');


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


const LazyLoading = () => { 
    const listaimagens = document.querySelectorAll("[data-src]");
    listaimagens.forEach((imagem) => {
        if (imagem.getBoundingClientRect().top < window.innerHeight + 250) {
            imagem.src = imagem.getAttribute("data-src");
            imagem.removeAttribute("data-src");
        }
    });
};

window.onload = () =>{
    LazyLoading()
}

document.body.addEventListener('scroll', () => LazyLoading());

