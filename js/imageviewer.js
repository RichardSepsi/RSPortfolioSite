
function imageviewer() {
    // basic image viewer variables
    let scale = 1,
    panning = false,
    pointX = 0,
    pointY = 0,
    start = { x: 0, y: 0 },
    zoom = document.getElementById("project-fullscreen-image-wrapper");

    // stop propagation to be able to click on the background to close the image viewer
    document.getElementById("project-fullscreen-image").addEventListener("click", event => {
    event.stopPropagation();
    });

    // image viewer functionality - panning and zooming
    function setTransform() {
    zoom.style.transform = "translate(" + pointX + "px, " + pointY + "px) scale(" + scale + ")";
    }
    zoom.onmousedown = function (e) {
    e.preventDefault();
    zoom.style.transitionDuration = "0ms"
    zoom.style.cursor = 'grabbing'
    start = { x: e.clientX - pointX, y: e.clientY - pointY };
    panning = true;

    }
    zoom.onmouseup = function (e) {
    panning = false;
    zoom.style.cursor = 'grab'
    zoom.style.transitionDuration = "100ms"
    }
    zoom.onmouseleave = function (e) {
    panning = false;
    zoom.style.cursor = 'grab'
    zoom.style.transitionDuration = "100ms"
    }
    zoom.onmousemove = function (e) {
    e.preventDefault();
    if (!panning) {
        return;
    }

    if(scale == 1) {
        pointX = 0;
        pointY = 0;
        setTransform();
        return;
    }
    pointX = (e.clientX - start.x);
    pointY = (e.clientY - start.y);
    setTransform();
    }
    zoom.onwheel = function (e) {
    if(panning == false){
        e.preventDefault();
        var xs = (e.clientX - pointX) / scale,
            ys = (e.clientY - pointY) / scale,
        delta = (e.wheelDelta ? e.wheelDelta : -e.deltaY);
        (delta > 0) ? (scale *= 1.2) : (scale /= 1.2);
        scale = Math.min(Math.max(1, scale), 5);
        pointX = e.clientX - xs * scale;
        pointY = e.clientY - ys * scale;

        if(scale == 1) {
            pointX = 0;
            pointY = 0;
        }
        setTransform();
    }
    }
}
