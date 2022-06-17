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
let jogadas=0;
function virarCarta(elemento) {
    elemento.classList.toggle("virar");
    const contador = elemento.parentNode;
    const qtdJogadas = elemento.classList.contains("virar")
   
    
    const contadorJogadas = document.querySelector(".contador")
    if(qtdJogadas){
        jogadas++
    }
    contadorJogadas.innerHTML = `Você ja realizou: ${jogadas} jogadas`;
}

function qtdCartas() {
    nCartas = prompt("Com quantas cartas você deseja jogar ? ");
    while (isNaN(nCartas) || nCartas < 4 || nCartas > 14 || nCartas % 2 !== 0) {
        alert("Por favor, digite um valor númerico PAR entre 4 e 14: ");
        nCartas = prompt("Com quantas cartas você deseja jogar ? ");
    }
    console.log(nCartas);
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
