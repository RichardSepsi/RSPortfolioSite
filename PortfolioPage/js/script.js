
// custom scrollbar init
var { 
    OverlayScrollbars, 
    ScrollbarsHidingPlugin, 
    SizeObserverPlugin, 
    ClickScrollPlugin  
} = OverlayScrollbarsGlobal;
const osInstance = OverlayScrollbars(document.querySelector('#body'), {});



//function for checking cookies
function getCookie(name) {
    var dc = document.cookie;
    var prefix = name + "=";
    var begin = dc.indexOf("; " + prefix);
    if (begin == -1) {
        begin = dc.indexOf(prefix);
        if (begin != 0) return null;
    }
    else
    {
        begin += 2;
        var end = document.cookie.indexOf(";", begin);
        if (end == -1) {
        end = dc.length;
        }
    }
    // because unescape has been deprecated, replaced with decodeURI
    //return unescape(dc.substring(begin + prefix.length, end));
    return decodeURI(dc.substring(begin + prefix.length, end));
} 



// scroll to top function
function scrolltothetop(){
    window.scrollTo(0, 0);
}



//copy mail function
function mailcopy() {
    let mail = "appsepsi@gmail.com";
    navigator.clipboard.writeText(mail);
}

