
var peso = document.getElementById('peso');
var altura = document.getElementById('altura');
var select = document.getElementById('sexo');
var resultado = document.getElementById('result');
var diag = document.getElementById('diag');

function calcular() {
    var imc = (parseFloat(peso.value) / parseFloat(altura.value) ** 2).toFixed(2);
    console.log(imc);
    resultado.innerHTML = (imc);
    value = select.options[select.selectedIndex].value; // Obter o valor selecionado atualizado
    difsex(imc);
}

function difsex(imc) {
    if (value == 'masc') {
        calcmasc(imc);
    } else {
        calcfem(imc);
    }
}

function calcmasc(imc) {
    if (imc < 20.7) {
        diag.innerHTML = ('Abaixo do peso');
    } else if (imc >= 20.7 && imc < 26.4) {
        diag.innerHTML = ('Peso ideal');
    } else if (imc >= 26.5 && imc < 27.8) {
        diag.innerHTML = ('Pouco acima do peso');
    } else if (imc >= 27.9 && imc < 31.1) {
        diag.innerHTML = ('Acima do peso');
    } else if (imc >= 31.2) {
        diag.innerHTML = ('Obesidade');
    }
}

function calcfem(imc) {
    if (imc < 19.1) {
        diag.innerHTML = ('Abaixo do peso');
    } else if (imc >= 19.1 && imc < 25.8) {
        diag.innerHTML = ('Peso ideal');
    } else if (imc >= 25.9 && imc < 27.3) {
        diag.innerHTML = ('Pouco acima do peso');
    } else if (imc >= 27.4 && imc < 32.3) {
        diag.innerHTML = ('Acima do peso');
    } else if (imc >= 32.4) {
        diag.innerHTML = ('Obesidade');
    }
}

function novocalc() {
    peso.value = '';
    altura.value = '';
    value = '';
    resultado.innerHTML = '';
    diag.innerHTML = '';
}
