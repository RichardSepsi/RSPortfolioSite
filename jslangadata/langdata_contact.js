if(currentlang == "EN") {
    document.getElementById("langs-contact-title").innerHTML = `Contact me`
    document.getElementById("cdt1").innerHTML = `through e-mail`
    document.getElementById("langs-contact-copy").innerHTML = `Click to copy`
    document.getElementById("cdt2").innerHTML = `or social media`
    document.getElementById("wst1").innerHTML = `Website help`
    document.getElementById("wst2").innerHTML = `This website is open source and developed on GitHub.`
    document.getElementById("wst3").innerHTML = `If you have found a bug/error or you have an improvement suggestion, don't hesitate to submit a new issue on GitHub.`
    document.getElementById("langs-contact-github").innerHTML = `Visit GitHub page`
    document.getElementById("langs-contact-issue").innerHTML = `Submit a new issue`

} else if(currentlang == "SK") {
    document.getElementById("langs-contact-title").innerHTML = `Kontakt`
    document.getElementById("cdt1").innerHTML = `cez e-mail`
    document.getElementById("langs-contact-copy").innerHTML = `stlačte pre skopírovanie`
    document.getElementById("cdt2").innerHTML = `alebo sociálne médiá`
    document.getElementById("wst1").innerHTML = `Pomoc so stránkou`
    document.getElementById("wst2").innerHTML = `Táto webstránka je open source a je vyvýjaná na platforme GitHub`
    document.getElementById("wst3").innerHTML = `Ak ste našli na webstránke nejakú chybu alebo máte nápad na vylepšenie, neváhajte a informujte ma o tom na GitHube.`
    document.getElementById("langs-contact-github").innerHTML = `Navštíviť GitHub`
    document.getElementById("langs-contact-issue").innerHTML = `Nahlásiť problém`

} else if(currentlang == "CZ") {
    document.getElementById("langs-contact-title").innerHTML = `Kontakt`
    document.getElementById("cdt1").innerHTML = `přes e-mail`
    document.getElementById("langs-contact-copy").innerHTML = `stiskněte pro kopírování`
    document.getElementById("cdt2").innerHTML = `nebo sociální média`
    document.getElementById("wst1").innerHTML = `Pomoc s webem`
    document.getElementById("wst2").innerHTML = `Tenhle web je open source a je vyvíjen na platformě GitHub`
    document.getElementById("wst3").innerHTML = `Pokud jste na webu našli nejakú chybu nebo máte nápad na zlepšení, neváhejte a informujte mě o tom na GitHubu.`
    document.getElementById("langs-contact-github").innerHTML = `Navštívit GitHub`
    document.getElementById("langs-contact-issue").innerHTML = `Nahlásit problém`
}


function langizecontact() {
    if(currentlang == "EN") {
        document.getElementById("langs-contact-title").innerHTML = `Contact me`
        document.getElementById("cdt1").innerHTML = `through e-mail`
        document.getElementById("langs-contact-copy").innerHTML = `Click to copy`
        document.getElementById("cdt2").innerHTML = `or social media`
        document.getElementById("wst1").innerHTML = `Website help`
        document.getElementById("wst2").innerHTML = `This website is open source and developed on GitHub.`
        document.getElementById("wst3").innerHTML = `If you have found a bug/error or you have an improvement suggestion, don't hesitate to submit a new issue on GitHub.`
        document.getElementById("langs-contact-github").innerHTML = `Visit GitHub page`
        document.getElementById("langs-contact-issue").innerHTML = `Submit a new issue`
    
    } else if(currentlang == "SK") {
        document.getElementById("langs-contact-title").innerHTML = `Kontakt`
        document.getElementById("cdt1").innerHTML = `cez e-mail`
        document.getElementById("langs-contact-copy").innerHTML = `stlačte pre skopírovanie`
        document.getElementById("cdt2").innerHTML = `alebo sociálne médiá`
        document.getElementById("wst1").innerHTML = `Pomoc so stránkou`
        document.getElementById("wst2").innerHTML = `Táto webstránka je open source a je vyvýjaná na platforme GitHub`
        document.getElementById("wst3").innerHTML = `Ak ste našli na webstránke nejakú chybu alebo máte nápad na vylepšenie, neváhajte a informujte ma o tom na GitHube.`
        document.getElementById("langs-contact-github").innerHTML = `Navštíviť GitHub`
        document.getElementById("langs-contact-issue").innerHTML = `Nahlásiť problém`

    } else if(currentlang == "CZ") {
        document.getElementById("langs-contact-title").innerHTML = `Kontakt`
        document.getElementById("cdt1").innerHTML = `přes e-mail`
        document.getElementById("langs-contact-copy").innerHTML = `stiskněte pro kopírování`
        document.getElementById("cdt2").innerHTML = `nebo sociální média`
        document.getElementById("wst1").innerHTML = `Pomoc s webem`
        document.getElementById("wst2").innerHTML = `Tenhle web je open source a je vyvíjen na platformě GitHub`
        document.getElementById("wst3").innerHTML = `Pokud jste na webu našli nejakú chybu nebo máte nápad na zlepšení, neváhejte a informujte mě o tom na GitHubu.`
        document.getElementById("langs-contact-github").innerHTML = `Navštívit GitHub`
        document.getElementById("langs-contact-issue").innerHTML = `Nahlásit problém`
    }
}