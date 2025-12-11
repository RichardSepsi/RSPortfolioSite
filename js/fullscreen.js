function fullscreen(id) {
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
        </div>
        <div class="project-fullscreen-menu two" style="left: calc(100% - 193px);">
            <div class="project-link-button-light" style="margin:10px;" onclick="unfullscreen()">
                <span class="project-link-button-label">Go back</span>
                <div class="project-link-button-ext">                             
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path class="project-link-button-svg" d="M19 12H5" stroke="#969696" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/>
                        <path class="project-link-button-svg" d="M12 19L5 12L12 5" stroke="#969696" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>                            
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
        </div>
        <div class="project-fullscreen-menu two" style="left: calc(100% - 167px);">
            <div class="project-link-button-light" style="margin:10px;" onclick="unfullscreen()">
                <span class="project-link-button-label">Späť</span>
                <div class="project-link-button-ext">                             
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path class="project-link-button-svg" d="M19 12H5" stroke="#969696" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/>
                        <path class="project-link-button-svg" d="M12 19L5 12L12 5" stroke="#969696" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>                            
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
        </div>
        <div class="project-fullscreen-menu two" style="left: calc(100% - 167px);">
            <div class="project-link-button-light" style="margin:10px;" onclick="unfullscreen()">
                <span class="project-link-button-label">Zpět</span>
                <div class="project-link-button-ext">                             
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path class="project-link-button-svg" d="M19 12H5" stroke="#969696" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/>
                        <path class="project-link-button-svg" d="M12 19L5 12L12 5" stroke="#969696" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>                            
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
        </div>
        <div class="project-fullscreen-menu two" style="left: calc(100% - 184px);">
            <div class="project-link-button-light" style="margin:10px;" onclick="unfullscreen()">
                <span class="project-link-button-label">Zurück</span>
                <div class="project-link-button-ext">                             
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path class="project-link-button-svg" d="M19 12H5" stroke="#969696" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/>
                        <path class="project-link-button-svg" d="M12 19L5 12L12 5" stroke="#969696" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>                            
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
        </div>
        <div class="project-fullscreen-menu two" style="left: calc(100% - 163px);">
            <div class="project-link-button-light" style="margin:10px;" onclick="unfullscreen()">
                <span class="project-link-button-label">戻る</span>
                <div class="project-link-button-ext">                             
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path class="project-link-button-svg" d="M19 12H5" stroke="#969696" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/>
                        <path class="project-link-button-svg" d="M12 19L5 12L12 5" stroke="#969696" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>                            
                </div>
            </div>
        </div>
        `
    }
    
    document.getElementById("project-fullscreen-image").setAttribute("src", id)
    document.getElementById("project-fullscreen-view").style.opacity = "1"
    document.getElementById("project-fullscreen-view").style.pointerEvents = "all"
    imageviewer()
}
function unfullscreen() {
    document.getElementById("project-fullscreen-view").style.opacity = "0"
    document.getElementById("project-fullscreen-view").style.pointerEvents = "none"
    document.getElementById("project-fullscreen-view"). innerHTML = ""
}