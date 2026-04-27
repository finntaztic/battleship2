
import { Player } from "./gameboard.js";
import { Gameboard } from "./gameboard.js";

let gameBoard = new Gameboard;

export function GameController (){
    let p1;
    let p2;

    const newGame = () => {
        p1 = new Player ('human');
        p2 = new Player ('computer');
    }

    const addShips = () => {
        newGame()
        p1.gameBoard.placeShip([2,3], 3, 'horizontal');
        console.log(p1)
        console.log(p1.gameBoard.marked)

        //get the player and add ship on it
    }

    return {
        addShips
    }
}
