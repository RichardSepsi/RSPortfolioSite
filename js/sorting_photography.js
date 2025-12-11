
// Define the total number of projects in this category.  CHANGE WHEN ADDING ITEMS !

let itemcount = 6



// Define all project thumbnails that will be displayed   CHANGE WHEN ADDING ITEMS !
// Items on the top of the list will be last on the website !


let itemdatabase = [
`
    <div id="vysoke_iso" onclick="fadeoutphotography(this.id)" class="project-thumb-container">
        <img src="projects/photography/vysoke_iso/vysoke_iso-3-thumb.webp" style="pointer-events: none; width: 100%; height: auto;">
        <div class="project-thumb-info-container">
            <div class="project-thumb-info-one"><span class="project-thumb-info-title">Vysoké ISO</span>
            <span class="project-thumb-info-sub one"></span></div>
            <span class="project-thumb-info-sub" id="photo-thumb-album-date">2.12.2025</span>
        </div>
    </div>
`,
`
    <div id="nizke_iso" onclick="fadeoutphotography(this.id)" class="project-thumb-container">
        <img src="projects/photography/nizke_iso/nizke_iso-2-thumb.webp" style="pointer-events: none; width: 100%; height: auto;">
        <div class="project-thumb-info-container">
            <div class="project-thumb-info-one"><span class="project-thumb-info-title">Nízke ISO</span>
            <span class="project-thumb-info-sub one"></span></div>
            <span class="project-thumb-info-sub" id="photo-thumb-album-date">2.12.2025</span>
        </div>
    </div>
`,
`
    <div id="naznaceny_pohyb" onclick="fadeoutphotography(this.id)" class="project-thumb-container">
        <img src="projects/photography/naznaceny_pohyb/naznaceny_pohyb-1-thumb.webp" style="pointer-events: none; width: 100%; height: auto;">
        <div class="project-thumb-info-container">
            <div class="project-thumb-info-one"><span class="project-thumb-info-title">Naznačený pohyb</span>
            <span class="project-thumb-info-sub one"></span></div>
            <span class="project-thumb-info-sub" id="photo-thumb-album-date">2.12.2025</span>
        </div>
    </div>
`,
`
    <div id="zmrazeny_pohyb" onclick="fadeoutphotography(this.id)" class="project-thumb-container">
        <img src="projects/photography/zmrazeny_pohyb/zmrazeny_pohyb-1-thumb.webp" style="pointer-events: none; width: 100%; height: auto;">
        <div class="project-thumb-info-container">
            <div class="project-thumb-info-one"><span class="project-thumb-info-title">Zmrazený pohyb</span>
            <span class="project-thumb-info-sub one"></span></div>
            <span class="project-thumb-info-sub" id="photo-thumb-album-date">2.12.2025</span>
        </div>
    </div>
`,
`
    <div id="velka_hloubka_ostrosti" onclick="fadeoutphotography(this.id)" class="project-thumb-container">
        <img src="projects/photography/velka_hloubka_ostrosti/velka_hloubka_ostrosti-1-thumb.webp" style="pointer-events: none; width: 100%; height: auto;">
        <div class="project-thumb-info-container">
            <div class="project-thumb-info-one"><span class="project-thumb-info-title">Velká hloubka ostrosti</span>
            <span class="project-thumb-info-sub one"></span></div>
            <span class="project-thumb-info-sub" id="photo-thumb-album-date">2.12.2025</span>
        </div>
    </div>
`,
`
    <div id="mala_hloubka_ostrosti" onclick="fadeoutphotography(this.id)" class="project-thumb-container">
        <img src="projects/photography/mala_hloubka_ostrosti/mala_hloubka_ostrosti-1-thumb.webp" style="pointer-events: none; width: 100%; height: auto;">
        <div class="project-thumb-info-container">
            <div class="project-thumb-info-one"><span class="project-thumb-info-title">Malá hloubka ostrosti</span>
            <span class="project-thumb-info-sub one"></span></div>
            <span class="project-thumb-info-sub" id="photo-thumb-album-date">2.12.2025</span>
        </div>
    </div>
`,
`
    <div id="fotoreklama-1" onclick="singlephoto(this.id)" class="project-thumb-container">
        <img src="projects/photography/fotoreklama/fotoreklama-1-thumb.webp" style="pointer-events: none; width: 100%; height: auto;">
        <div class="project-thumb-info-container">
            <div class="project-thumb-info-one"><span class="project-thumb-info-title">Fotoreklama</span>
            <span class="project-thumb-info-sub one"></span></div>
            <span class="project-thumb-info-sub" id="photo-thumb-album-date">11.12.2025</span>
        </div>
        <div style="display: none;" id="photo-data-source">
            <span style="margin-bottom: 2px;">Praha, Česko</span>
            <span style="margin-bottom: 2px;">11.Dec.2025</span>
            <span style="margin-bottom: 2px;">SONY DSC-RX100M2</span>
            <span style="margin-bottom: 2px;">f/6,3 1/2s ISO:100</span>
        </div>
    </div>
`
]

