
import { Ship } from "./ship.js";

export class Gameboard {
    constructor(){
        this.ships = [];
        this.miss = [];
    }  

    marked = [];

    placeShip (mid, length, orientation){
        //check the next cells from the mid
        const start = -Math.floor(length/2);
        const cells = [];

        for (let i = 0; i < length; i++){
            if (orientation === 'horizontal'){
                let curr = start + i;
                
                let cell = [mid[0], mid[1] + curr]

                if (cell[1] <= 6 && cell[1] >= 0){
                    cells.push(cell)
                } else {
                    return;
                }
            } 
            
            else if (orientation === 'vertical'){
                let curr = start + i;
                let cell = [mid[0] + curr, mid[1]]

                if (cell[0] <= 6 && cell[0] >= 0){
                    cells.push(cell)
                } else {
                    return;
                }
            }
        }

        //compare marked cells to incoming pushed cell
        for (let i = 0; i < cells.length; i++){
            for (let j = 0; j < this.marked.length; j++){
                if (cells[i][0] === this.marked[j][0] && cells[i][1] === this.marked[j][1]){
                    return;
                }
            }
        }

        //push all cells if qualified
        cells.forEach((cell) => {
            this.marked.push(cell)
        })

        //add cell to the ship
        const ship = new Ship(length)
        this.ships.push({ ship, cells })
    }

    receiveAttack (coord){
        const ships = this.ships;
        const miss = this.miss;

        for (let i = 0 ; i < ships.length; i++){
            for (let j = 0 ; j < ships[i].cells.length; j++){
                console.log(`row: ${coord[0]}, col: ${coord[1]}`)
                if (coord [0] === ships[i].cells[j][0] && coord [1] === ships[i].cells[j][1]){
                    ships[i].ship.addHit();

                    if (ships[i].ship.isSunk()){
                        return 'sunk';
                    }
                    return 'hit'
                } 
            }
        }
            miss.push(coord)
            return 'miss'
    }
}


