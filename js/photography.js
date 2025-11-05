function photoaddcolumns() {
    document.getElementById("photography-grid-container").innerHTML = `
    <div class="grid-column" id="projects-column-1">
        
        
    </div>
    <div class="grid-column" id="projects-column-2">
        
        
    </div>
    <div class="grid-column" id="projects-column-3">
        
        
    </div>
    `
}


// page fadeout photography function
let album = ""
/*let photolanding = ""*/
let navbackup = ""
let navbackupmargin = ""
let anicounter2 = 0;
function fadeoutphotography (nhref) {
    scrolltothetop()
    let currentalbumname = document.querySelector("#"+nhref+" .project-thumb-info-title").innerHTML
    let currentalbumdate = document.querySelector("#"+nhref+" #photo-thumb-album-date").innerHTML
    anime({
        targets: '#photography-grid-container',
        opacity: [1, 0],
        duration: 300,
        easing: 'cubicBezier(0.500, 0.000, 0.650, 1.000)',
        direction: 'normal'
    });
    anime({
        targets: '#footer-container',
        opacity: [1, 0],
        duration: 300,
        easing: 'cubicBezier(0.500, 0.000, 0.650, 1.000)',
        direction: 'normal'
    });
    anime({
        targets: '#photography-folder-nav-container',
        opacity: [1, 0],
        duration: 300,
        easing: 'cubicBezier(0.500, 0.000, 0.650, 1.000)',
        direction: 'normal'
    });

    setTimeout(() => {
    /*photolanding = document.getElementById("photography-grid-container").innerHTML*/
    photoaddcolumns()
    /*window[nhref]()*/
    console.log(nhref)
    photoalbumsort(nhref)
    navbackup = document.getElementById("photography-folder-nav-container").innerHTML
    document.getElementById("photography-navlinks-fake-wrapper").style.display = "none"
    let backbuttonlabel = ""
    if(currentlang == "EN") {
        backbuttonlabel = "Back"
    }
    if(currentlang == "SK") {
        backbuttonlabel = "Späť"
    }
    if(currentlang == "CZ") {
        backbuttonlabel = "Zpět"
    }
    if(currentlang == "DE") {
        backbuttonlabel = "Zurück"
    }
    if(currentlang == "JP") {
        backbuttonlabel = "戻る"
    }
    document.getElementById("photography-folder-nav-container").innerHTML += `
    <div class="photography-folder-nav-container">
        <div class="project-link-button" style="height: 48px;" id="photography-album-back" onClick="photography_back()">
            <div class="project-link-button-ext" style="height: 36px; width: 36px;">                             
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path class="project-link-button-svg" d="M19 12H5" stroke="#969696" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path class="project-link-button-svg" d="M12 19L5 12L12 5" stroke="#969696" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>                            
            </div>
            <span class="project-link-button-label" style="padding: 0 16px 0px 8px;" id="langdata-photography-back">`+backbuttonlabel+`</span>
        </div>
        <span style="font-size: 16px; font-weight: 600; color: #e6e6e6; position: absolute; width: 100%; text-align: center; pointer-events: none; margin-left: 6px;" id="photography-album-name">`+currentalbumname+`</span>
        <span style="font-size: 16px; font-weight: 600; color: #e6e6e6; margin-right: 10px;" id="photography-album-date">`+currentalbumdate+`</span>
    </div>
    `

    let navbackupmargin = document.getElementById("photography-folder-nav-container").style.marginLeft
    document.getElementById("photography-folder-nav-container").style.marginLeft = '51px'

        anime({
            targets: '#photography-grid-container',
            opacity: 1,
            duration: 300,
            easing: 'cubicBezier(0.500, 0.000, 0.650, 1.000)',
            direction: 'normal'
        });
        anime({
            targets: '#photography-folder-nav-container',
            opacity: 1,
            duration: 300,
            easing: 'cubicBezier(0.500, 0.000, 0.650, 1.000)',
            direction: 'normal'
        });
        anime({
            targets: '#footer-container',
            opacity: 1,
            duration: 300,
            easing: 'cubicBezier(0.500, 0.000, 0.650, 1.000)',
            direction: 'normal'
        });


        anicounter2 = 0

        document.querySelectorAll(".project-thumb-container").forEach((prthco) => {
            anime({
                targets: prthco,
                opacity: 1,
                duration: 1000,
                delay: anicounter2,
                easing: 'cubicBezier(0.000, 0.000, 0.400, 1.000)'
            });
            anicounter2 = anicounter2 + 60
        });
    }, 300);
}



