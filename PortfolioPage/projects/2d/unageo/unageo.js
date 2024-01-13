let counter;

function end() {
    clearInterval(counter)
}



document.getElementById("unageo-var-varslider1").oninput = function() {
    document.getElementById("unageo-var-num1").value = document.getElementById("unageo-var-varslider1").value;
    updatefont()
}
document.getElementById("unageo-var-num1").oninput = function() {
    document.getElementById("unageo-var-varslider1").value = document.getElementById("unageo-var-num1").value;
    updatefont()
}
document.getElementById("unageo-var-num1").onblur = function() {
    if(document.getElementById("unageo-var-num1").value > 900){
        document.getElementById("unageo-var-num1").value = 900
    }
    if(document.getElementById("unageo-var-num1").value < 300){
        document.getElementById("unageo-var-num1").value = 300
    }
    document.getElementById("unageo-var-varslider1").value = document.getElementById("unageo-var-num1").value;
    updatefont()
}

function ugsliderincrease(elid) {
    document.getElementById(elid).value = parseInt(document.getElementById(elid).value) + 1
    document.getElementById("unageo-var-varslider1").value = document.getElementById(elid).value
    if(document.getElementById(elid).value > 900){
        document.getElementById(elid).value = 900
    }
    updatefont()
    counter = setInterval(function() {
        document.getElementById(elid).value = parseInt(document.getElementById(elid).value) + 1
        document.getElementById("unageo-var-varslider1").value = document.getElementById(elid).value
        if(document.getElementById(elid).value > 900){
            document.getElementById(elid).value = 900
        }
        updatefont()
        clearInterval(counter)
        counter = setInterval(function() {
            document.getElementById(elid).value = parseInt(document.getElementById(elid).value) + 1
            document.getElementById("unageo-var-varslider1").value = document.getElementById(elid).value
            if(document.getElementById(elid).value > 900){
                document.getElementById(elid).value = 900
            }
            updatefont()
        }, 50);
    }, 600);
    
}
function ugsliderdecrease(elid) {
    document.getElementById(elid).value = parseInt(document.getElementById(elid).value) - 1
    document.getElementById("unageo-var-varslider1").value = document.getElementById(elid).value
    if(document.getElementById(elid).value < 300){
        document.getElementById(elid).value = 300
    }
    updatefont()
    counter = setInterval(function() {
        document.getElementById(elid).value = parseInt(document.getElementById(elid).value) - 1
        document.getElementById("unageo-var-varslider1").value = document.getElementById(elid).value
        if(document.getElementById(elid).value < 300){
            document.getElementById(elid).value = 300
        }
        updatefont()
        clearInterval(counter)
        counter = setInterval(function() {
            document.getElementById(elid).value = parseInt(document.getElementById(elid).value) - 1
            document.getElementById("unageo-var-varslider1").value = document.getElementById(elid).value
            if(document.getElementById(elid).value < 300){
                document.getElementById(elid).value = 300
            }
            updatefont()
        }, 50);
    }, 600);
}



document.getElementById("unageo-var-varslider2").oninput = function() {
    document.getElementById("unageo-var-num2").value = document.getElementById("unageo-var-varslider2").value;
    updatefont()
}
document.getElementById("unageo-var-num2").oninput = function() {
    document.getElementById("unageo-var-varslider2").value = document.getElementById("unageo-var-num2").value;
    updatefont()
}
document.getElementById("unageo-var-num2").onblur = function() {
    if(document.getElementById("unageo-var-num2").value > 1){
        document.getElementById("unageo-var-num2").value = 1
    }
    if(document.getElementById("unageo-var-num2").value < 0){
        document.getElementById("unageo-var-num2").value = 0
    }
    document.getElementById("unageo-var-varslider2").value = document.getElementById("unageo-var-num2").value;
    updatefont()
}

