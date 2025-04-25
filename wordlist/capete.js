const fs = require('fs');

fs.readFile('inchizitiiValide.txt', 'utf8', async (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    let arr = data.split('\n');
    var capete = [];
    var alfabetul = "abcdefghijklmnopqrstuvwxyz"
    var toatecapetele = [];

    for(i = 0; i< alfabetul.split("").length; i++)
    {
        for(j = 0; j < alfabetul.split("").length; j++)
        {
            toatecapetele.push(alfabetul.split("")[i] + alfabetul.split("")[j]);
        }
    }
    console.log("toatecapetele\n");
    console.log(toatecapetele);
    console.log("\n\n\ncapete\n")
    for(i = 0; i < arr.length; i++)
    {
        if(arr[i].slice(-1) == "F")
            console.log(arr[i].slice(0,-1));
        if(!capete.includes(arr[i].split("")[0] + arr[i].split("")[1]) && arr[i].split("").length > 2)
        {
            //console.log(`*${i}* unul cu ${arr[i].split("")[0] + arr[i].split("")[1]} n-am mai vazut, am gasit in ${arr[i]} la indicele ${i}.`)
            capete.push(arr[i].split("")[0] + arr[i].split("")[1]);
        }
    }
    console.log(capete);
});