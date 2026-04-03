
export class Ship {
    constructor(length, hit, sunk){
        this.length = length;
        this.hit = 0;
        this.sunk = sunk;
    }

    addHit (){
        this.hit ++;
        return this.hit;
    }

    isSunk(){
        if (this.length <= this.hit){
            return this.sunk = true;
        } else return this.sunk = false;
    }
}