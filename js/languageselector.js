


// language cookies
//creates the cookie if it doesn't exist or selects the correct language according to the cookie data
if (getCookie("LANG") == null) {
    document.cookie = "LANG=EN; expires=Thu, 18 Dec 2030 12:00:00 UTC";
}
else {
    document.getElementById("current-lang").innerHTML = getCookie("LANG")
    document.getElementById("selected-lang-flag").setAttribute('src', 'assets/flags/'+getCookie("LANG").toLowerCase()+'.svg')
    document.querySelectorAll(".lang-option-container").forEach((langoption) => {
        langoption.classList.remove("selected")
    });
    document.getElementById(getCookie("LANG")).classList.add("selected")
}



// Close the dropdown when clicking outside
document.addEventListener('click', (event) => {
    if(document.getElementById("language-options").classList.contains("active") == true){
        if (isClickOutsideDropdown(event)) {
            document.getElementById("language-options").classList.remove("active")
            document.getElementById("language-selector").classList.remove("active");
        }
    }
});


// function for toggling the dropdown
function togglelanguagemenu(){
    if(document.getElementById("language-options").classList.contains("active") != true){
        document.getElementById("language-options").classList.add("active")
        document.getElementById("language-selector").classList.add("active");
    }
    else{
        document.getElementById("language-options").classList.remove("active")
        document.getElementById("language-selector").classList.remove("active");
    }
}


// Function to check if the clicked target is outside the dropdown
function isClickOutsideDropdown(event) {
    return !document.getElementById("language-selector").contains(event.target);
}


// function for changing the language in the dropdown
let newlang;
function switchlang(newlang){
    document.getElementById("current-lang").innerHTML = newlang
    document.getElementById("selected-lang-flag").setAttribute('src', 'assets/flags/'+newlang.toLowerCase()+'.svg')
    document.querySelectorAll(".lang-option-container").forEach((langoption) => {
        langoption.classList.remove("selected")
    });
    document.getElementById(newlang).classList.add("selected")
    document.getElementById("language-options").classList.remove("active")
    document.getElementById("language-selector").classList.remove("active");
    
    document.cookie = "LANG="+newlang+"; expires=Thu, 18 Dec 2030 12:00:00 UTC";
    location.reload() // TEMPORARY : Fix for languages not switching on live deployed version
    langizeunversal()
    
}