photographysort()
function photographysort() {
    document.getElementById("projects-column-1").innerHTML = ``
    document.getElementById("projects-column-2").innerHTML = ``
    if(itemcount > 2){
        document.getElementById("projects-column-3").innerHTML = ``
    }

    let sorththreecounter = 1

    for(let i = 1; i <= itemcount; i++) {
        if(window.innerWidth <= "1159" && window.innerWidth > "779" || itemcount <= 2 && window.innerWidth > "779"){
            if(sorththreecounter <= 2) {
                if(sorththreecounter == 1) {
                    document.getElementById("projects-column-1").innerHTML += itemdatabase[itemdatabase.length-i]
                }
                if(sorththreecounter == 2) {
                    document.getElementById("projects-column-2").innerHTML += itemdatabase[itemdatabase.length-i]
                }
                /*if(sorththreecounter == 3) {
                    document.getElementById("projects-column-3").innerHTML += itemdatabase[itemdatabase.length-i]
                }*/
            } else {
                sorththreecounter = 1
                document.getElementById("projects-column-1").innerHTML += itemdatabase[itemdatabase.length-i]
            }
            sorththreecounter = sorththreecounter + 1
        } else if(window.innerWidth <= "779" || itemcount == 1) {
            document.getElementById("projects-column-1").innerHTML += itemdatabase[itemdatabase.length-i]
        } else {
            if(sorththreecounter <= 3) {
                if(sorththreecounter == 1) {
                    document.getElementById("projects-column-1").innerHTML += itemdatabase[itemdatabase.length-i]
                }
                if(sorththreecounter == 2) {
                    document.getElementById("projects-column-2").innerHTML += itemdatabase[itemdatabase.length-i]
                }
                if(sorththreecounter == 3) {
                    document.getElementById("projects-column-3").innerHTML += itemdatabase[itemdatabase.length-i]
                }
            } else {
                sorththreecounter = 1
                document.getElementById("projects-column-1").innerHTML += itemdatabase[itemdatabase.length-i]
            }
            sorththreecounter = sorththreecounter + 1
        }
        
    }
}




// vysoke_iso items

// Define the total number of projects in this category.  CHANGE WHEN ADDING ITEMS !

var itemcount_vysoke_iso = 4



// Define all project thumbnails that will be displayed   CHANGE WHEN ADDING ITEMS !
// Items on the top of the list will be last on the website !

var itemdatabase_vysoke_iso = [
`
    <div id="vysoke_iso-1" onclick="fullscreen(this.id)" class="project-thumb-container">
        <img src="projects/photography/vysoke_iso/vysoke_iso-1-thumb.webp" style="pointer-events: none; width: 100%; height: auto;">
        <div style="display: none;" id="photo-data-source">
            <span style="margin-bottom: 2px;">Bratislava, Slovensko</span>
            <span style="margin-bottom: 2px;">19.Oct.2025</span>
            <span style="margin-bottom: 2px;">SONY DSC-RX100M2</span>
            <span style="margin-bottom: 2px;">f/5 1/30s ISO:3200</span>
        </div>
    </div>
`,
`
    <div id="vysoke_iso-2" onclick="fullscreen(this.id)" class="project-thumb-container">
        <img src="projects/photography/vysoke_iso/vysoke_iso-2-thumb.webp" style="pointer-events: none; width: 100%; height: auto;">
        <div style="display: none;" id="photo-data-source">
            <span style="margin-bottom: 2px;">Praha, Česko</span>
            <span style="margin-bottom: 2px;">14.Nov.2025</span>
            <span style="margin-bottom: 2px;">SONY DSC-RX100M2</span>
            <span style="margin-bottom: 2px;">f/3,5 1/80s ISO:800</span>
        </div>
    </div>
`,
`
    <div id="vysoke_iso-3" onclick="fullscreen(this.id)" class="project-thumb-container">
        <img src="projects/photography/vysoke_iso/vysoke_iso-3-thumb.webp" style="pointer-events: none; width: 100%; height: auto;">
        <div style="display: none;" id="photo-data-source">
            <span style="margin-bottom: 2px;">Bratislava, Slovensko</span>
            <span style="margin-bottom: 2px;">19.Oct.2025</span>
            <span style="margin-bottom: 2px;">SONY DSC-RX100M2</span>
            <span style="margin-bottom: 2px;">f/4,9 1/40s ISO:3200</span>
        </div>
    </div>
`,
`
    <div id="vysoke_iso-4" onclick="fullscreen(this.id)" class="project-thumb-container">
        <img src="projects/photography/vysoke_iso/vysoke_iso-4-thumb.webp" style="pointer-events: none; width: 100%; height: auto;">
        <div style="display: none;" id="photo-data-source">
            <span style="margin-bottom: 2px;">Praha, Česko</span>
            <span style="margin-bottom: 2px;">8.Oct.2025</span>
            <span style="margin-bottom: 2px;">SONY DSC-RX100M2</span>
            <span style="margin-bottom: 2px;">f/4,9 1/80s ISO:6400</span>
        </div>
    </div>
`
]



