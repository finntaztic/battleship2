import { game } from "./game.js";
const newGame = new game();

import { Player } from "./player.js";

const player = new Player();
console.log(player)

const btn = document.querySelector('button');
btn.addEventListener('click', () => {
    const container = document.querySelector('.container')
    const human = document.createElement('div');
    human.classList.add('human')
    const computer = document.createElement('div');
    computer.classList.add('computer')
    container.append(human)
    container.append(computer)

    newGame.renderBoard('.human')
    newGame.renderBoard('.computer')
})

btn.onclick = function (){
    this.disabled = true;
}

//create player with assigned ships/ then make it occupy the board