function ugsliderincrease2(elid) {
    let intvalue = parseFloat(document.getElementById(elid).value.replace(/,/g, ".")) + 0.1
    document.getElementById(elid).value = Math.round(intvalue*100)/100
    document.getElementById("unageo-var-varslider2").value = document.getElementById(elid).value
    if(document.getElementById(elid).value > 1){
        document.getElementById(elid).value = 1
    }
    updatefont()
    counter = setInterval(function() {
        let intvalue = parseFloat(document.getElementById(elid).value.replace(/,/g, ".")) + 0.1
        document.getElementById(elid).value = Math.round(intvalue*100)/100
        document.getElementById("unageo-var-varslider2").value = document.getElementById(elid).value
        if(document.getElementById(elid).value > 1){
            document.getElementById(elid).value = 1
        }
        updatefont()
        clearInterval(counter)
        counter = setInterval(function() {
            let intvalue = parseFloat(document.getElementById(elid).value.replace(/,/g, ".")) + 0.1
            document.getElementById(elid).value = Math.round(intvalue*100)/100
            document.getElementById("unageo-var-varslider2").value = document.getElementById(elid).value
            if(document.getElementById(elid).value > 1){
                document.getElementById(elid).value = 1
            }
            updatefont()
        }, 50);
    }, 600);
}
function ugsliderdecrease2(elid) {
    let intvalue = parseFloat(document.getElementById(elid).value.replace(/,/g, ".")) - 0.1
    document.getElementById(elid).value = Math.round(intvalue*100)/100
    document.getElementById("unageo-var-varslider2").value = document.getElementById(elid).value
    if(document.getElementById(elid).value < 0){
        document.getElementById(elid).value = 0
    }
    updatefont()
    counter = setInterval(function() {
        let intvalue = parseFloat(document.getElementById(elid).value.replace(/,/g, ".")) - 0.1
        document.getElementById(elid).value = Math.round(intvalue*100)/100
        document.getElementById("unageo-var-varslider2").value = document.getElementById(elid).value
        if(document.getElementById(elid).value < 0){
            document.getElementById(elid).value = 0
        }
        updatefont()
        clearInterval(counter)
        counter = setInterval(function() {
            let intvalue = parseFloat(document.getElementById(elid).value.replace(/,/g, ".")) - 0.1
            document.getElementById(elid).value = Math.round(intvalue*100)/100
            document.getElementById("unageo-var-varslider2").value = document.getElementById(elid).value
            if(document.getElementById(elid).value < 0){
                document.getElementById(elid).value = 0
            }
            updatefont()
        }, 50);
    }, 600);
}



document.getElementById("unageo-var-varslider3").oninput = function() {
    document.getElementById("unageo-var-num3").value = document.getElementById("unageo-var-varslider3").value;
    updatefont()
}
document.getElementById("unageo-var-num3").oninput = function() {
    document.getElementById("unageo-var-varslider3").value = document.getElementById("unageo-var-num3").value;
    updatefont()
}
document.getElementById("unageo-var-num3").onblur = function() {
    if(document.getElementById("unageo-var-num3").value > 2){
        document.getElementById("unageo-var-num3").value = 2
    }
    if(document.getElementById("unageo-var-num3").value < 0.5){
        document.getElementById("unageo-var-num3").value = 0.5
    }
    document.getElementById("unageo-var-varslider3").value = document.getElementById("unageo-var-num3").value;
    updatefont()
}

function ugsliderincrease3(elid) {
    let intvalue = parseFloat(document.getElementById(elid).value.replace(/,/g, ".")) + 0.1
    document.getElementById(elid).value = Math.round(intvalue*100)/100
    document.getElementById("unageo-var-varslider3").value = document.getElementById(elid).value
    if(document.getElementById(elid).value > 2){
        document.getElementById(elid).value = 2
    }
    updatefont()
    counter = setInterval(function() {
        let intvalue = parseFloat(document.getElementById(elid).value.replace(/,/g, ".")) + 0.1
        document.getElementById(elid).value = Math.round(intvalue*100)/100
        document.getElementById("unageo-var-varslider3").value = document.getElementById(elid).value
        if(document.getElementById(elid).value > 2){
            document.getElementById(elid).value = 2
        }
        updatefont()
        clearInterval(counter)
        counter = setInterval(function() {
            let intvalue = parseFloat(document.getElementById(elid).value.replace(/,/g, ".")) + 0.1
            document.getElementById(elid).value = Math.round(intvalue*100)/100
            document.getElementById("unageo-var-varslider3").value = document.getElementById(elid).value
            if(document.getElementById(elid).value > 2){
                document.getElementById(elid).value = 2
            }
            updatefont()
        }, 50);
    }, 600);
}
function ugsliderdecrease3(elid) {
    let intvalue = parseFloat(document.getElementById(elid).value.replace(/,/g, ".")) - 0.1
    document.getElementById(elid).value = Math.round(intvalue*100)/100
    document.getElementById("unageo-var-varslider3").value = document.getElementById(elid).value
    if(document.getElementById(elid).value < 0.5){
        document.getElementById(elid).value = 0.5
    }
    updatefont()
    counter = setInterval(function() {
        let intvalue = parseFloat(document.getElementById(elid).value.replace(/,/g, ".")) - 0.1
        document.getElementById(elid).value = Math.round(intvalue*100)/100
        document.getElementById("unageo-var-varslider3").value = document.getElementById(elid).value
        if(document.getElementById(elid).value < 0.5){
            document.getElementById(elid).value = 0.5
        }
        updatefont()
        clearInterval(counter)
        counter = setInterval(function() {
            let intvalue = parseFloat(document.getElementById(elid).value.replace(/,/g, ".")) - 0.1
            document.getElementById(elid).value = Math.round(intvalue*100)/100
            document.getElementById("unageo-var-varslider3").value = document.getElementById(elid).value
            if(document.getElementById(elid).value < 0.5){
                document.getElementById(elid).value = 0.5
            }
            updatefont()
        }, 50);
    }, 600);
}