// nizke_iso items

// Define the total number of projects in this category.  CHANGE WHEN ADDING ITEMS !

var itemcount_nizke_iso = 4



// Define all project thumbnails that will be displayed   CHANGE WHEN ADDING ITEMS !
// Items on the top of the list will be last on the website !

var itemdatabase_nizke_iso = [
`
    <div id="nizke_iso-2" onclick="fullscreen(this.id)" class="project-thumb-container">
        <img src="projects/photography/nizke_iso/nizke_iso-2-thumb.webp" style="pointer-events: none; width: 100%; height: auto;">
        <div style="display: none;" id="photo-data-source">
            <span style="margin-bottom: 2px;">Praha, Česko</span>
            <span style="margin-bottom: 2px;">3.Oct.2025</span>
            <span style="margin-bottom: 2px;">SONY DSC-RX100M2</span>
            <span style="margin-bottom: 2px;">f/4,9 1/2000s ISO:100</span>
        </div>
    </div>
`,
`
    <div id="nizke_iso-3" onclick="fullscreen(this.id)" class="project-thumb-container">
        <img src="projects/photography/nizke_iso/nizke_iso-3-thumb.webp" style="pointer-events: none; width: 100%; height: auto;">
        <div style="display: none;" id="photo-data-source">
            <span style="margin-bottom: 2px;">Praha, Česko</span>
            <span style="margin-bottom: 2px;">29.Oct.2025</span>
            <span style="margin-bottom: 2px;">SONY DSC-RX100M2</span>
            <span style="margin-bottom: 2px;">f/6,3 1/320s ISO:200</span>
        </div>
    </div>
`,
`
    <div id="nizke_iso-4" onclick="fullscreen(this.id)" class="project-thumb-container">
        <img src="projects/photography/nizke_iso/nizke_iso-4-thumb.webp" style="pointer-events: none; width: 100%; height: auto;">
        <div style="display: none;" id="photo-data-source">
            <span style="margin-bottom: 2px;">Praha, Česko</span>
            <span style="margin-bottom: 2px;">30.Oct.2025</span>
            <span style="margin-bottom: 2px;">SONY DSC-RX100M2</span>
            <span style="margin-bottom: 2px;">f/4,9 1/320s ISO:100</span>
        </div>
    </div>
`,
`
    <div id="nizke_iso-1" onclick="fullscreen(this.id)" class="project-thumb-container">
        <img src="projects/photography/nizke_iso/nizke_iso-1-thumb.webp" style="pointer-events: none; width: 100%; height: auto;">
        <div style="display: none;" id="photo-data-source">
            <span style="margin-bottom: 2px;">Praha, Česko</span>
            <span style="margin-bottom: 2px;">13.Nov.2025</span>
            <span style="margin-bottom: 2px;">SONY DSC-RX100M2</span>
            <span style="margin-bottom: 2px;">f/3.2 1/40s ISO:100</span>
        </div>
    </div>
`
]



// naznaceny_pohyb items

// Define the total number of projects in this category.  CHANGE WHEN ADDING ITEMS !

var itemcount_naznaceny_pohyb = 3



// Define all project thumbnails that will be displayed   CHANGE WHEN ADDING ITEMS !
// Items on the top of the list will be last on the website !

