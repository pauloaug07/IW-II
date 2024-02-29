var resultado = document.getElementById('resultado')

function pegaNome(){
    var nome = document.getElementById('nome').value
    console.log('Nome:', nome)
    resultado.innerHTML = ('aqui está seu nome:' + nome)
}
