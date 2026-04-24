
import { Player } from "./player.js";
import { Gameboard } from "./gameboard.js";

let gameBoard = new Gameboard;

function GameController (){

    let p1;
    let p2;

    const newGame = () => {
        p1 = new Player ('human');
        p2 = new Player ('computer');
    }

    const addShips = () => {
        console.log(p1)
        // p1.gameboard.placeShip([2,3], 3, 'horizontal');
        //get the player and add ship on it
    }
}