let nCartas;
const cartasDisponiveis = [
    `<img class="verso" src="./img/fiestaparrot.gif" alt="">`,
    `<img class ="verso" src="./img/bobrossparrot.gif" alt=""> `,
    `<img class ="verso" src="./img/explodyparrot.gif" alt=""> `,
    `<img class ="verso" src="./img/metalparrot.gif" alt=""> `,
    `<img class ="verso" src="./img/revertitparrot.gif" alt=""> `,
    `<img class ="verso" src="./img/tripletsparrot.gif" alt=""> `,
    `<img class ="verso" src="./img/unicornparrot.gif" alt=""> `
]
let jogadas = 0;
let primeiraCarta = null;
let segundaCarta = null;
let acertos=0;
function qtdCartas() {
    nCartas = prompt("Com quantas cartas você deseja jogar ? ");
    while (isNaN(nCartas) || nCartas < 4 || nCartas > 14 || nCartas % 2 !== 0) {
        alert("Por favor, digite um valor númerico PAR entre 4 e 14: ");
        nCartas = prompt("Com quantas cartas você deseja jogar ? ");
    }

}
qtdCartas();

function distribuirCartas() {

    let versoSlice = cartasDisponiveis.slice(0, nCartas / 2);
    let cartasSlice = versoSlice.concat(versoSlice);
    cartasSlice.sort(embaralhar);

    let cartasNaMesa = [];

    cartasNaMesa.length = nCartas;

    for (let i = 0; i < cartasNaMesa.length; i++) {
        const templateJogo =
            `<div onclick="virarCarta(this)" class="carta">
        <img class="frente" src="./img/front.png" alt="">
       ${cartasSlice[i]}
        </div>`
        document.querySelector(".jogo").innerHTML += templateJogo
    }

}
distribuirCartas();

function embaralhar() {
    return Math.random() - 0.5;
}

function virarCarta(elemento) {

    elemento.classList.add("virar");

    let imagemCarta = elemento.querySelector(".verso");

    if (primeiraCarta == null) {
        primeiraCarta = imagemCarta;
        console.log(primeiraCarta);
    } else {
        segundaCarta = imagemCarta;
        console.log(segundaCarta);
    }

    if (primeiraCarta != null && segundaCarta != null) {
        setTimeout(compararCartas, 1000);

    }

    numeroDeJogadas(elemento);
}

function numeroDeJogadas(elemento) {

    const qtdJogadas = elemento.classList.contains("virar")
    const contadorJogadas = document.querySelector(".contador")

    if (qtdJogadas) {
        jogadas++
    }
    contadorJogadas.innerHTML = `Você ja realizou: ${jogadas} jogadas`;

}

function compararCartas() {

    if (primeiraCarta.getAttribute("src") == segundaCarta.getAttribute("src")) {
        primeiraCarta.classList.add("certo");
        segundaCarta.classList.add("certo");
        acertos +=2;
    } else {
        desvirarCartas();
        
    }
    primeiraCarta = null;
    segundaCarta = null;

    if (acertos == nCartas){
        finalDeJogo ()
    }

}
function desvirarCartas(){
    primeiraCarta.parentNode.classList.remove("virar");
    segundaCarta.parentNode.classList.remove("virar");
}
function finalDeJogo (){
    alert (`Você Ganhou em ${jogadas}`);
}