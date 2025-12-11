
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
            let xs = (e.clientX - pointX) / scale,
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
            console.log(pointX)
        }
    }



    // Touch events
    let initialDistance = 0;
    let initialScale = 1;
    let initialCenterX = 0;
    let initialCenterY = 0;

    function getDistance(touches) {
        const dx = touches[0].clientX - touches[1].clientX;
        const dy = touches[0].clientY - touches[1].clientY;
        return Math.sqrt(dx * dx + dy * dy);
    }

    zoom.addEventListener("touchstart", function (e) {
        e.preventDefault();
        zoom.style.transitionDuration = "0ms";
        zoom.style.cursor = 'grabbing';
        if (e.touches.length === 1) {
            start = { x: e.touches[0].clientX - pointX, y: e.touches[0].clientY - pointY };
            panning = true;
        } else if (e.touches.length === 2) {
            initialDistance = getDistance(e.touches);
            initialScale = scale;
            initialCenterX = (((e.touches[0].clientX + e.touches[1].clientX) / 2) - pointX) / scale;
            initialCenterY = (((e.touches[0].clientY + e.touches[1].clientY) / 2) - pointY) / scale;
        }
    });

    zoom.addEventListener("touchmove", function (e) {
        e.preventDefault();
        if (e.touches.length === 1 && panning) {
            if (scale == 1) {
                pointX = 0;
                pointY = 0;
                setTransform();
                return;
            }
            pointX = (e.touches[0].clientX - start.x);
            pointY = (e.touches[0].clientY - start.y);
            setTransform();
        } else if (e.touches.length === 2) {
            const distance = getDistance(e.touches);
            const scaleFactor = distance / initialDistance;
            scale = initialScale * scaleFactor;
            scale = Math.min(Math.max(1, scale), 5);
            setTransform();

            // Calculate new translation based on the current center of the two fingers
            let newCenterX = (e.touches[0].clientX + e.touches[1].clientX) / 2;
            let newCenterY = (e.touches[0].clientY + e.touches[1].clientY) / 2;
            if (scale == 1) {
                zoom.style.transitionDuration = "100ms";
                pointX = 0;
                pointY = 0;
            }
            else {
                pointX = newCenterX - initialCenterX * scale;
                pointY = newCenterY - initialCenterY * scale;
            }
            setTransform();
        }
    });

    zoom.addEventListener("touchend", function (e) {
        panning = false;
        zoom.style.cursor = 'grab';
        zoom.style.transitionDuration = "100ms";
    });
}