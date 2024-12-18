function createSlider(contentArray, sectionId, prevButtonId, nextButtonId, backgroundID) {
    let currentIndex = 0;
    let intervalId;
    let startX = 0;
    let endX = 0;
    const backimage = document.getElementById(backgroundID)
    const hlsection = document.getElementById(sectionId);
    const heroContentContainer = hlsection.querySelector('.section-content');

    function updateHero() {
        backimage.setAttribute('data-src', contentArray[currentIndex].background);
        heroContentContainer.innerHTML = contentArray[currentIndex].content;
    }



    function nextHero() {
        currentIndex = (currentIndex + 1) % contentArray.length;
        updateHero();
        LazyLoading();
    }

    function prevHero() {
        currentIndex = (currentIndex - 1 + contentArray.length) % contentArray.length;
        updateHero();
        LazyLoading();
    }

    // function startAutoRotate() {
    //     intervalId = setInterval(nextHero, 30000);
    // }

    function stopAutoRotate() {
        clearInterval(intervalId);
    }

    document.getElementById(nextButtonId).addEventListener('click', nextHero);
    document.getElementById(prevButtonId).addEventListener('click', prevHero);

    // Touch events for swiping
    backimage.addEventListener('touchstart', (event) => {
        startX = event.touches[0].clientX;
    });

    backimage.addEventListener('touchend', (event) => {
        endX = event.changedTouches[0].clientX;
        handleSwipe();
    });

    function handleSwipe() {
        const swipeThreshold = 50; // Minimum distance for a swipe gesture
        if (startX - endX > swipeThreshold) {
            nextHero(); // Swipe left to go to the next hero
        } else if (endX - startX > swipeThreshold) {
            prevHero(); // Swipe right to go to the previous hero
        }
    }

    // Initialize the slider
    updateHero();
}



const highContent = [
    {
        background: './content/photo/image00014.webp',
        content: `
            <h2>Pomigliano W <text>VS</text> AC MILAN</h2>
            <h2>0 <text>-</text> 4</h2>
            <p>Chanté-Mary, scores 2 goals in AC Milan's victory against Pomigliano W, ending the game with a difference of 4 - 0.</p>`
    },
    {
        background: './content/photo/image00013.webp',
        content: `
            <h2>JUSTIMAGINE <text>VS</text> AC MILAN</h2>
            <h2>0 <text>-</text> 8</h2>
            <p>Chanté-Mary, scores 2 goals in AC Milan's victory against JUSTIMAGINE, ending the game with a difference of 4 - 0.</p>`
    },
    {
        background: './content/photo/image00033.webp',
        content: `
            <h2>This is <text>JUST</text> An Example</h2>
            <h2>4 <text>-</text> 4</h2>
            <p>Chanté-Mary, scores 2 goals in An examplevictory against Pomigliano W, ending the game with a difference of 4 - 0.</p>`
    },
    // {
    //     background: 'linear-gradient(180deg, #ffffff00 0%, #6f717106 63%, #22242453 79%), url("../content/photo/image00027.webp")',
    //     content: `
    //         <h2>Pomigliano W <text>VS</text> AC MILAN</h2>
    //         <h2>0 <text>-</text> 4</h2>
    //         <p>Whatever you do in your life, put your family first - Soarito's Dad</p>`
    // }
];

const nationalContent = [
    {
        background: './content/photo/image00028.webp',
        content: `
        
           `
    },
    {
        background: './content/photo/image00029.webp',
        content: `
        
           `
    },
    {
        background: './content/photo/image00030.webp',
        content: `
        
           `
    }
    
];

const brandsContent = [
    {
        background: './content/photo/image00001.webp',
        content: `
            <p><text>PUMA</text>  OFF-WHITE  MATCHDAY</p>
           `
    },
    // {
    //     background: 'url("../content/photo/Volkswagen/WhatsApp Image 2024-07-14 at 03.03.21 (3).webp")',
    //     content: `
    //         <p>PUMA    OFF-WHITE  MATCHDAY</p>
    //        `
    // },
    {
        background: './content/photo/OFF WHITE/WhatsApp Image 2024-07-14 at 03.03.20 (3).png',
        content: `
            <p>PUMA  <text>OFF-WHITE</text>  MATCHDAY</p>
           `
    },
    {
        background: './content/photo/image00008.webp',
        content: `
            <p>PUMA  OFF-WHITE  <text>MATCHDAY</text></p>
           `
    }
]

    createSlider(highContent , 'highlights', 'prev-button1', 'next-button1', 'highlight-bg');
    createSlider(nationalContent , 'national', 'prev-button2', 'next-button2', 'national-bg');
    createSlider(brandsContent , 'brands', 'prev-button3', 'next-button3', 'brand-bg');


function changeColorMode(direction) {
    const modes = ['mode-1', 'mode-2', 'mode-3'];
    const currentMode = document.querySelector('input[name="color-mode"]:checked').value;
    let currentIndex = modes.indexOf(currentMode);
    currentIndex = (currentIndex + direction + modes.length) % modes.length;
    document.getElementById(modes[currentIndex]).checked = true;
    document.body.className = modes[currentIndex];
}