if(currentlang == "EN") {
    document.getElementById("langs-unageo-dvariable").innerHTML = `Variable`
    document.getElementById("langs-unageo-dstatic").innerHTML = `Static`
    document.getElementById("langs-unageo-desc").innerHTML = `Unageo is a modern, open-source, sans-serif
    typeface that uses perfect geometry and uniform stroke width where possible, but still maintains great readability.<br>`
    document.getElementById("langs-unageo-desc2").innerHTML = `Unageo supports hundreds of languages in latin, cyrillic and greek scripts.`
    document.getElementById("langs-unageo-desc3").innerHTML = `+ Cyrillic and greek scripts, scroll down to find out more!`
    document.getElementById("langs-unageo-lineheight").innerHTML = `Line height`
    document.getElementById("langs-unageo-letterspace").innerHTML = `Letter space`
    document.getElementById("langs-unageo-fontsize").innerHTML = `Font size`
    document.getElementById("Unageo-fonttestfield").setAttribute("placeholder", "Type here to try out unageo and it's variable features")
    document.getElementById("langs-unageo-cyrillictitle").innerHTML = `Cyrillic`
    document.getElementById("langs-unageo-cyrillic").innerHTML = `Unageo cyrillic was made in Bulgarian style.
    It uses more rounded geometric shapes and letters have more variety in their height, which makes reading easier.`
    document.getElementById("langs-unageo-greektitle").innerHTML = `Greek`
    document.getElementById("langs-unageo-greek").innerHTML = `Unageo greek follows the same style with perfect geometry,
    but completes it with smooth lines and adds extra geometric features to make it more unique and distinct.`
    document.getElementById("langs-unageo-howmadetitle").innerHTML = `<span style="font-weight: 500; color: #969696; margin-left: -19px;">› </span>How was unageo made`
    document.getElementById("langs-unageo-story1").innerHTML = `
    As a designer, I have used many different fonts for my projects and sometimes I thought
    that to better match my style, I could try to make my own font, but I never did. 
    This time, I decided to give it a shot, even though I knew almost nothing about font creation.
    I only knew I wanted my font to be geometric because that's my preferred style.`
    document.getElementById("langs-unageo-story2").innerHTML = `
    I opened up FontForge to try to create something, but I couldn't use it very well,
    so I decided to continue with an unusual workflow. I made the characters in Inkscape, which I'm familiar with, and imported the outlines into FontForge.
    The process didn't take as long as I expected, and I was done in a few days. I made each glyph in light and Black variant, made sure they were
    interpolable and then I adjusted the metrics and added kerning.`
    document.getElementById("langs-unageo-story3").innerHTML = `
    Of course, I ran into some issues along the way and learned that fonts are
    much more complicated than they look like. After I had everything figured out, I used Fontmake to generate a variable font and Fonttools to
    create static instances.
    I still have a lot to learn if I decide to make another font, and I'm sure this one isn't perfect either.
    If you have an idea for an improvement, don't hesitate to submit a new issue on GitHub, and I'll take a look at it.
    See further down below.`
    document.getElementById("langs-unageo-followdevtitle").innerHTML = `<span style="font-weight: 500; color: #969696; margin-left: -19px;">› </span>Follow the development`
    document.getElementById("langs-unageo-ost").innerHTML = `
    <span style="font-size: 21px; font-weight: 600; color: #e6e6e6;">Unageo is an open source typeface developed on GitHub.</span>
    <div style="height: 18px;" id="resp-ug-space-1"></div>
    If you have an idea for an improvement, bug to report or any other comment/suggestion, feel free to submit a new issue on GitHub.
    <div style="height: 14px;" id="resp-ug-space-2"></div>
    Latest relase as well as the bleeding edge version is always available on GitHub along with the source files.`
    document.getElementById("langs-unageo-dvariable1").innerHTML = `Download Variable`
    document.getElementById("langs-unageo-dstatic1").innerHTML = `Download Static`
    document.getElementById("langs-unageo-links1").innerHTML = `Visit GitHub page`
    document.getElementById("langs-unageo-links2").innerHTML = `Submit a new issue`
    document.getElementById("langs-unageo-links3").innerHTML = `Releases/Changelog`
} else if(currentlang == "SK") {
    document.getElementById("langs-unageo-dvariable").innerHTML = `Variabliný`
    document.getElementById("langs-unageo-dstatic").innerHTML = `Statický`
    document.getElementById("langs-unageo-desc").innerHTML = `Unageo je moderný, open-source, sans-serif
    font, ktorý používa geometrické tvary a rovnomernú šírku ťahu vždy keď je to možné, ale stále si zachováva dobrú čitatelnosť.<br>`
    document.getElementById("langs-unageo-desc2").innerHTML = `Unageo podporuje stovky jazykov v latinskej a gréckej abecede, a v cyrilike.`
    document.getElementById("langs-unageo-desc3").innerHTML = `+ Cyrilika a grécke písmo, nižšie zistíte viac!`
    document.getElementById("langs-unageo-lineheight").innerHTML = `Výška riadku`
    document.getElementById("langs-unageo-letterspace").innerHTML = `Rozostup znakov`
    document.getElementById("langs-unageo-fontsize").innerHTML = `Veľkosť`
    document.getElementById("Unageo-fonttestfield").setAttribute("placeholder", "Píšte sem a vyskúšajte si unageo a jeho variabilné funkcie.")
    document.getElementById("langs-unageo-cyrillictitle").innerHTML = `Cyrilika`
    document.getElementById("langs-unageo-cyrillic").innerHTML = `Unageo cyrilika bola vytvorená v Bulharskom štýle.
    Používa viac zaoblené tvary a písmená majú väčšiu rozmanitosť vo výške, vďaka čomu sa ľahšie číta.`
    document.getElementById("langs-unageo-greektitle").innerHTML = `Grécke písmo`
    document.getElementById("langs-unageo-greek").innerHTML = `Grécky font Unageo nasleduje ten istý štýl s dokonalými tvarmi,
    ale dotvára ho plynulými ťahmi a pridáva viac geometrických čŕt, vďaka čomu je viac unikátny.`
    document.getElementById("langs-unageo-howmadetitle").innerHTML = `<span style="font-weight: 500; color: #969696; margin-left: -19px;">› </span>Ako vznikol font Unageo`
    document.getElementById("langs-unageo-story1").innerHTML = `
    Použil som už veľa rôznych fontov v rôznych projektoch a občas mi napadlo, že
    by som tam rád nejak dal svoj štýl, ale nikdy som sa nepokúsil vytvoriť vlastný font. 
    Tento krát som sa rozhodol, že to skúsim, aj keď som o tvorení fontov v podstate nič nevedel.
    Vedel som iba to, že chcem aby môj font bol geometrický, pretože to je štýl, ktorý preferujem.`
    document.getElementById("langs-unageo-story2").innerHTML = `
    Vyskúšal som si FontForge, ale nevedel som ho veľmi dobre používať,
    a preto som sa rozhodol pokračovať s netradičným postupom. Vytvoril som znaky cez Inkscape, ktorý poznám celkom dobre, and potom som tieto znaky vložil do programu Fontforge.
    Celý proces netrval až tak dlho ako som čakal, a za pár dní som mal projekt hotový. Každý znak som spravil vo dvoch variantách podľa hrúbky, tak,
    aby sa medzi nimi dalo plynulo prechádzať a potom som nastavil rozmery a pridal kerning.`
    document.getElementById("langs-unageo-story3").innerHTML = `
    Samozrejme som počas práce narazil aj na nejaké problémy a naučil som sa,
    že fonty sú oveľa komplikovanejšie ako vyzerajú. Keď som mal všetko hotové, tak som použil Fontmake na vygenerovanie variablinéhofontu a
    Fonttools na statické varianty.
    Stále sa určite mám čo naučiť ak by som sa rozhodol vytvoriť Ďalší font, a ani tento určite nie je perfektný.
    Ak máte nápad na vylepšenie, určite ma neváhajte informovať na GitHube, a rád sa na váš nápad pozrem.
    Nižšie zistíte viac.`
    document.getElementById("langs-unageo-followdevtitle").innerHTML = `<span style="font-weight: 500; color: #969696; margin-left: -19px;">› </span>Sledujte vývoj`
    document.getElementById("langs-unageo-ost").innerHTML = `
    <span style="font-size: 20px; font-weight: 600; color: #e6e6e6;">Unageo je open source font vyvýjaný na platforme GitHub.</span>
    <div style="height: 18px;"></div>
    Ak máte nápad na vylepšenie, našli ste chybu alebo máte nejaký iný návrh, kľudne ma o tom informujte na GitHube.
    <div style="height: 14px;"></div>
    Najnovšie vydanie a aj bleeding edge verzia je vždy dostupná na GitHube spolu so zdrojovými súbormi.`
    document.getElementById("langs-unageo-dvariable1").innerHTML = `Stiahnuť Variabliný`
    document.getElementById("langs-unageo-dstatic1").innerHTML = `Stiahnuť Statický`
    document.getElementById("langs-unageo-links1").innerHTML = `Navštíviť GitHub`
    document.getElementById("langs-unageo-links2").innerHTML = `Nahlásiť problém`
    document.getElementById("langs-unageo-links3").innerHTML = `Verzie/Aktualizácie`
}



