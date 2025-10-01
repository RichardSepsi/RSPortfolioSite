
// Define the total number of projects in this category.  CHANGE WHEN ADDING ITEMS !

let itemcount = 5



// Define all project thumbnails that will be displayed   CHANGE WHEN ADDING ITEMS !

/*let item1 = 
let item2 = 
let item3 = 
let item4 = 
let item5 = */

let itemdatabase = [
`
    <a id="realizmusnaorave.html" onclick="fadeout(this.id)" onauxclick="middleclicklink(this.id, event)" style="text-decoration: none; color: inherit;"><div class="project-thumb-container">
        <img src="projects/2d/realizmusnaorave/realizmusnaorave_art.svg" style="pointer-events: none; width: 100%; height: auto;">
        <div class="project-thumb-info-container">
            <div class="project-thumb-info-one"><span class="project-thumb-info-title">Realizmus na O.</span>
            <span class="project-thumb-info-sub one">9.2.2024</span></div>
            <span class="project-thumb-info-sub">UI Design</span>
        </div>
    </div></a>
`,
`
    <a id="zelenaskola.html" onclick="fadeout(this.id)" onauxclick="middleclicklink(this.id, event)" style="text-decoration: none; color: inherit;"><div class="project-thumb-container">
        <img src="projects/2d/zelenaskola/zelenaskola_art.svg" style="pointer-events: none; width: 100%; height: auto;">
        <div class="project-thumb-info-container">
            <div class="project-thumb-info-one"><span class="project-thumb-info-title">Zelená Škola</span>
            <span class="project-thumb-info-sub one">9.12.2023</span></div>
            <span class="project-thumb-info-sub">Web Design</span>
        </div>
    </div></a>
`,
`
    <a id="natart.html" onclick="fadeout(this.id)" onauxclick="middleclicklink(this.id, event)" style="text-decoration: none; color: inherit;"><div class="project-thumb-container">
        <img src="projects/2d/natart/natart_art.svg" style="pointer-events: none;">
        <div class="project-thumb-info-container">
            <div class="project-thumb-info-one"><span class="project-thumb-info-title">NatArt</span>
            <span class="project-thumb-info-sub one">2.12.2023</span></div>
            <span class="project-thumb-info-sub">Web design</span>
        </div>
    </div></a>
`,
`
    <a id="unageo.html" onclick="fadeout(this.id)" onauxclick="middleclicklink(this.id, event)" style="text-decoration: none; color: inherit;"><div class="project-thumb-container">
        <img src="projects/2d/unageo/unageo_art-1.svg" style="pointer-events: none; width: 100%; height: auto;">
        <svg style="position: absolute; top: 0px; left: 0px; letter-spacing: -0.4px;" width="360" height="180" viewBox="0 0 560 280">
            <text style="font-size:64px;line-height:1.25;fill:#bcbcbc;font-family: Unageo-vf; font-weight: 600;" x="239.44336" y="129.07779">Unageo</text>
            <text style="font-size:48px;line-height:1.25;fill:#7f7f7f;font-family: Unageo-vf; font-weight: 600;" x="243.55536" y="186.40199">typeface</text>
        </svg>
        <div class="project-thumb-info-container">
            <div class="project-thumb-info-one"><span class="project-thumb-info-title">Unageo</span>
            <span class="project-thumb-info-sub one">9.12.2023</span></div>
            <span class="project-thumb-info-sub">Typeface</span>
        </div>
    </div></a>
`,
`
    <a id="wordgrind.html" onclick="fadeout(this.id)" onauxclick="middleclicklink(this.id, event)" style="text-decoration: none; color: inherit;"><div class="project-thumb-container">
        <img src="projects/2d/wordgrind/wordgrind_art.svg" style="pointer-events: none; width: 100%; height: auto;">
        <div class="project-thumb-info-container">
            <div class="project-thumb-info-one"><span class="project-thumb-info-title">WordGrind</span>
            <span class="project-thumb-info-sub one">9.10.2024</span></div>
            <span class="project-thumb-info-sub">Web Design</span>
        </div>
    </div></a>
`
]

//window.addEventListener("load", (event) => {
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
//});