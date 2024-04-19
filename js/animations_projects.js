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

