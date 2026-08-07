let defaultid = 1
let currentimgnum

function changeimgdef(clickid) {
    defaultid = clickid.replace(/sw-img/gi, "")
}

function selectimage(imgid) {
    let imagenum = imgid.replace(/sw-img/gi, "")
    imagenum = imagenum - 1
    let swvh = 100
    let swpx = 80
    let swaddpx = 20
    currentimgnum = imagenum

    document.getElementById("td-project-slide1").style.transform = "translateY("+(document.getElementById("td-project-slide1").clientHeight / document.getElementById("td-project-slide1").childElementCount * imagenum * (-1))+"px)"
    document.querySelectorAll(".project-slide-switcher-button").forEach(swbtn => {
        swbtn.classList.remove("selected")
    });
    document.getElementById(imgid).classList.add("selected")
    let setattr = document.getElementById("sw-current-image").getAttribute("src").replace("r1", "r"+imgid.replace(/sw-img/gi, ""))
    document.getElementById("fullscreen-button").setAttribute("onclick", "fullscreen('"+setattr+"')")
    document.getElementById("img-download-button").setAttribute("href", setattr)
    
}

// auto slide rezise
let resizeTimeout1;
window.addEventListener("resize", () => {
    clearTimeout(resizeTimeout1);
  
    resizeTimeout1 = setTimeout(() => {
        document.getElementById("td-project-slide1").style.transform = "translateY("+(document.getElementById("td-project-slide1").clientHeight / document.getElementById("td-project-slide1").childElementCount * currentimgnum * (-1))+"px)"
    }, 10);
});

var scrollingDirection = 0;
var lastScroll = 9999;
var scrollIdleTime = 230;

document.getElementById("td-project-slide1").onwheel = function(event){
    var timeNow = performance.now();
    if (event.deltaY > 0 && ( scrollingDirection != 1 || timeNow > lastScroll + scrollIdleTime)){
        defaultid = parseInt(defaultid) + 1
        if(defaultid > document.getElementById("td-project-slide1").childElementCount) {
            defaultid = document.getElementById("td-project-slide1").childElementCount
        }
        selectimage("sw-img"+defaultid)
        scrollingDirection = 1;
    }
    else if (event.deltaY < 0 && ( scrollingDirection != 2 || timeNow > lastScroll + scrollIdleTime)){
        defaultid = parseInt(defaultid) - 1
        if(defaultid < 1) {
            defaultid = 1
        }
        selectimage("sw-img"+defaultid)
        scrollingDirection = 2;
    }
    lastScroll = timeNow;
};