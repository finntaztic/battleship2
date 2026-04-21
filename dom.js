import { game } from "./game.js";
const newGame = new game();

import { Player } from "./player.js";

const humanPlayer = new Player('human');
humanPlayer.gameBoard.placeShip([2,3], 3, 'horizontal');
console.log(humanPlayer)

console.log(game.renderShip())

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

