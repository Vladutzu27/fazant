var litere = document.getElementById("litere-inp");
var parInchizitii = document.getElementById("inchizitii");
var parBune = document.getElementById("bune");
var parAlte = document.getElementById("alte");

fetch('/wordlist/inchizitii.txt')
  .then(r => r.text())
  .then(text => {
    const inchizitii = text.split('\n');
  })
  .catch(e => console.error('A crăpat ceva:', e));


function baga()
{
    var paragraf = "";
    for(i = 0; i <= inchizitii.length; i++)
    {
        if(litere == (inchizitii[i].split("")[0] + inchizitii[i].split("")[1]))
            paragraf = paragraf + " " + inchizitii[i];
        parInchizitii.innerHTML = paragraf;
    }
}