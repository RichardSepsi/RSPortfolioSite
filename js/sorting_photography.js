
// Define the total number of projects in this category.  CHANGE WHEN ADDING ITEMS !

let itemcount = 4



// Define all project thumbnails that will be displayed   CHANGE WHEN ADDING ITEMS !
// Items on the top of the list will be last on the website !

// REMOVED
/*
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
`,
*/

let itemdatabase = [
`
    <div id="bratislava_september_2025" onclick="fadeoutphotography(this.id)" class="project-thumb-container">
        <img src="projects/photography/bratislava-september-2025/bratislava-september-2025-4-thumb.webp" style="pointer-events: none; width: 100%; height: auto;">
        <div class="project-thumb-info-container">
            <div class="project-thumb-info-one"><span class="project-thumb-info-title">Bratislava Sep.2025</span>
            <span class="project-thumb-info-sub one"></span></div>
            <span class="project-thumb-info-sub" id="photo-thumb-album-date">30.9.2025</span>
        </div>
    </div>
`,
`
    <div id="prague_september_2025" onclick="fadeoutphotography(this.id)" class="project-thumb-container">
        <img src="projects/photography/prague-september-2025/prague-september-2025-9-thumb.webp" style="pointer-events: none; width: 100%; height: auto;">
        <div class="project-thumb-info-container">
            <div class="project-thumb-info-one"><span class="project-thumb-info-title">Praha Sep.2025</span>
            <span class="project-thumb-info-sub one"></span></div>
            <span class="project-thumb-info-sub" id="photo-thumb-album-date">30.9.2025</span>
        </div>
    </div>
`,
`
    <div id="bratislava_october_2025" onclick="fadeoutphotography(this.id)" class="project-thumb-container">
        <img src="projects/photography/bratislava-october-2025/bratislava-october-2025-16-thumb.webp" style="pointer-events: none; width: 100%; height: auto;">
        <div class="project-thumb-info-container">
            <div class="project-thumb-info-one"><span class="project-thumb-info-title">Bratislava Oct.2025</span>
            <span class="project-thumb-info-sub one"></span></div>
            <span class="project-thumb-info-sub" id="photo-thumb-album-date">30.10.2025</span>
        </div>
    </div>
`,
`
    <div id="prague_october_2025" onclick="fadeoutphotography(this.id)" class="project-thumb-container">
        <img src="projects/photography/prague-october-2025/prague-october-2025-41-thumb.webp" style="pointer-events: none; width: 100%; height: auto;">
        <div class="project-thumb-info-container">
            <div class="project-thumb-info-one"><span class="project-thumb-info-title">Praha Oct.2025</span>
            <span class="project-thumb-info-sub one"></span></div>
            <span class="project-thumb-info-sub" id="photo-thumb-album-date">30.10.2025</span>
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



// Bratislava Sep. 2025 items

// Define the total number of projects in this category.  CHANGE WHEN ADDING ITEMS !

var itemcount_bratislava_september_2025 = 14



// Define all project thumbnails that will be displayed   CHANGE WHEN ADDING ITEMS !
// Items on the top of the list will be last on the website !

var itemdatabase_bratislava_september_2025 = [
`
    <div id="bratislava-september-2025-14" onclick="fullscreen(this.id)" class="project-thumb-container">
        <img src="projects/photography/bratislava-september-2025/bratislava-september-2025-14-thumb.webp" style="pointer-events: none; width: 100%; height: auto;">
        <div style="display: none;" id="photo-data-source">
            <span style="margin-bottom: 2px;">Bratislava, Slovensko</span>
            <span style="margin-bottom: 2px;">28.Sep.2025</span>
            <span style="margin-bottom: 2px;">SONY DSC-RX100M2</span>
            <span style="margin-bottom: 2px;">f/4.5 1/30sec ISO:200</span>
        </div>
    </div>
`,
`
    <div id="bratislava-september-2025-13" onclick="fullscreen(this.id)" class="project-thumb-container">
        <img src="projects/photography/bratislava-september-2025/bratislava-september-2025-13-thumb.webp" style="pointer-events: none; width: 100%; height: auto;">
        <div style="display: none;" id="photo-data-source">
            <span style="margin-bottom: 2px;">Bratislava, Slovensko</span>
            <span style="margin-bottom: 2px;">27.Sep.2025</span>
            <span style="margin-bottom: 2px;">SONY DSC-RX100M2</span>
            <span style="margin-bottom: 2px;">f/8 1/20sec ISO:100</span>
        </div>
    </div>
`,
`
    <div id="bratislava-september-2025-12" onclick="fullscreen(this.id)" class="project-thumb-container">
        <img src="projects/photography/bratislava-september-2025/bratislava-september-2025-12-thumb.webp" style="pointer-events: none; width: 100%; height: auto;">
        <div style="display: none;" id="photo-data-source">
            <span style="margin-bottom: 2px;">Bratislava, Slovensko</span>
            <span style="margin-bottom: 2px;">27.Sep.2025</span>
            <span style="margin-bottom: 2px;">SONY DSC-RX100M2</span>
            <span style="margin-bottom: 2px;">f/8 1/20sec ISO:100</span>
        </div>
    </div>
`,
`
    <div id="bratislava-september-2025-11" onclick="fullscreen(this.id)" class="project-thumb-container">
        <img src="projects/photography/bratislava-september-2025/bratislava-september-2025-11-thumb.webp" style="pointer-events: none; width: 100%; height: auto;">
        <div style="display: none;" id="photo-data-source">
            <span style="margin-bottom: 2px;">Bratislava, Slovensko</span>
            <span style="margin-bottom: 2px;">27.Sep.2025</span>
            <span style="margin-bottom: 2px;">SONY DSC-RX100M2</span>
            <span style="margin-bottom: 2px;">f/10 1/15sec ISO:100</span>
        </div>
    </div>
`,
`
    <div id="bratislava-september-2025-10" onclick="fullscreen(this.id)" class="project-thumb-container">
        <img src="projects/photography/bratislava-september-2025/bratislava-september-2025-10-thumb.webp" style="pointer-events: none; width: 100%; height: auto;">
        <div style="display: none;" id="photo-data-source">
            <span style="margin-bottom: 2px;">Bratislava, Slovensko</span>
            <span style="margin-bottom: 2px;">27.Sep.2025</span>
            <span style="margin-bottom: 2px;">SONY DSC-RX100M2</span>
            <span style="margin-bottom: 2px;">f/9 1/60sec ISO:100</span>
        </div>
    </div>
`,
`
    <div id="bratislava-september-2025-9" onclick="fullscreen(this.id)" class="project-thumb-container">
        <img src="projects/photography/bratislava-september-2025/bratislava-september-2025-9-thumb.webp" style="pointer-events: none; width: 100%; height: auto;">
        <div style="display: none;" id="photo-data-source">
            <span style="margin-bottom: 2px;">Bratislava, Slovensko</span>
            <span style="margin-bottom: 2px;">27.Sep.2025</span>
            <span style="margin-bottom: 2px;">SONY DSC-RX100M2</span>
            <span style="margin-bottom: 2px;">f/8 1/60sec ISO:100</span>
        </div>
    </div>
`,
`
    <div id="bratislava-september-2025-8" onclick="fullscreen(this.id)" class="project-thumb-container">
        <img src="projects/photography/bratislava-september-2025/bratislava-september-2025-8-thumb.webp" style="pointer-events: none; width: 100%; height: auto;">
        <div style="display: none;" id="photo-data-source">
            <span style="margin-bottom: 2px;">Bratislava, Slovensko</span>
            <span style="margin-bottom: 2px;">27.Sep.2025</span>
            <span style="margin-bottom: 2px;">SONY DSC-RX100M2</span>
            <span style="margin-bottom: 2px;">f/5.6 1/100sec ISO:100</span>
        </div>
    </div>
`,
`
    <div id="bratislava-september-2025-7" onclick="fullscreen(this.id)" class="project-thumb-container">
        <img src="projects/photography/bratislava-september-2025/bratislava-september-2025-7-thumb.webp" style="pointer-events: none; width: 100%; height: auto;">
        <div style="display: none;" id="photo-data-source">
            <span style="margin-bottom: 2px;">Bratislava, Slovensko</span>
            <span style="margin-bottom: 2px;">27.Sep.2025</span>
            <span style="margin-bottom: 2px;">SONY DSC-RX100M2</span>
            <span style="margin-bottom: 2px;">f/5.6 1/80sec ISO:100</span>
        </div>
    </div>
`,
`
    <div id="bratislava-september-2025-6" onclick="fullscreen(this.id)" class="project-thumb-container">
        <img src="projects/photography/bratislava-september-2025/bratislava-september-2025-6-thumb.webp" style="pointer-events: none; width: 100%; height: auto;">
        <div style="display: none;" id="photo-data-source">
            <span style="margin-bottom: 2px;">Bratislava, Slovensko</span>
            <span style="margin-bottom: 2px;">27.Sep.2025</span>
            <span style="margin-bottom: 2px;">SONY DSC-RX100M2</span>
            <span style="margin-bottom: 2px;">f/5 1/1250sec ISO:100</span>
        </div>
    </div>
`,
`
    <div id="bratislava-september-2025-5" onclick="fullscreen(this.id)" class="project-thumb-container">
        <img src="projects/photography/bratislava-september-2025/bratislava-september-2025-5-thumb.webp" style="pointer-events: none; width: 100%; height: auto;">
        <div style="display: none;" id="photo-data-source">
            <span style="margin-bottom: 2px;">Bratislava, Slovensko</span>
            <span style="margin-bottom: 2px;">27.Sep.2025</span>
            <span style="margin-bottom: 2px;">SONY DSC-RX100M2</span>
            <span style="margin-bottom: 2px;">f/5 1/400sec ISO:100</span>
        </div>
    </div>
`,
`
    <div id="bratislava-september-2025-4" onclick="fullscreen(this.id)" class="project-thumb-container">
        <img src="projects/photography/bratislava-september-2025/bratislava-september-2025-4-thumb.webp" style="pointer-events: none; width: 100%; height: auto;">
        <div style="display: none;" id="photo-data-source">
            <span style="margin-bottom: 2px;">Bratislava, Slovensko</span>
            <span style="margin-bottom: 2px;">27.Sep.2025</span>
            <span style="margin-bottom: 2px;">SONY DSC-RX100M2</span>
            <span style="margin-bottom: 2px;">f/5 1/800sec ISO:100</span>
        </div>
    </div>
`,
`
    <div id="bratislava-september-2025-3" onclick="fullscreen(this.id)" class="project-thumb-container">
        <img src="projects/photography/bratislava-september-2025/bratislava-september-2025-3-thumb.webp" style="pointer-events: none; width: 100%; height: auto;">
        <div style="display: none;" id="photo-data-source">
            <span style="margin-bottom: 2px;">Bratislava, Slovensko</span>
            <span style="margin-bottom: 2px;">27.Sep.2025</span>
            <span style="margin-bottom: 2px;">SONY DSC-RX100M2</span>
            <span style="margin-bottom: 2px;">f/5 1/800sec ISO:100</span>
        </div>
    </div>
`,
`
    <div id="bratislava-september-2025-2" onclick="fullscreen(this.id)" class="project-thumb-container">
        <img src="projects/photography/bratislava-september-2025/bratislava-september-2025-2-thumb.webp" style="pointer-events: none; width: 100%; height: auto;">
        <div style="display: none;" id="photo-data-source">
            <span style="margin-bottom: 2px;">Bratislava, Slovensko</span>
            <span style="margin-bottom: 2px;">27.Sep.2025</span>
            <span style="margin-bottom: 2px;">SONY DSC-RX100M2</span>
            <span style="margin-bottom: 2px;">f/5.6 1/2000sec ISO:100</span>
        </div>
    </div>
`,
`
    <div id="bratislava-september-2025-1" onclick="fullscreen(this.id)" class="project-thumb-container">
        <img src="projects/photography/bratislava-september-2025/bratislava-september-2025-1-thumb.webp" style="pointer-events: none; width: 100%; height: auto;">
        <div style="display: none;" id="photo-data-source">
            <span style="margin-bottom: 2px;">Bratislava, Slovensko</span>
            <span style="margin-bottom: 2px;">27.Sep.2025</span>
            <span style="margin-bottom: 2px;">SONY DSC-RX100M2</span>
            <span style="margin-bottom: 2px;">f/5.6 1/1000sec ISO:100</span>
        </div>
    </div>
`
]



// Praha Sep. 2025 items

// Define the total number of projects in this category.  CHANGE WHEN ADDING ITEMS !

var itemcount_prague_september_2025 = 13



// Define all project thumbnails that will be displayed   CHANGE WHEN ADDING ITEMS !
// Items on the top of the list will be last on the website !

var itemdatabase_prague_september_2025 = [
`
    <div id="prague-september-2025-13" onclick="fullscreen(this.id)" class="project-thumb-container">
        <img src="projects/photography/prague-september-2025/prague-september-2025-13-thumb.webp" style="pointer-events: none; width: 100%; height: auto;">
        <div style="display: none;" id="photo-data-source">
            <span style="margin-bottom: 2px;">Praha, Česko</span>
            <span style="margin-bottom: 2px;">30.Sep.2025</span>
            <span style="margin-bottom: 2px;">SONY DSC-RX100M2</span>
            <span style="margin-bottom: 2px;">f/8 1/25sec ISO:100</span>
        </div>
    </div>
`,
`
    <div id="prague-september-2025-12" onclick="fullscreen(this.id)" class="project-thumb-container">
        <img src="projects/photography/prague-september-2025/prague-september-2025-12-thumb.webp" style="pointer-events: none; width: 100%; height: auto;">
        <div style="display: none;" id="photo-data-source">
            <span style="margin-bottom: 2px;">Praha, Česko</span>
            <span style="margin-bottom: 2px;">30.Sep.2025</span>
            <span style="margin-bottom: 2px;">SONY DSC-RX100M2</span>
            <span style="margin-bottom: 2px;">f/10 1/30sec ISO:100</span>
        </div>
    </div>
`,
`
    <div id="prague-september-2025-11" onclick="fullscreen(this.id)" class="project-thumb-container">
        <img src="projects/photography/prague-september-2025/prague-september-2025-11-thumb.webp" style="pointer-events: none; width: 100%; height: auto;">
        <div style="display: none;" id="photo-data-source">
            <span style="margin-bottom: 2px;">Praha, Česko</span>
            <span style="margin-bottom: 2px;">30.Sep.2025</span>
            <span style="margin-bottom: 2px;">SONY DSC-RX100M2</span>
            <span style="margin-bottom: 2px;">f/4.9 1/100sec ISO:100</span>
        </div>
    </div>
`,
`
    <div id="prague-september-2025-10" onclick="fullscreen(this.id)" class="project-thumb-container">
        <img src="projects/photography/prague-september-2025/prague-september-2025-10-thumb.webp" style="pointer-events: none; width: 100%; height: auto;">
        <div style="display: none;" id="photo-data-source">
            <span style="margin-bottom: 2px;">Praha, Česko</span>
            <span style="margin-bottom: 2px;">30.Sep.2025</span>
            <span style="margin-bottom: 2px;">SONY DSC-RX100M2</span>
            <span style="margin-bottom: 2px;">f/4.9 1/40sec ISO:100</span>
        </div>
    </div>
`,
`
    <div id="prague-september-2025-9" onclick="fullscreen(this.id)" class="project-thumb-container">
        <img src="projects/photography/prague-september-2025/prague-september-2025-9-thumb.webp" style="pointer-events: none; width: 100%; height: auto;">
        <div style="display: none;" id="photo-data-source">
            <span style="margin-bottom: 2px;">Praha, Česko</span>
            <span style="margin-bottom: 2px;">30.Sep.2025</span>
            <span style="margin-bottom: 2px;">SONY DSC-RX100M2</span>
            <span style="margin-bottom: 2px;">f/7.1 1/320sec ISO:100</span>
        </div>
    </div>
`,
`
    <div id="prague-september-2025-8" onclick="fullscreen(this.id)" class="project-thumb-container">
        <img src="projects/photography/prague-september-2025/prague-september-2025-8-thumb.webp" style="pointer-events: none; width: 100%; height: auto;">
        <div style="display: none;" id="photo-data-source">
            <span style="margin-bottom: 2px;">Praha, Česko</span>
            <span style="margin-bottom: 2px;">30.Sep.2025</span>
            <span style="margin-bottom: 2px;">SONY DSC-RX100M2</span>
            <span style="margin-bottom: 2px;">f/7.1 1/160sec ISO:100</span>
        </div>
    </div>
`,
`
    <div id="prague-september-2025-7" onclick="fullscreen(this.id)" class="project-thumb-container">
        <img src="projects/photography/prague-september-2025/prague-september-2025-7-thumb.webp" style="pointer-events: none; width: 100%; height: auto;">
        <div style="display: none;" id="photo-data-source">
            <span style="margin-bottom: 2px;">Praha, Česko</span>
            <span style="margin-bottom: 2px;">30.Sep.2025</span>
            <span style="margin-bottom: 2px;">SONY DSC-RX100M2</span>
            <span style="margin-bottom: 2px;">f/3.5 1/20sec ISO:100</span>
        </div>
    </div>
`,
`
    <div id="prague-september-2025-6" onclick="fullscreen(this.id)" class="project-thumb-container">
        <img src="projects/photography/prague-september-2025/prague-september-2025-6-thumb.webp" style="pointer-events: none; width: 100%; height: auto;">
        <div style="display: none;" id="photo-data-source">
            <span style="margin-bottom: 2px;">Praha, Česko</span>
            <span style="margin-bottom: 2px;">30.Sep.2025</span>
            <span style="margin-bottom: 2px;">SONY DSC-RX100M2</span>
            <span style="margin-bottom: 2px;">f/3.5 1/20sec ISO:100</span>
        </div>
    </div>
`,
`
    <div id="prague-september-2025-5" onclick="fullscreen(this.id)" class="project-thumb-container">
        <img src="projects/photography/prague-september-2025/prague-september-2025-5-thumb.webp" style="pointer-events: none; width: 100%; height: auto;">
        <div style="display: none;" id="photo-data-source">
            <span style="margin-bottom: 2px;">Praha, Česko</span>
            <span style="margin-bottom: 2px;">30.Sep.2025</span>
            <span style="margin-bottom: 2px;">SONY DSC-RX100M2</span>
            <span style="margin-bottom: 2px;">f/8 1/100sec ISO:100</span>
        </div>
    </div>
`,
`
    <div id="prague-september-2025-4" onclick="fullscreen(this.id)" class="project-thumb-container">
        <img src="projects/photography/prague-september-2025/prague-september-2025-4-thumb.webp" style="pointer-events: none; width: 100%; height: auto;">
        <div style="display: none;" id="photo-data-source">
            <span style="margin-bottom: 2px;">Praha, Česko</span>
            <span style="margin-bottom: 2px;">30.Sep.2025</span>
            <span style="margin-bottom: 2px;">SONY DSC-RX100M2</span>
            <span style="margin-bottom: 2px;">f/8 1/160sec ISO:100</span>
        </div>
    </div>
`,
`
    <div id="prague-september-2025-3" onclick="fullscreen(this.id)" class="project-thumb-container">
        <img src="projects/photography/prague-september-2025/prague-september-2025-3-thumb.webp" style="pointer-events: none; width: 100%; height: auto;">
        <div style="display: none;" id="photo-data-source">
            <span style="margin-bottom: 2px;">Praha, Česko</span>
            <span style="margin-bottom: 2px;">29.Sep.2025</span>
            <span style="margin-bottom: 2px;">SONY DSC-RX100M2</span>
            <span style="margin-bottom: 2px;">f/10 1/125sec ISO:100</span>
        </div>
    </div>
`,
`
    <div id="prague-september-2025-2" onclick="fullscreen(this.id)" class="project-thumb-container">
        <img src="projects/photography/prague-september-2025/prague-september-2025-2-thumb.webp" style="pointer-events: none; width: 100%; height: auto;">
        <div style="display: none;" id="photo-data-source">
            <span style="margin-bottom: 2px;">Praha, Česko</span>
            <span style="margin-bottom: 2px;">29.Sep.2025</span>
            <span style="margin-bottom: 2px;">SONY DSC-RX100M2</span>
            <span style="margin-bottom: 2px;">f/7.1 1/250sec ISO:100</span>
        </div>
    </div>
`,
`
    <div id="prague-september-2025-1" onclick="fullscreen(this.id)" class="project-thumb-container">
        <img src="projects/photography/prague-september-2025/prague-september-2025-1-thumb.webp" style="pointer-events: none; width: 100%; height: auto;">
        <div style="display: none;" id="photo-data-source">
            <span style="margin-bottom: 2px;">Praha, Česko</span>
            <span style="margin-bottom: 2px;">28.Sep.2025</span>
            <span style="margin-bottom: 2px;">SONY DSC-RX100M2</span>
            <span style="margin-bottom: 2px;">f/6.3 1/100sec ISO:200</span>
        </div>
    </div>
`
]



// Bratislava Oct. 2025 items

// Define the total number of projects in this category.  CHANGE WHEN ADDING ITEMS !

var itemcount_bratislava_october_2025 = 18



// Define all project thumbnails that will be displayed   CHANGE WHEN ADDING ITEMS !
// Items on the top of the list will be last on the website !

var itemdatabase_bratislava_october_2025 = [
`
    <div id="bratislava-october-2025-18" onclick="fullscreen(this.id)" class="project-thumb-container">
        <img src="projects/photography/bratislava-october-2025/bratislava-october-2025-18-thumb.webp" style="pointer-events: none; width: 100%; height: auto;">
        <div style="display: none;" id="photo-data-source">
            <span style="margin-bottom: 2px;">Bratislava, Slovensko</span>
            <span style="margin-bottom: 2px;">12.Oct.2025</span>
            <span style="margin-bottom: 2px;">SONY DSC-RX100M2</span>
            <span style="margin-bottom: 2px;">f/4.9 1/160sec ISO:200</span>
        </div>
    </div>
`,
`
    <div id="bratislava-october-2025-17" onclick="fullscreen(this.id)" class="project-thumb-container">
        <img src="projects/photography/bratislava-october-2025/bratislava-october-2025-17-thumb.webp" style="pointer-events: none; width: 100%; height: auto;">
        <div style="display: none;" id="photo-data-source">
            <span style="margin-bottom: 2px;">Bratislava, Slovensko</span>
            <span style="margin-bottom: 2px;">12.Oct.2025</span>
            <span style="margin-bottom: 2px;">SONY DSC-RX100M2</span>
            <span style="margin-bottom: 2px;">f/4 1/200sec ISO:200</span>
        </div>
    </div>
`,
`
    <div id="bratislava-october-2025-16" onclick="fullscreen(this.id)" class="project-thumb-container">
        <img src="projects/photography/bratislava-october-2025/bratislava-october-2025-16-thumb.webp" style="pointer-events: none; width: 100%; height: auto;">
        <div style="display: none;" id="photo-data-source">
            <span style="margin-bottom: 2px;">Bratislava, Slovensko</span>
            <span style="margin-bottom: 2px;">19.Oct.2025</span>
            <span style="margin-bottom: 2px;">SONY DSC-RX100M2</span>
            <span style="margin-bottom: 2px;">f/4.9 1/40sec ISO:3200</span>
        </div>
    </div>
`,
`
    <div id="bratislava-october-2025-15" onclick="fullscreen(this.id)" class="project-thumb-container">
        <img src="projects/photography/bratislava-october-2025/bratislava-october-2025-15-thumb.webp" style="pointer-events: none; width: 100%; height: auto;">
        <div style="display: none;" id="photo-data-source">
            <span style="margin-bottom: 2px;">Bratislava, Slovensko</span>
            <span style="margin-bottom: 2px;">19.Oct.2025</span>
            <span style="margin-bottom: 2px;">SONY DSC-RX100M2</span>
            <span style="margin-bottom: 2px;">f/5 1/30sec ISO:3200</span>
        </div>
    </div>
`,
`
    <div id="bratislava-october-2025-14" onclick="fullscreen(this.id)" class="project-thumb-container">
        <img src="projects/photography/bratislava-october-2025/bratislava-october-2025-14-thumb.webp" style="pointer-events: none; width: 100%; height: auto;">
        <div style="display: none;" id="photo-data-source">
            <span style="margin-bottom: 2px;">Bratislava, Slovensko</span>
            <span style="margin-bottom: 2px;">19.Oct.2025</span>
            <span style="margin-bottom: 2px;">SONY DSC-RX100M2</span>
            <span style="margin-bottom: 2px;">f/4.9 1/40sec ISO:100</span>
        </div>
    </div>
`,
`
    <div id="bratislava-october-2025-13" onclick="fullscreen(this.id)" class="project-thumb-container">
        <img src="projects/photography/bratislava-october-2025/bratislava-october-2025-13-thumb.webp" style="pointer-events: none; width: 100%; height: auto;">
        <div style="display: none;" id="photo-data-source">
            <span style="margin-bottom: 2px;">Bratislava, Slovensko</span>
            <span style="margin-bottom: 2px;">19.Oct.2025</span>
            <span style="margin-bottom: 2px;">SONY DSC-RX100M2</span>
            <span style="margin-bottom: 2px;">f/4.9 1/200sec ISO:100</span>
        </div>
    </div>
`,
`
    <div id="bratislava-october-2025-12" onclick="fullscreen(this.id)" class="project-thumb-container">
        <img src="projects/photography/bratislava-october-2025/bratislava-october-2025-12-thumb.webp" style="pointer-events: none; width: 100%; height: auto;">
        <div style="display: none;" id="photo-data-source">
            <span style="margin-bottom: 2px;">Bratislava, Slovensko</span>
            <span style="margin-bottom: 2px;">19.Oct.2025</span>
            <span style="margin-bottom: 2px;">SONY DSC-RX100M2</span>
            <span style="margin-bottom: 2px;">f/4.9 1/200sec ISO:100</span>
        </div>
    </div>
`,
`
    <div id="bratislava-october-2025-11" onclick="fullscreen(this.id)" class="project-thumb-container">
        <img src="projects/photography/bratislava-october-2025/bratislava-october-2025-11-thumb.webp" style="pointer-events: none; width: 100%; height: auto;">
        <div style="display: none;" id="photo-data-source">
            <span style="margin-bottom: 2px;">Bratislava, Slovensko</span>
            <span style="margin-bottom: 2px;">19.Oct.2025</span>
            <span style="margin-bottom: 2px;">SONY DSC-RX100M2</span>
            <span style="margin-bottom: 2px;">f/8 1/200sec ISO:100</span>
        </div>
    </div>
`,
`
    <div id="bratislava-october-2025-10" onclick="fullscreen(this.id)" class="project-thumb-container">
        <img src="projects/photography/bratislava-october-2025/bratislava-october-2025-10-thumb.webp" style="pointer-events: none; width: 100%; height: auto;">
        <div style="display: none;" id="photo-data-source">
            <span style="margin-bottom: 2px;">Bratislava, Slovensko</span>
            <span style="margin-bottom: 2px;">19.Oct.2025</span>
            <span style="margin-bottom: 2px;">SONY DSC-RX100M2</span>
            <span style="margin-bottom: 2px;">f/8 1/160sec ISO:100</span>
        </div>
    </div>
`,
`
    <div id="bratislava-october-2025-9" onclick="fullscreen(this.id)" class="project-thumb-container">
        <img src="projects/photography/bratislava-october-2025/bratislava-october-2025-9-thumb.webp" style="pointer-events: none; width: 100%; height: auto;">
        <div style="display: none;" id="photo-data-source">
            <span style="margin-bottom: 2px;">Bratislava, Slovensko</span>
            <span style="margin-bottom: 2px;">19.Oct.2025</span>
            <span style="margin-bottom: 2px;">SONY DSC-RX100M2</span>
            <span style="margin-bottom: 2px;">f/8 1/160sec ISO:100</span>
        </div>
    </div>
`,
`
    <div id="bratislava-october-2025-8" onclick="fullscreen(this.id)" class="project-thumb-container">
        <img src="projects/photography/bratislava-october-2025/bratislava-october-2025-8-thumb.webp" style="pointer-events: none; width: 100%; height: auto;">
        <div style="display: none;" id="photo-data-source">
            <span style="margin-bottom: 2px;">Bratislava, Slovensko</span>
            <span style="margin-bottom: 2px;">19.Oct.2025</span>
            <span style="margin-bottom: 2px;">SONY DSC-RX100M2</span>
            <span style="margin-bottom: 2px;">f/8 1/200sec ISO:100</span>
        </div>
    </div>
`,
`
    <div id="bratislava-october-2025-7" onclick="fullscreen(this.id)" class="project-thumb-container">
        <img src="projects/photography/bratislava-october-2025/bratislava-october-2025-7-thumb.webp" style="pointer-events: none; width: 100%; height: auto;">
        <div style="display: none;" id="photo-data-source">
            <span style="margin-bottom: 2px;">Bratislava, Slovensko</span>
            <span style="margin-bottom: 2px;">19.Oct.2025</span>
            <span style="margin-bottom: 2px;">SONY DSC-RX100M2</span>
            <span style="margin-bottom: 2px;">f/9 1/800sec ISO:400</span>
        </div>
    </div>
`,
`
    <div id="bratislava-october-2025-6" onclick="fullscreen(this.id)" class="project-thumb-container">
        <img src="projects/photography/bratislava-october-2025/bratislava-october-2025-6-thumb.webp" style="pointer-events: none; width: 100%; height: auto;">
        <div style="display: none;" id="photo-data-source">
            <span style="margin-bottom: 2px;">Bratislava, Slovensko</span>
            <span style="margin-bottom: 2px;">19.Oct.2025</span>
            <span style="margin-bottom: 2px;">SONY DSC-RX100M2</span>
            <span style="margin-bottom: 2px;">f/8 1/250sec ISO:100</span>
        </div>
    </div>
`,
`
    <div id="bratislava-october-2025-5" onclick="fullscreen(this.id)" class="project-thumb-container">
        <img src="projects/photography/bratislava-october-2025/bratislava-october-2025-5-thumb.webp" style="pointer-events: none; width: 100%; height: auto;">
        <div style="display: none;" id="photo-data-source">
            <span style="margin-bottom: 2px;">Bratislava, Slovensko</span>
            <span style="margin-bottom: 2px;">19.Oct.2025</span>
            <span style="margin-bottom: 2px;">SONY DSC-RX100M2</span>
            <span style="margin-bottom: 2px;">f/9 1/320sec ISO:400</span>
        </div>
    </div>
`,
`
    <div id="bratislava-october-2025-4" onclick="fullscreen(this.id)" class="project-thumb-container">
        <img src="projects/photography/bratislava-october-2025/bratislava-october-2025-4-thumb.webp" style="pointer-events: none; width: 100%; height: auto;">
        <div style="display: none;" id="photo-data-source">
            <span style="margin-bottom: 2px;">Bratislava, Slovensko</span>
            <span style="margin-bottom: 2px;">19.Oct.2025</span>
            <span style="margin-bottom: 2px;">SONY DSC-RX100M2</span>
            <span style="margin-bottom: 2px;">f/9 1/500sec ISO:400</span>
        </div>
    </div>
`,
`
    <div id="bratislava-october-2025-3" onclick="fullscreen(this.id)" class="project-thumb-container">
        <img src="projects/photography/bratislava-october-2025/bratislava-october-2025-3-thumb.webp" style="pointer-events: none; width: 100%; height: auto;">
        <div style="display: none;" id="photo-data-source">
            <span style="margin-bottom: 2px;">Bratislava, Slovensko</span>
            <span style="margin-bottom: 2px;">19.Oct.2025</span>
            <span style="margin-bottom: 2px;">SONY DSC-RX100M2</span>
            <span style="margin-bottom: 2px;">f/5.6 1/1000sec ISO:400</span>
        </div>
    </div>
`,
`
    <div id="bratislava-october-2025-2" onclick="fullscreen(this.id)" class="project-thumb-container">
        <img src="projects/photography/bratislava-october-2025/bratislava-october-2025-2-thumb.webp" style="pointer-events: none; width: 100%; height: auto;">
        <div style="display: none;" id="photo-data-source">
            <span style="margin-bottom: 2px;">Bratislava, Slovensko</span>
            <span style="margin-bottom: 2px;">19.Oct.2025</span>
            <span style="margin-bottom: 2px;">SONY DSC-RX100M2</span>
            <span style="margin-bottom: 2px;">f/5.6 1/1000sec ISO:400</span>
        </div>
    </div>
`,
`
    <div id="bratislava-october-2025-1" onclick="fullscreen(this.id)" class="project-thumb-container">
        <img src="projects/photography/bratislava-october-2025/bratislava-october-2025-1-thumb.webp" style="pointer-events: none; width: 100%; height: auto;">
        <div style="display: none;" id="photo-data-source">
            <span style="margin-bottom: 2px;">Bratislava, Slovensko</span>
            <span style="margin-bottom: 2px;">19.Oct.2025</span>
            <span style="margin-bottom: 2px;">SONY DSC-RX100M2</span>
            <span style="margin-bottom: 2px;">f/8 1/2000sec ISO:400</span>
        </div>
    </div>
`
]



// Praha Oct. 2025 items

// Define the total number of projects in this category.  CHANGE WHEN ADDING ITEMS !

var itemcount_prague_october_2025 = 44



// Define all project thumbnails that will be displayed   CHANGE WHEN ADDING ITEMS !
// Items on the top of the list will be last on the website !

// REMOVED
/*
<div id="prague-october-2025-45" onclick="fullscreen(this.id)" class="project-thumb-container">
    <img src="projects/photography/prague-october-2025/prague-october-2025-45-thumb.webp" style="pointer-events: none; width: 100%; height: auto;">
    <div style="display: none;" id="photo-data-source">
        <span style="margin-bottom: 2px;">Praha, Česko</span>
        <span style="margin-bottom: 2px;">16.Oct.2025</span>
        <span style="margin-bottom: 2px;">SONY DSC-RX100M2</span>
        <span style="margin-bottom: 2px;">f/4.5 1/250sec ISO:100</span>
    </div>
</div>
*/

var itemdatabase_prague_october_2025 = [
`
    <div id="prague-october-2025-44" onclick="fullscreen(this.id)" class="project-thumb-container">
        <img src="projects/photography/prague-october-2025/prague-october-2025-44-thumb.webp" style="pointer-events: none; width: 100%; height: auto;">
        <div style="display: none;" id="photo-data-source">
            <span style="margin-bottom: 2px;">Praha, Česko</span>
            <span style="margin-bottom: 2px;">16.Oct.2025</span>
            <span style="margin-bottom: 2px;">SONY DSC-RX100M2</span>
            <span style="margin-bottom: 2px;">f/7.1 1/100sec ISO:100</span>
        </div>
    </div>
`,
`
    <div id="prague-october-2025-43" onclick="fullscreen(this.id)" class="project-thumb-container">
        <img src="projects/photography/prague-october-2025/prague-october-2025-43-thumb.webp" style="pointer-events: none; width: 100%; height: auto;">
        <div style="display: none;" id="photo-data-source">
            <span style="margin-bottom: 2px;">Praha, Česko</span>
            <span style="margin-bottom: 2px;">16.Oct.2025</span>
            <span style="margin-bottom: 2px;">SONY DSC-RX100M2</span>
            <span style="margin-bottom: 2px;">f/4.9 1/500sec ISO:100</span>
        </div>
    </div>
`,
`
    <div id="prague-october-2025-42" onclick="fullscreen(this.id)" class="project-thumb-container">
        <img src="projects/photography/prague-october-2025/prague-october-2025-42-thumb.webp" style="pointer-events: none; width: 100%; height: auto;">
        <div style="display: none;" id="photo-data-source">
            <span style="margin-bottom: 2px;">Praha, Česko</span>
            <span style="margin-bottom: 2px;">16.Oct.2025</span>
            <span style="margin-bottom: 2px;">SONY DSC-RX100M2</span>
            <span style="margin-bottom: 2px;">f/4.5 1/100sec ISO:100</span>
        </div>
    </div>
`,
`
    <div id="prague-october-2025-41" onclick="fullscreen(this.id)" class="project-thumb-container">
        <img src="projects/photography/prague-october-2025/prague-october-2025-41-thumb.webp" style="pointer-events: none; width: 100%; height: auto;">
        <div style="display: none;" id="photo-data-source">
            <span style="margin-bottom: 2px;">Praha, Česko</span>
            <span style="margin-bottom: 2px;">15.Oct.2025</span>
            <span style="margin-bottom: 2px;">SONY DSC-RX100M2</span>
            <span style="margin-bottom: 2px;">f/11 30sec ISO:100</span>
        </div>
    </div>
`,
`
    <div id="prague-october-2025-40" onclick="fullscreen(this.id)" class="project-thumb-container">
        <img src="projects/photography/prague-october-2025/prague-october-2025-40-thumb.webp" style="pointer-events: none; width: 100%; height: auto;">
        <div style="display: none;" id="photo-data-source">
            <span style="margin-bottom: 2px;">Praha, Česko</span>
            <span style="margin-bottom: 2px;">15.Oct.2025</span>
            <span style="margin-bottom: 2px;">SONY DSC-RX100M2</span>
            <span style="margin-bottom: 2px;">f/7.1 1/160sec ISO:100</span>
        </div>
    </div>
`,
`
    <div id="prague-october-2025-39" onclick="fullscreen(this.id)" class="project-thumb-container">
        <img src="projects/photography/prague-october-2025/prague-october-2025-39-thumb.webp" style="pointer-events: none; width: 100%; height: auto;">
        <div style="display: none;" id="photo-data-source">
            <span style="margin-bottom: 2px;">Praha, Česko</span>
            <span style="margin-bottom: 2px;">15.Oct.2025</span>
            <span style="margin-bottom: 2px;">SONY DSC-RX100M2</span>
            <span style="margin-bottom: 2px;">f/7.1 1/640sec ISO:100</span>
        </div>
    </div>
`,
`
    <div id="prague-october-2025-38" onclick="fullscreen(this.id)" class="project-thumb-container">
        <img src="projects/photography/prague-october-2025/prague-october-2025-38-thumb.webp" style="pointer-events: none; width: 100%; height: auto;">
        <div style="display: none;" id="photo-data-source">
            <span style="margin-bottom: 2px;">Praha, Česko</span>
            <span style="margin-bottom: 2px;">9.Oct.2025</span>
            <span style="margin-bottom: 2px;">SONY DSC-RX100M2</span>
            <span style="margin-bottom: 2px;">f/3.5 1/1000sec ISO:400</span>
        </div>
    </div>
`,
`
    <div id="prague-october-2025-37" onclick="fullscreen(this.id)" class="project-thumb-container">
        <img src="projects/photography/prague-october-2025/prague-october-2025-37-thumb.webp" style="pointer-events: none; width: 100%; height: auto;">
        <div style="display: none;" id="photo-data-source">
            <span style="margin-bottom: 2px;">Praha, Česko</span>
            <span style="margin-bottom: 2px;">9.Oct.2025</span>
            <span style="margin-bottom: 2px;">SONY DSC-RX100M2</span>
            <span style="margin-bottom: 2px;">f/3.2 1/100sec ISO:100</span>
        </div>
    </div>
`,
`
    <div id="prague-october-2025-36" onclick="fullscreen(this.id)" class="project-thumb-container">
        <img src="projects/photography/prague-october-2025/prague-october-2025-36-thumb.webp" style="pointer-events: none; width: 100%; height: auto;">
        <div style="display: none;" id="photo-data-source">
            <span style="margin-bottom: 2px;">Praha, Česko</span>
            <span style="margin-bottom: 2px;">9.Oct.2025</span>
            <span style="margin-bottom: 2px;">SONY DSC-RX100M2</span>
            <span style="margin-bottom: 2px;">f/5 1/1000sec ISO:800</span>
        </div>
    </div>
`,
`
    <div id="prague-october-2025-35" onclick="fullscreen(this.id)" class="project-thumb-container">
        <img src="projects/photography/prague-october-2025/prague-october-2025-35-thumb.webp" style="pointer-events: none; width: 100%; height: auto;">
        <div style="display: none;" id="photo-data-source">
            <span style="margin-bottom: 2px;">Praha, Česko</span>
            <span style="margin-bottom: 2px;">9.Oct.2025</span>
            <span style="margin-bottom: 2px;">SONY DSC-RX100M2</span>
            <span style="margin-bottom: 2px;">f/3.5 1/320sec ISO:100</span>
        </div>
    </div>
`,
`
    <div id="prague-october-2025-34" onclick="fullscreen(this.id)" class="project-thumb-container">
        <img src="projects/photography/prague-october-2025/prague-october-2025-34-thumb.webp" style="pointer-events: none; width: 100%; height: auto;">
        <div style="display: none;" id="photo-data-source">
            <span style="margin-bottom: 2px;">Praha, Česko</span>
            <span style="margin-bottom: 2px;">9.Oct.2025</span>
            <span style="margin-bottom: 2px;">SONY DSC-RX100M2</span>
            <span style="margin-bottom: 2px;">f/3.2 1/125sec ISO:100</span>
        </div>
    </div>
`,
`
    <div id="prague-october-2025-33" onclick="fullscreen(this.id)" class="project-thumb-container">
        <img src="projects/photography/prague-october-2025/prague-october-2025-33-thumb.webp" style="pointer-events: none; width: 100%; height: auto;">
        <div style="display: none;" id="photo-data-source">
            <span style="margin-bottom: 2px;">Praha, Česko</span>
            <span style="margin-bottom: 2px;">9.Oct.2025</span>
            <span style="margin-bottom: 2px;">SONY DSC-RX100M2</span>
            <span style="margin-bottom: 2px;">f/5 1/800sec ISO:100</span>
        </div>
    </div>
`,
`
    <div id="prague-october-2025-32" onclick="fullscreen(this.id)" class="project-thumb-container">
        <img src="projects/photography/prague-october-2025/prague-october-2025-32-thumb.webp" style="pointer-events: none; width: 100%; height: auto;">
        <div style="display: none;" id="photo-data-source">
            <span style="margin-bottom: 2px;">Praha, Česko</span>
            <span style="margin-bottom: 2px;">9.Oct.2025</span>
            <span style="margin-bottom: 2px;">SONY DSC-RX100M2</span>
            <span style="margin-bottom: 2px;">f/4.9 1/200sec ISO:100</span>
        </div>
    </div>
`,
`
    <div id="prague-october-2025-31" onclick="fullscreen(this.id)" class="project-thumb-container">
        <img src="projects/photography/prague-october-2025/prague-october-2025-31-thumb.webp" style="pointer-events: none; width: 100%; height: auto;">
        <div style="display: none;" id="photo-data-source">
            <span style="margin-bottom: 2px;">Praha, Česko</span>
            <span style="margin-bottom: 2px;">9.Oct.2025</span>
            <span style="margin-bottom: 2px;">SONY DSC-RX100M2</span>
            <span style="margin-bottom: 2px;">f/4.5 1/320sec ISO:100</span>
        </div>
    </div>
`,
`
    <div id="prague-october-2025-30" onclick="fullscreen(this.id)" class="project-thumb-container">
        <img src="projects/photography/prague-october-2025/prague-october-2025-30-thumb.webp" style="pointer-events: none; width: 100%; height: auto;">
        <div style="display: none;" id="photo-data-source">
            <span style="margin-bottom: 2px;">Praha, Česko</span>
            <span style="margin-bottom: 2px;">9.Oct.2025</span>
            <span style="margin-bottom: 2px;">SONY DSC-RX100M2</span>
            <span style="margin-bottom: 2px;">f/4.5 1/100sec ISO:100</span>
        </div>
    </div>
`,
`
    <div id="prague-october-2025-29" onclick="fullscreen(this.id)" class="project-thumb-container">
        <img src="projects/photography/prague-october-2025/prague-october-2025-29-thumb.webp" style="pointer-events: none; width: 100%; height: auto;">
        <div style="display: none;" id="photo-data-source">
            <span style="margin-bottom: 2px;">Praha, Česko</span>
            <span style="margin-bottom: 2px;">8.Oct.2025</span>
            <span style="margin-bottom: 2px;">SONY DSC-RX100M2</span>
            <span style="margin-bottom: 2px;">f/4.9 1/80sec ISO:6400</span>
        </div>
    </div>
`,
`
    <div id="prague-october-2025-28" onclick="fullscreen(this.id)" class="project-thumb-container">
        <img src="projects/photography/prague-october-2025/prague-october-2025-28-thumb.webp" style="pointer-events: none; width: 100%; height: auto;">
        <div style="display: none;" id="photo-data-source">
            <span style="margin-bottom: 2px;">Praha, Česko</span>
            <span style="margin-bottom: 2px;">8.Oct.2025</span>
            <span style="margin-bottom: 2px;">SONY DSC-RX100M2</span>
            <span style="margin-bottom: 2px;">f/4.9 1/160sec ISO:6400</span>
        </div>
    </div>
`,
`
    <div id="prague-october-2025-27" onclick="fullscreen(this.id)" class="project-thumb-container">
        <img src="projects/photography/prague-october-2025/prague-october-2025-27-thumb.webp" style="pointer-events: none; width: 100%; height: auto;">
        <div style="display: none;" id="photo-data-source">
            <span style="margin-bottom: 2px;">Praha, Česko</span>
            <span style="margin-bottom: 2px;">8.Oct.2025</span>
            <span style="margin-bottom: 2px;">SONY DSC-RX100M2</span>
            <span style="margin-bottom: 2px;">f/4.9 1/30sec ISO:200</span>
        </div>
    </div>
`,
`
    <div id="prague-october-2025-26" onclick="fullscreen(this.id)" class="project-thumb-container">
        <img src="projects/photography/prague-october-2025/prague-october-2025-26-thumb.webp" style="pointer-events: none; width: 100%; height: auto;">
        <div style="display: none;" id="photo-data-source">
            <span style="margin-bottom: 2px;">Praha, Česko</span>
            <span style="margin-bottom: 2px;">8.Oct.2025</span>
            <span style="margin-bottom: 2px;">SONY DSC-RX100M2</span>
            <span style="margin-bottom: 2px;">f/4.9 1/60sec ISO:200</span>
        </div>
    </div>
`,
`
    <div id="prague-october-2025-25" onclick="fullscreen(this.id)" class="project-thumb-container">
        <img src="projects/photography/prague-october-2025/prague-october-2025-25-thumb.webp" style="pointer-events: none; width: 100%; height: auto;">
        <div style="display: none;" id="photo-data-source">
            <span style="margin-bottom: 2px;">Praha, Česko</span>
            <span style="margin-bottom: 2px;">8.Oct.2025</span>
            <span style="margin-bottom: 2px;">SONY DSC-RX100M2</span>
            <span style="margin-bottom: 2px;">f/4.9 1/60sec ISO:200</span>
        </div>
    </div>
`,
`
    <div id="prague-october-2025-24" onclick="fullscreen(this.id)" class="project-thumb-container">
        <img src="projects/photography/prague-october-2025/prague-october-2025-24-thumb.webp" style="pointer-events: none; width: 100%; height: auto;">
        <div style="display: none;" id="photo-data-source">
            <span style="margin-bottom: 2px;">Praha, Česko</span>
            <span style="margin-bottom: 2px;">5.Oct.2025</span>
            <span style="margin-bottom: 2px;">SONY DSC-RX100M2</span>
            <span style="margin-bottom: 2px;">f/4.9 20sec ISO:100</span>
        </div>
    </div>
`,
`
    <div id="prague-october-2025-23" onclick="fullscreen(this.id)" class="project-thumb-container">
        <img src="projects/photography/prague-october-2025/prague-october-2025-23-thumb.webp" style="pointer-events: none; width: 100%; height: auto;">
        <div style="display: none;" id="photo-data-source">
            <span style="margin-bottom: 2px;">Praha, Česko</span>
            <span style="margin-bottom: 2px;">3.Oct.2025</span>
            <span style="margin-bottom: 2px;">SONY DSC-RX100M2</span>
            <span style="margin-bottom: 2px;">f/6.3 1/320sec ISO:100</span>
        </div>
    </div>
`,
`
    <div id="prague-october-2025-22" onclick="fullscreen(this.id)" class="project-thumb-container">
        <img src="projects/photography/prague-october-2025/prague-october-2025-22-thumb.webp" style="pointer-events: none; width: 100%; height: auto;">
        <div style="display: none;" id="photo-data-source">
            <span style="margin-bottom: 2px;">Praha, Česko</span>
            <span style="margin-bottom: 2px;">3.Oct.2025</span>
            <span style="margin-bottom: 2px;">SONY DSC-RX100M2</span>
            <span style="margin-bottom: 2px;">f/6.3 1/320sec ISO:100</span>
        </div>
    </div>
`,
`
    <div id="prague-october-2025-21" onclick="fullscreen(this.id)" class="project-thumb-container">
        <img src="projects/photography/prague-october-2025/prague-october-2025-21-thumb.webp" style="pointer-events: none; width: 100%; height: auto;">
        <div style="display: none;" id="photo-data-source">
            <span style="margin-bottom: 2px;">Praha, Česko</span>
            <span style="margin-bottom: 2px;">3.Oct.2025</span>
            <span style="margin-bottom: 2px;">SONY DSC-RX100M2</span>
            <span style="margin-bottom: 2px;">f/6.3 1/400sec ISO:100</span>
        </div>
    </div>
`,
`
    <div id="prague-october-2025-20" onclick="fullscreen(this.id)" class="project-thumb-container">
        <img src="projects/photography/prague-october-2025/prague-october-2025-20-thumb.webp" style="pointer-events: none; width: 100%; height: auto;">
        <div style="display: none;" id="photo-data-source">
            <span style="margin-bottom: 2px;">Praha, Česko</span>
            <span style="margin-bottom: 2px;">3.Oct.2025</span>
            <span style="margin-bottom: 2px;">SONY DSC-RX100M2</span>
            <span style="margin-bottom: 2px;">f/6.3 1/1000sec ISO:100</span>
        </div>
    </div>
`,
`
    <div id="prague-october-2025-19" onclick="fullscreen(this.id)" class="project-thumb-container">
        <img src="projects/photography/prague-october-2025/prague-october-2025-19-thumb.webp" style="pointer-events: none; width: 100%; height: auto;">
        <div style="display: none;" id="photo-data-source">
            <span style="margin-bottom: 2px;">Praha, Česko</span>
            <span style="margin-bottom: 2px;">3.Oct.2025</span>
            <span style="margin-bottom: 2px;">SONY DSC-RX100M2</span>
            <span style="margin-bottom: 2px;">f/5 1/100sec ISO:100</span>
        </div>
    </div>
`,
`
    <div id="prague-october-2025-18" onclick="fullscreen(this.id)" class="project-thumb-container">
        <img src="projects/photography/prague-october-2025/prague-october-2025-18-thumb.webp" style="pointer-events: none; width: 100%; height: auto;">
        <div style="display: none;" id="photo-data-source">
            <span style="margin-bottom: 2px;">Praha, Česko</span>
            <span style="margin-bottom: 2px;">3.Oct.2025</span>
            <span style="margin-bottom: 2px;">SONY DSC-RX100M2</span>
            <span style="margin-bottom: 2px;">f/5 1/250sec ISO:100</span>
        </div>
    </div>
`,
`
    <div id="prague-october-2025-17" onclick="fullscreen(this.id)" class="project-thumb-container">
        <img src="projects/photography/prague-october-2025/prague-october-2025-17-thumb.webp" style="pointer-events: none; width: 100%; height: auto;">
        <div style="display: none;" id="photo-data-source">
            <span style="margin-bottom: 2px;">Praha, Česko</span>
            <span style="margin-bottom: 2px;">3.Oct.2025</span>
            <span style="margin-bottom: 2px;">SONY DSC-RX100M2</span>
            <span style="margin-bottom: 2px;">f/5 1/1250sec ISO:100</span>
        </div>
    </div>
`,
`
    <div id="prague-october-2025-16" onclick="fullscreen(this.id)" class="project-thumb-container">
        <img src="projects/photography/prague-october-2025/prague-october-2025-16-thumb.webp" style="pointer-events: none; width: 100%; height: auto;">
        <div style="display: none;" id="photo-data-source">
            <span style="margin-bottom: 2px;">Praha, Česko</span>
            <span style="margin-bottom: 2px;">3.Oct.2025</span>
            <span style="margin-bottom: 2px;">SONY DSC-RX100M2</span>
            <span style="margin-bottom: 2px;">f/5 1/40sec ISO:100</span>
        </div>
    </div>
`,
`
    <div id="prague-october-2025-15" onclick="fullscreen(this.id)" class="project-thumb-container">
        <img src="projects/photography/prague-october-2025/prague-october-2025-15-thumb.webp" style="pointer-events: none; width: 100%; height: auto;">
        <div style="display: none;" id="photo-data-source">
            <span style="margin-bottom: 2px;">Praha, Česko</span>
            <span style="margin-bottom: 2px;">3.Oct.2025</span>
            <span style="margin-bottom: 2px;">SONY DSC-RX100M2</span>
            <span style="margin-bottom: 2px;">f/5.6 1/250sec ISO:100</span>
        </div>
    </div>
`,
`
    <div id="prague-october-2025-14" onclick="fullscreen(this.id)" class="project-thumb-container">
        <img src="projects/photography/prague-october-2025/prague-october-2025-14-thumb.webp" style="pointer-events: none; width: 100%; height: auto;">
        <div style="display: none;" id="photo-data-source">
            <span style="margin-bottom: 2px;">Praha, Česko</span>
            <span style="margin-bottom: 2px;">3.Oct.2025</span>
            <span style="margin-bottom: 2px;">SONY DSC-RX100M2</span>
            <span style="margin-bottom: 2px;">f/5.6 1/200sec ISO:100</span>
        </div>
    </div>
`,
`
    <div id="prague-october-2025-13" onclick="fullscreen(this.id)" class="project-thumb-container">
        <img src="projects/photography/prague-october-2025/prague-october-2025-13-thumb.webp" style="pointer-events: none; width: 100%; height: auto;">
        <div style="display: none;" id="photo-data-source">
            <span style="margin-bottom: 2px;">Praha, Česko</span>
            <span style="margin-bottom: 2px;">3.Oct.2025</span>
            <span style="margin-bottom: 2px;">SONY DSC-RX100M2</span>
            <span style="margin-bottom: 2px;">f/5 1/400sec ISO:100</span>
        </div>
    </div>
`,
`
    <div id="prague-october-2025-12" onclick="fullscreen(this.id)" class="project-thumb-container">
        <img src="projects/photography/prague-october-2025/prague-october-2025-12-thumb.webp" style="pointer-events: none; width: 100%; height: auto;">
        <div style="display: none;" id="photo-data-source">
            <span style="margin-bottom: 2px;">Praha, Česko</span>
            <span style="margin-bottom: 2px;">3.Oct.2025</span>
            <span style="margin-bottom: 2px;">SONY DSC-RX100M2</span>
            <span style="margin-bottom: 2px;">f/5 1/640sec ISO:100</span>
        </div>
    </div>
`,
`
    <div id="prague-october-2025-11" onclick="fullscreen(this.id)" class="project-thumb-container">
        <img src="projects/photography/prague-october-2025/prague-october-2025-11-thumb.webp" style="pointer-events: none; width: 100%; height: auto;">
        <div style="display: none;" id="photo-data-source">
            <span style="margin-bottom: 2px;">Praha, Česko</span>
            <span style="margin-bottom: 2px;">3.Oct.2025</span>
            <span style="margin-bottom: 2px;">SONY DSC-RX100M2</span>
            <span style="margin-bottom: 2px;">f/4.9 1/800sec ISO:100</span>
        </div>
    </div>
`,
`
    <div id="prague-october-2025-10" onclick="fullscreen(this.id)" class="project-thumb-container">
        <img src="projects/photography/prague-october-2025/prague-october-2025-10-thumb.webp" style="pointer-events: none; width: 100%; height: auto;">
        <div style="display: none;" id="photo-data-source">
            <span style="margin-bottom: 2px;">Praha, Česko</span>
            <span style="margin-bottom: 2px;">3.Oct.2025</span>
            <span style="margin-bottom: 2px;">SONY DSC-RX100M2</span>
            <span style="margin-bottom: 2px;">f/4.9 1/400sec ISO:100</span>
        </div>
    </div>
`,
`
    <div id="prague-october-2025-9" onclick="fullscreen(this.id)" class="project-thumb-container">
        <img src="projects/photography/prague-october-2025/prague-october-2025-9-thumb.webp" style="pointer-events: none; width: 100%; height: auto;">
        <div style="display: none;" id="photo-data-source">
            <span style="margin-bottom: 2px;">Praha, Česko</span>
            <span style="margin-bottom: 2px;">3.Oct.2025</span>
            <span style="margin-bottom: 2px;">SONY DSC-RX100M2</span>
            <span style="margin-bottom: 2px;">f/5 1/200sec ISO:100</span>
        </div>
    </div>
`,
`
    <div id="prague-october-2025-8" onclick="fullscreen(this.id)" class="project-thumb-container">
        <img src="projects/photography/prague-october-2025/prague-october-2025-8-thumb.webp" style="pointer-events: none; width: 100%; height: auto;">
        <div style="display: none;" id="photo-data-source">
            <span style="margin-bottom: 2px;">Praha, Česko</span>
            <span style="margin-bottom: 2px;">2.Oct.2025</span>
            <span style="margin-bottom: 2px;">SONY DSC-RX100M2</span>
            <span style="margin-bottom: 2px;">f/1.8 1/200sec ISO:200</span>
        </div>
    </div>
`,
`
    <div id="prague-october-2025-7" onclick="fullscreen(this.id)" class="project-thumb-container">
        <img src="projects/photography/prague-october-2025/prague-october-2025-7-thumb.webp" style="pointer-events: none; width: 100%; height: auto;">
        <div style="display: none;" id="photo-data-source">
            <span style="margin-bottom: 2px;">Praha, Česko</span>
            <span style="margin-bottom: 2px;">2.Oct.2025</span>
            <span style="margin-bottom: 2px;">SONY DSC-RX100M2</span>
            <span style="margin-bottom: 2px;">f/5 1/125sec ISO:200</span>
        </div>
    </div>
`,
`
    <div id="prague-october-2025-6" onclick="fullscreen(this.id)" class="project-thumb-container">
        <img src="projects/photography/prague-october-2025/prague-october-2025-6-thumb.webp" style="pointer-events: none; width: 100%; height: auto;">
        <div style="display: none;" id="photo-data-source">
            <span style="margin-bottom: 2px;">Praha, Česko</span>
            <span style="margin-bottom: 2px;">2.Oct.2025</span>
            <span style="margin-bottom: 2px;">SONY DSC-RX100M2</span>
            <span style="margin-bottom: 2px;">f/5 1/800sec ISO:200</span>
        </div>
    </div>
`,
`
    <div id="prague-october-2025-5" onclick="fullscreen(this.id)" class="project-thumb-container">
        <img src="projects/photography/prague-october-2025/prague-october-2025-5-thumb.webp" style="pointer-events: none; width: 100%; height: auto;">
        <div style="display: none;" id="photo-data-source">
            <span style="margin-bottom: 2px;">Praha, Česko</span>
            <span style="margin-bottom: 2px;">2.Oct.2025</span>
            <span style="margin-bottom: 2px;">SONY DSC-RX100M2</span>
            <span style="margin-bottom: 2px;">f/4.9 1/400sec ISO:200</span>
        </div>
    </div>
`,
`
    <div id="prague-october-2025-4" onclick="fullscreen(this.id)" class="project-thumb-container">
        <img src="projects/photography/prague-october-2025/prague-october-2025-4-thumb.webp" style="pointer-events: none; width: 100%; height: auto;">
        <div style="display: none;" id="photo-data-source">
            <span style="margin-bottom: 2px;">Praha, Česko</span>
            <span style="margin-bottom: 2px;">2.Oct.2025</span>
            <span style="margin-bottom: 2px;">SONY DSC-RX100M2</span>
            <span style="margin-bottom: 2px;">f/4.9 1/6sec ISO:200</span>
        </div>
    </div>
`,
`
    <div id="prague-october-2025-3" onclick="fullscreen(this.id)" class="project-thumb-container">
        <img src="projects/photography/prague-october-2025/prague-october-2025-3-thumb.webp" style="pointer-events: none; width: 100%; height: auto;">
        <div style="display: none;" id="photo-data-source">
            <span style="margin-bottom: 2px;">Praha, Česko</span>
            <span style="margin-bottom: 2px;">2.Oct.2025</span>
            <span style="margin-bottom: 2px;">SONY DSC-RX100M2</span>
            <span style="margin-bottom: 2px;">f/3.5 1/100sec ISO:200</span>
        </div>
    </div>
`,
`
    <div id="prague-october-2025-2" onclick="fullscreen(this.id)" class="project-thumb-container">
        <img src="projects/photography/prague-october-2025/prague-october-2025-2-thumb.webp" style="pointer-events: none; width: 100%; height: auto;">
        <div style="display: none;" id="photo-data-source">
            <span style="margin-bottom: 2px;">Praha, Česko</span>
            <span style="margin-bottom: 2px;">2.Oct.2025</span>
            <span style="margin-bottom: 2px;">SONY DSC-RX100M2</span>
            <span style="margin-bottom: 2px;">f/9 1/100sec ISO:100</span>
        </div>
    </div>
`,
`
    <div id="prague-october-2025-1" onclick="fullscreen(this.id)" class="project-thumb-container">
        <img src="projects/photography/prague-october-2025/prague-october-2025-1-thumb.webp" style="pointer-events: none; width: 100%; height: auto;">
        <div style="display: none;" id="photo-data-source">
            <span style="margin-bottom: 2px;">Praha, Česko</span>
            <span style="margin-bottom: 2px;">3.Oct.2025</span>
            <span style="margin-bottom: 2px;">SONY DSC-RX100M2</span>
            <span style="margin-bottom: 2px;">f/5 1/640sec ISO:100</span>
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

