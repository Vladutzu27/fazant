fetch('lista.json')
    .then(response => {
        // Parse the JSON data
        return response.json();
    })
    .then(data => {
        // Extract the array from the parsed data
        const array = data.lista;
        
        // Now you can work with the array
        console.log(array);
    })
    .catch(error => {
        // Handle any errors that occur during fetch or parsing
        console.error('Error loading or parsing JSON:', error);
});
const par = document.getElementById('par');
const mainword = document.getElementById('mainword');
const input = document.getElementById('input');

const nush = document.getElementById('nush');
const baga = document.getElementById('baga');

const inchizitii = [];
const inchizitiiValide = [];

let fr = new FileReader;



function bagaMare() {
    console.log(jsonobject)
}