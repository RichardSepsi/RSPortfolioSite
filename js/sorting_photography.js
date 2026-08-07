
// Define all project thumbnails that will be displayed 
// Items on the top of the list will be last on the website !


let itemdatabase = [
`
    <div id="fotka1" onclick="fadeoutphotography(this.id)" class="project-thumb-container">
        <img src="projects/photography/fotka1/naznaceny_pohyb-1-thumb.webp" style="pointer-events: none; width: 100%; height: auto;">
        <div class="project-thumb-info-container">
            <div class="project-thumb-info-one"><span class="project-thumb-info-title">VŠE <br style="display:none;" id="fotobr1">Fotka 1</span>
            <span class="project-thumb-info-sub one"></span></div>
            <span class="project-thumb-info-sub" id="photo-thumb-album-date">12.2025</span>
        </div>
    </div>
`,
`
    <div id="fotka2" onclick="fadeoutphotography(this.id)" class="project-thumb-container">
        <img src="projects/photography/fotka2/fotka2-8-thumb.webp" style="pointer-events: none; width: 100%; height: auto;">
        <div class="project-thumb-info-container">
            <div class="project-thumb-info-one"><span class="project-thumb-info-title">VŠE <br style="display:none;" id="fotobr1">Fotka 2</span>
            <span class="project-thumb-info-sub one"></span></div>
            <span class="project-thumb-info-sub" id="photo-thumb-album-date">06.2026</span>
        </div>
    </div>
`,
`
    <div id="dolomites_2026_rx100" onclick="fadeoutphotography(this.id)" class="project-thumb-container">
        <img src="projects/photography/dolomites_2026_rx100/dolomites_2026_rx100-9-thumb.webp" style="pointer-events: none; width: 100%; height: auto;">
        <div class="project-thumb-info-container">
            <div class="project-thumb-info-one"><span class="project-thumb-info-title">Dolomites <br style="display:none;" id="fotobr1">rx100 2026</span>
            <span class="project-thumb-info-sub one"></span></div>
            <span class="project-thumb-info-sub" id="photo-thumb-album-date">07.2026</span>
        </div>
    </div>
`
]

let itemcount = itemdatabase.length

