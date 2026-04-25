import { game } from "./game.js";
const games = new game();
import { GameController } from "./gameController.js";
GameController().addShip;

const btn = document.querySelector('button');
btn.addEventListener('click', () => {
    const container = document.querySelector('.container')
    const human = document.createElement('div');
    human.classList.add('human')
    const computer = document.createElement('div');
    computer.classList.add('computer')
    container.append(human)
    container.append(computer)

    games.renderBoard('.human')
    games.renderBoard('.computer')
})

btn.onclick = function (){
    this.disabled = true;
}


// GameController().addShips();

//create player with assigned ships/ then make it occupy the board

