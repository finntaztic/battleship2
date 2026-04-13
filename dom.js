import { game } from "./game.js";

const newGame = new game();

const btn = document.querySelector('button');
btn.addEventListener('click', () => {
    console.log('hello')
    newGame.renderBoard()
})