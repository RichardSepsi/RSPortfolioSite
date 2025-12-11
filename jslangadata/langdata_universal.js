var currentlang = document.getElementById("current-lang").innerHTML

if(currentlang == "EN") {
    document.getElementById("langs-nav-home").innerHTML = `Home`
    document.getElementById("langs-nav-3d").innerHTML = `3D Graphics`
    document.getElementById("langs-nav-2d").innerHTML = `2D Graphics`
    document.getElementById("svg-wdth-fix-2").setAttribute("width", "96px")
    document.getElementById("svg-wdth-fix-2-2").setAttribute("width", "96px")
    document.getElementById("svg-wdth-fix-3").setAttribute("width", "96px")
    document.getElementById("svg-wdth-fix-3-2").setAttribute("width", "96px")
    document.getElementById("langs-nav-contact").innerHTML = `Contact`
    document.getElementById("svg-wdth-fix-4").setAttribute("width", "64px")
    document.getElementById("svg-wdth-fix-4-2").setAttribute("width", "64px")
    document.getElementById("langs-mnav-home").innerHTML = `Home`
    document.getElementById("langs-mnav-3d").innerHTML = `3D Graphics`
    document.getElementById("langs-mnav-2d").innerHTML = `2D Graphics`
    document.getElementById("svg-wdth-mob-fix-2").setAttribute("width", "96px")
    document.getElementById("svg-wdth-mob-fix-2-2").setAttribute("width", "96px")
    document.getElementById("svg-wdth-mob-fix-3").setAttribute("width", "96px")
    document.getElementById("svg-wdth-mob-fix-3-2").setAttribute("width", "96px")
    document.getElementById("langs-mnav-contact").innerHTML = `Contact`
    document.getElementById("svg-wdth-mob-fix-4").setAttribute("width", "64px")
    document.getElementById("svg-wdth-mob-fix-4-2").setAttribute("width", "64px")
    if (document.getElementById("langs-foot-home") !== null) {
        document.getElementById("langs-foot-home").innerHTML = `Home`
        document.getElementById("langs-foot-3d").innerHTML = `3D Graphics`
        document.getElementById("langs-foot-2d").innerHTML = `2D Graphics`
        document.getElementById("langs-foot-3d").style.marginLeft = "0px"
        document.getElementById("langs-foot-2d").style.marginLeft = "0px"
        document.getElementById("langs-foot-3dfix").setAttribute("width", "96px")
        document.getElementById("langs-foot-2dfix").setAttribute("width", "96px")
        document.getElementById("langs-foot-3dfix-2").setAttribute("width", "96px")
        document.getElementById("langs-foot-2dfix-2").setAttribute("width", "96px")
        document.getElementById("langs-foot-contact").innerHTML = `Contact`
        document.getElementById("langs-foot-contactfix").setAttribute("width", "66px")
        document.getElementById("langs-foot-contactfix-2").setAttribute("width", "66px")
        document.getElementById("langs-foot-scroll").innerHTML = `<img src="assets/arrow-up.svg" style="margin-right: 14px;" draggable="false">Scroll to the top`
        document.getElementById("langs-foot-info").innerHTML = `<img src="assets/info.svg" style="margin-right: 14px;" draggable="false">Website information`
    }
    document.documentElement.lang = "en"
} else if(currentlang == "SK") {
    document.getElementById("langs-nav-home").innerHTML = `Úvod`
    document.getElementById("langs-nav-3d").innerHTML = `3D Grafika`
    document.getElementById("langs-nav-2d").innerHTML = `2D Grafika`
    document.getElementById("svg-wdth-fix-2").setAttribute("width", "96px")
    document.getElementById("svg-wdth-fix-2-2").setAttribute("width", "96px")
    document.getElementById("svg-wdth-fix-3").setAttribute("width", "96px")
    document.getElementById("svg-wdth-fix-3-2").setAttribute("width", "96px")
    document.getElementById("langs-nav-contact").innerHTML = `Kontakt`
    document.getElementById("svg-wdth-fix-4").setAttribute("width", "64px")
    document.getElementById("svg-wdth-fix-4-2").setAttribute("width", "64px")
    document.getElementById("langs-mnav-home").innerHTML = `Úvod`
    document.getElementById("langs-mnav-3d").innerHTML = `3D Grafika`
    document.getElementById("langs-mnav-2d").innerHTML = `2D Grafika`
    document.getElementById("svg-wdth-mob-fix-2").setAttribute("width", "96px")
    document.getElementById("svg-wdth-mob-fix-2-2").setAttribute("width", "96px")
    document.getElementById("svg-wdth-mob-fix-3").setAttribute("width", "96px")
    document.getElementById("svg-wdth-mob-fix-3-2").setAttribute("width", "96px")
    document.getElementById("langs-mnav-contact").innerHTML = `Kontakt`
    document.getElementById("svg-wdth-mob-fix-4").setAttribute("width", "64px")
    document.getElementById("svg-wdth-mob-fix-4-2").setAttribute("width", "64px")
    if (document.getElementById("langs-foot-home") !== null) {
        document.getElementById("langs-foot-home").innerHTML = `Úvod`
        document.getElementById("langs-foot-3d").innerHTML = `3D Grafika`
        document.getElementById("langs-foot-2d").innerHTML = `2D Grafika`
        document.getElementById("langs-foot-3dfix").setAttribute("width", "88px")
        document.getElementById("langs-foot-2dfix").setAttribute("width", "88px")
        document.getElementById("langs-foot-3dfix-2").setAttribute("width", "88px")
        document.getElementById("langs-foot-2dfix-2").setAttribute("width", "88px")
        document.getElementById("langs-foot-contact").innerHTML = `Kontakt`
        document.getElementById("langs-foot-contactfix").setAttribute("width", "66px")
        document.getElementById("langs-foot-contactfix-2").setAttribute("width", "66px")
        document.getElementById("langs-foot-scroll").innerHTML = `<img src="assets/arrow-up.svg" style="margin-right: 14px;" draggable="false">Späť na začiatok`
        document.getElementById("langs-foot-info").innerHTML = `<img src="assets/info.svg" style="margin-right: 14px;" draggable="false">Informácie o webstránke`
    }
    document.documentElement.lang = "sk"
} else if(currentlang == "CZ") {
    document.getElementById("langs-nav-home").innerHTML = `Úvod`
    document.getElementById("langs-nav-3d").innerHTML = `3D Grafika`
    document.getElementById("langs-nav-2d").innerHTML = `2D Grafika`
    document.getElementById("svg-wdth-fix-2").setAttribute("width", "96px")
    document.getElementById("svg-wdth-fix-2-2").setAttribute("width", "96px")
    document.getElementById("svg-wdth-fix-3").setAttribute("width", "96px")
    document.getElementById("svg-wdth-fix-3-2").setAttribute("width", "96px")
    document.getElementById("langs-nav-contact").innerHTML = `Kontakt`
    document.getElementById("svg-wdth-fix-4").setAttribute("width", "64px")
    document.getElementById("svg-wdth-fix-4-2").setAttribute("width", "64px")
    document.getElementById("langs-mnav-home").innerHTML = `Úvod`
    document.getElementById("langs-mnav-3d").innerHTML = `3D Grafika`
    document.getElementById("langs-mnav-2d").innerHTML = `2D Grafika`
    document.getElementById("svg-wdth-mob-fix-2").setAttribute("width", "96px")
    document.getElementById("svg-wdth-mob-fix-2-2").setAttribute("width", "96px")
    document.getElementById("svg-wdth-mob-fix-3").setAttribute("width", "96px")
    document.getElementById("svg-wdth-mob-fix-3-2").setAttribute("width", "96px")
    document.getElementById("langs-mnav-contact").innerHTML = `Kontakt`
    document.getElementById("svg-wdth-mob-fix-4").setAttribute("width", "64px")
    document.getElementById("svg-wdth-mob-fix-4-2").setAttribute("width", "64px")
    if (document.getElementById("langs-foot-home") !== null) {
        document.getElementById("langs-foot-home").innerHTML = `Úvod`
        document.getElementById("langs-foot-3d").innerHTML = `3D Grafika`
        document.getElementById("langs-foot-2d").innerHTML = `2D Grafika`
        document.getElementById("langs-foot-3dfix").setAttribute("width", "88px")
        document.getElementById("langs-foot-2dfix").setAttribute("width", "88px")
        document.getElementById("langs-foot-3dfix-2").setAttribute("width", "88px")
        document.getElementById("langs-foot-2dfix-2").setAttribute("width", "88px")
        document.getElementById("langs-foot-contact").innerHTML = `Kontakt`
        document.getElementById("langs-foot-contactfix").setAttribute("width", "66px")
        document.getElementById("langs-foot-contactfix-2").setAttribute("width", "66px")
        document.getElementById("langs-foot-scroll").innerHTML = `<img src="assets/arrow-up.svg" style="margin-right: 14px;" draggable="false">Zpět na začátek`
        document.getElementById("langs-foot-info").innerHTML = `<img src="assets/info.svg" style="margin-right: 14px;" draggable="false">Informace o webu`
    }
    document.documentElement.lang = "cs"
} else if(currentlang == "DE") {
    document.getElementById("langs-nav-home").innerHTML = `Home`
    document.getElementById("langs-nav-3d").innerHTML = `3D Grafik`
    document.getElementById("langs-nav-2d").innerHTML = `2D Grafik`
    document.getElementById("svg-wdth-fix-2").setAttribute("width", "76px")
    document.getElementById("svg-wdth-fix-2-2").setAttribute("width", "76px")
    document.getElementById("svg-wdth-fix-3").setAttribute("width", "76px")
    document.getElementById("svg-wdth-fix-3-2").setAttribute("width", "76px")
    document.getElementById("langs-nav-contact").innerHTML = `Kontakt`
    document.getElementById("svg-wdth-fix-4").setAttribute("width", "64px")
    document.getElementById("svg-wdth-fix-4-2").setAttribute("width", "64px")
    document.getElementById("langs-mnav-home").innerHTML = `Home`
    document.getElementById("langs-mnav-3d").innerHTML = `3D Grafik`
    document.getElementById("langs-mnav-2d").innerHTML = `2D Grafik`
    document.getElementById("svg-wdth-mob-fix-2").setAttribute("width", "76px")
    document.getElementById("svg-wdth-mob-fix-2-2").setAttribute("width", "76px")
    document.getElementById("svg-wdth-mob-fix-3").setAttribute("width", "76px")
    document.getElementById("svg-wdth-mob-fix-3-2").setAttribute("width", "76px")
    document.getElementById("langs-mnav-contact").innerHTML = `Kontakt`
    document.getElementById("svg-wdth-mob-fix-4").setAttribute("width", "64px")
    document.getElementById("svg-wdth-mob-fix-4-2").setAttribute("width", "64px")
    if (document.getElementById("langs-foot-home") !== null) {
        document.getElementById("langs-foot-home").innerHTML = `Home`
        document.getElementById("langs-foot-3d").innerHTML = `3D Grafik`
        document.getElementById("langs-foot-2d").innerHTML = `2D Grafik`
        document.getElementById("langs-foot-3dfix").setAttribute("width", "72px")
        document.getElementById("langs-foot-2dfix").setAttribute("width", "72px")
        document.getElementById("langs-foot-3dfix-2").setAttribute("width", "72px")
        document.getElementById("langs-foot-2dfix-2").setAttribute("width", "72px")
        document.getElementById("langs-foot-contact").innerHTML = `Kontakt`
        document.getElementById("langs-foot-contactfix").setAttribute("width", "60px")
        document.getElementById("langs-foot-contactfix-2").setAttribute("width", "60px")
        document.getElementById("langs-foot-scroll").innerHTML = `<img src="assets/arrow-up.svg" style="margin-right: 14px;" draggable="false">Zurück zum Anfang`
        document.getElementById("langs-foot-info").innerHTML = `<img src="assets/info.svg" style="margin-right: 14px;" draggable="false">Website Informationen`
    }
    document.documentElement.lang = "de"
} else if(currentlang == "JP") {
    document.getElementById("langs-nav-home").innerHTML = `ホーム`
    document.getElementById("langs-nav-3d").innerHTML = `3D グラフィックス`
    document.getElementById("langs-nav-2d").innerHTML = `2D グラフィックス`
    document.getElementById("svg-wdth-fix-2").setAttribute("width", "140px")
    document.getElementById("svg-wdth-fix-2-2").setAttribute("width", "140px")
    document.getElementById("svg-wdth-fix-3").setAttribute("width", "140px")
    document.getElementById("svg-wdth-fix-3-2").setAttribute("width", "140px")
    document.getElementById("langs-nav-contact").innerHTML = `連絡`
    document.getElementById("svg-wdth-fix-4").setAttribute("width", "36px")
    document.getElementById("svg-wdth-fix-4-2").setAttribute("width", "36px")
    document.getElementById("langs-mnav-home").innerHTML = `ホーム`
    document.getElementById("langs-mnav-3d").innerHTML = `3D グラフィックス`
    document.getElementById("langs-mnav-2d").innerHTML = `2D グラフィックス`
    document.getElementById("svg-wdth-mob-fix-2").setAttribute("width", "140px")
    document.getElementById("svg-wdth-mob-fix-2-2").setAttribute("width", "140px")
    document.getElementById("svg-wdth-mob-fix-3").setAttribute("width", "140px")
    document.getElementById("svg-wdth-mob-fix-3-2").setAttribute("width", "140px")
    document.getElementById("langs-mnav-contact").innerHTML = `連絡`
    document.getElementById("svg-wdth-mob-fix-4").setAttribute("width", "36px")
    document.getElementById("svg-wdth-mob-fix-4-2").setAttribute("width", "36px")
    if (document.getElementById("langs-foot-home") !== null) {
        document.getElementById("langs-foot-home").innerHTML = `ホーム`
        document.getElementById("langs-foot-3d").innerHTML = `3D グラフィックス`
        document.getElementById("langs-foot-2d").innerHTML = `2D グラフィックス`
        document.getElementById("langs-foot-3dfix").setAttribute("width", "137px")
        document.getElementById("langs-foot-2dfix").setAttribute("width", "137px")
        document.getElementById("langs-foot-3dfix-2").setAttribute("width", "137px")
        document.getElementById("langs-foot-2dfix-2").setAttribute("width", "137px")
        document.getElementById("langs-foot-contact").innerHTML = `連絡`
        document.getElementById("langs-foot-contactfix").setAttribute("width", "33px")
        document.getElementById("langs-foot-contactfix-2").setAttribute("width", "33px")
        document.getElementById("langs-foot-scroll").innerHTML = `<img src="assets/arrow-up.svg" style="margin-right: 14px;" draggable="false">トップに戻る`
        document.getElementById("langs-foot-info").innerHTML = `<img src="assets/info.svg" style="margin-right: 14px;" draggable="false">サイト情報`
    }
    document.documentElement.lang = "ja"
}

