
anime({
    targets: 'body',
    opacity: 1,
    duration: 500,
    easing: 'cubicBezier(0.420, 0.000, 0.580, 1.000)'
});

anime({
    targets: '.home-svg-wrapper',
    opacity: 1,
    duration: 900,
    easing: 'cubicBezier(0.420, 0.000, 0.580, 1.000)'
});

anime({
    targets: '.home-svg',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'cubicBezier(0.420, 0.000, 0.580, 1.000)',
    duration: 1500,
    delay: 200,
    direction: 'normal',
});

anime({
    targets: '.home-svg-2',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'cubicBezier(0.420, 0.000, 0.580, 1.000)',
    duration: 1500,
    delay: 200,
    direction: 'normal',
});