function photography_back() {
    scrolltothetop()
    anime({
        targets: '#photography-grid-container',
        opacity: [1, 0],
        duration: 300,
        easing: 'cubicBezier(0.500, 0.000, 0.650, 1.000)',
        direction: 'normal'
    });
    anime({
        targets: '#footer-container',
        opacity: [1, 0],
        duration: 300,
        easing: 'cubicBezier(0.500, 0.000, 0.650, 1.000)',
        direction: 'normal'
    });
    anime({
        targets: '#photography-folder-nav-container',
        opacity: [1, 0],
        duration: 300,
        easing: 'cubicBezier(0.500, 0.000, 0.650, 1.000)',
        direction: 'normal'
    });
    setTimeout(() => {
        /*document.getElementById("photography-grid-container").innerHTML = photolanding*/
        document.getElementById("photography-folder-nav-container").innerHTML = navbackup
        document.getElementById("photography-folder-nav-container").style.marginLeft = navbackupmargin
        photoaddcolumns()
        photographysort()
        anime({
            targets: '#photography-grid-container',
            opacity: 1,
            duration: 300,
            easing: 'cubicBezier(0.500, 0.000, 0.650, 1.000)',
            direction: 'normal'
        });
        anime({
            targets: '#photography-folder-nav-container',
            opacity: 1,
            duration: 300,
            easing: 'cubicBezier(0.500, 0.000, 0.650, 1.000)',
            direction: 'normal'
        });
        anime({
            targets: '#footer-container',
            opacity: 1,
            duration: 300,
            easing: 'cubicBezier(0.500, 0.000, 0.650, 1.000)',
            direction: 'normal'
        });

        anicounter2 = 0

        document.querySelectorAll(".project-thumb-container").forEach((prthco) => {
            anime({
                targets: prthco,
                opacity: 1,
                duration: 1000,
                delay: anicounter2,
                easing: 'cubicBezier(0.000, 0.000, 0.400, 1.000)'
            });
            anicounter2 = anicounter2 + 10
        });
    }, 300);
}

