const listaMail = ["mario.rossi@gmail.it", "luigi.verdi@gmail.it", "gianni.gialli@gmail.it"];
const mainBtn = document.getElementById("pulsante");

mainBtn.addEventListener("click", function() {

    const controlloEmail = document.getElementById("email").value
    const rispostaSpan = document.getElementById("risposta")

    let a = true

    for (let i = 0; i < listaMail.length; i++) {

        if (listaMail[i] === controlloEmail) {

            rispostaSpan.innerHTML = "La tua email fa parte dell'elenco."
            a = false
        }
    }

    if (a) {

        rispostaSpan.innerHTML = "La tua email non fa parte dell'elenco."

    }

} );