var itemdatabase_naznaceny_pohyb = [
`
    <div id="naznaceny_pohyb-1" onclick="fullscreen(this.id)" class="project-thumb-container">
        <img src="projects/photography/naznaceny_pohyb/naznaceny_pohyb-1-thumb.webp" style="pointer-events: none; width: 100%; height: auto;">
        <div style="display: none;" id="photo-data-source">
            <span style="margin-bottom: 2px;">Praha, Česko</span>
            <span style="margin-bottom: 2px;">14.Nov.2025</span>
            <span style="margin-bottom: 2px;">SONY DSC-RX100M2</span>
            <span style="margin-bottom: 2px;">f/11 1/2s ISO:100</span>
        </div>
    </div>
`,
`
    <div id="naznaceny_pohyb-2" onclick="fullscreen(this.id)" class="project-thumb-container">
        <img src="projects/photography/naznaceny_pohyb/naznaceny_pohyb-2-thumb.webp" style="pointer-events: none; width: 100%; height: auto;">
        <div style="display: none;" id="photo-data-source">
            <span style="margin-bottom: 2px;">Praha, Česko</span>
            <span style="margin-bottom: 2px;">13.Nov.2025</span>
            <span style="margin-bottom: 2px;">SONY DSC-RX100M2</span>
            <span style="margin-bottom: 2px;">f/11 20s ISO:100</span>
        </div>
    </div>
`,
`
    <div id="naznaceny_pohyb-3" onclick="fullscreen(this.id)" class="project-thumb-container">
        <img src="projects/photography/naznaceny_pohyb/naznaceny_pohyb-3-thumb.webp" style="pointer-events: none; width: 100%; height: auto;">
        <div style="display: none;" id="photo-data-source">
            <span style="margin-bottom: 2px;">Praha, Česko</span>
            <span style="margin-bottom: 2px;">15.Oct.2025</span>
            <span style="margin-bottom: 2px;">SONY DSC-RX100M2</span>
            <span style="margin-bottom: 2px;">f/11 30s ISO:100</span>
        </div>
    </div>
`
]



// zmrazeny_pohyb items

// Define the total number of projects in this category.  CHANGE WHEN ADDING ITEMS !

var itemcount_zmrazeny_pohyb = 3



// Define all project thumbnails that will be displayed   CHANGE WHEN ADDING ITEMS !
// Items on the top of the list will be last on the website !

var itemdatabase_zmrazeny_pohyb = [
`
    <div id="zmrazeny_pohyb-1" onclick="fullscreen(this.id)" class="project-thumb-container">
        <img src="projects/photography/zmrazeny_pohyb/zmrazeny_pohyb-1-thumb-2.webp" style="pointer-events: none; width: 100%; height: auto;">
        <div style="display: none;" id="photo-data-source">
            <span style="margin-bottom: 2px;">Bratislava, Slovensko</span>
            <span style="margin-bottom: 2px;">19.Oct.2025</span>
            <span style="margin-bottom: 2px;">SONY DSC-RX100M2</span>
            <span style="margin-bottom: 2px;">f/8 1/2000s ISO:400</span>
        </div>
    </div>
`,
`
    <div id="zmrazeny_pohyb-2" onclick="fullscreen(this.id)" class="project-thumb-container">
        <img src="projects/photography/zmrazeny_pohyb/zmrazeny_pohyb-2-thumb.webp" style="pointer-events: none; width: 100%; height: auto;">
        <div style="display: none;" id="photo-data-source">
            <span style="margin-bottom: 2px;">Praha, Česko</span>
            <span style="margin-bottom: 2px;">3.Oct.2025</span>
            <span style="margin-bottom: 2px;">SONY DSC-RX100M2</span>
            <span style="margin-bottom: 2px;">f/5 1/400s ISO:100</span>
        </div>
    </div>
`,
`
    <div id="zmrazeny_pohyb-3" onclick="fullscreen(this.id)" class="project-thumb-container">
        <img src="projects/photography/zmrazeny_pohyb/zmrazeny_pohyb-3-thumb.webp" style="pointer-events: none; width: 100%; height: auto;">
        <div style="display: none;" id="photo-data-source">
            <span style="margin-bottom: 2px;">Praha, Česko</span>
            <span style="margin-bottom: 2px;">29.Oct.2025</span>
            <span style="margin-bottom: 2px;">SONY DSC-RX100M2</span>
            <span style="margin-bottom: 2px;">f/3,5 1/1000s ISO:400</span>
        </div>
    </div>
`
]



// velka_hloubka_ostrosti items