function langizeunageo() {
    if(currentlang == "EN") {
        document.getElementById("langs-unageo-dvariable").innerHTML = `Variable`
        document.getElementById("langs-unageo-dstatic").innerHTML = `Static`
        document.getElementById("langs-unageo-desc").innerHTML = `Unageo is a modern, open-source, sans-serif
        typeface that uses perfect geometry and uniform stroke width where possible, but still maintains great readability.<br>`
        document.getElementById("langs-unageo-desc2").innerHTML = `Unageo supports hundreds of languages in latin, cyrillic and greek scripts.`
        document.getElementById("langs-unageo-desc3").innerHTML = `+ Cyrillic and greek scripts, scroll down to find out more!`
        document.getElementById("langs-unageo-lineheight").innerHTML = `Line height`
        document.getElementById("langs-unageo-letterspace").innerHTML = `Letter space`
        document.getElementById("langs-unageo-fontsize").innerHTML = `Font size`
        document.getElementById("Unageo-fonttestfield").setAttribute("placeholder", "Type here to try out unageo and it's variable features")
        document.getElementById("langs-unageo-cyrillictitle").innerHTML = `Cyrillic`
        document.getElementById("langs-unageo-cyrillic").innerHTML = `Unageo cyrillic was made in Bulgarian style.
        It uses more rounded geometric shapes and letters have more variety in their height, which makes reading easier.`
        document.getElementById("langs-unageo-greektitle").innerHTML = `Greek`
        document.getElementById("langs-unageo-greek").innerHTML = `Unageo greek follows the same style with perfect geometry,
        but completes it with smooth lines and adds extra geometric features to make it more unique and distinct.`
        document.getElementById("langs-unageo-howmadetitle").innerHTML = `<span style="font-weight: 500; color: #969696; margin-left: -19px;">› </span>How was unageo made`
        document.getElementById("langs-unageo-story1").innerHTML = `
        As a designer, I have used many different fonts for my projects and sometimes I thought
        that to better match my style, I could try to make my own font, but I never did. 
        This time, I decided to give it a shot, even though I knew almost nothing about font creation.
        I only knew I wanted my font to be geometric because that's my preferred style.`
        document.getElementById("langs-unageo-story2").innerHTML = `
        I opened up FontForge to try to create something, but I couldn't use it very well,
        so I decided to continue with an unusual workflow. I made the characters in Inkscape, which I'm familiar with, and imported the outlines into FontForge.
        The process didn't take as long as I expected, and I was done in a few days. I made each glyph in light and Black variant, made sure they were
        interpolable and then I adjusted the metrics and added kerning.`
        document.getElementById("langs-unageo-story3").innerHTML = `
        Of course, I ran into some issues along the way and learned that fonts are
        much more complicated than they look like. After I had everything figured out, I used Fontmake to generate a variable font and Fonttools to
        create static instances.
        I still have a lot to learn if I decide to make another font, and I'm sure this one isn't perfect either.
        If you have an idea for an improvement, don't hesitate to submit a new issue on GitHub, and I'll take a look at it.
        See further down below.`
        document.getElementById("langs-unageo-followdevtitle").innerHTML = `<span style="font-weight: 500; color: #969696; margin-left: -19px;">› </span>Follow the development`
        document.getElementById("langs-unageo-ost").innerHTML = `
        <span style="font-size: 21px; font-weight: 600; color: #e6e6e6;">Unageo is an open source typeface developed on GitHub.</span>
        <div style="height: 18px;"></div>
        If you have an idea for an improvement, bug to report or any other comment/suggestion, feel free to submit a new issue on GitHub.
        <div style="height: 14px;"></div>
        Latest relase as well as the bleeding edge version is always available on GitHub along with the source files.`
        document.getElementById("langs-unageo-dvariable1").innerHTML = `Download Variable`
        document.getElementById("langs-unageo-dstatic1").innerHTML = `Download Static`
        document.getElementById("langs-unageo-links1").innerHTML = `Visit GitHub page`
        document.getElementById("langs-unageo-links2").innerHTML = `Submit a new issue`
        document.getElementById("langs-unageo-links3").innerHTML = `Releases/Changelog`
    } else if(currentlang == "SK") {
        document.getElementById("langs-unageo-dvariable").innerHTML = `Variabliný`
        document.getElementById("langs-unageo-dstatic").innerHTML = `Statický`
        document.getElementById("langs-unageo-desc").innerHTML = `Unageo je moderný, open-source, sans-serif
        font, ktorý používa geometrické tvary a rovnomernú šírku ťahu vždy keď je to možné, ale stále si zachováva dobrú čitatelnosť.<br>`
        document.getElementById("langs-unageo-desc2").innerHTML = `Unageo podporuje stovky jazykov v latinskej a gréckej abecede, a v cyrilike.`
        document.getElementById("langs-unageo-desc3").innerHTML = `+ Cyrilika a grécke písmo, nižšie zistíte viac!`
        document.getElementById("langs-unageo-lineheight").innerHTML = `Výška riadku`
        document.getElementById("langs-unageo-letterspace").innerHTML = `Rozostup znakov`
        document.getElementById("langs-unageo-fontsize").innerHTML = `Veľkosť`
        document.getElementById("Unageo-fonttestfield").setAttribute("placeholder", "Píšte sem a vyskúšajte si unageo a jeho variabilné funkcie.")
        document.getElementById("langs-unageo-cyrillictitle").innerHTML = `Cyrilika`
        document.getElementById("langs-unageo-cyrillic").innerHTML = `Unageo cyrilika bola vytvorená v Bulharskom štýle.
        Používa viac zaoblené tvary a písmená majú väčšiu rozmanitosť vo výške, vďaka čomu sa ľahšie číta.`
        document.getElementById("langs-unageo-greektitle").innerHTML = `Grécke písmo`
        document.getElementById("langs-unageo-greek").innerHTML = `Grécky font Unageo nasleduje ten istý štýl s dokonalými tvarmi,
        ale dotvára ho plynulými ťahmi a pridáva viac geometrických čŕt, vďaka čomu je viac unikátny.`
        document.getElementById("langs-unageo-howmadetitle").innerHTML = `<span style="font-weight: 500; color: #969696; margin-left: -19px;">› </span>Ako vznikol font Unageo`
        document.getElementById("langs-unageo-story1").innerHTML = `
        Použil som už veľa rôznych fontov v rôznych projektoch a občas mi napadlo, že
        by som tam rád nejak dal svoj štýl, ale nikdy som sa nepokúsil vytvoriť vlastný font. 
        Tento krát som sa rozhodol, že to skúsim, aj keď som o tvorení fontov v podstate nič nevedel.
        Vedel som iba to, že chcem aby môj font bol geometrický, pretože to je štýl, ktorý preferujem.`
        document.getElementById("langs-unageo-story2").innerHTML = `
        Vyskúšal som si FontForge, ale nevedel som ho veľmi dobre používať,
        a preto som sa rozhodol pokračovať s netradičným postupom. Vytvoril som znaky cez Inkscape, ktorý poznám celkom dobre, and potom som tieto znaky vložil do programu Fontforge.
        Celý proces netrval až tak dlho ako som čakal, a za pár dní som mal projekt hotový. Každý znak som spravil vo dvoch variantách podľa hrúbky, tak,
        aby sa medzi nimi dalo plynulo prechádzať a potom som nastavil rozmery a pridal kerning.`
        document.getElementById("langs-unageo-story3").innerHTML = `
        Samozrejme som počas práce narazil aj na nejaké problémy a naučil som sa,
        že fonty sú oveľa komplikovanejšie ako vyzerajú. Keď som mal všetko hotové, tak som použil Fontmake na vygenerovanie variablinéhofontu a
        Fonttools na statické varianty.
        Stále sa určite mám čo naučiť ak by som sa rozhodol vytvoriť Ďalší font, a ani tento určite nie je perfektný.
        Ak máte nápad na vylepšenie, určite ma neváhajte informovať na GitHube, a rád sa na váš nápad pozrem.
        Nižšie zistíte viac.`
        document.getElementById("langs-unageo-followdevtitle").innerHTML = `<span style="font-weight: 500; color: #969696; margin-left: -19px;">› </span>Sledujte vývoj`
        document.getElementById("langs-unageo-ost").innerHTML = `
        <span style="font-size: 20px; font-weight: 600; color: #e6e6e6;">Unageo je open source font vyvýjaný na platforme GitHub.</span>
        <div style="height: 18px;" id="resp-ug-space-1"></div>
        Ak máte nápad na vylepšenie, našli ste chybu alebo máte nejaký iný návrh, kľudne ma o tom informujte na GitHube.
        <div style="height: 14px;" id="resp-ug-space-2"></div>
        Najnovšie vydanie a aj bleeding edge verzia je vždy dostupná na GitHube spolu so zdrojovými súbormi.`
        document.getElementById("langs-unageo-dvariable1").innerHTML = `Stiahnuť Variabliný`
        document.getElementById("langs-unageo-dstatic1").innerHTML = `Stiahnuť Statický`
        document.getElementById("langs-unageo-links1").innerHTML = `Navštíviť GitHub`
        document.getElementById("langs-unageo-links2").innerHTML = `Nahlásiť problém`
        document.getElementById("langs-unageo-links3").innerHTML = `Verzie/Aktualizácie`
    }
}