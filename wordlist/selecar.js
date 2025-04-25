const https = require('https');
const fs = require('fs');

var treisuteunu = [];
var patrusutepatru = [];
var douasule = [];
var altele = [];

function getStatusCode(urele) {
    return new Promise((resolve, reject) => {
        https.get(urele, function(res) {
            resolve(res.statusCode);
        }).on('error', (e) => {
            resolve(null);
        });
    });
}

fs.readFile('inchizitiiNoi.txt', 'utf8', async (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    let arr = data.split('\n');
    let lungime = arr.length;

    for (let i = 0; i < arr.length; i++) {
        let url = `https://dexonline.ro/definitie/${arr[i]}`;
        let status = await getStatusCode(url);
        console.log(`${i} / ${lungime} (${Math.floor((i / lungime) * 100)}%)`);
        if (status == '404')
            patrusutepatru.push(arr[i]);
        else if (status == '301')
            treisuteunu.push(arr[i]);
        else if (status == '200')
            douasule.push(arr[i]);
        else
            altele.push(`${status} - ${arr[i]}`);
    }

    fs.writeFileSync('patrusutepatru.txt', patrusutepatru.join('\n'));
    fs.writeFileSync('treisuteunu.txt', treisuteunu.join('\n'));
    fs.writeFileSync('douasule.txt', douasule.join('\n'));
    fs.writeFileSync('altele.txt', altele.join('\n'));
});