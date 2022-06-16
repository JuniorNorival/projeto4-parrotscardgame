let nCartas;

function virarCarta(elemento) {
    elemento.classList.toggle("virar");

}

function qtdCartas() {
    nCartas = prompt("Com quantas cartas você deseja jogar ? ");
    while (isNaN(nCartas) || nCartas < 4 || nCartas > 14 || nCartas % 2 !== 0) {
        alert("Por favor, digite um valor númerico par entre 4 e 14");
        nCartas = prompt("Com quantas cartas você deseja jogar ? ");

    }

}
qtdCartas();