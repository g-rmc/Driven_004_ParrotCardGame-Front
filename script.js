function comparador() { 
	return Math.random() - 0.5; 
}

// INCLUSÃO DAS CARTAS NO JOGO

let NumCartas ;

function inicio () {

    // Entrada do número de cartas

    NumCartas = prompt("Insira aqui o número de cartas");

        while (NumCartas % 2 !== 0) {
            alert ("Somente números pares!!");
            NumCartas = prompt("Insira aqui o número de cartas");

            while (NumCartas < 4 || NumCartas > 14){
                alert ("Somente números entre 4 e 14!!");
                NumCartas = prompt("Insira aqui o número de cartas");  
            }
        }

    // Trazer lista aleatória de gifs de papagaios

    let listaGif = DistPapagaios(NumCartas/2);

    // Criação das cartas individuais (meio deck)

    const jogo = document.querySelector(".jogo");

    let meioDeck = [];

    for (let i = 0; i < NumCartas/2; i++) {
        
        
        meioDeck.push(`
        <div class="carta" data-identifier="card" onclick="CartaSelecionada(this)">

            <div class="face-estatica" data-identifier="back-face">
              <img src="imagens/front.png" alt="">
            </div>

            <div class="face-gif" data-identifier="front-face">
                <img src="${listaGif[i]}" alt="">
            </div>

        </div>
        `)
    }

    // Criação das duplas (deck)

    let deck = meioDeck.concat(meioDeck);

    // Embaralhando o deck

    deck = deck.sort(comparador);

    // Inserção das cartas no DOM

    for (let i = 0; i < NumCartas; i++){
        jogo.innerHTML += deck[i];
    }
    
}

inicio ();

// CLICANDO NA CARTA

function CartaSelecionada (elemento) {

    elemento.classList.toggle("virada");
    
    let f1 = elemento.querySelector(".face-estatica");
    let f2 = elemento.querySelector(".face-gif");

    f1.classList.toggle("virada");
    f2.classList.toggle("virada");

}

// DISTRIBUIÇÃO DE PAPAGAIOS

function DistPapagaios (NumGifs) {

    let listaGif = [
        "imagens/bobrossparrot.gif",
        "imagens/explodyparrot.gif",
        "imagens/fiestaparrot.gif",
        "imagens/metalparrot.gif",
        "imagens/revertitparrot.gif",
        "imagens/tripletsparrot.gif",
        "imagens/unicornparrot.gif",
    ]
    
    listaGif = listaGif.sort(comparador);

    let output = [];
    for (let i = 0; i < NumGifs; i++){
        output.push(listaGif[i]);
    }

    return (output);
}