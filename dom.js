import { Gameboard } from "./gameboard.js";
import { GameController } from "./gameController.js";

const game = GameController()
game.addShips();
game.renderShips();
insertShips(Gameboard);

// console.log(game.)

const btn = document.querySelector('button');
btn.addEventListener('click', (renderBoard))

function renderBoard (){
        const container = document.querySelector('.container');
        const human = document.createElement('div');
        human.classList.add('human');
        const computer = document.createElement('div');
        computer.classList.add('computer');
        container.append(human);
        container.append(computer);

        createGrid('.human');
        createGrid('.computer');

        insertShips(game.getPlayer1())
    }


function createGrid(playerName){
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

function insertShips (gameboard){
    console.log(gameboard)
    console.log(game.getPlayer1().type);
    const cells = document.querySelector('human')
    console.log(cells)

    
    // //get the cellls
    // console.log(game.getPlayer1().type)
    // console.log(cells)


    // // console.log(gameboard)
    // for (let i = 0; i < gameboard.length; i++) {
    //     console.log(gameboard[i])
    // }

    // if (gameboard[0][0] == '2'){
    //     console.log('it is 2')
    // }
}
//     export class game {
//     renderBoard (playerName){
//         let row = 7;
//         let col = 7;

//         const containerDiv = document.querySelector(playerName);//container div

//         for (let i = 0; i < row; i++){
//             for (let j = 0; j < col; j++){
//                 const div = document.createElement('div');
//                 div.className = 'box'
//                 containerDiv.appendChild(div);
//                 div.dataset.row = i;
//                 div.dataset.col = j;
//             }
//         }
//     }
// }

//write the function for creating grid here
//get the btn
//click btn and then call on the functions need to start in new game


// import { game } from "./game.js";
// const games = new game();
// import { GameController } from "./gameController.js";
// (GameController().addShips())
// // GameController().addShip;

// const btn = document.querySelector('button');
// btn.addEventListener('click', () => {
//     const container = document.querySelector('.container')
//     const human = document.createElement('div');
//     human.classList.add('human')
//     const computer = document.createElement('div');
//     computer.classList.add('computer')
//     container.append(human)
//     container.append(computer)


//     games.renderBoard('.human')
//     games.renderBoard('.computer')
// })

// btn.onclick = function (){
//     this.disabled = true;
// }


//when clicking new game:


// function render

//shows the grids

//shows the ship 

//its first player turn to attack as well




// console.log(GameController().addShips())
// function renderBoard (playerName){
//             let row = 7;
//         let col = 7;

//         const containerDiv = document.querySelector(playerName);//container div

//         for (let i = 0; i < row; i++){
//             for (let j = 0; j < col; j++){
//                 const div = document.createElement('div');
//                 div.className = 'box'
//                 containerDiv.appendChild(div);
//                 div.dataset.row = i;
//                 div.dataset.col = j;
//             }
//         }
//     }


//each grid should already contain the gameboard. 