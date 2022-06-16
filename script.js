// INCLUSÃO DAS CARTAS NO JOGO

let NumCartas ;

function inicio () {

    NumCartas = prompt("Insira aqui o número de cartas");

        while (NumCartas % 2 !== 0) {
            alert ("Somente números pares!!");
            NumCartas = prompt("Insira aqui o número de cartas");

            while (NumCartas < 4 || NumCartas > 14){
                alert ("Somente números entre 4 e 14!!");
                NumCartas = prompt("Insira aqui o número de cartas");  
            }
        }

    console.log(NumCartas);

    const jogo = document.querySelector(".jogo");

    for (let i = 0; i < NumCartas/2; i++) {
        
        jogo.innerHTML += `
        <div class="carta" data-identifier="card">

            <div class="face-estatica" data-identifier="back-face">
              <img src="imagens/front.png" alt="">
              ${i+1}
            </div>

            <div class="face-gif" data-identifier="front-face"></div>

        </div>
        `
    }
}

inicio ();

// DISTRIBUIÇÃO DE PAPAGAIOS

const listaGif = [
    "imagens/bobrossparrot.gif",
    "imagens/explodyparrot.gif",
    "imagens/fiestaparrot.gif",
    "imagens/metalparrot.gif",
    "imagens/revertitparrot.gif",
    "imagens/tripletsparrot.gif",
    "imagens/unicornparrot.gif",
]

