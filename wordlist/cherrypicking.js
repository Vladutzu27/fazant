const fs = require('fs');
var toatecapetele = [];
var alfabetul = "abcdefghijklmnopqrstuvwxyz";
var lista = [];
var capetebune = ["aa", "ab", "ii", "ac", "ad", "ae", "af", "ag", "ah", "ai", "aj", "ak", "al", "am", "an", "ao", "ap", "ar", "as", "at", "au", "av", "ax", "az", "ba", "be", "bi", "bl", "bo", "br", "bu", "by", "ca", "ce", "ch", "ci", "cl", "cn", "co", "cr", "ct", "cu", "cv", "da", "de", "di", "dj", "do", "dr", "du", "dv", "ea", "eb", "ec", "ed", "ef", "eg", "eh", "ei", "ej", "el", "em", "en", "eo", "ep", "er", "es", "et", "eu", "ev", "ex", "ez", "fa", "fe", "fi", "fl", "fo", "fr", "ft", "fu", "ga", "ge", "gh", "gi", "gl", "gn", "go", "gr", "gu", "ha", "he", "hi", "hl", "ho", "hr", "ht", "hu", "hy", "ia", "ib", "ic", "id", "ie", "if", "ig", "ih", "ij", "ik", "il", "im", "in", "io", "ip", "ir", "is", "it", "iu", "iv", "ix", "iz", "ja", "jd", "je", "jg", "ji", "jn", "jo", "ju", "ka", "ke", "kh", "ki", "kl", "kn", "ko", "kr", "ku", "la", "le", "li", "lo", "lu", "ly", "ma", "me", "mi", "ml", "mn", "mo", "mr", "mu", "my", "na", "ne", "ni", "no", "nu", "ny", "oa", "ob", "oc", "od", "oe", "of", "og", "oh", "oi", "oj", "ok", "ol", "om", "on", "oo", "op", "or", "os", "ot", "ou", "ov", "ow", "ox", "oz", "pa", "pe", "pf", "pi", "pl", "pn", "po", "pr", "ps", "pt", "pu", "qu", "ra", "re", "rh", "ri", "ro", "ru", "sa", "sb", "sc", "se", "sf", "sh", "si", "sl", "sm", "sn", "so", "sp", "st", "su", "sv", "sw", "ta", "tb", "te", "th", "ti", "tm", "to", "tr", "tu", "ub", "uc", "ud", "ue", "uf", "ug", "ui", "uj", "uk", "ul", "um", "un", "up", "ur", "us", "ut", "uv", "ux", "uz", "va", "ve", "vi", "vl", "vo", "vr", "vu", "wa", "we", "wh", "wi", "wo", "wu", "xa", "xe", "xi", "xo", "xy", "ya", "ye", "yo", "yt", "yu", "za", "zb", "zd", "ze", "zg", "zi", "zl", "zm", "zn", "zo", "zu", "zv", "zw", "zy"]
var capeterele = [];
var inchizitiiNoi = [];

for(i = 0; i < alfabetul.split("").length; i++)
    for(j = 0; j < alfabetul.split("").length; j++)
        toatecapetele.push(alfabetul.split("")[i] + alfabetul.split("")[j]);
for(i = 0; i < toatecapetele.length; i++)
{
    if(!capetebune.includes(toatecapetele[i]))
        capeterele.push(toatecapetele[i]);
}

fs.readFile('lista.txt', 'utf8', async (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    lista = data.split('\n');
    fs.readFile('inchizitiiValide.txt', 'utf8', async (err, dataa) => {
        if (err) {
            console.error(err);
            return;
        }
        valide = dataa.split('\n');
        for(i = 0; i < lista.length; i++)
        {
            if(capeterele.includes(lista[i].slice(-2)) && !valide.includes(lista[i]))
                inchizitiiNoi.push(lista[i]);
        }
        fs.writeFileSync('inchizitiiNoi.txt', inchizitiiNoi.join('\n'));
    });
});