// Define the total number of projects in this category.  CHANGE WHEN ADDING ITEMS !

var itemcount_velka_hloubka_ostrosti = 3



// Define all project thumbnails that will be displayed   CHANGE WHEN ADDING ITEMS !
// Items on the top of the list will be last on the website !

var itemdatabase_velka_hloubka_ostrosti = [
`
    <div id="velka_hloubka_ostrosti-1" onclick="fullscreen(this.id)" class="project-thumb-container">
        <img src="projects/photography/velka_hloubka_ostrosti/velka_hloubka_ostrosti-1-thumb-2.webp" style="pointer-events: none; width: 100%; height: auto;">
        <div style="display: none;" id="photo-data-source">
            <span style="margin-bottom: 2px;">Bratislava, Slovensko</span>
            <span style="margin-bottom: 2px;">19.Oct.2025</span>
            <span style="margin-bottom: 2px;">SONY DSC-RX100M2</span>
            <span style="margin-bottom: 2px;">f/8 1/200s ISO:100</span>
        </div>
    </div>
`,
`
    <div id="velka_hloubka_ostrosti-2" onclick="fullscreen(this.id)" class="project-thumb-container">
        <img src="projects/photography/velka_hloubka_ostrosti/velka_hloubka_ostrosti-2-thumb.webp" style="pointer-events: none; width: 100%; height: auto;">
        <div style="display: none;" id="photo-data-source">
            <span style="margin-bottom: 2px;">Praha, Česko</span>
            <span style="margin-bottom: 2px;">30.Sep.2025</span>
            <span style="margin-bottom: 2px;">SONY DSC-RX100M2</span>
            <span style="margin-bottom: 2px;">f/10 1/30s ISO:100</span>
        </div>
    </div>
`,
`
    <div id="velka_hloubka_ostrosti-3" onclick="fullscreen(this.id)" class="project-thumb-container">
        <img src="projects/photography/velka_hloubka_ostrosti/velka_hloubka_ostrosti-3-thumb.webp" style="pointer-events: none; width: 100%; height: auto;">
        <div style="display: none;" id="photo-data-source">
            <span style="margin-bottom: 2px;">Bratislava, Slovensko</span>
            <span style="margin-bottom: 2px;">19.Oct.2025</span>
            <span style="margin-bottom: 2px;">SONY DSC-RX100M2</span>
            <span style="margin-bottom: 2px;">f/9 1/500s ISO:400</span>
        </div>
    </div>
`
]



// mala_hloubka_ostrosti items

// Define the total number of projects in this category.  CHANGE WHEN ADDING ITEMS !

var itemcount_mala_hloubka_ostrosti = 5



// Define all project thumbnails that will be displayed   CHANGE WHEN ADDING ITEMS !
// Items on the top of the list will be last on the website !

