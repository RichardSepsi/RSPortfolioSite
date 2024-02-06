



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

// set the visibility of small d to 0 by default and show it after scrolling far enough
var smalldvisibility = 0;
sessionStorage.setItem("smalldkey", smalldvisibility);
function smalldanifunct() {
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
            smalldvisibility = 1;
            sessionStorage.setItem("smalldkey", smalldvisibility);
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

let aboutscrolled = 0
function aboutanifunct() {
    if(aboutscrolled == 0){
        if(window.pageYOffset >= 100){
            anime({
                targets: '.aboutme-anime-1',
                width: '100%',
                duration: 700,
                delay: 100,
                easing: 'cubicBezier(0.000, 0.000, 0.300, 1.000)'
            });
        }
        if(window.pageYOffset >= 220){
            aboutscrolled = 1
            anime({
                targets: '.aboutme-anime-svg',
                opacity: 1,
                duration: 800,
                delay: 350,
                easing: 'cubicBezier(0.000, 0.000, 0.300, 1.000)'
            });
            anime({
                targets: '.aboutme-anime-svg',
                translateY: 0,
                duration: 800,
                delay: 350,
                easing: 'cubicBezier(0.000, 0.000, 0.300, 1.000)'
            });
            anime({
                targets: '.aboutme-anime-2',
                opacity: 1,
                duration: 800,
                delay: 550,
                easing: 'cubicBezier(0.000, 0.000, 0.300, 1.000)'
            });
            anime({
                targets: '.aboutme-anime-2',
                translateX: 0,
                duration: 800,
                delay: 550,
                easing: 'cubicBezier(0.000, 0.000, 0.300, 1.000)'
            });
        }
    }
}

let skillsandsoftwarescrolled = 0
let skillsandsoftwarescrolledtwo = 0
function skillsandsoftwareanifunct() {
    if(skillsandsoftwarescrolled == 0){
        if(window.pageYOffset >= 780){
            skillsandsoftwarescrolled = 1
            anime({
                targets: '.skills-anime-1',
                opacity: 1,
                duration: 800,
                delay: 0,
                easing: 'cubicBezier(0.000, 0.000, 0.300, 1.000)'
            });
            anime({
                targets: '.skills-anime-1',
                translateY: 0,
                duration: 800,
                delay: 0,
                easing: 'cubicBezier(0.000, 0.000, 0.300, 1.000)'
            });
            anime({
                targets: '.skills-anime-2',
                opacity: 1,
                duration: 600,
                delay: 250,
                easing: 'cubicBezier(0.000, 0.000, 0.300, 1.000)'
            });
            anime({
                targets: '.skills-anime-2',
                translateY: 0,
                duration: 600,
                delay: 250,
                easing: 'cubicBezier(0.000, 0.000, 0.300, 1.000)'
            });
            anime({
                targets: '.skills-anime-3',
                opacity: 1,
                duration: 600,
                delay: 300,
                easing: 'cubicBezier(0.000, 0.000, 0.300, 1.000)'
            });
            anime({
                targets: '.skills-anime-3',
                translateY: 0,
                duration: 600,
                delay: 300,
                easing: 'cubicBezier(0.000, 0.000, 0.300, 1.000)'
            });
            anime({
                targets: '.skills-anime-4',
                opacity: 1,
                duration: 600,
                delay: 350,
                easing: 'cubicBezier(0.000, 0.000, 0.300, 1.000)'
            });
            anime({
                targets: '.skills-anime-4',
                translateY: 0,
                duration: 600,
                delay: 350,
                easing: 'cubicBezier(0.000, 0.000, 0.300, 1.000)'
            });
            anime({
                targets: '.skills-anime-5',
                opacity: 1,
                duration: 600,
                delay: 400,
                easing: 'cubicBezier(0.000, 0.000, 0.300, 1.000)'
            });
            anime({
                targets: '.skills-anime-5',
                translateY: 0,
                duration: 600,
                delay: 400,
                easing: 'cubicBezier(0.000, 0.000, 0.300, 1.000)'
            });
            anime({
                targets: '.scn-separation',
                width: '180px',
                duration: 600,
                delay: 400,
                easing: 'cubicBezier(0.000, 0.000, 0.300, 1.000)'
            });
            anime({
                targets: '.skills-anime-6',
                opacity: 1,
                duration: 600,
                delay: 500,
                easing: 'cubicBezier(0.000, 0.000, 0.300, 1.000)'
            });
            anime({
                targets: '.skills-anime-7',
                opacity: 1,
                duration: 600,
                delay: 550,
                easing: 'cubicBezier(0.000, 0.000, 0.300, 1.000)'
            });
            anime({
                targets: '.skills-anime-8',
                opacity: 1,
                duration: 600,
                delay: 600,
                easing: 'cubicBezier(0.000, 0.000, 0.300, 1.000)'
            });
            anime({
                targets: '.skills-anime-9',
                opacity: 1,
                duration: 600,
                delay: 650,
                easing: 'cubicBezier(0.000, 0.000, 0.300, 1.000)'
            });
        }
    }
    if(skillsandsoftwarescrolledtwo == 0){
        if(window.pageYOffset >= 1100){
            skillsandsoftwarescrolledtwo = 1
            anime({
                targets: '.software-anime-1',
                height: '193.83px',
                duration: 600,
                delay: 0,
                easing: 'cubicBezier(0.000, 0.000, 0.300, 1.000)'
            });
            anime({
                targets: '.software-anime-1',
                opacity: 1,
                duration: 600,
                delay: 0,
                easing: 'cubicBezier(0.000, 0.000, 0.300, 1.000)'
            });
            anime({
                targets: '.software-anime-2',
                height: '119.91px',
                duration: 600,
                delay: 0,
                easing: 'cubicBezier(0.000, 0.000, 0.300, 1.000)'
            });
            anime({
                targets: '.software-anime-2',
                opacity: 1,
                duration: 600,
                delay: 0,
                easing: 'cubicBezier(0.000, 0.000, 0.300, 1.000)'
            });
            anime({
                targets: '.software-anime-3',
                height: '283.72px',
                duration: 600,
                delay: 0,
                easing: 'cubicBezier(0.000, 0.000, 0.300, 1.000)'
            });
            anime({
                targets: '.software-anime-3',
                opacity: 1,
                duration: 600,
                delay: 0,
                easing: 'cubicBezier(0.000, 0.000, 0.300, 1.000)'
            });
            anime({
                targets: '.software-anime-4',
                height: '119.91px',
                duration: 600,
                delay: 0,
                easing: 'cubicBezier(0.000, 0.000, 0.300, 1.000)'
            });
            anime({
                targets: '.software-anime-4',
                opacity: 1,
                duration: 600,
                delay: 0,
                easing: 'cubicBezier(0.000, 0.000, 0.300, 1.000)'
            });
            anime({
                targets: '.software-anime-5',
                height: '283.72px',
                duration: 600,
                delay: 0,
                easing: 'cubicBezier(0.000, 0.000, 0.300, 1.000)'
            });
            anime({
                targets: '.software-anime-5',
                opacity: 1,
                duration: 600,
                delay: 0,
                easing: 'cubicBezier(0.000, 0.000, 0.300, 1.000)'
            });
            anime({
                targets: '.software-anime-6',
                height: '193.83px',
                duration: 600,
                delay: 0,
                easing: 'cubicBezier(0.000, 0.000, 0.300, 1.000)'
            });
            anime({
                targets: '.software-anime-6',
                opacity: 1,
                duration: 600,
                delay: 0,
                easing: 'cubicBezier(0.000, 0.000, 0.300, 1.000)'
            });
            anime({
                targets: '.software-anime-7',
                opacity: 1,
                duration: 600,
                delay: 0,
                easing: 'cubicBezier(0.000, 0.000, 0.300, 1.000)'
            });
            anime({
                targets: '.software-anime-8',
                height: '193.83px',
                duration: 600,
                delay: 0,
                easing: 'cubicBezier(0.000, 0.000, 0.300, 1.000)'
            });
            anime({
                targets: '.software-anime-9',
                height: '119.91px',
                duration: 600,
                delay: 0,
                easing: 'cubicBezier(0.000, 0.000, 0.300, 1.000)'
            });
            anime({
                targets: '.software-icon',
                opacity: 1,
                duration: 600,
                delay: 200,
                easing: 'cubicBezier(0.000, 0.000, 0.300, 1.000)'
            });
        }
    }
}



window.onscroll = function() {
    smalldanifunct();
    aboutanifunct();
    skillsandsoftwareanifunct();
}