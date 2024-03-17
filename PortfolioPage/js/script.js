
// custom scrollbar init
var { 
    OverlayScrollbars, 
    ScrollbarsHidingPlugin, 
    SizeObserverPlugin, 
    ClickScrollPlugin  
} = OverlayScrollbarsGlobal;
const osInstance = OverlayScrollbars(document.querySelector('#body'), {});



//function for checking cookies
function getCookie(name) {
    var dc = document.cookie;
    var prefix = name + "=";
    var begin = dc.indexOf("; " + prefix);
    if (begin == -1) {
        begin = dc.indexOf(prefix);
        if (begin != 0) return null;
    }
    else
    {
        begin += 2;
        var end = document.cookie.indexOf(";", begin);
        if (end == -1) {
        end = dc.length;
        }
    }
    // because unescape has been deprecated, replaced with decodeURI
    //return unescape(dc.substring(begin + prefix.length, end));
    return decodeURI(dc.substring(begin + prefix.length, end));
} 



// scroll to top function
function scrolltothetop(){
    window.scrollTo(0, 0);
}



//copy mail function
function mailcopy() {
    let mail = "appsepsi@gmail.com";
    navigator.clipboard.writeText(mail);
}



// enable and disable scrolling
// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
let scrollkeys = {33: 1,34: 1,35: 1,36: 1,37: 1, 38: 1, 39: 1, 40: 1};
let scrollkeysalt = {32: 1,33: 1,34: 1,35: 1,36: 1,37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e) {
    e.preventDefault();
}

function preventDefaultForScrollKeys(e) {
    if (document.getElementById("searchquery") === document.activeElement) {
        if (scrollkeys[e.keyCode]) {
            preventDefault(e);
            return false;
        }
    }
    else {
        if (scrollkeysalt[e.keyCode]) {
            preventDefault(e);
            return false;
        }
    }
    
}

// modern Chrome requires { passive: false } when adding event
let supportsPassive = false;
try {
    window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
        get: function () { supportsPassive = true; } 
    }));
} catch(e) {}

let wheelOpt = supportsPassive ? { passive: false } : false;
let wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

// Disables scrolling
function disableScroll() {
    window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
    window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
    window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
    window.addEventListener('keydown', preventDefaultForScrollKeys, false);
    document.querySelector(".os-scrollbar-vertical").setAttribute("style", "display: none;")
}

// Enables scrolling
function enableScroll() {
    window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.removeEventListener(wheelEvent, preventDefault, wheelOpt); 
    window.removeEventListener('touchmove', preventDefault, wheelOpt);
    window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
    document.querySelector(".os-scrollbar-vertical").removeAttribute("style")
}



// mobile nav toggle

function openmobilenavmenu() {
    document.querySelector(".nav-mobile-container").classList.toggle("active")
}




// search json parse

var searchinfo;
fetch ("../search.json")
    .then(response => response.json())
    .then(srchinf => searchinfo = srchinf)
    .then(data => {
        window.onload = function() {
            let currentUrl = window.location.href;
            if (currentUrl.indexOf("?id=") !== -1) {
                let div = document.getElementById(currentUrl.split("?id=")[1]);
                let event = new Event("click");
                div.dispatchEvent(event);
            }
        };

    })