var itemdatabase_mala_hloubka_ostrosti = [
`
    <div id="mala_hloubka_ostrosti-5" onclick="fullscreen(this.id)" class="project-thumb-container">
        <img src="projects/photography/mala_hloubka_ostrosti/mala_hloubka_ostrosti-5-thumb.webp" style="pointer-events: none; width: 100%; height: auto;">
        <div style="display: none;" id="photo-data-source">
            <span style="margin-bottom: 2px;">Praha, Česko</span>
            <span style="margin-bottom: 2px;">9.Oct.2025</span>
            <span style="margin-bottom: 2px;">SONY DSC-RX100M2</span>
            <span style="margin-bottom: 2px;">f/3,2 1/100s ISO:100</span>
        </div>
    </div>
`,
`
    <div id="mala_hloubka_ostrosti-1" onclick="fullscreen(this.id)" class="project-thumb-container">
        <img src="projects/photography/mala_hloubka_ostrosti/mala_hloubka_ostrosti-1-thumb.webp" style="pointer-events: none; width: 100%; height: auto;">
        <div style="display: none;" id="photo-data-source">
            <span style="margin-bottom: 2px;">Praha, Česko</span>
            <span style="margin-bottom: 2px;">1.Nov.2025</span>
            <span style="margin-bottom: 2px;">SONY DSC-RX100M2</span>
            <span style="margin-bottom: 2px;">f/4,9 1/160s ISO:100</span>
        </div>
    </div>
`,
`
    <div id="mala_hloubka_ostrosti-2" onclick="fullscreen(this.id)" class="project-thumb-container">
        <img src="projects/photography/mala_hloubka_ostrosti/mala_hloubka_ostrosti-2-thumb.webp" style="pointer-events: none; width: 100%; height: auto;">
        <div style="display: none;" id="photo-data-source">
            <span style="margin-bottom: 2px;">Praha, Česko</span>
            <span style="margin-bottom: 2px;">31.Oct.2025</span>
            <span style="margin-bottom: 2px;">SONY DSC-RX100M2</span>
            <span style="margin-bottom: 2px;">f/4,9 1/320s ISO:100</span>
        </div>
    </div>
`,
`
    <div id="mala_hloubka_ostrosti-3" onclick="fullscreen(this.id)" class="project-thumb-container">
        <img src="projects/photography/mala_hloubka_ostrosti/mala_hloubka_ostrosti-3-thumb.webp" style="pointer-events: none; width: 100%; height: auto;">
        <div style="display: none;" id="photo-data-source">
            <span style="margin-bottom: 2px;">Praha, Česko</span>
            <span style="margin-bottom: 2px;">2.Oct.2025</span>
            <span style="margin-bottom: 2px;">SONY DSC-RX100M2</span>
            <span style="margin-bottom: 2px;">f/1,8 1/200s ISO:200</span>
        </div>
    </div>
`,
`
    <div id="mala_hloubka_ostrosti-4" onclick="fullscreen(this.id)" class="project-thumb-container">
        <img src="projects/photography/mala_hloubka_ostrosti/mala_hloubka_ostrosti-4-thumb.webp" style="pointer-events: none; width: 100%; height: auto;">
        <div style="display: none;" id="photo-data-source">
            <span style="margin-bottom: 2px;">Praha, Česko</span>
            <span style="margin-bottom: 2px;">9.Oct.2025</span>
            <span style="margin-bottom: 2px;">SONY DSC-RX100M2</span>
            <span style="margin-bottom: 2px;">f/4,5 1/100s ISO:100</span>
        </div>
    </div>
`
]



// sorting for individual photoalbums

function photoalbumsort(id) {
    document.getElementById("projects-column-1").innerHTML = ``
    document.getElementById("projects-column-2").innerHTML = ``
    if(window["itemcount_"+id] > 2){
        document.getElementById("projects-column-3").innerHTML = ``
    }

    let sorththreecounter_photosort = 1
    for(let f = 1; f <= window["itemcount_"+id]; f++) {
        if(window.innerWidth <= "1159" && window.innerWidth > "779" || window["itemcount_"+id] <= 2 && window.innerWidth > "779"){
            if(sorththreecounter_photosort <= 2) {
                if(sorththreecounter_photosort == 1) {
                    document.getElementById("projects-column-1").innerHTML += window["itemdatabase_"+id][window["itemdatabase_"+id].length-f]
                }
                if(sorththreecounter_photosort == 2) {
                    document.getElementById("projects-column-2").innerHTML += window["itemdatabase_"+id][window["itemdatabase_"+id].length-f]
                }
                /*if(sorththreecounter_photosort == 3) {
                    document.getElementById("projects-column-3").innerHTML += window["itemdatabase_"+id][window["itemdatabase_"+id].length-f]
                }*/
            } else {
                sorththreecounter_photosort = 1
                document.getElementById("projects-column-1").innerHTML += window["itemdatabase_"+id][window["itemdatabase_"+id].length-f]
            }
            sorththreecounter_photosort = sorththreecounter_photosort + 1
        } else if(window.innerWidth <= "779" || window["itemcount_"+id] == 1) {
            document.getElementById("projects-column-1").innerHTML += window["itemdatabase_"+id][window["itemdatabase_"+id].length-f]
        } else {
            if(sorththreecounter_photosort <= 3) {
                if(sorththreecounter_photosort == 1) {
                    document.getElementById("projects-column-1").innerHTML += window["itemdatabase_"+id][window["itemdatabase_"+id].length-f]
                }
                if(sorththreecounter_photosort == 2) {
                    document.getElementById("projects-column-2").innerHTML += window["itemdatabase_"+id][window["itemdatabase_"+id].length-f]
                }
                if(sorththreecounter_photosort == 3) {
                    document.getElementById("projects-column-3").innerHTML += window["itemdatabase_"+id][window["itemdatabase_"+id].length-f]
                }
            } else {
                sorththreecounter_photosort = 1
                document.getElementById("projects-column-1").innerHTML += window["itemdatabase_"+id][window["itemdatabase_"+id].length-f]
            }
            sorththreecounter_photosort = sorththreecounter_photosort + 1
        }
        
    }
}

