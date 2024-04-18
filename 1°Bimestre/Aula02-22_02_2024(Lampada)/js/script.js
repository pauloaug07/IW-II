
// getElementById: Para buscar um item pela sua ID
const ligar = document.getElementById('ligar')
const desligar = document.getElementById('desligar')
const ligadesliga = document.getElementById('ligadesliga')
const lampada = document.getElementById('lampada')
const situacao = document.getElementById('situacao')

let situacaoLamp = 'desligada'
// var é iniciado como undefined, por isso -> let 

function estaQuebrada() {
    return lampada.src.indexOf('quebrada') > -1
}

function atualizarSituacaoLamp() {
    situacao.innerHTML = `A lâmpada está: ${situacaoLamp}`
}

function lampLigada() {
    if (!estaQuebrada()) {
        lampada.src = "img/ligada.jpg";
        situacaoLamp = 'ligada';
        atualizarSituacaoLamp();
    }
}

function lampDesligada() {
    if (!estaQuebrada()) {
        lampada.src = "img/desligada.jpg";
        situacaoLamp = 'desligada';
        atualizarSituacaoLamp();
    }
}

function lampQuebrada() {
    lampada.src = "img/quebrada.jpg";
    situacaoLamp = 'quebrada';
    atualizarSituacaoLamp();
}

function lampLigaDesliga() {
    if (estaQuebrada()) {
        return;
    }
    if (lampada.src.indexOf('desligada') > -1) {
        lampLigada();
    } else {
        lampDesligada();
    }
}

ligar.addEventListener('click', lampLigada)
desligar.addEventListener('click', lampDesligada)
ligadesliga.addEventListener('click', lampLigaDesliga)

lampada.addEventListener('mouseover', lampLigada)
lampada.addEventListener('mouseleave', lampDesligada)

lampada.addEventListener('dblclick', lampQuebrada)