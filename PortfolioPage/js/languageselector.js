function togglelanguagemenu(){
    if(document.getElementById("langauge-options").style.opacity != 1){
        document.getElementById("langauge-options").style.opacity = 1;
        document.getElementById("langauge-options").style.pointerEvents = "all";
        document.getElementById("language-selector").classList.add("active");
    }
    else{
        document.getElementById("langauge-options").style.opacity = 0;
        document.getElementById("langauge-options").style.pointerEvents = "none";
        document.getElementById("language-selector").classList.remove("active");
    }
    
}

