/* Arquivo JS + alterar CSS */

let titulo = document.querySelector('h1')
titulo.textContent = 'Aula 09 Manipular CSS'
titulo.innerHTML = 'Manipular CSS'
let imagem = document.querySelector('#foto')
imagem.setAttribute('src', 'img/nuvens.jpeg')
imagem.setAttribute('width', '260vw')

/* MANIPULAR CSS */
document.querySelector('h1').style.color = "white";
titulo.style.color = "white";
titulo.style.backgroundColor = "#000";
titulo.style.borderBottom = "4px solid blue";
titulo.style.padding = "0.625rem";
titulo.style.borderRadius = "15px";

let nomeimagem = document.querySelector('h2')
let txtimg = document.querySelector('#textoimg')

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

imagem.style.borderRadius = "15px";
imagem.style.boxShadow = "0px 0px 10px rgba(0, 0, 0, 0.5)";

function modoDark() {
    event.preventDefault();
    console.log('modo dark')
    tela.classList.add("dark");
    tela.classList.remove("light");
    tela.classList.remove("azul");
    tela.classList.remove("amarelo");
    tela.classList.remove("rosa");
    imagem.setAttribute('src', 'img/esqueleto.jpeg');
    titulo.style.borderBottom = "4px solid white";
    nomeimagem.innerHTML = "Esqueleto";
    txtimg.innerHTML = "Imagem de um esqueleto";
}

function modoLight() {
    event.preventDefault();
    console.log('modo light')
    tela.classList.remove("dark");
    tela.classList.add("light");
    tela.classList.remove("azul");
    tela.classList.remove("amarelo");
    tela.classList.remove("rosa");
    imagem.setAttribute('src', 'img/nuvens.jpeg');
    titulo.style.borderBottom = "4px solid blue";
    nomeimagem.innerHTML = "Nuvens";
    txtimg.innerHTML = "Imagem de nuvens";
}

function modoBlue() {
    event.preventDefault();
    console.log('modo blue')
    tela.classList.remove("dark");
    tela.classList.add("azul");
    tela.classList.remove("light");
    tela.classList.remove("amarelo");
    tela.classList.remove("rosa");
    imagem.setAttribute('src', 'img/mar.jpeg');
    titulo.style.borderBottom = "4px solid white";
    nomeimagem.innerHTML = "Mar";
    txtimg.innerHTML = "Imagem do mar";
}

function modoYellow() {
    event.preventDefault();
    console.log('modo yellow')
    tela.classList.remove("dark");
    tela.classList.remove("light");
    tela.classList.remove("azul");
    tela.classList.add("amarelo");
    tela.classList.remove("rosa");
    imagem.setAttribute('src', 'img/abelha.jpg');
    titulo.style.borderBottom = "4px solid blue";
    nomeimagem.innerHTML = "Abelha";
    txtimg.innerHTML = "Imagem de uma abelha";
}

function modoPink() {
    event.preventDefault();
    console.log('modo yellow')
    tela.classList.remove("dark");
    tela.classList.remove("light");
    tela.classList.remove("azul");
    tela.classList.remove("amarelo");
    tela.classList.add("rosa");
    imagem.setAttribute('src', 'img/ipe.jpg');
    titulo.style.borderBottom = "4px solid blue";
    nomeimagem.innerHTML = "Ipê";
    txtimg.innerHTML = "Imagem de um ipê";
}

/*
titulo.addEventListener('click', mudarId)
function mudarId() {
    titulo.id = 'titulo'
    console.log(titulo.id)
}
*/