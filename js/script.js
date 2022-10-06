/*  -----------------------------------------------------------------------------------------------
  Quanti chilometri vuoi percorrere con il treno
--------------------------------------------------------------------------------------------------- */
let chilometriPercorso = parseInt(prompt('Quanti chilometri vuoi percorrere con il treno?'));

/*  -----------------------------------------------------------------------------------------------
  Chiedere l'età del passeggero per eventuali scontistiche
--------------------------------------------------------------------------------------------------- */
let etaPasseggero = parseInt(prompt('Quanti anni hai?'));

/*  -----------------------------------------------------------------------------------------------
  If con un alert per assicurarsi che l'utente inserisca valori numerici validi
--------------------------------------------------------------------------------------------------- */
 if(isNaN(chilometriPercorso) || isNaN(etaPasseggero)) {
     alert('Devi inserire dei valori validi, cioè numeri!');
     window.location.reload();
 }

/*  -----------------------------------------------------------------------------------------------
  Variabile per definire il prezzo del biglietto in base ai km (0.21 al km)
--------------------------------------------------------------------------------------------------- */
let prezzoKm = 0.21;

/*  -----------------------------------------------------------------------------------------------
  Prezzo del biglietto totale moltiplicando prezzo al km * chilometri da percorrere
--------------------------------------------------------------------------------------------------- */
let prezzoBiglietto = prezzoKm * chilometriPercorso;

/*  -----------------------------------------------------------------------------------------------
  Variabili per applicare scontistiche a seconda dell'età
--------------------------------------------------------------------------------------------------- */
if(etaPasseggero < 18) {
    scontoBiglietto = prezzoBiglietto * 0.80;
} else if(etaPasseggero > 65) {
    scontoBiglietto = prezzoBiglietto * 0.60;
} else {
    scontoBiglietto = prezzoBiglietto;
}

/*  -----------------------------------------------------------------------------------------------
  Variabile per stampare a schermo i dati inseriti
--------------------------------------------------------------------------------------------------- */
const biglietto = `
<div class="container-prezzo">
<h1 class="display-3 fw-bold pb-4">Prezzo del biglietto in base ai km:</h1>
<span class="black fs-1 fw-bold">${scontoBiglietto.toFixed(2)}&euro;</span>
<br>
<span class="black fs-1 fw-bold">Chilometri inseriti: ${chilometriPercorso}km</span>
</div>
`;

const elemento = document.getElementById('prezzo-biglietto');
elemento.innerHTML = biglietto;
