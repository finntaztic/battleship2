
import { Gameboard } from "./gameboard.js";
import { Player } from "./gameboard.js";

let gameBoard = new Gameboard;

export function GameController (){
    let p1;
    let p2;

    const newGame = () => {
        p1 = new Player ('human');
        p2 = new Player ('computer');
    }

    const getPlayer1 = () => p1;
    const getPlayer2 = () => p2;

    const addShips = () => {
        newGame();
        p1.gameBoard.placeShip([2,3], 3, 'horizontal');
        p2.gameBoard.placeShip([3,5], 4, 'horizontal');
    }

    const renderShips = (marker) => {
        // console.log('hello')
        // console.log(gameBoard.marked)

        // let x = marker;
        // console.log(x)
        // renderShips(p1.gameBoard.marked)

        //loop through the marked
        //add them to cells using col and row



    }



    return {
        getPlayer1,
        getPlayer2,
        addShips,
        renderShips
    }
}

