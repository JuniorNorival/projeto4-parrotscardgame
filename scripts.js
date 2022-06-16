function virarCarta(elemento) {
    elemento.classList.toggle("virar");

}

function qtdCartas() {
    let nCartas = prompt("Com quantas cartas você deseja jogar ? ");

    while (nCartas < 4 || nCartas > 14) {
        alert("Por favor, digite um número entre 4 e 14");
        nCartas = prompt("Com quantas cartas você deseja jogar ? ");
        while (nCartas % 2 !== 0) {
            alert("Por favor, digite um número Par");
            nCartas = prompt("Com quantas cartas você deseja jogar ? ");
        }
    }

}
qtdCartas();