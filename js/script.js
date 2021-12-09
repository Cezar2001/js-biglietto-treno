const priceperkm = 0.21;

const outputHtml = document.getElementById('output');

const distanza = prompt('Digitare il numero di chilometri che vuole percorrere');
const age = prompt('Inserire la propria età')

let prezzo = priceperkm * distanza;

const button = document.getElementById('button-box');

button.addEventListener('click', function () {
    
if (age <= 17) {
    prezzo = prezzo-( ( prezzo / 100) * 20);
    outputHtml.innerHTML = `Congratulazioni, avete ricevuto uno sconto del 20%. Prezzo biglietto: ${prezzo}€`;
} else if (age >= 65) {
    prezzo = prezzo-( ( prezzo / 100) * 40);
    outputHtml.innerHTML = `Congratulazioni, avete ricevuto uno sconto del 40%. Prezzo biglietto: ${prezzo}€`;
} else {
    outputHtml.innerHTML = `Prezzo biglietto: ${prezzo}€`;
}
})