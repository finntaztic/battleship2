import { Gameboard } from "./gameboard.js";
import { Player } from "./player.js";

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

    //renderShip - add ship 
    //
}


