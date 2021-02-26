
// Dom Selection

const choices = document.querySelectorAll('.choice')
const score = document.getElementById('score');
const result = document.getElementById('result');
const restart = document.getElementById('restart');
const modal = document.querySelector('.modal')


const scoreboard= {
    player: 0,
    computer: 0
};


// play Game

function play(e){
    restart.style.display = 'inline-block'
    const playerChoice = e.target.id;
    const computerChoice = getComputerChoice();
    const winner = getWinner(playerChoice, computerChoice)
    showWinner(winner , computerChoice);
    console.log(playerChoice, computerChoice, winner);
}

function getComputerChoice(){
    const rand = Math.random();
    if (rand < 0.34) {
        return 'rock'
    }else if (rand <= 0.67) {
        return 'paper'
    }else{
        return 'scissors'
    }
}

function getWinner(p, c){
    if (p === c ) {
        return 'draw';
    }else if (p === 'rock') {
        if (c === 'paper') {
        return 'computer'    
        }else{
            return 'player'
        }
    }else if (p === 'paper') {
        if (c === 'scissors') {
            return 'computer'
        }else{
            return 'player'
        }
    }else if (p=== 'scissors') {
        if (c === 'rock') {
            return 'computer'
        }else{
            return 'scissors'
        }
    }
}

function showWinner(winner , computerChoice) {
    if (winner === 'player') {
        scoreboard.player++;
        result.innerHTML= `
        <h1 class= "text-win">You Win</h1>
        <i class="fas fa-hand-${computerChoice} choice"></i>
        <p>Computer Choose ${computerChoice} </p>
         `
    }else if (winner === 'computer') {
        scoreboard.computer++;
        result.innerHTML= `
        <h1 class= "text-lose">You Lose</h1>
        <i class="fas fa-hand-${computerChoice} choice"></i>
        <p>Computer Choose ${computerChoice} </p>
         `
    }else{
        scoreboard.player;
        result.innerHTML= `
        <h1 class= "text-win">It's a Draw</h1>
        <i class="fas fa-hand-${computerChoice} choice"></i>
        <p>Computer Choose ${computerChoice} </p>
         `
    }
    score.innerHTML = `
    <p>Player : ${scoreboard.player}
    <p>Computer : ${scoreboard.computer}
    `;
    modal.style.display = 'block';
}
// Restart Game
function restartGame() {
    scoreboard.player = 0;
    scoreboard.computer = 0;
    score.innerHTML = `
    <p>Player :0</p>
    <p>Computer : 0</p>
    `
}

//  Clear Modal

function clearModal(e) {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
}
choices.forEach(choice => choice.addEventListener('click' , play));
window.addEventListener('click', clearModal)
restart.addEventListener('click', restartGame)
