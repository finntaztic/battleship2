import { Ship } from "./ship";
import { Player } from "./player";
import { Gameboard } from "./gameboard";

test('hit test', () => {
    let ship = new Ship()
    ship.addHit();  
    expect (ship.hit).toBe(1)
});

test('test player', () => {
    const player1 = new Player('human');
    expect(player1.type).toBe('human')
});


test ('placing ship', () => {
    const board = new Gameboard();
    board.placeShip([2,5], 3, 'horizontal');
    expect(board.marked).toEqual([
        [2,4],
        [2,5],
        [2,6]
    ])
});

test ('receiving attack', () => {
    const board = new Gameboard();
    board.placeShip([2,5], 3, 'horizontal');

    const result = board.receiveAttack([2,8]);
    expect(result).toBe('miss')
})

test ('placed ships', () => {
    const board = new Gameboard();
    board.placeShip([2,5], 3, 'horizontal');

    const result = board.receiveAttack([2,8]);
    expect(result).toBe('miss')
})



