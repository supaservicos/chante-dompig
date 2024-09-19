const menu = document.getElementById('menu');
const hero = document.getElementById('hero');
const scrollContainer = document.getElementById('main');

scrollContainer.addEventListener('scroll', function() {
    
    if (scrollContainer.scrollTop > hero.offsetHeight - menu.offsetHeight) {
        menu.classList.add('scrolled');
    } else {
        menu.classList.remove('scrolled');
    }
});


// 
function togglePlayPause(video) {
    const videos = document.querySelectorAll('video');
    videos.forEach(v => {
        if (v !== video) {
            v.pause();
        }
    });

    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}