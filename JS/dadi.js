const valori = [1, 2, 3, 4, 5, 6]
const mainBtn = document.getElementById("pulsante")

valori [Math.floor(Math.random()*valori.length)]

mainBtn.addEventListener("click", function(){

    const punteggioPrimo = valori [Math.floor(Math.random()*valori.length)]
    const punteggioSecondo = valori [Math.floor(Math.random()*valori.length)]

    const punteggioGiocatore = document.getElementById("punteggio-giocatore")
    const punteggioPc = document.getElementById("punteggio-pc")
    const risultatoGioco = document.getElementById("risultato-gioco")

    if (punteggioPrimo > punteggioSecondo) {

        punteggioGiocatore.innerHTML = `Il tuo risultato è ${punteggioPrimo}.`
        punteggioPc.innerHTML = `Il risultato del computer è ${punteggioSecondo}.`
        risultatoGioco.innerHTML = `Congratulazioni!!! Hai vinto.`

    } else if (punteggioSecondo > punteggioPrimo) {

        punteggioGiocatore.innerHTML = `Il tuo risultato è ${punteggioPrimo}.`
        punteggioPc.innerHTML = `Il risultato del computer è ${punteggioSecondo}.`
        risultatoGioco.innerHTML = `Mi spiace. Vince il computer.`

    } else {

        punteggioGiocatore.innerHTML = `Il tuo risultato è ${punteggioPrimo}.`
        punteggioPc.innerHTML = `Il risultato del computer è ${punteggioSecondo}.`
        risultatoGioco.innerHTML = `Il risultato è pari, nessuno vince.`
    }
})