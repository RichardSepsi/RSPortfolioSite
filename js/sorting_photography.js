
// Define the total number of projects in this category.  CHANGE WHEN ADDING ITEMS !

let itemcount = 15



// Define all project thumbnails that will be displayed   CHANGE WHEN ADDING ITEMS !
// Items on the top of the list will be last on the website !

let itemdatabase = [
`
    <a id="natart.html" onclick="fadeout(this.id)" style="text-decoration: none; color: inherit;"><div class="project-thumb-container">
        <div style="background-color: royalblue; width: 100%; height: 156px;"></div>
        <div class="project-thumb-info-container">
            <div class="project-thumb-info-one"><span class="project-thumb-info-title">Test 1</span>
            <span class="project-thumb-info-sub one"></span></div>
            <span class="project-thumb-info-sub">9.10.2024</span>
        </div>
    </div></a>
`,
`
    <a id="natart.html" onclick="fadeout(this.id)" style="text-decoration: none; color: inherit;"><div class="project-thumb-container">
        <div style="background-color: royalblue; width: 100%; height: 216px;"></div>
        <div class="project-thumb-info-container">
            <div class="project-thumb-info-one"><span class="project-thumb-info-title">Test 2</span>
            <span class="project-thumb-info-sub one"></span></div>
            <span class="project-thumb-info-sub">9.10.2024</span>
        </div>
    </div></a>
`,
`
    <a id="natart.html" onclick="fadeout(this.id)" style="text-decoration: none; color: inherit;"><div class="project-thumb-container">
        <div style="background-color: royalblue; width: 100%; height: 356px;"></div>
        <div class="project-thumb-info-container">
            <div class="project-thumb-info-one"><span class="project-thumb-info-title">Test 3</span>
            <span class="project-thumb-info-sub one"></span></div>
            <span class="project-thumb-info-sub">9.10.2024</span>
        </div>
    </div></a>
`,
`
    <a id="natart.html" onclick="fadeout(this.id)" style="text-decoration: none; color: inherit;"><div class="project-thumb-container">
        <div style="background-color: royalblue; width: 100%; height: 216px;"></div>
        <div class="project-thumb-info-container">
            <div class="project-thumb-info-one"><span class="project-thumb-info-title">Test 4</span>
            <span class="project-thumb-info-sub one"></span></div>
            <span class="project-thumb-info-sub">9.10.2024</span>
        </div>
    </div></a>
`,
`
    <a id="natart.html" onclick="fadeout(this.id)" style="text-decoration: none; color: inherit;"><div class="project-thumb-container">
        <div style="background-color: royalblue; width: 100%; height: 356px;"></div>
        <div class="project-thumb-info-container">
            <div class="project-thumb-info-one"><span class="project-thumb-info-title">Test 5</span>
            <span class="project-thumb-info-sub one"></span></div>
            <span class="project-thumb-info-sub">9.10.2024</span>
        </div>
    </div></a>
`,
`
    <a id="natart.html" onclick="fadeout(this.id)" style="text-decoration: none; color: inherit;"><div class="project-thumb-container">
        <div style="background-color: royalblue; width: 100%; height: 156px;"></div>
        <div class="project-thumb-info-container">
            <div class="project-thumb-info-one"><span class="project-thumb-info-title">Test 6</span>
            <span class="project-thumb-info-sub one"></span></div>
            <span class="project-thumb-info-sub">9.10.2024</span>
        </div>
    </div></a>
`,
`
    <a id="natart.html" onclick="fadeout(this.id)" style="text-decoration: none; color: inherit;"><div class="project-thumb-container">
        <div style="background-color: royalblue; width: 100%; height: 316px;"></div>
        <div class="project-thumb-info-container">
            <div class="project-thumb-info-one"><span class="project-thumb-info-title">Test 7</span>
            <span class="project-thumb-info-sub one"></span></div>
            <span class="project-thumb-info-sub">9.10.2024</span>
        </div>
    </div></a>
`,
`
    <a id="natart.html" onclick="fadeout(this.id)" style="text-decoration: none; color: inherit;"><div class="project-thumb-container">
        <div style="background-color: royalblue; width: 100%; height: 256px;"></div>
        <div class="project-thumb-info-container">
            <div class="project-thumb-info-one"><span class="project-thumb-info-title">Test 8</span>
            <span class="project-thumb-info-sub one"></span></div>
            <span class="project-thumb-info-sub">9.10.2024</span>
        </div>
    </div></a>
`,
`
    <a id="natart.html" onclick="fadeout(this.id)" style="text-decoration: none; color: inherit;"><div class="project-thumb-container">
        <div style="background-color: royalblue; width: 100%; height: 216px;"></div>
        <div class="project-thumb-info-container">
            <div class="project-thumb-info-one"><span class="project-thumb-info-title">Test 9</span>
            <span class="project-thumb-info-sub one"></span></div>
            <span class="project-thumb-info-sub">9.10.2024</span>
        </div>
    </div></a>
`,
`
    <a id="natart.html" onclick="fadeout(this.id)" style="text-decoration: none; color: inherit;"><div class="project-thumb-container">
        <div style="background-color: royalblue; width: 100%; height: 156px;"></div>
        <div class="project-thumb-info-container">
            <div class="project-thumb-info-one"><span class="project-thumb-info-title">Test 10</span>
            <span class="project-thumb-info-sub one"></span></div>
            <span class="project-thumb-info-sub">9.10.2024</span>
        </div>
    </div></a>
`,
`
    <a id="natart.html" onclick="fadeout(this.id)" style="text-decoration: none; color: inherit;"><div class="project-thumb-container">
        <div style="background-color: royalblue; width: 100%; height: 316px;"></div>
        <div class="project-thumb-info-container">
            <div class="project-thumb-info-one"><span class="project-thumb-info-title">Test 11</span>
            <span class="project-thumb-info-sub one"></span></div>
            <span class="project-thumb-info-sub">9.10.2024</span>
        </div>
    </div></a>
`,
`
    <a id="natart.html" onclick="fadeout(this.id)" style="text-decoration: none; color: inherit;"><div class="project-thumb-container">
        <div style="background-color: royalblue; width: 100%; height: 356px;"></div>
        <div class="project-thumb-info-container">
            <div class="project-thumb-info-one"><span class="project-thumb-info-title">Test 12</span>
            <span class="project-thumb-info-sub one"></span></div>
            <span class="project-thumb-info-sub">9.10.2024</span>
        </div>
    </div></a>
`,
`
    <a id="natart.html" onclick="fadeout(this.id)" style="text-decoration: none; color: inherit;"><div class="project-thumb-container">
        <div style="background-color: royalblue; width: 100%; height: 216px;"></div>
        <div class="project-thumb-info-container">
            <div class="project-thumb-info-one"><span class="project-thumb-info-title">Test 13</span>
            <span class="project-thumb-info-sub one"></span></div>
            <span class="project-thumb-info-sub">9.10.2024</span>
        </div>
    </div></a>
`,
`
    <a id="natart.html" onclick="fadeout(this.id)" style="text-decoration: none; color: inherit;"><div class="project-thumb-container">
        <div style="background-color: royalblue; width: 100%; height: 256px;"></div>
        <div class="project-thumb-info-container">
            <div class="project-thumb-info-one"><span class="project-thumb-info-title">Test 14</span>
            <span class="project-thumb-info-sub one"></span></div>
            <span class="project-thumb-info-sub">9.10.2024</span>
        </div>
    </div></a>
`,
`
    <div id="menton_2024" onclick="fadeoutphotography(this.id)" class="project-thumb-container">
        <img src="projects/photography/menton-2024/thumb.webp" style="pointer-events: none; width: 100%; height: auto;">
        <div class="project-thumb-info-container">
            <div class="project-thumb-info-one"><span class="project-thumb-info-title">Menton 2024</span>
            <span class="project-thumb-info-sub one"></span></div>
            <span class="project-thumb-info-sub" id="photo-thumb-album-date">9.10.2024</span>
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
        console.log(window.innerWidth)
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




// Menton 2024 items

// Define the total number of projects in this category.  CHANGE WHEN ADDING ITEMS !

var itemcount_menton_2024 = 6



// Define all project thumbnails that will be displayed   CHANGE WHEN ADDING ITEMS !
// Items on the top of the list will be last on the website !

var itemdatabase_menton_2024 = [
`
    <div id="menton-2024-1" onclick="fullscreen(this.id)" class="project-thumb-container">
        <img src="projects/photography/menton-2024/thumb.webp" style="pointer-events: none; width: 100%; height: auto;">
        <div style="display: none;" id="photo-data-source">
            <span style="margin-bottom: 2px;">Menton, France</span>
            <span style="margin-bottom: 2px;">8.Aug.2024</span>
            <span style="margin-bottom: 2px;">Google Pixel 5</span>
            <span style="margin-bottom: 2px;">f/1,7 1/5832sec ISO:63</span>
        </div>
    </div>
`,
`
    <div id="menton-2024-3" onclick="fullscreen(this.id)" class="project-thumb-container">
        <img src="projects/photography/menton-2024/menton-2024-3-thumb.webp" style="pointer-events: none; width: 100%; height: auto;">
        <div style="display: none;" id="photo-data-source">
            <span style="margin-bottom: 2px;">Menton, France</span>
            <span style="margin-bottom: 2px;">8.Aug.2024</span>
            <span style="margin-bottom: 2px;">Google Pixel 5</span>
            <span style="margin-bottom: 2px;">f/1,7 1/5832sec ISO:63</span>
        </div>
    </div>
`,
`
    <div id="menton-2024-5" onclick="fullscreen(this.id)" class="project-thumb-container">
        <img src="projects/photography/menton-2024/menton-2024-5-thumb.webp" style="pointer-events: none; width: 100%; height: auto;">
        <div style="display: none;" id="photo-data-source">
            <span style="margin-bottom: 2px;">test, test</span>
            <span style="margin-bottom: 2px;">8.Aug.2024</span>
            <span style="margin-bottom: 2px;">Google Pixel 5</span>
            <span style="margin-bottom: 2px;">f/1,7 1/5832sec ISO:63</span>
        </div>
    </div>
`,
`
    <div id="menton-2024-2" onclick="fullscreen(this.id)" class="project-thumb-container">
        <img src="projects/photography/menton-2024/menton-2024-2-thumb.webp" style="pointer-events: none; width: 100%; height: auto;">
        <div style="display: none;" id="photo-data-source">
            <span style="margin-bottom: 2px;">Menton, France</span>
            <span style="margin-bottom: 2px;">8.Aug.2024</span>
            <span style="margin-bottom: 2px;">Google Pixel 5</span>
            <span style="margin-bottom: 2px;">f/1,7 1/5832sec ISO:63</span>
        </div>
    </div>
`,
`
    <div id="menton-2024-6" onclick="fullscreen(this.id)" class="project-thumb-container">
        <img src="projects/photography/menton-2024/menton-2024-6-thumb.webp" style="pointer-events: none; width: 100%; height: auto;">
        <div style="display: none;" id="photo-data-source">
            <span style="margin-bottom: 2px;">Menton, France</span>
            <span style="margin-bottom: 2px;">8.Aug.2024</span>
            <span style="margin-bottom: 2px;">Google Pixel 5</span>
            <span style="margin-bottom: 2px;">f/1,7 1/5832sec ISO:63</span>
        </div>
    </div>
`,
`
    <div id="menton-2024-4" onclick="fullscreen(this.id)" class="project-thumb-container">
        <img src="projects/photography/menton-2024/menton-2024-4-thumb.webp" style="pointer-events: none; width: 100%; height: auto;">
        <div style="display: none;" id="photo-data-source">
            <span style="margin-bottom: 2px;">Menton, France</span>
            <span style="margin-bottom: 2px;">8.Aug.2024</span>
            <span style="margin-bottom: 2px;">Google Pixel 5</span>
            <span style="margin-bottom: 2px;">f/1,7 1/5832sec ISO:63</span>
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

