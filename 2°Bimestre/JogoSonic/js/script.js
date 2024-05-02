
const sonic = document.querySelector('.sonic');
const pipe = document.querySelector('.pipe');
const scoreDisplay = document.querySelector('.score')

let score = 0;
let isGameOver = false;

const jump = () => {
    sonic.classList.add('jump');

    setTimeout(() => {
        sonic.classList.remove('jump');
    }, 500);
}

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const sonicPosition = +window.getComputedStyle(sonic).bottom.replace('px', '');

    if (pipePosition <= 145 && pipePosition > 0 && sonicPosition < 120) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        sonic.style.animation = 'none';
        sonic.style.bottom = `${sonicPosition}px`;

        sonic.src = 'img/sonic2.png'
        sonic.style.width = '100px';
        sonic.style.marginLeft = '50px';

        isGameOver = true;

        clearInterval(loop);
    } else {
        score++; 
        scoreDisplay.textContent = `Pontuação: ${score}m`;
    }
}, 10)

document.addEventListener('keydown', jump);