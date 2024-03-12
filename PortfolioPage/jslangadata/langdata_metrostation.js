if(currentlang == "EN") {
    document.getElementById("langs-metrostation-time").innerHTML = `From February to June 2022`
    document.getElementById("langs-metrostation-category").innerHTML = `Category:<span class="project-element-subtext" style="margin-left: 10px;">3D Project</span>`
    document.getElementById("langs-metrostation-date").innerHTML = `Date added:<span class="project-element-subtext" style="margin-left: 10px;">1.11.2023</span>`
    document.getElementById("langs-metrostation-abouttitle").innerHTML = `About the project`
    document.getElementById("langs-metrostation-about").innerHTML = `
    This project is one of the first 3D projects that I managed to finish. It's supposed to be a newly built metro station in a hypothetical metro in Bratislava
    in an archviz style.
    <div style="height: 12px;"></div>
    Everything was modeled in Cinema 4D and texured/rendered in Blender. All of the materials are my own except the floor, which comes from AmbientCG.
    <div style="height: 12px;"></div>
    In the future I would like to rework this project a bit to give it a new look.`
    document.getElementById("langs-metrostation-softewaretitle").innerHTML = `Software used`
} else if(currentlang == "SK") {
    document.getElementById("langs-metrostation-time").innerHTML = `Od Februára do Júna 2022`
    document.getElementById("langs-metrostation-category").innerHTML = `Kategória:<span class="project-element-subtext" style="margin-left: 10px;">3D Projekty</span>`
    document.getElementById("langs-metrostation-date").innerHTML = `Dátum pridania:<span class="project-element-subtext" style="margin-left: 10px;">1.11.2023</span>`
    document.getElementById("langs-metrostation-abouttitle").innerHTML = `O projekte`
    document.getElementById("langs-metrostation-about").innerHTML = `
    Toto je jeden z prvých 3D projektov, ktorý sa mi podarilo dokončiť. Ide o novú stanicu hypotetického metra v Bratislave v archviz štýle.
    <div style="height: 12px;"></div>
    Všetko bolo modelované v programe Cinema 4D a zvizualizované v Blenderi. Všetky textúry sú moje vlastné, okrem dlažby, ktorá pochádza zo stránky AmbientCG.
    <div style="height: 12px;"></div>
    V budúcnosti by som rád tento projekt prerobil a dal mu nový, lepší vzhľad.`
    document.getElementById("langs-metrostation-softewaretitle").innerHTML = `Použitý software`
}



function langizemetrostation() {
    if(currentlang == "EN") {
        document.getElementById("langs-metrostation-time").innerHTML = `From February to June 2022`
        document.getElementById("langs-metrostation-category").innerHTML = `Category:<span class="project-element-subtext" style="margin-left: 10px;">3D Project</span>`
        document.getElementById("langs-metrostation-date").innerHTML = `Date added:<span class="project-element-subtext" style="margin-left: 10px;">1.11.2023</span>`
        document.getElementById("langs-metrostation-abouttitle").innerHTML = `About the project`
        document.getElementById("langs-metrostation-about").innerHTML = `
        This project is one of the first 3D projects that I managed to finish. It's supposed to be a newly built metro station in a hypothetical metro in Bratislava
        in an archviz style.
        <div style="height: 12px;"></div>
        Everything was modeled in Cinema 4D and texured/rendered in Blender. All of the materials are my own except the floor, which comes from AmbientCG.
        <div style="height: 12px;"></div>
        In the future I would like to rework this project a bit to give it a new look.`
        document.getElementById("langs-metrostation-softewaretitle").innerHTML = `Software used`
    } else if(currentlang == "SK") {
        document.getElementById("langs-metrostation-time").innerHTML = `Od Februára do Júna 2022`
        document.getElementById("langs-metrostation-category").innerHTML = `Kategória:<span class="project-element-subtext" style="margin-left: 10px;">3D Projekty</span>`
        document.getElementById("langs-metrostation-date").innerHTML = `Dátum pridania:<span class="project-element-subtext" style="margin-left: 10px;">1.11.2023</span>`
        document.getElementById("langs-metrostation-abouttitle").innerHTML = `O projekte`
        document.getElementById("langs-metrostation-about").innerHTML = `
        Toto je jeden z prvých 3D projektov, ktorý sa mi podarilo dokončiť. Ide o novú stanicu hypotetického metra v Bratislave v archviz štýle.
        <div style="height: 12px;"></div>
        Všetko bolo modelované v programe Cinema 4D a zvizualizované v Blenderi. Všetky textúry sú moje vlastné, okrem dlažby, ktorá pochádza zo stránky AmbientCG.
        <div style="height: 12px;"></div>
        V budúcnosti by som rád tento projekt prerobil a dal mu nový, lepší vzhľad.`
        document.getElementById("langs-metrostation-softewaretitle").innerHTML = `Použitý software`
    }
}