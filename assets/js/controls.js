function createSlider(contentArray, sectionId, prevButtonId, nextButtonId) {
    let currentIndex = 0;
    let intervalId;

    const hlsection = document.getElementById(sectionId);
    const heroContentContainer = hlsection.querySelector('.section-content');

    function updateHero() {
        hlsection.style.backgroundImage = contentArray[currentIndex].background;
        heroContentContainer.innerHTML = contentArray[currentIndex].content;
    }

    function nextHero() {
        currentIndex = (currentIndex + 1) % contentArray.length;
        updateHero();
    }

    function prevHero() {
        currentIndex = (currentIndex - 1 + contentArray.length) % contentArray.length;
        updateHero();
    }

    // function startAutoRotate() {
    //     intervalId = setInterval(nextHero, 30000);
    // }

    function stopAutoRotate() {
        clearInterval(intervalId);
    }

    document.getElementById(nextButtonId).addEventListener('click', nextHero);
    document.getElementById(prevButtonId).addEventListener('click', prevHero);

    // startAutoRotate();
    updateHero();
}


const highContent = [
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
    // {
    //     background: 'linear-gradient(180deg, #ffffff00 0%, #6f717106 63%, #22242453 79%), url("../content/photo/image00027.jpeg")',
    //     content: `
    //         <h2>Pomigliano W <text>VS</text> AC MILAN</h2>
    //         <h2>0 <text>-</text> 4</h2>
    //         <p>Whatever you do in your life, put your family first - Soarito's Dad</p>`
    // }
];

const nationalContent = [
    {
        background: 'linear-gradient(180deg, #ffffff00 0%, #6f717106 63%, #22242453 79%), url("../content/photo/image00028.jpeg")',
        content: `
        
           `
    },
    {
        background: 'linear-gradient(180deg, #ffffff00 0%, #6f717106 63%, #22242453 79%), url("../content/photo/image00029.jpeg")',
        content: `
        
           `
    },
    {
        background: 'linear-gradient(180deg, #ffffff00 0%, #6f717106 63%, #22242453 79%), url("../content/photo/image00030.jpeg")',
        content: `
        
           `
    }
    
];

const brandsContent = [
    {
        background: 'linear-gradient(180deg, #ffffff00 0%, #6f717106 63%, #22242453 79%), url("../content/photo/image00001.jpeg")',
        content: `
            <p><text>PUMA</text>  OFF-WHITE  MATCHDAY</p>
           `
    },
    // {
    //     background: 'url("../content/photo/Volkswagen/WhatsApp Image 2024-07-14 at 03.03.21 (3).jpeg")',
    //     content: `
    //         <p>PUMA    OFF-WHITE  MATCHDAY</p>
    //        `
    // },
    {
        background: 'url("../content/photo/OFF WHITE/WhatsApp Image 2024-07-14 at 03.03.20 (3).jpeg")',
        content: `
            <p>PUMA  <text>OFF-WHITE</text>  MATCHDAY</p>
           `
    }
]
createSlider(highContent , 'highlights', 'prev-button1', 'next-button1');
createSlider(nationalContent , 'national', 'prev-button2', 'next-button2');
createSlider(brandsContent , 'brands', 'prev-button3', 'next-button3');


function changeColorMode(direction) {
    const modes = ['mode-1', 'mode-2', 'mode-3'];
    const currentMode = document.querySelector('input[name="color-mode"]:checked').value;
    let currentIndex = modes.indexOf(currentMode);
    currentIndex = (currentIndex + direction + modes.length) % modes.length;
    document.getElementById(modes[currentIndex]).checked = true;
    document.body.className = modes[currentIndex];
}