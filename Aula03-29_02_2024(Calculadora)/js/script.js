var num1 = document.getElementById('num1')
var num2 = document.getElementById('num2')
var resultado = document.getElementById('resultado')

function somar(){
    var soma = parseFloat(num1.value) + parseFloat(num2.value)
    resultado.innerHTML = (soma)
}

function subtrair(){
    var subtracao = parseFloat(num1.value) - parseFloat(num2.value)
    resultado.innerHTML = (subtracao)
}

function dividir(){
    var divisao = parseFloat(num1.value) / parseFloat(num2.value)
    resultado.innerHTML = (divisao)
}

function multiplicar(){
    var multiplicacao = parseFloat(num1.value) * parseFloat(num2.value)
    resultado.innerHTML = (multiplicacao)
}

function limpar(){
    num1.value = ''
    num2.value = ''
    resultado.innerHTML = ''
}