function fullscreen(id) {
    disableScroll()
    document.getElementById("photography-album-back").setAttribute("onClick", "unfullscreen()")
    if(currentlang == "EN") {
        document.getElementById("project-fullscreen-view"). innerHTML = `
        <div class="project-fullscreen-image-wrapper" id="project-fullscreen-image-wrapper"><img class="project-fullscreen-image" id="project-fullscreen-image" src="projects/2d/natart/natart_design.svg"></div>
        <div class="project-fullscreen-menu one">
            <div class="project-fullscreen-menu-row">
                <img src="assets/mouse.svg" height="44px" width="auto" draggable="false" style="user-select: none;">
                <div class="p-f-m-r-column">
                    <span>Sroll to zoom in and out</span>
                    <span>Click and drag to move</span>
                </div>
            </div>
            <div class="project-fullscreen-menu-row" style="margin-top: 0px !important;">
                <div class="p-f-m-r-column" style="margin-left: 2px !important; margin-top: -4px;" id="photo-data-wrapper">
                </div>
            </div>
        </div>
        `
    } else if(currentlang == "SK") {
        document.getElementById("project-fullscreen-view"). innerHTML = `
        <div class="project-fullscreen-image-wrapper" id="project-fullscreen-image-wrapper"><img class="project-fullscreen-image" id="project-fullscreen-image" src="projects/2d/natart/natart_design.svg"></div>
        <div class="project-fullscreen-menu" one>
            <div class="project-fullscreen-menu-row">
                <img src="assets/mouse.svg" height="44px" width="auto" draggable="false" style="user-select: none;">
                <div class="p-f-m-r-column">
                    <span>Sroll to zoom in and out</span>
                    <span>Click and drag to move</span>
                </div>
            </div>
            <div class="project-fullscreen-menu-row" style="margin-top: 0px !important;">
                <div class="p-f-m-r-column" style="margin-left: 2px !important; margin-top: -4px;" id="photo-data-wrapper">
                </div>
            </div>
        </div>
        `
    } else if(currentlang == "CZ") {
        document.getElementById("project-fullscreen-view"). innerHTML = `
        <div class="project-fullscreen-image-wrapper" id="project-fullscreen-image-wrapper"><img class="project-fullscreen-image" id="project-fullscreen-image" src="projects/2d/natart/natart_design.svg"></div>
        <div class="project-fullscreen-menu" one>
            <div class="project-fullscreen-menu-row">
                <img src="assets/mouse.svg" height="44px" width="auto" draggable="false" style="user-select: none;">
                <div class="p-f-m-r-column">
                    <span>Sroll to zoom in and out</span>
                    <span>Click and drag to move</span>
                </div>
            </div>
            <div class="project-fullscreen-menu-row" style="margin-top: 0px !important;">
                <div class="p-f-m-r-column" style="margin-left: 2px !important; margin-top: -4px;" id="photo-data-wrapper">
                </div>
            </div>
        </div>
        `
    } else if(currentlang == "DE") {
        document.getElementById("project-fullscreen-view"). innerHTML = `
        <div class="project-fullscreen-image-wrapper" id="project-fullscreen-image-wrapper"><img class="project-fullscreen-image" id="project-fullscreen-image" src="projects/2d/natart/natart_design.svg"></div>
        <div class="project-fullscreen-menu" one>
            <div class="project-fullscreen-menu-row">
                <img src="assets/mouse.svg" height="44px" width="auto" draggable="false" style="user-select: none;">
                <div class="p-f-m-r-column">
                    <span>Sroll to zoom in and out</span>
                    <span>Click and drag to move</span>
                </div>
            </div>
            <div class="project-fullscreen-menu-row" style="margin-top: 0px !important;">
                <div class="p-f-m-r-column" style="margin-left: 2px !important; margin-top: -4px;" id="photo-data-wrapper">
                </div>
            </div>
        </div>
        `
    } else if(currentlang == "JP") {
        document.getElementById("project-fullscreen-view"). innerHTML = `
        <div class="project-fullscreen-image-wrapper" id="project-fullscreen-image-wrapper"><img class="project-fullscreen-image" id="project-fullscreen-image" src="projects/2d/natart/natart_design.svg"></div>
        <div class="project-fullscreen-menu" one>
            <div class="project-fullscreen-menu-row">
                <img src="assets/mouse.svg" height="44px" width="auto" draggable="false" style="user-select: none;">
                <div class="p-f-m-r-column">
                    <span>Sroll to zoom in and out</span>
                    <span>Click and drag to move</span>
                </div>
            </div>
            <div class="project-fullscreen-menu-row" style="margin-top: 0px !important;">
                <div class="p-f-m-r-column" style="margin-left: 2px !important; margin-top: -4px;" id="photo-data-wrapper">
                </div>
            </div>
        </div>
        `
    }
    document.getElementById("photo-data-wrapper").innerHTML = document.querySelector("#"+id+" #photo-data-source").innerHTML
    let tempimagesubstring = id.substring(0, id.length - 2)
    if(tempimagesubstring.charAt(tempimagesubstring.length - 1) == "-") {
        tempimagesubstring = tempimagesubstring.substring(0, tempimagesubstring.length -1)
    }
    else {

    }
    document.getElementById("project-fullscreen-image").setAttribute("src", "projects/photography/"+tempimagesubstring+"/"+id+".jpg")
    document.getElementById("project-fullscreen-view").style.opacity = "1"
    document.getElementById("project-fullscreen-view").style.pointerEvents = "all"
    imageviewer()
}

function unfullscreen() {
    document.getElementById("photography-album-back").setAttribute("onClick", "photography_back()")
    enableScroll()
    document.getElementById("project-fullscreen-view").style.opacity = "0"
    document.getElementById("project-fullscreen-view").style.pointerEvents = "none"
    document.getElementById("project-fullscreen-view"). innerHTML = ""
}