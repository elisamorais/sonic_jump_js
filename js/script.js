const sonic = document.querySelector('.sonic');
const stone = document.querySelector('.stone');
const btnStartGame = document.querySelector('#btnStartGame');
const startScreen = document.querySelector('#startScreen');

const music = document.querySelector('#music');

btnStartGame.addEventListener('click', function () {
    document.getElementsByClassName("game-board")[0].style.display = "block";
    music.style.display = "none";
    startScreen.style.display = "none";
    music.play();
})

const jump = () => {
    sonic.classList.add('jump');
    
    setTimeout(() => {
       
        sonic.classList.remove('jump');
  
    }, 500);
}

const loop = setInterval(() =>{

    const stonePosition = stone.offsetLeft;
    const sonicPosition = +window.getComputedStyle(sonic).bottom.replace('px', '');

    console.log(sonicPosition);

    if (stonePosition <= 120 && stonePosition > 0 && sonicPosition < 80) {
        stone.style.animation = 'none';
        stone.style.left = `${stonePosition}px`;

        sonic.style.animation = 'none';
        sonic.style.botton = `${sonicPosition}px`;

        sonic.src = './imagens/fim-jogo1.gif';
        sonic.style.width = '75px'
        sonic.style.marginLeft = '50px'
        
        clearInterval(loop);
    }
},10)

document.addEventListener('keydown', jump);

