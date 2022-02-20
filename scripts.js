console.log(document.title);

let gen1Title = document.getElementById("gen-1");
gen1Title.innerHTML = "Generasión 1 Pokimon";

let gen1Background = document.getElementsByClassName("infocard-list-pkmn-lg");
gen1Background[0].style.background = "aquamarine"

let URL = document.querySelector("link[rel='canonical']").href
console.log(URL)

let dominio = URL.split("/")
console.log(dominio[2])

let img = document.getElementsByTagName("img")
for (let i = 0; i < img.length; i++) {
    console.log(img[i])
img[i].src = "https://media.giphy.com/media/2v170e71aanfi/giphy.gif"
}

let voladores = document.querySelectorAll(".infocard-lg-data.text-muted .itype.flying")
for ( let i = 0; i < voladores.length; i++ ) {
    voladores[i].setAttribute("style", "background:pink");
}