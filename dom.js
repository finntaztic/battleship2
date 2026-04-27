import { game } from "./game.js";
const games = new game();
import { GameController } from "./gameController.js";
(GameController().addShips())
// GameController().addShip;

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


//when clicking new game:


//shows the grids

//shows the ship 

//its first player turn to attack as well





import { Gameboard } from "./gameboard.js";

export class game {
    renderBoard (playerName){
        let row = 7;
        let col = 7;

        const containerDiv = document.querySelector(playerName);//container div

        for (let i = 0; i < row; i++){
            for (let j = 0; j < col; j++){
                const div = document.createElement('div');
                div.className = 'box'
                containerDiv.appendChild(div);
                div.dataset.row = i;
                div.dataset.col = j;
            }
        }
    }
}
