var currentlang = document.getElementById("current-lang").innerHTML
console.log(currentlang)

if(currentlang == "EN") {
    document.getElementById("langs-nav-home").innerHTML = `Home`
    document.getElementById("langs-nav-3d").innerHTML = `3D Graphics`
    document.getElementById("langs-nav-2d").innerHTML = `2D Graphics`
    document.getElementById("langs-nav-contact").innerHTML = `Contact`
    document.getElementById("langs-mnav-home").innerHTML = `Home`
    document.getElementById("langs-mnav-3d").innerHTML = `3D Graphics`
    document.getElementById("langs-mnav-2d").innerHTML = `2D Graphics`
    document.getElementById("langs-mnav-contact").innerHTML = `Contact`
    if (document.getElementById("langs-foot-home") !== null) {
        document.getElementById("langs-foot-home").innerHTML = `Home`
        document.getElementById("langs-foot-3d").innerHTML = `3D Graphics`
        document.getElementById("langs-foot-2d").innerHTML = `2D Graphics`
        document.getElementById("langs-foot-contact").innerHTML = `Contact`
        document.getElementById("langs-foot-3d").style.marginLeft = "0px"
        document.getElementById("langs-foot-2d").style.marginLeft = "0px"
        document.getElementById("langs-foot-3dfix").setAttribute("width", "96px")
        document.getElementById("langs-foot-2dfix").setAttribute("width", "96px")
        document.getElementById("langs-foot-scroll").innerHTML = `<img src="assets/arrow-up.svg" style="margin-right: 14px;" draggable="false">Scroll to the top`
        document.getElementById("langs-foot-info").innerHTML = `<img src="assets/info.svg" style="margin-right: 14px;" draggable="false">Website information`
    }
    document.documentElement.lang = "en"
} else if(currentlang == "SK") {
    document.getElementById("langs-nav-home").innerHTML = `Úvod`
    document.getElementById("langs-nav-3d").innerHTML = `3D Grafika`
    document.getElementById("langs-nav-2d").innerHTML = `2D Grafika`
    document.getElementById("langs-nav-contact").innerHTML = `Kontakt`
    document.getElementById("langs-mnav-home").innerHTML = `Úvod`
    document.getElementById("langs-mnav-3d").innerHTML = `3D Grafika`
    document.getElementById("langs-mnav-2d").innerHTML = `2D Grafika`
    document.getElementById("langs-mnav-contact").innerHTML = `Kontakt`
    if (document.getElementById("langs-foot-home") !== null) {
        document.getElementById("langs-foot-home").innerHTML = `Úvod`
        document.getElementById("langs-foot-3d").innerHTML = `3D Grafika`
        document.getElementById("langs-foot-2d").innerHTML = `2D Grafika`
        document.getElementById("langs-foot-contact").innerHTML = `Kontakt`
        document.getElementById("langs-foot-3dfix").setAttribute("width", "88px")
        document.getElementById("langs-foot-2dfix").setAttribute("width", "88px")
        document.getElementById("langs-foot-scroll").innerHTML = `<img src="assets/arrow-up.svg" style="margin-right: 14px;" draggable="false">Späť na začiatok`
        document.getElementById("langs-foot-info").innerHTML = `<img src="assets/info.svg" style="margin-right: 14px;" draggable="false">Informácie o webstránke`
    }
    document.documentElement.lang = "sk"
}

function langizeunversal() {
    console.log("switching")
    currentlang = document.getElementById("current-lang").innerHTML
    if(currentlang == "EN") {
        document.getElementById("langs-nav-home").innerHTML = `Home`
        document.getElementById("langs-nav-3d").innerHTML = `3D Graphics`
        document.getElementById("langs-nav-2d").innerHTML = `2D Graphics`
        document.getElementById("langs-nav-contact").innerHTML = `Contact`
        document.getElementById("langs-mnav-home").innerHTML = `Home`
        document.getElementById("langs-mnav-3d").innerHTML = `3D Graphics`
        document.getElementById("langs-mnav-2d").innerHTML = `2D Graphics`
        document.getElementById("langs-mnav-contact").innerHTML = `Contact`
        if (document.getElementById("langs-foot-home") !== null) {
            document.getElementById("langs-foot-home").innerHTML = `Home`
            document.getElementById("langs-foot-3d").innerHTML = `3D Graphics`
            document.getElementById("langs-foot-2d").innerHTML = `2D Graphics`
            document.getElementById("langs-foot-contact").innerHTML = `Contact`
            document.getElementById("langs-foot-3d").style.marginLeft = "0px"
            document.getElementById("langs-foot-2d").style.marginLeft = "0px"
            document.getElementById("langs-foot-3dfix").setAttribute("width", "96px")
            document.getElementById("langs-foot-2dfix").setAttribute("width", "96px")
            document.getElementById("langs-foot-scroll").innerHTML = `<img src="assets/arrow-up.svg" style="margin-right: 14px;" draggable="false">Scroll to the top`
            document.getElementById("langs-foot-info").innerHTML = `<img src="assets/info.svg" style="margin-right: 14px;" draggable="false">Website information`
        }
        document.documentElement.lang = "en"
    } else if(currentlang == "SK") {
        document.getElementById("langs-nav-home").innerHTML = `Úvod`
        document.getElementById("langs-nav-3d").innerHTML = `3D Grafika`
        document.getElementById("langs-nav-2d").innerHTML = `2D Grafika`
        document.getElementById("langs-nav-contact").innerHTML = `Kontakt`
        document.getElementById("langs-mnav-home").innerHTML = `Úvod`
        document.getElementById("langs-mnav-3d").innerHTML = `3D Grafika`
        document.getElementById("langs-mnav-2d").innerHTML = `2D Grafika`
        document.getElementById("langs-mnav-contact").innerHTML = `Kontakt`
        if (document.getElementById("langs-foot-home") !== null) {
            document.getElementById("langs-foot-home").innerHTML = `Úvod`
            document.getElementById("langs-foot-3d").innerHTML = `3D Grafika`
            document.getElementById("langs-foot-2d").innerHTML = `2D Grafika`
            document.getElementById("langs-foot-contact").innerHTML = `Kontakt`
            document.getElementById("langs-foot-3dfix").setAttribute("width", "88px")
            document.getElementById("langs-foot-2dfix").setAttribute("width", "88px")
            document.getElementById("langs-foot-scroll").innerHTML = `<img src="assets/arrow-up.svg" style="margin-right: 14px;" draggable="false">Späť na začiatok`
            document.getElementById("langs-foot-info").innerHTML = `<img src="assets/info.svg" style="margin-right: 14px;" draggable="false">Informácie o webstránke`
        }
        document.documentElement.lang = "sk"
    }

    if(window.location.href.indexOf('home') !== -1){
        langizehome()
    } else if(window.location.href.indexOf('contact') !== -1){
        langizecontact()
    } else if(window.location.href.indexOf('metrostation') !== -1){
        langizemetrostation()
    } else if(window.location.href.indexOf('natart') !== -1){
        langizenatart()
    } else if(window.location.href.indexOf('realizmusnaorave') !== -1){
        langizerealizmusnaorave()
    } else if(window.location.href.indexOf('zelenaskola') !== -1){
        langizezelenaskola()
    } else if(window.location.href.indexOf('unageo') !== -1){
        langizeunageo()
    }
}