function photographysort() {
    document.getElementById("projects-column-1").innerHTML = ``
    document.getElementById("projects-column-2").innerHTML = ``
    if(itemcount > 2){
        document.getElementById("projects-column-3").innerHTML = ``
    }

    let sorththreecounter = 1

    for(let i = 1; i <= itemcount; i++) {
        if(window.innerWidth <= "1279" && window.innerWidth > "899" || itemcount <= 2 && window.innerWidth > "899"){
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
        } else if(window.innerWidth <= "899" || itemcount == 1) {
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
photographysort()



// fotka2 items

// Define all project thumbnails that will be displayed 
// Items on the top of the list will be last on the website !

var itemdatabase_fotka2 = [
`
    <div id="fotka2-5" onclick="fullscreen(this.id)" class="project-thumb-container">
        <img src="projects/photography/fotka2/fotka2-5-thumb.webp" style="pointer-events: none; width: 100%; height: auto;">
        <div style="display: none;" id="photo-data-source">
            <span style="margin-bottom: 2px;">Lednice, Česko</span>
            <span style="margin-bottom: 2px;">2026.04.04</span>
            <span style="margin-bottom: 2px;">SONY DSC-RX100M2</span>
            <span style="margin-bottom: 2px;">f/1.8 1/30s ISO:200</span>
        </div>
    </div>
`,
`
    <div id="fotka2-2" onclick="fullscreen(this.id)" class="project-thumb-container" style="display: none;"><!-- FILLER -->
        <img src="projects/photography/fotka2/fotka2-5-thumb.webp" style="pointer-events: none; width: 100%; height: auto;">
        <div style="display: none;" id="photo-data-source">
            <span style="margin-bottom: 2px;">Praha, Česko</span>
            <span style="margin-bottom: 2px;">2026.03.19</span>
            <span style="margin-bottom: 2px;">Nikon Z50</span>
            <span style="margin-bottom: 2px;">f/7.1 1/400s ISO:100</span>
        </div>
    </div>
`,
`
    <div id="fotka2-3" onclick="fullscreen(this.id)" class="project-thumb-container" style="display: none;"><!-- FILLER -->
        <img src="projects/photography/fotka2/fotka2-5-thumb.webp" style="pointer-events: none; width: 100%; height: auto;">
        <div style="display: none;" id="photo-data-source">
            <span style="margin-bottom: 2px;">Praha, Česko</span>
            <span style="margin-bottom: 2px;">2026.04.22</span>
            <span style="margin-bottom: 2px;">SONY DSC-RX100M2</span>
            <span style="margin-bottom: 2px;">f/4.9 1/160s ISO:100</span>
        </div>
    </div>
`,
`
    <div id="fotka2-2" onclick="fullscreen(this.id)" class="project-thumb-container">
        <img src="projects/photography/fotka2/fotka2-2-thumb.webp" style="pointer-events: none; width: 100%; height: auto; image-rendering: crisp-edges;">
        <div style="display: none;" id="photo-data-source">
            <span style="margin-bottom: 2px;">Praha, Česko</span>
            <span style="margin-bottom: 2px;">2026.03.19</span>
            <span style="margin-bottom: 2px;">Nikon Z50</span>
            <span style="margin-bottom: 2px;">f/7.1 1/400s ISO:100</span>
        </div>
    </div>
`,
`
    <div id="fotka2-3" onclick="fullscreen(this.id)" class="project-thumb-container">
        <img src="projects/photography/fotka2/fotka2-3-thumb.webp" style="pointer-events: none; width: 100%; height: auto;">
        <div style="display: none;" id="photo-data-source">
            <span style="margin-bottom: 2px;">Praha, Česko</span>
            <span style="margin-bottom: 2px;">2026.04.22</span>
            <span style="margin-bottom: 2px;">SONY DSC-RX100M2</span>
            <span style="margin-bottom: 2px;">f/4.9 1/160s ISO:100</span>
        </div>
    </div>
`,
`
    <div id="fotka2-4" onclick="fullscreen(this.id)" class="project-thumb-container">
        <img src="projects/photography/fotka2/fotka2-4-thumb.webp" style="pointer-events: none; width: 100%; height: auto;">
        <div style="display: none;" id="photo-data-source">
            <span style="margin-bottom: 2px;">Praha, Česko</span>
            <span style="margin-bottom: 2px;">2026.04.25</span>
            <span style="margin-bottom: 2px;">SONY DSC-RX100M2</span>
            <span style="margin-bottom: 2px;">f/5 1/400s ISO:100</span>
        </div>
    </div>
`,
`
    <div id="fotka2-1" onclick="fullscreen(this.id)" class="project-thumb-container">
        <img src="projects/photography/fotka2/fotka2-1-thumb.webp" style="pointer-events: none; width: 100%; height: auto;">
        <div style="display: none;" id="photo-data-source">
            <span style="margin-bottom: 2px;">Praha, Česko</span>
            <span style="margin-bottom: 2px;">2026.04.18</span>
            <span style="margin-bottom: 2px;">Nikon Z50</span>
            <span style="margin-bottom: 2px;">f/9 1/250s ISO:200</span>
        </div>
    </div>
`,
`
    <div id="fotka2-6" onclick="fullscreen(this.id)" class="project-thumb-container">
        <img src="projects/photography/fotka2/fotka2-6-thumb.webp" style="pointer-events: none; width: 100%; height: auto; image-rendering: crisp-edges;">
        <div style="display: none;" id="photo-data-source">
            <span style="margin-bottom: 2px;">Praha, Česko</span>
            <span style="margin-bottom: 2px;">2026.05.05</span>
            <span style="margin-bottom: 2px;">Canon EOS R6</span>
            <span style="margin-bottom: 2px;">f/22 1/160s ISO:320</span>
        </div>
    </div>
`,
`
    <div id="fotka2-7" onclick="fullscreen(this.id)" class="project-thumb-container">
        <img src="projects/photography/fotka2/fotka2-7-thumb.webp" style="pointer-events: none; width: 100%; height: auto; image-rendering: crisp-edges;">
        <div style="display: none;" id="photo-data-source">
            <span style="margin-bottom: 2px;">Bratislava, Slovensko</span>
            <span style="margin-bottom: 2px;">2026.05.08</span>
            <span style="margin-bottom: 2px;">Canon EOS R6</span>
            <span style="margin-bottom: 2px;">f/2.8 1/3200s ISO:200</span>
        </div>
    </div>
`,
`
    <div id="fotka2-8" onclick="fullscreen(this.id)" class="project-thumb-container">
        <img src="projects/photography/fotka2/fotka2-8-thumb.webp" style="pointer-events: none; width: 100%; height: auto; image-rendering: crisp-edges;">
        <div style="display: none;" id="photo-data-source">
            <span style="margin-bottom: 2px;">Slovakia Ring</span>
            <span style="margin-bottom: 2px;">2026.05.10</span>
            <span style="margin-bottom: 2px;">Canon EOS R6</span>
            <span style="margin-bottom: 2px;">f/32 1/30s ISO:200</span>
        </div>
    </div>
`
]

var itemcount_fotka2 = itemdatabase_fotka2.length




// fotka1 items

// Define all project thumbnails that will be displayed 
// Items on the top of the list will be last on the website !

var itemdatabase_fotka1 = [
`
    <div id="fotka1-1" onclick="fullscreen(this.id)" class="project-thumb-container">
        <img src="projects/photography/fotka1/vysoke_iso-3-thumb.webp" style="pointer-events: none; width: 100%; height: auto;">
        <div style="display: none;" id="photo-data-source">
            <span style="margin-bottom: 2px;">Bratislava, Slovensko</span>
            <span style="margin-bottom: 2px;">2025.10.16</span>
            <span style="margin-bottom: 2px;">SONY DSC-RX100M2</span>
            <span style="margin-bottom: 2px;">f/4.9 1/40s ISO:3200</span>
        </div>
    </div>
`,
`
    <div id="fotka1-2" onclick="fullscreen(this.id)" class="project-thumb-container" style="display: none;">
        <img src="projects/photography/fotka1/vysoke_iso-3-thumb.webp" style="pointer-events: none; width: 100%; height: auto;">
        <div style="display: none;" id="photo-data-source">
            <span style="margin-bottom: 2px;">Bratislava, Slovensko</span>
            <span style="margin-bottom: 2px;">2025.10.16</span>
            <span style="margin-bottom: 2px;">SONY DSC-RX100M2</span>
            <span style="margin-bottom: 2px;">f/4.9 1/40s ISO:3200</span>
        </div>
    </div>
`,
`
    <div id="fotka1-3" onclick="fullscreen(this.id)" class="project-thumb-container" style="display: none;">
        <img src="projects/photography/fotka1/vysoke_iso-3-thumb.webp" style="pointer-events: none; width: 100%; height: auto;">
        <div style="display: none;" id="photo-data-source">
            <span style="margin-bottom: 2px;">Bratislava, Slovensko</span>
            <span style="margin-bottom: 2px;">2025.10.16</span>
            <span style="margin-bottom: 2px;">SONY DSC-RX100M2</span>
            <span style="margin-bottom: 2px;">f/4.9 1/40s ISO:3200</span>
        </div>
    </div>
`,
`
    <div id="fotka1-4" onclick="fullscreen(this.id)" class="project-thumb-container">
        <img src="projects/photography/fotka1/nizke_iso-1-thumb.webp" style="pointer-events: none; width: 100%; height: auto; image-rendering: crisp-edges;">
        <div style="display: none;" id="photo-data-source">
            <span style="margin-bottom: 2px;">Praha, Česko</span>
            <span style="margin-bottom: 2px;">2025.11.13</span>
            <span style="margin-bottom: 2px;">SONY DSC-RX100M2</span>
            <span style="margin-bottom: 2px;">f/4,9 1/2000s ISO:100</span>
        </div>
    </div>
`,
`
    <div id="fotka1-5" onclick="fullscreen(this.id)" class="project-thumb-container">
        <img src="projects/photography/fotka1/zmrazeny_pohyb-1-thumb.webp" style="pointer-events: none; width: 100%; height: auto;">
        <div style="display: none;" id="photo-data-source">
            <span style="margin-bottom: 2px;">Bratislava, Slovensko</span>
            <span style="margin-bottom: 2px;">2025.10.19</span>
            <span style="margin-bottom: 2px;">SONY DSC-RX100M2</span>
            <span style="margin-bottom: 2px;">f/8 1/2000s ISO:400</span>
        </div>
    </div>
`,
`
    <div id="fotka1-6" onclick="fullscreen(this.id)" class="project-thumb-container">
        <img src="projects/photography/fotka1/velka_hloubka_ostrosti-2-thumb.webp" style="pointer-events: none; width: 100%; height: auto;">
        <div style="display: none;" id="photo-data-source">
            <span style="margin-bottom: 2px;">Praha, Česko</span>
            <span style="margin-bottom: 2px;">2025.09.30</span>
            <span style="margin-bottom: 2px;">SONY DSC-RX100M2</span>
            <span style="margin-bottom: 2px;">f/10 1/30s ISO:100</span>
        </div>
    </div>
`,
`
    <div id="fotka1-7" onclick="fullscreen(this.id)" class="project-thumb-container">
        <img src="projects/photography/fotka1/naznaceny_pohyb-1-thumb.webp" style="pointer-events: none; width: 100%; height: auto;">
        <div style="display: none;" id="photo-data-source">
            <span style="margin-bottom: 2px;">Praha, Česko</span>
            <span style="margin-bottom: 2px;">2025.11.14</span>
            <span style="margin-bottom: 2px;">SONY DSC-RX100M2</span>
            <span style="margin-bottom: 2px;">f/11 1/2s ISO:100</span>
        </div>
    </div>
`,
`
    <div id="fotka1-8" onclick="fullscreen(this.id)" class="project-thumb-container">
        <img src="projects/photography/fotka1/velka_hloubka_ostrosti-1-thumb.webp" style="pointer-events: none; width: 100%; height: auto; image-rendering: crisp-edges;">
        <div style="display: none;" id="photo-data-source">
            <span style="margin-bottom: 2px;">Bratislava, Slovensko</span>
            <span style="margin-bottom: 2px;">2025.10.19</span>
            <span style="margin-bottom: 2px;">SONY DSC-RX100M2</span>
            <span style="margin-bottom: 2px;">f/8 1/200s ISO:100</span>
        </div>
    </div>
`,
`
    <div id="fotka1-9" onclick="fullscreen(this.id)" class="project-thumb-container">
        <img src="projects/photography/fotka1/naznaceny_pohyb-2-thumb.webp" style="pointer-events: none; width: 100%; height: auto;">
        <div style="display: none;" id="photo-data-source">
            <span style="margin-bottom: 2px;">Praha, Česko</span>
            <span style="margin-bottom: 2px;">2025.11.13</span>
            <span style="margin-bottom: 2px;">SONY DSC-RX100M2</span>
            <span style="margin-bottom: 2px;">f/11 20s ISO:100</span>
        </div>
    </div>
`
]

var itemcount_fotka1 = itemdatabase_fotka1.length



var itemdatabase_dolomites_2026_rx100 = [
`
    <div id="dolomites_2026_rx100-1" onclick="fullscreen(this.id)" class="project-thumb-container">
        <img src="projects/photography/dolomites_2026_rx100/dolomites_2026_rx100-1-thumb.webp" style="pointer-events: none; width: 100%; height: auto;">
        <div style="display: none;" id="photo-data-source">
            <span style="margin-bottom: 2px;">Karersee, Italien</span>
            <span style="margin-bottom: 2px;">2026.07.14</span>
            <span style="margin-bottom: 2px;">SONY DSC-RX100M2</span>
            <span style="margin-bottom: 2px;">f/5 1/400s ISO:100</span>
        </div>
    </div>
`,
`
    <div id="dolomites_2026_rx100-2" onclick="fullscreen(this.id)" class="project-thumb-container">
        <img src="projects/photography/dolomites_2026_rx100/dolomites_2026_rx100-2-thumb.webp" style="pointer-events: none; width: 100%; height: auto;">
        <div style="display: none;" id="photo-data-source">
            <span style="margin-bottom: 2px;">Jouf de Sela, Itàlia</span>
            <span style="margin-bottom: 2px;">2026.07.13</span>
            <span style="margin-bottom: 2px;">SONY DSC-RX100M2</span>
            <span style="margin-bottom: 2px;">f/5 1/800s ISO:100</span>
        </div>
    </div>
`,
`
    <div id="dolomites_2026_rx100-3" onclick="fullscreen(this.id)" class="project-thumb-container">
        <img src="projects/photography/dolomites_2026_rx100/dolomites_2026_rx100-3-thumb.webp" style="pointer-events: none; width: 100%; height: auto;">
        <div style="display: none;" id="photo-data-source">
            <span style="margin-bottom: 2px;">Jouf de fascia, Itàlia</span>
            <span style="margin-bottom: 2px;">2026.07.13</span>
            <span style="margin-bottom: 2px;">SONY DSC-RX100M2</span>
            <span style="margin-bottom: 2px;">f/5 1/500s ISO:100</span>
        </div>
    </div>
`,
`
    <div id="dolomites_2026_rx100-4" onclick="fullscreen(this.id)" class="project-thumb-container">
        <img src="projects/photography/dolomites_2026_rx100/dolomites_2026_rx100-4-thumb.webp" style="pointer-events: none; width: 100%; height: auto; image-rendering: crisp-edges;">
        <div style="display: none;" id="photo-data-source">
            <span style="margin-bottom: 2px;">46.504N, 11.713E</span>
            <span style="margin-bottom: 2px;">2026.07.13</span>
            <span style="margin-bottom: 2px;">SONY DSC-RX100M2</span>
            <span style="margin-bottom: 2px;">f/5 1/1000s ISO:100</span>
        </div>
    </div>
`,
`
    <div id="dolomites_2026_rx100-5" onclick="fullscreen(this.id)" class="project-thumb-container">
        <img src="projects/photography/dolomites_2026_rx100/dolomites_2026_rx100-5-thumb.webp" style="pointer-events: none; width: 100%; height: auto;">
        <div style="display: none;" id="photo-data-source">
            <span style="margin-bottom: 2px;">46.504N, 11.713E</span>
            <span style="margin-bottom: 2px;">2026.07.13</span>
            <span style="margin-bottom: 2px;">SONY DSC-RX100M2</span>
            <span style="margin-bottom: 2px;">f/5 1/800s ISO:100</span>
        </div>
    </div>
`,
`
    <div id="dolomites_2026_rx100-6" onclick="fullscreen(this.id)" class="project-thumb-container">
        <img src="projects/photography/dolomites_2026_rx100/dolomites_2026_rx100-6-thumb.webp" style="pointer-events: none; width: 100%; height: auto;">
        <div style="display: none;" id="photo-data-source">
            <span style="margin-bottom: 2px;">46.500480N, 11.734000E</span>
            <span style="margin-bottom: 2px;">2026.07.13</span>
            <span style="margin-bottom: 2px;">SONY DSC-RX100M2</span>
            <span style="margin-bottom: 2px;">f/5 1/800s ISO:100</span>
        </div>
    </div>
`,
`
    <div id="dolomites_2026_rx100-7" onclick="fullscreen(this.id)" class="project-thumb-container">
        <img src="projects/photography/dolomites_2026_rx100/dolomites_2026_rx100-7-thumb.webp" style="pointer-events: none; width: 100%; height: auto;">
        <div style="display: none;" id="photo-data-source">
            <span style="margin-bottom: 2px;">46.500387N, 11.734239E</span>
            <span style="margin-bottom: 2px;">2026.07.13</span>
            <span style="margin-bottom: 2px;">SONY DSC-RX100M2</span>
            <span style="margin-bottom: 2px;">f/5 1/1600s ISO:100</span>
        </div>
    </div>
`,
`
    <div id="dolomites_2026_rx100-8" onclick="fullscreen(this.id)" class="project-thumb-container">
        <img src="projects/photography/dolomites_2026_rx100/dolomites_2026_rx100-8-thumb.webp" style="pointer-events: none; width: 100%; height: auto; image-rendering: crisp-edges;">
        <div style="display: none;" id="photo-data-source">
            <span style="margin-bottom: 2px;">46.501341N, 11.743503E</span>
            <span style="margin-bottom: 2px;">2026.07.13</span>
            <span style="margin-bottom: 2px;">SONY DSC-RX100M2</span>
            <span style="margin-bottom: 2px;">f/5 1/800s ISO:100</span>
        </div>
    </div>
`,
`
    <div id="dolomites_2026_rx100-9" onclick="fullscreen(this.id)" class="project-thumb-container">
        <img src="projects/photography/dolomites_2026_rx100/dolomites_2026_rx100-9-thumb.webp" style="pointer-events: none; width: 100%; height: auto;">
        <div style="display: none;" id="photo-data-source">
            <span style="margin-bottom: 2px;">46.499977N, 11.747346E</span>
            <span style="margin-bottom: 2px;">2026.07.13</span>
            <span style="margin-bottom: 2px;">SONY DSC-RX100M2</span>
            <span style="margin-bottom: 2px;">f/5 1/1250s ISO:100</span>
        </div>
    </div>
`,
`
    <div id="dolomites_2026_rx100-10" onclick="fullscreen(this.id)" class="project-thumb-container">
        <img src="projects/photography/dolomites_2026_rx100/dolomites_2026_rx100-10-thumb.webp" style="pointer-events: none; width: 100%; height: auto;">
        <div style="display: none;" id="photo-data-source">
            <span style="margin-bottom: 2px;">Jouf de Sela, Itàlia</span>
            <span style="margin-bottom: 2px;">2026.07.13</span>
            <span style="margin-bottom: 2px;">SONY DSC-RX100M2</span>
            <span style="margin-bottom: 2px;">f/5 1/1250s ISO:100</span>
        </div>
    </div>
`,
`
    <div id="dolomites_2026_rx100-11" onclick="fullscreen(this.id)" class="project-thumb-container">
        <img src="projects/photography/dolomites_2026_rx100/dolomites_2026_rx100-11-thumb.webp" style="pointer-events: none; width: 100%; height: auto;">
        <div style="display: none;" id="photo-data-source">
            <span style="margin-bottom: 2px;">Jouf de Sela, Itàlia</span>
            <span style="margin-bottom: 2px;">2026.07.13</span>
            <span style="margin-bottom: 2px;">SONY DSC-RX100M2</span>
            <span style="margin-bottom: 2px;">f/5 1/800s ISO:100</span>
        </div>
    </div>
`,
`
    <div id="dolomites_2026_rx100-12" onclick="fullscreen(this.id)" class="project-thumb-container">
        <img src="projects/photography/dolomites_2026_rx100/dolomites_2026_rx100-12-thumb.webp" style="pointer-events: none; width: 100%; height: auto;">
        <div style="display: none;" id="photo-data-source">
            <span style="margin-bottom: 2px;">Jouf de Sela, Itàlia</span>
            <span style="margin-bottom: 2px;">2026.07.13</span>
            <span style="margin-bottom: 2px;">SONY DSC-RX100M2</span>
            <span style="margin-bottom: 2px;">f/5 1/500s ISO:100</span>
        </div>
    </div>
`,
`
    <div id="dolomites_2026_rx100-13" onclick="fullscreen(this.id)" class="project-thumb-container">
        <img src="projects/photography/dolomites_2026_rx100/dolomites_2026_rx100-13-thumb.webp" style="pointer-events: none; width: 100%; height: auto;">
        <div style="display: none;" id="photo-data-source">
            <span style="margin-bottom: 2px;">Val de Vajolet, Itàlia</span>
            <span style="margin-bottom: 2px;">2026.07.12</span>
            <span style="margin-bottom: 2px;">SONY DSC-RX100M2</span>
            <span style="margin-bottom: 2px;">f/5 1/800s ISO:100</span>
        </div>
    </div>
`,
`
    <div id="dolomites_2026_rx100-14" onclick="fullscreen(this.id)" class="project-thumb-container">
        <img src="projects/photography/dolomites_2026_rx100/dolomites_2026_rx100-14-thumb.webp" style="pointer-events: none; width: 100%; height: auto;">
        <div style="display: none;" id="photo-data-source">
            <span style="margin-bottom: 2px;">Val de Vajolet, Itàlia</span>
            <span style="margin-bottom: 2px;">2026.07.12</span>
            <span style="margin-bottom: 2px;">SONY DSC-RX100M2</span>
            <span style="margin-bottom: 2px;">f/5 1/500s ISO:100</span>
        </div>
    </div>
`,
`
    <div id="dolomites_2026_rx100-15" onclick="fullscreen(this.id)" class="project-thumb-container">
        <img src="projects/photography/dolomites_2026_rx100/dolomites_2026_rx100-15-thumb.webp" style="pointer-events: none; width: 100%; height: auto;">
        <div style="display: none;" id="photo-data-source">
            <span style="margin-bottom: 2px;">Val de Vajolet, Itàlia</span>
            <span style="margin-bottom: 2px;">2026.07.12</span>
            <span style="margin-bottom: 2px;">SONY DSC-RX100M2</span>
            <span style="margin-bottom: 2px;">f/5 1/320s ISO:100</span>
        </div>
    </div>
`,
`
    <div id="dolomites_2026_rx100-16" onclick="fullscreen(this.id)" class="project-thumb-container">
        <img src="projects/photography/dolomites_2026_rx100/dolomites_2026_rx100-16-thumb.webp" style="pointer-events: none; width: 100%; height: auto;">
        <div style="display: none;" id="photo-data-source">
            <span style="margin-bottom: 2px;">Rifugio Roda di Vael, Italia</span>
            <span style="margin-bottom: 2px;">2026.07.11</span>
            <span style="margin-bottom: 2px;">SONY DSC-RX100M2</span>
            <span style="margin-bottom: 2px;">f/5 1/1000s ISO:100</span>
        </div>
    </div>
`,
`
    <div id="dolomites_2026_rx100-17" onclick="fullscreen(this.id)" class="project-thumb-container">
        <img src="projects/photography/dolomites_2026_rx100/dolomites_2026_rx100-17-thumb.webp" style="pointer-events: none; width: 100%; height: auto;">
        <div style="display: none;" id="photo-data-source">
            <span style="margin-bottom: 2px;">Col de Ciampac, Itàlia</span>
            <span style="margin-bottom: 2px;">2026.07.11</span>
            <span style="margin-bottom: 2px;">SONY DSC-RX100M2</span>
            <span style="margin-bottom: 2px;">f/5 1/1000s ISO:100</span>
        </div>
    </div>
`,
`
    <div id="dolomites_2026_rx100-18" onclick="fullscreen(this.id)" class="project-thumb-container">
        <img src="projects/photography/dolomites_2026_rx100/dolomites_2026_rx100-18-thumb.webp" style="pointer-events: none; width: 100%; height: auto;">
        <div style="display: none;" id="photo-data-source">
            <span style="margin-bottom: 2px;">46.418961N, 11.630334E</span>
            <span style="margin-bottom: 2px;">2026.07.11</span>
            <span style="margin-bottom: 2px;">SONY DSC-RX100M2</span>
            <span style="margin-bottom: 2px;">f/5 1/1000s ISO:100</span>
        </div>
    </div>
`,
`
    <div id="dolomites_2026_rx100-19" onclick="fullscreen(this.id)" class="project-thumb-container">
        <img src="projects/photography/dolomites_2026_rx100/dolomites_2026_rx100-19-thumb.webp" style="pointer-events: none; width: 100%; height: auto;">
        <div style="display: none;" id="photo-data-source">
            <span style="margin-bottom: 2px;">46.413868N, 11.622994E</span>
            <span style="margin-bottom: 2px;">2026.07.11</span>
            <span style="margin-bottom: 2px;">SONY DSC-RX100M2</span>
            <span style="margin-bottom: 2px;">f/5 1/1000s ISO:100</span>
        </div>
    </div>
`,
`
    <div id="dolomites_2026_rx100-20" onclick="fullscreen(this.id)" class="project-thumb-container">
        <img src="projects/photography/dolomites_2026_rx100/dolomites_2026_rx100-20-thumb.webp" style="pointer-events: none; width: 100%; height: auto;">
        <div style="display: none;" id="photo-data-source">
            <span style="margin-bottom: 2px;">46.414831N, 11.613945E</span>
            <span style="margin-bottom: 2px;">2026.07.11</span>
            <span style="margin-bottom: 2px;">SONY DSC-RX100M2</span>
            <span style="margin-bottom: 2px;">f/5 1/1000s ISO:100</span>
        </div>
    </div>
`,
`
    <div id="dolomites_2026_rx100-21" onclick="fullscreen(this.id)" class="project-thumb-container">
        <img src="projects/photography/dolomites_2026_rx100/dolomites_2026_rx100-21-thumb.webp" style="pointer-events: none; width: 100%; height: auto;">
        <div style="display: none;" id="photo-data-source">
            <span style="margin-bottom: 2px;">Jouf de Ciareja, Itàlia</span>
            <span style="margin-bottom: 2px;">2026.07.11</span>
            <span style="margin-bottom: 2px;">SONY DSC-RX100M2</span>
            <span style="margin-bottom: 2px;">f/5 1/640s ISO:100</span>
        </div>
    </div>
`,
`
    <div id="dolomites_2026_rx100-22" onclick="fullscreen(this.id)" class="project-thumb-container">
        <img src="projects/photography/dolomites_2026_rx100/dolomites_2026_rx100-22-thumb.webp" style="pointer-events: none; width: 100%; height: auto;">
        <div style="display: none;" id="photo-data-source">
            <span style="margin-bottom: 2px;">Jouf de Ciareja, Itàlia</span>
            <span style="margin-bottom: 2px;">2026.07.11</span>
            <span style="margin-bottom: 2px;">SONY DSC-RX100M2</span>
            <span style="margin-bottom: 2px;">f/5 1/1000s ISO:100</span>
        </div>
    </div>
`,
`
    <div id="dolomites_2026_rx100-23" onclick="fullscreen(this.id)" class="project-thumb-container">
        <img src="projects/photography/dolomites_2026_rx100/dolomites_2026_rx100-23-thumb.webp" style="pointer-events: none; width: 100%; height: auto;">
        <div style="display: none;" id="photo-data-source">
            <span style="margin-bottom: 2px;">Vich, Itàlia</span>
            <span style="margin-bottom: 2px;">2026.07.11</span>
            <span style="margin-bottom: 2px;">SONY DSC-RX100M2</span>
            <span style="margin-bottom: 2px;">f/5 1/1000s ISO:100</span>
        </div>
    </div>
`,
`
    <div id="dolomites_2026_rx100-24" onclick="fullscreen(this.id)" class="project-thumb-container">
        <img src="projects/photography/dolomites_2026_rx100/dolomites_2026_rx100-24-thumb.webp" style="pointer-events: none; width: 100%; height: auto;">
        <div style="display: none;" id="photo-data-source">
            <span style="margin-bottom: 2px;">Vich, Itàlia</span>
            <span style="margin-bottom: 2px;">2026.07.11</span>
            <span style="margin-bottom: 2px;">SONY DSC-RX100M2</span>
            <span style="margin-bottom: 2px;">f/5 1/500s ISO:100</span>
        </div>
    </div>
`,
`
    <div id="dolomites_2026_rx100-25" onclick="fullscreen(this.id)" class="project-thumb-container">
        <img src="projects/photography/dolomites_2026_rx100/dolomites_2026_rx100-25-thumb.webp" style="pointer-events: none; width: 100%; height: auto;">
        <div style="display: none;" id="photo-data-source">
            <span style="margin-bottom: 2px;">Passo Lavazè, Italia</span>
            <span style="margin-bottom: 2px;">2026.07.10</span>
            <span style="margin-bottom: 2px;">SONY DSC-RX100M2</span>
            <span style="margin-bottom: 2px;">f/4 1/1600s ISO:100</span>
        </div>
    </div>
`
]

var itemcount_dolomites_2026_rx100 = itemdatabase_dolomites_2026_rx100.length



// sorting for individual photoalbums
let selectedPhotographyAlbum;

function photoalbumsort(id) {
    selectedPhotographyAlbum = id
    document.getElementById("projects-column-1").innerHTML = ``
    document.getElementById("projects-column-2").innerHTML = ``
    if(window["itemcount_"+id] > 2){
        document.getElementById("projects-column-3").innerHTML = ``
    }

    let sorththreecounter_photosort = 1
    for(let f = 1; f <= window["itemcount_"+id]; f++) {
        if(window.innerWidth <= "1279" && window.innerWidth > "899" || window["itemcount_"+id] <= 2 && window.innerWidth > "899"){
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
        } else if(window.innerWidth <= "899" || window["itemcount_"+id] == 1) {
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



/*   Media queries   */

window.matchMedia("(max-width: 1279px)").addEventListener("change", () => {
    if(document.querySelector(".photography-album-name-g1") == null){
        photographysort()
        animateProjectTiles()
    } else {
        photoalbumsort(selectedPhotographyAlbum)
        animateProjectTiles()
    }
    
});

window.matchMedia("(max-width: 899px)").addEventListener("change", () => {
    if(document.querySelector(".photography-album-name-g1") == null){
        photographysort()
        animateProjectTiles()
    } else {
        photoalbumsort(selectedPhotographyAlbum)
        animateProjectTiles()
    }
});

