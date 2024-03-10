
// get small d visiility from session storage
var smalldvisibility = sessionStorage.getItem("smalldkey");

// if the small d was visible before, keep it shown, if not then animate it in
if (smalldvisibility == 1){
    document.querySelector(".small-d").style.opacity = "1";
    document.querySelector(".small-d").style.strokeDashoffset = "0px";
    document.querySelector(".small-d-svg").style.pointerEvents = "all";
    smalldvisibility = 1
} else {
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





anime({
    targets: '.contact-title',
    opacity: 1,
    duration: 1000,
    delay: 0,
    easing: 'cubicBezier(0.000, 0.000, 0.400, 1.000)'
});
anime({
    targets: '.contact-title',
    translateY: [-30, 0],
    duration: 700,
    easing: 'cubicBezier(0.000, 0.000, 0.400, 1.000)'
});


anime({
    targets: '#cdt1',
    opacity: 1,
    duration: 1000,
    delay: 50,
    easing: 'cubicBezier(0.000, 0.000, 0.400, 1.000)'
});
anime({
    targets: '#cdt1',
    translateX: [-30, 0],
    duration: 700,
    delay: 50,
    easing: 'cubicBezier(0.000, 0.000, 0.400, 1.000)'
});
anime({
    targets: '#cdt2',
    opacity: 1,
    duration: 1000,
    delay: 150,
    easing: 'cubicBezier(0.000, 0.000, 0.400, 1.000)'
});
anime({
    targets: '#cdt2',
    translateX: [-30, 0],
    duration: 700,
    delay: 150,
    easing: 'cubicBezier(0.000, 0.000, 0.400, 1.000)'
});


anime({
    targets: '#plb1',
    opacity: 1,
    duration: 1000,
    delay: 150,
    easing: 'cubicBezier(0.000, 0.000, 0.400, 1.000)'
});
anime({
    targets: '#plb1',
    translateY: [-30, 0],
    duration: 700,
    delay: 150,
    easing: 'cubicBezier(0.000, 0.000, 0.400, 1.000)'
});
anime({
    targets: '#plb2',
    opacity: 1,
    duration: 1000,
    delay: 200,
    easing: 'cubicBezier(0.000, 0.000, 0.400, 1.000)'
});
anime({
    targets: '#plb2',
    translateY: [-30, 0],
    duration: 700,
    delay: 200,
    easing: 'cubicBezier(0.000, 0.000, 0.400, 1.000)'
});
anime({
    targets: '#plb3',
    opacity: 1,
    duration: 1000,
    delay: 250,
    easing: 'cubicBezier(0.000, 0.000, 0.400, 1.000)'
});
anime({
    targets: '#plb3',
    translateY: [-30, 0],
    duration: 700,
    delay: 250,
    easing: 'cubicBezier(0.000, 0.000, 0.400, 1.000)'
});
anime({
    targets: '#plb4',
    opacity: 1,
    duration: 1000,
    delay: 300,
    easing: 'cubicBezier(0.000, 0.000, 0.400, 1.000)'
});
anime({
    targets: '#plb4',
    translateY: [-30, 0],
    duration: 700,
    delay: 300,
    easing: 'cubicBezier(0.000, 0.000, 0.400, 1.000)'
});


anime({
    targets: '#wst1',
    opacity: 1,
    duration: 1000,
    delay: 250,
    easing: 'cubicBezier(0.000, 0.000, 0.400, 1.000)'
});
anime({
    targets: '#wst1',
    translateY: [-30, 0],
    duration: 700,
    delay: 250,
    easing: 'cubicBezier(0.000, 0.000, 0.400, 1.000)'
});
anime({
    targets: '#wst2',
    opacity: 1,
    duration: 1000,
    delay: 300,
    easing: 'cubicBezier(0.000, 0.000, 0.400, 1.000)'
});
anime({
    targets: '#wst2',
    translateX: [-30, 0],
    duration: 700,
    delay: 300,
    easing: 'cubicBezier(0.000, 0.000, 0.400, 1.000)'
});
anime({
    targets: '#wst3',
    opacity: 1,
    duration: 1000,
    delay: 350,
    easing: 'cubicBezier(0.000, 0.000, 0.400, 1.000)'
});
anime({
    targets: '#wst3',
    translateX: [-30, 0],
    duration: 700,
    delay: 350,
    easing: 'cubicBezier(0.000, 0.000, 0.400, 1.000)'
});


anime({
    targets: '.contact-github',
    opacity: 1,
    duration: 1000,
    delay: 350,
    easing: 'cubicBezier(0.000, 0.000, 0.400, 1.000)'
});
anime({
    targets: '.contact-github',
    width: '524px',
    duration: 700,
    delay: 300,
    easing: 'cubicBezier(0.000, 0.000, 0.300, 1.000)'
});

anime({
    targets: '#cge1',
    opacity: 1,
    duration: 1000,
    delay: 400,
    easing: 'cubicBezier(0.000, 0.000, 0.400, 1.000)'
});
anime({
    targets: '#cge2',
    opacity: 1,
    duration: 1000,
    delay: 800,
    easing: 'cubicBezier(0.000, 0.000, 0.400, 1.000)'
});