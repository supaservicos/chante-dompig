const hlContent = [
    {
        background: 'linear-gradient(180deg, #ffffff00 0%, #6f717106 63%, #22242453 79%), url("../content/photo/image00014.jpeg")',
        content: `
            <h2>Pomigliano W <text>VS</text> AC MILAN</h2>
            <h2>0 <text>-</text> 4</h2>
            <p>Chanté-Mary, scores 2 goals in AC Milan's victory against Pomigliano W, ending the game with a difference of 4 - 0.</p>`
    },
    {
        background: 'linear-gradient(180deg, #ffffff00 0%, #6f717106 63%, #22242453 79%), url("../content/photo/image00013.jpeg")',
        content: `
            <h2>JUSTIMAGINE <text>VS</text> AC MILAN</h2>
            <h2>0 <text>-</text> 8</h2>
            <p>Chanté-Mary, scores 2 goals in AC Milan's victory against JUSTIMAGINE, ending the game with a difference of 4 - 0.</p>`
    },
    {
        background: 'linear-gradient(180deg, #ffffff00 0%, #6f717106 63%, #22242453 79%), url("../content/photo/image00033.jpeg")',
        content: `
            <h2>This is <text>JUST</text> An Example</h2>
            <h2>4 <text>-</text> 4</h2>
            <p>Chanté-Mary, scores 2 goals in An examplevictory against Pomigliano W, ending the game with a difference of 4 - 0.</p>`
    },
    {
        background: 'linear-gradient(180deg, #ffffff00 0%, #6f717106 63%, #22242453 79%), url("../content/photo/image00027.jpeg")',
        content: `
            <h2>Pomigliano W <text>VS</text> AC MILAN</h2>
            <h2>0 <text>-</text> 4</h2>
            <p>Whatever you do in your life, put your family first - Soarito's Dad</p>`
    }
];

let currentIndex = 0;
let intervalId;

const hlsection = document.getElementById('highlights');
const heroContentContainer = document.getElementById('section-content');

function updateHero() {
    
    hlsection.style.backgroundImage = hlContent[currentIndex].background;
    heroContentContainer.innerHTML = hlContent[currentIndex].content;
}

function nextHero() {
    currentIndex = (currentIndex + 1) % hlContent.length;
    updateHero();
}

function prevHero() {
    currentIndex = (currentIndex - 1 + hlContent.length) % hlContent.length;
    updateHero();
}

function startAutoRotate() {
    intervalId = setInterval(nextHero, 30000);
}

function stopAutoRotate() {
    clearInterval(intervalId);
}


document.getElementById('next-button').addEventListener('click', nextHero);
document.getElementById('prev-button').addEventListener('click', prevHero);


startAutoRotate();
updateHero();
