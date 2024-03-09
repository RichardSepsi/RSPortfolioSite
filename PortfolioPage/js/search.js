document.querySelector(".searchicon").setAttribute("onclick", "searchfunction()")
let issearchopen = 0

function searchfunction() {
    if(issearchopen == 0){
        issearchopen = 1
        disableScroll()
        document.getElementById("search-maincontainer").innerHTML += `
        <div class="search-element">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="28" height="28" viewBox="0 0 24 24" stroke="#505050" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" class="search-icon">
                <circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input type="text" class="search-bar" placeholder="Type here to search" id="searchquery" autocomplete="off">
        </div>
        <div style="height: 10px;"></div>
        <div class="search-element" style="width: 474px;">
            <div id="search-content">

                
                <span class="search-placeholder">Enter at least 2 characters to get results</span>
            </div>
            <div class="search-divider"></div>
            <div class="search-keybinds">
                <div class="search-keyhint">-</div>
                <span class="search-keyhint-label">to clear</span>
                <div class="search-keyhint" style="max-width: 30px;">↑</div>
                <div style="width: 4px;"></div>
                <div class="search-keyhint" style="max-width: 30px;">↓</div>
                <span class="search-keyhint-label">to navigate</span>
                <div class="search-keyhint">esc</div>
                <span class="search-keyhint-label" style="margin-right: 0;">to close</span>
            </div>
        </div>
        `
        setTimeout(() => {
            document.getElementById("search-maincontainer").style.opacity = "1";
            document.getElementById("search-maincontainer").style.pointerEvents = "all";
        }, 10);
        document.getElementById("searchquery").focus()
        document.getElementById("searchquery").addEventListener('input', (event) => {search()});

            

        function removesearchexitlisteners() {
            document.removeEventListener("keydown", escsearchquit);
            document.removeEventListener("keydown", clicksearchquit);
            document.removeEventListener('keydown', minussearchclear)
        }
        document.addEventListener('keydown', escsearchquit)
        document.getElementById("search-maincontainer").addEventListener('click', clicksearchquit);
        document.addEventListener('keydown', minussearchclear)

        function escsearchquit(evt) {
            if (evt.key === 'Escape') {
                document.getElementById("search-maincontainer").style.opacity = "0";
                document.getElementById("search-maincontainer").style.pointerEvents = "none";
                enableScroll()
                setTimeout(() => {
                    document.getElementById("search-maincontainer").innerHTML = ""
                    issearchopen = 0
                }, 200);
                removesearchexitlisteners()
            }
        };
        function clicksearchquit(e) {
            if (e.target === document.getElementById("search-maincontainer")){
                document.getElementById("search-maincontainer").style.opacity = "0";
                document.getElementById("search-maincontainer").style.pointerEvents = "none";
                enableScroll()
                setTimeout(() => {
                    document.getElementById("search-maincontainer").innerHTML = ""
                    issearchopen = 0
                }, 200);
                removesearchexitlisteners()
            }
        };
        function minussearchclear(en) {
            if (en.key === '-') {
                setTimeout(function() {
                    document.getElementById("searchquery").value = ""
                    search()
                }, 10);
            }
        };
        
    }
}

function searchuniquit(){
    document.getElementById("search-maincontainer").style.opacity = "0";
    document.getElementById("search-maincontainer").style.pointerEvents = "none";
    enableScroll()
    setTimeout(() => {
        document.getElementById("search-maincontainer").innerHTML = ""
        issearchopen = 0
    }, 200);
}


function search() {
    let squery = document.getElementById("searchquery").value
    squery = squery.toLowerCase()
    let soutput = document.getElementById("search-content")
    if(squery.length < 2) {
        soutput.innerHTML = `<span class="search-placeholder">Enter at least 2 characters to get results</span>`
    }
    else{
        filtereditems = [];
        let searchsuccess = 2

        for(let i = 0; i < Object.keys(searchinfo).length; i++){
            let currentitem = Object.keys(searchinfo)[i]
            let currenttags = searchinfo[currentitem].tags;

            if(currenttags.includes(squery) == true) {
                searchsuccess = 1
                filtereditems.push(currentitem)
            }
            else {
                searchsuccess = 2
            }
        }
        if(filtereditems.length > 0) {
            soutput.innerHTML = ""
            filtereditems.forEach((element) => {
                soutput.innerHTML += searchinfo[element].code
            });
        }
        else {
            soutput.innerHTML = `<span class="search-placeholder">There are no results for "`+squery+`"</span>`
        }
    }
}