document.getElementById("unageo-var-varslider4").oninput = function() {
    document.getElementById("unageo-var-num4").value = document.getElementById("unageo-var-varslider4").value;
    updatefont()
}
document.getElementById("unageo-var-num4").oninput = function() {
    document.getElementById("unageo-var-varslider4").value = document.getElementById("unageo-var-num4").value;
    updatefont()
}
document.getElementById("unageo-var-num4").onblur = function() {
    if(document.getElementById("unageo-var-num4").value > 1){
        document.getElementById("unageo-var-num4").value = 1
    }
    if(document.getElementById("unageo-var-num4").value < -1){
        document.getElementById("unageo-var-num4").value = -1
    }
    document.getElementById("unageo-var-varslider4").value = document.getElementById("unageo-var-num4").value;
    updatefont()
}

function ugsliderincrease4(elid) {
    let intvalue = parseFloat(document.getElementById(elid).value.replace(/,/g, ".")) + 0.1
    document.getElementById(elid).value = Math.round(intvalue*100)/100
    document.getElementById("unageo-var-varslider4").value = document.getElementById(elid).value
    if(document.getElementById(elid).value > 1){
        document.getElementById(elid).value = 1
    }
    updatefont()
    counter = setInterval(function() {
        let intvalue = parseFloat(document.getElementById(elid).value.replace(/,/g, ".")) + 0.1
        document.getElementById(elid).value = Math.round(intvalue*100)/100
        document.getElementById("unageo-var-varslider4").value = document.getElementById(elid).value
        if(document.getElementById(elid).value > 1){
            document.getElementById(elid).value = 1
        }
        updatefont()
        clearInterval(counter)
        counter = setInterval(function() {
            let intvalue = parseFloat(document.getElementById(elid).value.replace(/,/g, ".")) + 0.1
            document.getElementById(elid).value = Math.round(intvalue*100)/100
            document.getElementById("unageo-var-varslider4").value = document.getElementById(elid).value
            if(document.getElementById(elid).value > 1){
                document.getElementById(elid).value = 1
            }
            updatefont()
        }, 50);
    }, 600);
}
function ugsliderdecrease4(elid) {
    let intvalue = parseFloat(document.getElementById(elid).value.replace(/,/g, ".")) - 0.1
    document.getElementById(elid).value = Math.round(intvalue*100)/100
    document.getElementById("unageo-var-varslider4").value = document.getElementById(elid).value
    if(document.getElementById(elid).value < -1){
        document.getElementById(elid).value = -1
    }
    updatefont()
    counter = setInterval(function() {
        let intvalue = parseFloat(document.getElementById(elid).value.replace(/,/g, ".")) - 0.1
        document.getElementById(elid).value = Math.round(intvalue*100)/100
        document.getElementById("unageo-var-varslider4").value = document.getElementById(elid).value
        if(document.getElementById(elid).value < -1){
            document.getElementById(elid).value = -1
        }
        updatefont()
        clearInterval(counter)
        counter = setInterval(function() {
            let intvalue = parseFloat(document.getElementById(elid).value.replace(/,/g, ".")) - 0.1
            document.getElementById(elid).value = Math.round(intvalue*100)/100
            document.getElementById("unageo-var-varslider4").value = document.getElementById(elid).value
            if(document.getElementById(elid).value < -1){
                document.getElementById(elid).value = -1
            }
            updatefont()
        }, 50);
    }, 600);
}



