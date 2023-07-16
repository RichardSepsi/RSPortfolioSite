


// Body

anime({
    targets: 'body',
    opacity: 1,
    duration: 600,
    easing: 'cubicBezier(0.500, 0.000, 0.650, 1.000)'
});


// Home svg

anime({
    targets: '.home-svg-wrapper',
    opacity: 1,
    duration: 900,
    easing: 'cubicBezier(0.000, 0.000, 0.500, 1.000)'
});

anime({
    targets: '.home-svg',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'cubicBezier(0.000, 0.000, 0.500, 1.000)',
    duration: 1500,
    delay: 200,
    direction: 'normal',
});

anime({
    targets: '.home-svg-2',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'cubicBezier(0.000, 0.000, 0.500, 1.000)',
    duration: 1500,
    delay: 200,
    direction: 'normal',
});


// home landing text

anime({
    targets: '.title-anime-1',
    opacity: 1,
    duration: 1000,
    delay: 0,
    easing: 'cubicBezier(0.000, 0.000, 0.400, 1.000)'
});
anime({
    targets: '.title-anime-1',
    translateX: [-30, 0],
    duration: 700,
    easing: 'cubicBezier(0.000, 0.000, 0.400, 1.000)'
});

anime({
    targets: '.title-anime-2',
    opacity: 1,
    duration: 1000,
    delay: 50,
    easing: 'cubicBezier(0.000, 0.000, 0.400, 1.000)'
});
anime({
    targets: '.title-anime-2',
    translateY: [-30, 0],
    duration: 700,
    delay: 50,
    easing: 'cubicBezier(0.000, 0.000, 0.400, 1.000)'
});

anime({
    targets: '.title-anime-3',
    opacity: 1,
    duration: 1000,
    delay: 300,
    easing: 'cubicBezier(0.000, 0.000, 0.400, 1.000)'
});
anime({
    targets: '.title-anime-3',
    translateY: [-30, 0],
    duration: 700,
    delay: 300,
    easing: 'cubicBezier(0.000, 0.000, 0.400, 1.000)'
});

anime({
    targets: '.title-anime-4',
    opacity: 1,
    duration: 1100,
    delay: 450,
    easing: 'cubicBezier(0.000, 0.000, 0.400, 1.000)'
});
anime({
    targets: '.title-anime-4',
    translateX: [30, 0],
    duration: 750,
    delay: 450,
    easing: 'cubicBezier(0.000, 0.000, 0.300, 1.000)'
});


// Sroll down tip animation

anime({
    targets: '.scroll-down-anime-1',
    opacity: 1,
    duration: 1150,
    delay: 500,
    easing: 'cubicBezier(0.000, 0.000, 0.400, 1.000)'
});
anime({
    targets: '.scroll-down-anime-1',
    translateY: [-30, 0],
    duration: 800,
    delay: 500,
    easing: 'cubicBezier(0.000, 0.000, 0.300, 1.000)'
});

anime({
    targets: '.scroll-down-anime-2',
    opacity: 1,
    duration: 1200,
    delay: 700,
    easing: 'cubicBezier(0.000, 0.000, 0.400, 1.000)'
});
anime({
    targets: '.scroll-down-anime-2',
    translateY: [-30, 0],
    duration: 900,
    delay: 700,
    easing: 'cubicBezier(0.000, 0.000, 0.300, 1.000)'
});




// function to hide scroll down tip after scrolling and show the small d home link after scrolling a certain distance
let smalldvisibility = 0;
window.onscroll = function() {
    if(smalldvisibility == 0){
        if(window.pageYOffset >= 400){
            anime({
                targets: '.small-d',
                strokeDashoffset: [anime.setDashoffset, 0],
                easing: 'cubicBezier(0.000, 0.000, 0.500, 1.000)',
                duration: 1000,
                direction: 'normal',
            });
            anime({
                targets: '.small-d',
                opacity: 1,
                easing: 'cubicBezier(0.000, 0.000, 0.500, 1.000)',
                duration: 1000,
                direction: 'normal',
            });
            document.querySelector(".small-d-svg").style.pointerEvents = "all";
            smalldvisibility = 1
        }   
    }
    let start = 150;
    let length = 250;

    let scroll = window.pageYOffset;
    let header = document.querySelector('.scroll-down-container');

    if (scroll < start) {
        header.style.opacity = "1";
        return null;
    }
    if (scroll > start + length) {
        header.style.opacity = "0";
    }

    header.style.opacity = (1 - ((scroll - start) / length)).toString();
}