/* Arquivo JS + alterar CSS */

let titulo = document.querySelector('h1')
titulo.textContent = 'Aula 09 Manipular CSS'
titulo.innerHTML = 'Manipular CSS'
let imagem = document.querySelector('#foto')
imagem.setAttribute('src', 'img/pride-fc.jpg')
imagem.setAttribute('width', '280px')

/* MANIPULAR CSS */
document.querySelector('h1').style.color = "red";
titulo.style.color = "red";
titulo.style.backgroundColor = "#000";
titulo.style.borderBottom = "2px solid red";
titulo.style.padding = "0.625rem";
titulo.style.borderRadius = "15px";

let box = document.querySelectorAll('.box')
box[0].setAttribute('class', 'escura')
box[0].removeAttribute('class')

/////// MODOS DE COR ///////
let tela = document.querySelector('main')

let btnDark = document.querySelector('#btdark')
let btnLight = document.querySelector('#btlight')
let btnBlue = document.querySelector('#btblue')
let btnYellow = document.querySelector('#btyellow')
let btnPink = document.querySelector('#btpink')

btnDark.addEventListener('click', modoDark)
btnLight.addEventListener('click', modoLight)
btnBlue.addEventListener('click', modoBlue)
btnYellow.addEventListener('click', modoYellow)
btnPink.addEventListener('click', modoPink)

function modoDark() {
    event.preventDefault();
    console.log('modo dark')
    tela.classList.add("dark");
    tela.classList.remove("light");
    tela.classList.remove("azul");
    tela.classList.remove("amarelo");
    tela.classList.remove("rosa");
}

function modoLight() {
    event.preventDefault();
    console.log('modo light')
    tela.classList.remove("dark");
    tela.classList.add("light");
    tela.classList.remove("azul");
    tela.classList.remove("amarelo");
    tela.classList.remove("rosa");
}

function modoBlue() {
    event.preventDefault();
    console.log('modo blue')
    tela.classList.remove("dark");
    tela.classList.add("azul");
    tela.classList.remove("light");
    tela.classList.remove("amarelo");
    tela.classList.remove("rosa");
}

function modoYellow() {
    event.preventDefault();
    console.log('modo yellow')
    tela.classList.remove("dark");
    tela.classList.remove("light");
    tela.classList.remove("azul");
    tela.classList.add("amarelo");
    tela.classList.remove("rosa");
}

function modoPink() {
    event.preventDefault();
    console.log('modo yellow')
    tela.classList.remove("dark");
    tela.classList.remove("light");
    tela.classList.remove("azul");
    tela.classList.remove("amarelo");
    tela.classList.add("rosa");
}

/*
titulo.addEventListener('click', mudarId)
function mudarId() {
    titulo.id = 'titulo'
    console.log(titulo.id)
}
*/