function langizeunversal() {
    currentlang = document.getElementById("current-lang").innerHTML
    if(currentlang == "EN") {
        document.getElementById("langs-nav-home").innerHTML = `Home`
        document.getElementById("langs-nav-3d").innerHTML = `3D Graphics`
        document.getElementById("langs-nav-2d").innerHTML = `2D Graphics`
        document.getElementById("svg-wdth-fix-2").setAttribute("width", "96px")
        document.getElementById("svg-wdth-fix-2-2").setAttribute("width", "96px")
        document.getElementById("svg-wdth-fix-3").setAttribute("width", "96px")
        document.getElementById("svg-wdth-fix-3-2").setAttribute("width", "96px")
        document.getElementById("langs-nav-contact").innerHTML = `Contact`
        document.getElementById("svg-wdth-fix-4").setAttribute("width", "64px")
        document.getElementById("svg-wdth-fix-4-2").setAttribute("width", "64px")
        document.getElementById("langs-mnav-home").innerHTML = `Home`
        document.getElementById("langs-mnav-3d").innerHTML = `3D Graphics`
        document.getElementById("langs-mnav-2d").innerHTML = `2D Graphics`
        document.getElementById("svg-wdth-mob-fix-2").setAttribute("width", "96px")
        document.getElementById("svg-wdth-mob-fix-2-2").setAttribute("width", "96px")
        document.getElementById("svg-wdth-mob-fix-3").setAttribute("width", "96px")
        document.getElementById("svg-wdth-mob-fix-3-2").setAttribute("width", "96px")
        document.getElementById("langs-mnav-contact").innerHTML = `Contact`
        document.getElementById("svg-wdth-mob-fix-4").setAttribute("width", "64px")
        document.getElementById("svg-wdth-mob-fix-4-2").setAttribute("width", "64px")
        if (document.getElementById("langs-foot-home") !== null) {
            document.getElementById("langs-foot-home").innerHTML = `Home`
            document.getElementById("langs-foot-3d").innerHTML = `3D Graphics`
            document.getElementById("langs-foot-2d").innerHTML = `2D Graphics`
            document.getElementById("langs-foot-3d").style.marginLeft = "0px"
            document.getElementById("langs-foot-2d").style.marginLeft = "0px"
            document.getElementById("langs-foot-3dfix").setAttribute("width", "96px")
            document.getElementById("langs-foot-2dfix").setAttribute("width", "96px")
            document.getElementById("langs-foot-3dfix-2").setAttribute("width", "96px")
            document.getElementById("langs-foot-2dfix-2").setAttribute("width", "96px")
            document.getElementById("langs-foot-contact").innerHTML = `Contact`
            document.getElementById("langs-foot-contactfix").setAttribute("width", "66px")
            document.getElementById("langs-foot-contactfix-2").setAttribute("width", "66px")
            document.getElementById("langs-foot-scroll").innerHTML = `<img src="assets/arrow-up.svg" style="margin-right: 14px;" draggable="false">Scroll to the top`
            document.getElementById("langs-foot-info").innerHTML = `<img src="assets/info.svg" style="margin-right: 14px;" draggable="false">Website information`
        }
        document.documentElement.lang = "en"
    } else if(currentlang == "SK") {
        document.getElementById("langs-nav-home").innerHTML = `Úvod`
        document.getElementById("langs-nav-3d").innerHTML = `3D Grafika`
        document.getElementById("langs-nav-2d").innerHTML = `2D Grafika`
        document.getElementById("svg-wdth-fix-2").setAttribute("width", "96px")
        document.getElementById("svg-wdth-fix-2-2").setAttribute("width", "96px")
        document.getElementById("svg-wdth-fix-3").setAttribute("width", "96px")
        document.getElementById("svg-wdth-fix-3-2").setAttribute("width", "96px")
        document.getElementById("langs-nav-contact").innerHTML = `Kontakt`
        document.getElementById("svg-wdth-fix-4").setAttribute("width", "64px")
        document.getElementById("svg-wdth-fix-4-2").setAttribute("width", "64px")
        document.getElementById("langs-mnav-home").innerHTML = `Úvod`
        document.getElementById("langs-mnav-3d").innerHTML = `3D Grafika`
        document.getElementById("langs-mnav-2d").innerHTML = `2D Grafika`
        document.getElementById("svg-wdth-mob-fix-2").setAttribute("width", "96px")
        document.getElementById("svg-wdth-mob-fix-2-2").setAttribute("width", "96px")
        document.getElementById("svg-wdth-mob-fix-3").setAttribute("width", "96px")
        document.getElementById("svg-wdth-mob-fix-3-2").setAttribute("width", "96px")
        document.getElementById("langs-mnav-contact").innerHTML = `Kontakt`
        document.getElementById("svg-wdth-mob-fix-4").setAttribute("width", "64px")
        document.getElementById("svg-wdth-mob-fix-4-2").setAttribute("width", "64px")
        if (document.getElementById("langs-foot-home") !== null) {
            document.getElementById("langs-foot-home").innerHTML = `Úvod`
            document.getElementById("langs-foot-3d").innerHTML = `3D Grafika`
            document.getElementById("langs-foot-2d").innerHTML = `2D Grafika`
            document.getElementById("langs-foot-3dfix").setAttribute("width", "88px")
            document.getElementById("langs-foot-2dfix").setAttribute("width", "88px")
            document.getElementById("langs-foot-3dfix-2").setAttribute("width", "88px")
            document.getElementById("langs-foot-2dfix-2").setAttribute("width", "88px")
            document.getElementById("langs-foot-contact").innerHTML = `Kontakt`
            document.getElementById("langs-foot-contactfix").setAttribute("width", "66px")
            document.getElementById("langs-foot-contactfix-2").setAttribute("width", "66px")
            document.getElementById("langs-foot-scroll").innerHTML = `<img src="assets/arrow-up.svg" style="margin-right: 14px;" draggable="false">Späť na začiatok`
            document.getElementById("langs-foot-info").innerHTML = `<img src="assets/info.svg" style="margin-right: 14px;" draggable="false">Informácie o webstránke`
        }
        document.documentElement.lang = "sk"
    } else if(currentlang == "CZ") {
        document.getElementById("langs-nav-home").innerHTML = `Úvod`
        document.getElementById("langs-nav-3d").innerHTML = `3D Grafika`
        document.getElementById("langs-nav-2d").innerHTML = `2D Grafika`
        document.getElementById("svg-wdth-fix-2").setAttribute("width", "96px")
        document.getElementById("svg-wdth-fix-2-2").setAttribute("width", "96px")
        document.getElementById("svg-wdth-fix-3").setAttribute("width", "96px")
        document.getElementById("svg-wdth-fix-3-2").setAttribute("width", "96px")
        document.getElementById("langs-nav-contact").innerHTML = `Kontakt`
        document.getElementById("svg-wdth-fix-4").setAttribute("width", "64px")
        document.getElementById("svg-wdth-fix-4-2").setAttribute("width", "64px")
        document.getElementById("langs-mnav-home").innerHTML = `Úvod`
        document.getElementById("langs-mnav-3d").innerHTML = `3D Grafika`
        document.getElementById("langs-mnav-2d").innerHTML = `2D Grafika`
        document.getElementById("svg-wdth-mob-fix-2").setAttribute("width", "96px")
        document.getElementById("svg-wdth-mob-fix-2-2").setAttribute("width", "96px")
        document.getElementById("svg-wdth-mob-fix-3").setAttribute("width", "96px")
        document.getElementById("svg-wdth-mob-fix-3-2").setAttribute("width", "96px")
        document.getElementById("langs-mnav-contact").innerHTML = `Kontakt`
        document.getElementById("svg-wdth-mob-fix-4").setAttribute("width", "64px")
        document.getElementById("svg-wdth-mob-fix-4-2").setAttribute("width", "64px")
        if (document.getElementById("langs-foot-home") !== null) {
            document.getElementById("langs-foot-home").innerHTML = `Úvod`
            document.getElementById("langs-foot-3d").innerHTML = `3D Grafika`
            document.getElementById("langs-foot-2d").innerHTML = `2D Grafika`
            document.getElementById("langs-foot-3dfix").setAttribute("width", "88px")
            document.getElementById("langs-foot-2dfix").setAttribute("width", "88px")
            document.getElementById("langs-foot-3dfix-2").setAttribute("width", "88px")
            document.getElementById("langs-foot-2dfix-2").setAttribute("width", "88px")
            document.getElementById("langs-foot-contact").innerHTML = `Kontakt`
            document.getElementById("langs-foot-contactfix").setAttribute("width", "66px")
            document.getElementById("langs-foot-contactfix-2").setAttribute("width", "66px")
            document.getElementById("langs-foot-scroll").innerHTML = `<img src="assets/arrow-up.svg" style="margin-right: 14px;" draggable="false">Zpět na začátek`
            document.getElementById("langs-foot-info").innerHTML = `<img src="assets/info.svg" style="margin-right: 14px;" draggable="false">Informace o webu`
        }
        document.documentElement.lang = "cs"
    } else if(currentlang == "DE") {
        document.getElementById("langs-nav-home").innerHTML = `Home`
        document.getElementById("langs-nav-3d").innerHTML = `3D Grafik`
        document.getElementById("langs-nav-2d").innerHTML = `2D Grafik`
        document.getElementById("svg-wdth-fix-2").setAttribute("width", "76px")
        document.getElementById("svg-wdth-fix-2-2").setAttribute("width", "76px")
        document.getElementById("svg-wdth-fix-3").setAttribute("width", "76px")
        document.getElementById("svg-wdth-fix-3-2").setAttribute("width", "76px")
        document.getElementById("langs-nav-contact").innerHTML = `Kontakt`
        document.getElementById("svg-wdth-fix-4").setAttribute("width", "64px")
        document.getElementById("svg-wdth-fix-4-2").setAttribute("width", "64px")
        document.getElementById("langs-mnav-home").innerHTML = `Home`
        document.getElementById("langs-mnav-3d").innerHTML = `3D Grafik`
        document.getElementById("langs-mnav-2d").innerHTML = `2D Grafik`
        document.getElementById("svg-wdth-mob-fix-2").setAttribute("width", "76px")
        document.getElementById("svg-wdth-mob-fix-2-2").setAttribute("width", "76px")
        document.getElementById("svg-wdth-mob-fix-3").setAttribute("width", "76px")
        document.getElementById("svg-wdth-mob-fix-3-2").setAttribute("width", "76px")
        document.getElementById("langs-mnav-contact").innerHTML = `Kontakt`
        document.getElementById("svg-wdth-mob-fix-4").setAttribute("width", "64px")
        document.getElementById("svg-wdth-mob-fix-4-2").setAttribute("width", "64px")
        if (document.getElementById("langs-foot-home") !== null) {
            document.getElementById("langs-foot-home").innerHTML = `Home`
            document.getElementById("langs-foot-3d").innerHTML = `Grafik`
            document.getElementById("langs-foot-2d").innerHTML = `Grafik`
            document.getElementById("langs-foot-3dfix").setAttribute("width", "72px")
            document.getElementById("langs-foot-2dfix").setAttribute("width", "72px")
            document.getElementById("langs-foot-3dfix-2").setAttribute("width", "72px")
            document.getElementById("langs-foot-2dfix-2").setAttribute("width", "72px")
            document.getElementById("langs-foot-contact").innerHTML = `Kontakt`
            document.getElementById("langs-foot-contactfix").setAttribute("width", "60px")
            document.getElementById("langs-foot-contactfix-2").setAttribute("width", "60px")
            document.getElementById("langs-foot-scroll").innerHTML = `<img src="assets/arrow-up.svg" style="margin-right: 14px;" draggable="false">Zurück zum Anfang`
            document.getElementById("langs-foot-info").innerHTML = `<img src="assets/info.svg" style="margin-right: 14px;" draggable="false">Website Informationen`
        }
        document.documentElement.lang = "de"
    } else if(currentlang == "JP") {
        document.getElementById("langs-nav-home").innerHTML = `ホーム`
        document.getElementById("langs-nav-3d").innerHTML = `3D グラフィックス`
        document.getElementById("langs-nav-2d").innerHTML = `2D グラフィックス`
        document.getElementById("svg-wdth-fix-2").setAttribute("width", "140px")
        document.getElementById("svg-wdth-fix-2-2").setAttribute("width", "140px")
        document.getElementById("svg-wdth-fix-3").setAttribute("width", "140px")
        document.getElementById("svg-wdth-fix-3-2").setAttribute("width", "140px")
        document.getElementById("langs-nav-contact").innerHTML = `連絡`
        document.getElementById("svg-wdth-fix-4").setAttribute("width", "36px")
        document.getElementById("svg-wdth-fix-4-2").setAttribute("width", "36px")
        document.getElementById("langs-mnav-home").innerHTML = `ホーム`
        document.getElementById("langs-mnav-3d").innerHTML = `3D グラフィックス`
        document.getElementById("langs-mnav-2d").innerHTML = `2D グラフィックス`
        document.getElementById("svg-wdth-mob-fix-2").setAttribute("width", "140px")
        document.getElementById("svg-wdth-mob-fix-2-2").setAttribute("width", "140px")
        document.getElementById("svg-wdth-mob-fix-3").setAttribute("width", "140px")
        document.getElementById("svg-wdth-mob-fix-3-2").setAttribute("width", "140px")
        document.getElementById("langs-mnav-contact").innerHTML = `連絡`
        document.getElementById("svg-wdth-mob-fix-4").setAttribute("width", "36px")
        document.getElementById("svg-wdth-mob-fix-4-2").setAttribute("width", "36px")
        if (document.getElementById("langs-foot-home") !== null) {
            document.getElementById("langs-foot-home").innerHTML = `ホーム`
            document.getElementById("langs-foot-3d").innerHTML = `3D グラフィックス`
            document.getElementById("langs-foot-2d").innerHTML = `2D グラフィックス`
            document.getElementById("langs-foot-3dfix").setAttribute("width", "137px")
            document.getElementById("langs-foot-2dfix").setAttribute("width", "137px")
            document.getElementById("langs-foot-3dfix-2").setAttribute("width", "137px")
            document.getElementById("langs-foot-2dfix-2").setAttribute("width", "137px")
            document.getElementById("langs-foot-contact").innerHTML = `連絡`
            document.getElementById("langs-foot-contactfix").setAttribute("width", "33px")
            document.getElementById("langs-foot-contactfix-2").setAttribute("width", "33px")
            document.getElementById("langs-foot-scroll").innerHTML = `<img src="assets/arrow-up.svg" style="margin-right: 14px;" draggable="false">トップに戻る`
            document.getElementById("langs-foot-info").innerHTML = `<img src="assets/info.svg" style="margin-right: 14px;" draggable="false">サイト情報`
        }
        document.documentElement.lang = "ja"
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
    } else if(window.location.href.indexOf('wordgrind') !== -1){
        langizewordgrind()
    } else if(window.location.href.indexOf('seasidecliffs') !== -1){
        langizeseasidecliffs()
    } else if(window.location.href.indexOf('photography') !== -1){
        langizephotography()
    }
}