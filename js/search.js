document.querySelector(".searchicon").setAttribute("onclick", "searchfunction()")
let issearchopen = 0
let filtereditemscount = 0;
let currentfiltereditemselected = 0;

function searchfunction() {
    if(issearchopen == 0){
        issearchopen = 1
        disableScroll()
        if(currentlang == "EN") {
            document.getElementById("search-maincontainer").innerHTML += `
            <div class="search-prevent-wrapper"><div class="search-element">
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
            </div></div>
            `
        } else if(currentlang == "SK") {
            document.getElementById("search-maincontainer").innerHTML += `
            <div class="search-element">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="28" height="28" viewBox="0 0 24 24" stroke="#505050" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" class="search-icon">
                    <circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
                <input type="text" class="search-bar" placeholder="Píšte sem pre vyhľadávanie" id="searchquery" autocomplete="off">
            </div>
            <div style="height: 10px;"></div>
            <div class="search-element" style="width: 474px;">
                <div id="search-content">
                    <span class="search-placeholder">Napíšte aspoň 2 znaky pre získanie výsledkov</span>
                </div>
                <div class="search-divider"></div>
                <div class="search-keybinds">
                    <div class="search-keyhint">-</div>
                    <span class="search-keyhint-label">zmazať</span>
                    <div class="search-keyhint" style="max-width: 30px;">↑</div>
                    <div style="width: 4px;"></div>
                    <div class="search-keyhint" style="max-width: 30px;">↓</div>
                    <span class="search-keyhint-label">navigovať</span>
                    <div class="search-keyhint">esc</div>
                    <span class="search-keyhint-label" style="margin-right: 0;">zatvoriť</span>
                </div>
            </div>
            `
        }  else if(currentlang == "CZ") {
            document.getElementById("search-maincontainer").innerHTML += `
            <div class="search-element">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="28" height="28" viewBox="0 0 24 24" stroke="#505050" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" class="search-icon">
                    <circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
                <input type="text" class="search-bar" placeholder="Pište sem pro vyhledávání" id="searchquery" autocomplete="off">
            </div>
            <div style="height: 10px;"></div>
            <div class="search-element" style="width: 474px;">
                <div id="search-content">
                    <span class="search-placeholder">Napište alespoň 2 znaky, abyste získali výsledky</span>
                </div>
                <div class="search-divider"></div>
                <div class="search-keybinds">
                    <div class="search-keyhint">-</div>
                    <span class="search-keyhint-label">smazat</span>
                    <div class="search-keyhint" style="max-width: 30px;">↑</div>
                    <div style="width: 4px;"></div>
                    <div class="search-keyhint" style="max-width: 30px;">↓</div>
                    <span class="search-keyhint-label">navigovat</span>
                    <div class="search-keyhint">esc</div>
                    <span class="search-keyhint-label" style="margin-right: 0;">zavřít</span>
                </div>
            </div>
            `
        }
        
        setTimeout(() => {
            document.getElementById("search-maincontainer").style.opacity = "1";
            document.getElementById("search-maincontainer").style.pointerEvents = "all";
        }, 10);
        document.getElementById("searchquery").focus()
        document.getElementById("searchquery").addEventListener('input', (event) => {search()});

            

        function removesearchexitlisteners() {
            document.removeEventListener("keydown", searchkeydown);
            document.removeEventListener('click', clicksearchquit);
        }
        document.addEventListener('keydown', searchkeydown)
        document.getElementById("search-maincontainer").addEventListener('click', clicksearchquit);

        currentfiltereditemselected = 0;
        function searchkeydown(evt) {
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
            if (evt.key === 'ArrowDown') {
                currentfiltereditemselected = currentfiltereditemselected + 1
                if(currentfiltereditemselected < 1) {
                    currentfiltereditemselected = 1
                } else if(currentfiltereditemselected > filtereditemscount) {
                    currentfiltereditemselected = filtereditemscount
                }
                if (document.getElementById("search-result-container1") !== null) {
                    document.getElementById("search-result-container"+currentfiltereditemselected).focus()
                }
            }
            if (evt.key === 'ArrowUp') {
                currentfiltereditemselected = currentfiltereditemselected - 1
                if(currentfiltereditemselected < 1) {
                    currentfiltereditemselected = 1
                } else if(currentfiltereditemselected > filtereditemscount) {
                    currentfiltereditemselected = filtereditemscount
                }
                if (document.getElementById("search-result-container1") !== null) {
                    document.getElementById("search-result-container"+currentfiltereditemselected).focus()
                }
            }
            if (evt.key === 'Enter') {
                document.activeElement.click()
            }
            if (evt.key === '-') {
                setTimeout(function() {
                    document.getElementById("searchquery").value = ""
                    search()
                }, 10);
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
    currentfiltereditemselected = 0;
    let squery = document.getElementById("searchquery").value
    squery = squery.toLowerCase()
    let soutput = document.getElementById("search-content")
    if(squery.length < 2) {
        if(currentlang == "EN") {
            soutput.innerHTML = `<span class="search-placeholder">Enter at least 2 characters to get results</span>`
        } else if(currentlang == "SK") {
            soutput.innerHTML = `<span class="search-placeholder">Napíšte aspoň 2 znaky pre získanie výsledkov</span>`
        } else if(currentlang == "CZ") {
            soutput.innerHTML = `<span class="search-placeholder">Napište alespoň 2 znaky, abyste získali výsledky</span>`
        }
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
            let rescounter = 0
            filtereditemscount = filtereditems.length
            filtereditems.forEach((element) => {
                if(currentlang == "EN") {
                    soutput.innerHTML += searchinfo[element].codeen
                } else if(currentlang == "SK") {
                    soutput.innerHTML += searchinfo[element].codesk
                } else if(currentlang == "CZ") {
                    soutput.innerHTML += searchinfo[element].codecz
                }
                rescounter=rescounter+1
                document.getElementById("search-result-container").id = "search-result-container"+rescounter
            });
        }
        else {
            if(currentlang == "EN") {
                soutput.innerHTML = `<span class="search-placeholder">There are no results for "`+squery+`"</span>`
            } else if(currentlang == "SK") {
                soutput.innerHTML = `<span class="search-placeholder">Pre "`+squery+`" neboli nájdené žiadne výsledky</span>`
            } else if(currentlang == "CZ") {
                soutput.innerHTML = `<span class="search-placeholder">Pro "`+squery+`" nebyly nalezeny žádné výsledky</span>`
            }
        }
    }
}
