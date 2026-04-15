import { game } from "./game.js";

const newGame = new game();

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