document.getElementById("unageo-var-num5").onblur = function() {
    if(document.getElementById("unageo-var-num5").value > 140){
        document.getElementById("unageo-var-num5").value = 140
    }
    if(document.getElementById("unageo-var-num5").value < 8){
        document.getElementById("unageo-var-num5").value = 8
    }
    updatefont()
}

function ugsliderincrease5(elid) {
    let intvalue = parseFloat(document.getElementById(elid).value.replace(/,/g, ".")) + 1
    document.getElementById(elid).value = Math.round(intvalue*100)/100
    if(document.getElementById(elid).value > 140){
        document.getElementById(elid).value = 140
    }
    updatefont()
    counter = setInterval(function() {
        let intvalue = parseFloat(document.getElementById(elid).value.replace(/,/g, ".")) + 1
        document.getElementById(elid).value = Math.round(intvalue*100)/100
        if(document.getElementById(elid).value > 140){
            document.getElementById(elid).value = 140
        }
        updatefont()
        clearInterval(counter)
        counter = setInterval(function() {
            let intvalue = parseFloat(document.getElementById(elid).value.replace(/,/g, ".")) + 1
            document.getElementById(elid).value = Math.round(intvalue*100)/100
            if(document.getElementById(elid).value > 140){
                document.getElementById(elid).value = 140
            }
            updatefont()
        }, 50);
    }, 600);
}
function ugsliderdecrease5(elid) {
    let intvalue = parseFloat(document.getElementById(elid).value.replace(/,/g, ".")) - 1
    document.getElementById(elid).value = Math.round(intvalue*100)/100
    if(document.getElementById(elid).value < 8){
        document.getElementById(elid).value = 8
    }
    updatefont()
    counter = setInterval(function() {
        let intvalue = parseFloat(document.getElementById(elid).value.replace(/,/g, ".")) - 1
        document.getElementById(elid).value = Math.round(intvalue*100)/100
        if(document.getElementById(elid).value < 8){
            document.getElementById(elid).value = 8
        }
        updatefont()
        clearInterval(counter)
        counter = setInterval(function() {
            let intvalue = parseFloat(document.getElementById(elid).value.replace(/,/g, ".")) - 1
            document.getElementById(elid).value = Math.round(intvalue*100)/100
            if(document.getElementById(elid).value < 8){
                document.getElementById(elid).value = 8
            }
            updatefont()
        }, 50);
    }, 600);
}

function updatefont(){
    document.getElementById("Unageo-fonttestfield").setAttribute('style', 'font-variation-settings:'+"\"ital\" "+document.getElementById("unageo-var-num2").value)
    document.getElementById("Unageo-fonttestfield").style.fontWeight = document.getElementById("unageo-var-num1").value;
    document.getElementById("Unageo-fonttestfield").style.lineHeight = document.getElementById("unageo-var-num3").value;
    document.getElementById("Unageo-fonttestfield").style.letterSpacing = document.getElementById("unageo-var-num4").value*2+"px";
    document.getElementById("Unageo-fonttestfield").style.fontSize = document.getElementById("unageo-var-num5").value+"px";
}



let showugnav = 1
var lastScrollTop = 0;

document.addEventListener("scroll", function(){
   var st = window.pageYOffset || document.documentElement.scrollTop;
   if (st > lastScrollTop) {
      // Wheel Down
      showugnav = 0
      ugnavvisibility()
   } else if (st < lastScrollTop) {
      // Wheel Up
      showugnav = 1
      ugnavvisibility()
   }
   lastScrollTop = st <= 0 ? 0 : st;
}, false);

function ugnavvisibility() {
    if(showugnav == 0){
        document.getElementById("unageo-nav").style.opacity = "0"
        document.getElementById("unageo-nav").style.pointerEvents = "none"
    }
    else{
        document.getElementById("unageo-nav").style.opacity = "1"
        document.getElementById("unageo-nav").style.pointerEvents = "all"
    }
}