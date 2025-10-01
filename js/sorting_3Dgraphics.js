
// Define the total number of projects in this category.  CHANGE WHEN ADDING ITEMS !

let itemcount = 2



// Define all project thumbnails that will be displayed   CHANGE WHEN ADDING ITEMS !

/*let item1 = 
let item2 = 
let item3 = 
let item4 = 
let item5 = */

let itemdatabase = [
`
    <a id="metrostation.html" onclick="fadeout(this.id)" onauxclick="middleclicklink(this.id, event)" style="text-decoration: none; color: inherit;"><div class="project-thumb-container">
        <img src="projects/3d/metrostation/r1.jpg" style="pointer-events: none;" width="100%" height="auto">
        <div class="project-thumb-info-container">
            <span class="project-thumb-info-title">Metro station</span>
            <span class="project-thumb-info-sub one">1.11.2023</span>
        </div>
    </div></a>
`,
`
    <a id="seasidecliffs.html" onclick="fadeout(this.id)" onauxclick="middleclicklink(this.id, event)" style="text-decoration: none; color: inherit;"><div class="project-thumb-container">
        <img src="projects/3d/seasidecliffs/r1_thumb.jpg" style="pointer-events: none;" width="100%" height="auto">
        <div class="project-thumb-info-container">
            <span class="project-thumb-info-title">Seaside cliffs</span>
            <span class="project-thumb-info-sub one">30.10.2024</span>
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