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
let jogadas;
let primeiraCarta = null;
let segundaCarta = null;
let acertos;
let segundos;
let minutos;
let contadorJogadas;



function iniciarJogo() {

    jogadas = 0;
    acertos = 0;
    primeiraCarta = null;
    segundaCarta = null;
    segundos = 0;
    minutos = 0;
    nCartas = 0;

    document.querySelector(".contador").innerHTML = `Você já realizou: 0 jogadas`;

    qtdCartas();
    setInterval(function () {
        cronometro()
    }, 1000);

}
iniciarJogo();

function qtdCartas() {
    nCartas = prompt(`Com quantas cartas você deseja jogar ? `);
    while (isNaN(nCartas) || nCartas < 4 || nCartas > 14 || nCartas % 2 !== 0) {
        alert("Por favor, digite um valor númerico PAR entre 4 e 14: ");
        nCartas = prompt("Com quantas cartas você deseja jogar ? ");
    }
    distribuirCartas();
}


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


function embaralhar() {
    return Math.random() - 0.5;
}

function virarCarta(elemento) {

    if (primeiraCarta == null || segundaCarta == null) {
        elemento.classList.add("virar");

        let imagemCarta = elemento.querySelector(".verso");

        if (primeiraCarta == null) {
            primeiraCarta = imagemCarta;
            numeroDeJogadas(elemento);
        } else if (primeiraCarta != imagemCarta) {
            segundaCarta = imagemCarta;
            numeroDeJogadas(elemento);
        }

        if (primeiraCarta != null && segundaCarta != null) {
            setTimeout(compararCartas, 1000);

        }

    }


}

function numeroDeJogadas(elemento) {

    const qtdJogadas = elemento.classList.contains("virar")
    contadorJogadas = document.querySelector(".contador")

    if (qtdJogadas) {
        jogadas++
    }
    contadorJogadas.innerHTML = `Você já realizou: ${jogadas} jogadas`;

}

function compararCartas() {

    if (primeiraCarta.getAttribute("src") == segundaCarta.getAttribute("src")) {
        primeiraCarta.classList.add("certo");
        segundaCarta.classList.add("certo");
        acertos += 2;
    } else {
        desvirarCartas();

    }
    primeiraCarta = null;
    segundaCarta = null;

    if (acertos == nCartas) {

        finalDeJogo()
    }

}

function desvirarCartas() {
    primeiraCarta.parentNode.classList.remove("virar");
    segundaCarta.parentNode.classList.remove("virar");
}

function finalDeJogo() {
    alert(`Você Ganhou em ${jogadas} jogadas e em ${minutos} minutos e ${segundos} segundos`);

    let continuar = prompt("Deseja reiniciar o jogo ?");

    if (continuar == 'sim') {
        document.querySelector(".jogo").innerHTML = "";
        segundos = 0;
        minutos = 0;
        nCartas = 0;
        iniciarJogo();

    } else if (continuar == 'não') {
        alert("Parabéns");
        zerarJogo();
    } else {
        alert("Digite sim ou não.")
        prompt("Deseja reiniciar o jogo ?");
    }
}

function cronometro() {

    segundos++

    if (segundos == 60) {
        minutos++;
        segundos = 0;

        document.querySelector(".minutos").innerHTML = `${minutos}`
    }
    document.querySelector(".segundos").innerHTML = `${segundos}`
}

function zerarJogo() {
    document.querySelector(".jogo").classList.add("escondido");
    segundos = segundos;
}