// Body

anime({
    targets: '#content-container',
    opacity: 1,
    duration: 300,
    easing: 'cubicBezier(0.500, 0.000, 0.650, 1.000)'
});

// page fadeout function
function fadeout(nhref) {
    anime({
        targets: '#content-container',
        opacity: 0,
        duration: 300,
        easing: 'cubicBezier(0.500, 0.000, 0.650, 1.000)'
    });
    anime({
        targets: '.os-theme-dark',
        opacity: 0,
        duration: 300,
        easing: 'cubicBezier(0.500, 0.000, 0.650, 1.000)'
    });

    // if we are going to homepage, then set the visibility of the small d smoothly back to 0
    if (nhref == 'home.html') {
        anime({
            targets: '.small-d',
            strokeDashoffset: [anime.setDashoffset, 0],
            easing: 'cubicBezier(0.500, 0.000, 1.000, 1.000)',
            duration: 2000,
            direction: 'normal',
        });
        anime({
            targets: '.small-d',
            opacity: 0,
            easing: 'cubicBezier(0.500, 0.000, 1.000, 1.000)',
            duration: 300,
            direction: 'normal',
        });
        document.querySelector(".small-d-svg").style.pointerEvents = "none";
        var smalldvisibility = 0;
        sessionStorage.setItem("smalldkey", smalldvisibility);
    }
    setTimeout(()=> {window.location.href = nhref;} ,300);
}